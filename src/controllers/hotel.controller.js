const { fetchRoomTypes, extractRoomOccupancy, hotels } = require('../services/hotel.service');
const { fetchWithTimeout, cache } = require('../utils/cache.utils');

module.exports = {
    getRoomTypes: async (req, res) => {
        try {
            const results = await fetchRoomTypes();
            const occupancies = results.reduce((acc, data) => {
                const roomOccupancy = extractRoomOccupancy(data);
                return { ...acc, ...roomOccupancy };
            }, {});
            res.status(200).json(occupancies);
        } catch (error) {
            res.status(500).send(error.message || 'Unknown error occurred');
        }
    },

    getPrice: async (req, res) => {
        try {
            const { start_date, end_date, max_nights, guests, room_types } = req.body;

            if (!Array.isArray(hotels) || hotels.length === 0) {
                return res.status(400).json({ message: 'Hotels should be a non-empty array' });
            }

            const fetchPromises = hotels.map(hotel => {
                const cacheKey = `${hotel}_${start_date}_${end_date}_${max_nights}`;
                const cached = cache.get(cacheKey);

                if (cached && (Date.now() - cached.timestamp < 3600000)) {
                    return Promise.resolve(cached.data);
                }

                const url = `https://ibe.tlintegration.com/ChannelDistributionApi/AvailabilityCalendar/room_type_availability?start_date=${start_date}&end_date=${end_date}&max_nights=${max_nights}&hotel=${hotel}&currency=RUB`;

                return fetchWithTimeout(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*',
                        'X-TravelLine-ApiKey': '4db28ac98d3700e50010280719410c96'
                    }
                }).then(data => {
                    cache.set(cacheKey, { data, timestamp: Date.now() });
                    return data;
                });
            });

            const results = await Promise.all(fetchPromises);
            const validResults = results.filter(Boolean);

            if (validResults.length === 0) {
                return res.status(500).json({ message: 'No valid responses received' });
            }

            const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            const getMinPrice = (data, guests, roomTypes) => {
                return data.reduce((result, item) => {
                    const hotelId = item.hotel;
                    const roomTypeAvailability = item.room_type_availability || [];
                    let minPrice = Infinity;

                    roomTypeAvailability.forEach(roomType => {
                        const maxOccupancy = roomTypes[roomType.id_room_type];
                        if (maxOccupancy === undefined || maxOccupancy < guests) return;

                        let totalPrice = 0;
                        let consecutiveDays = 0;

                        if (roomType.availability_date.length < max_nights) return;

                        roomType.availability_date.forEach((dateAvailability, index) => {
                            if (dateAvailability.period.start_date === end_date) {
                                totalPrice = 0;
                                consecutiveDays = 0;
                                return;
                            }

                            if (dateAvailability.is_available) {
                                totalPrice += dateAvailability.price.price_before_tax;
                                consecutiveDays++;

                                if (consecutiveDays > max_nights) {
                                    totalPrice -= roomType.availability_date[index - max_nights].price.price_before_tax;
                                    consecutiveDays--;
                                }

                                if (consecutiveDays === max_nights && totalPrice < minPrice) {
                                    minPrice = totalPrice;
                                }
                            } else {
                                totalPrice = 0;
                                consecutiveDays = 0;
                            }
                        });
                    });

                    result[hotelId] = minPrice === Infinity ? "" : formatNumber(minPrice);
                    return result;
                }, {});
            };

            const combinedData = validResults.flat();
            const minPrices = getMinPrice(combinedData, guests, room_types);
            res.json(minPrices);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};