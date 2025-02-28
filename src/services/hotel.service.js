const hotels = ["10970", "20776", "20176", "21668", "42043", "27469", "33783", "27859", "32789"];

module.exports = {
    fetchRoomTypes: async () => {
        const requests = hotels.map(hotelCode =>
            fetch(`https://ibe.tlintegration.com/ChannelDistributionApi/BookingForm/hotel_info?language=ru-ru&hotels[0].code=${hotelCode}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/plain, */*',
                    'X-TravelLine-ApiKey': '4db28ac98d3700e50010280719410c96'
                }
            })
        );

        const responses = await Promise.all(requests);
        return Promise.all(responses.map(async response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for hotel code: ${response.url}`);
            }
            return response.json();
        }));
    },

    extractRoomOccupancy: (data) => {
        const result = {};
        data.hotels.forEach(hotel => {
            hotel.room_types.forEach(room => {
                result[room.code] = room.max_occupancy;
            });
        });
        return result;
    },

    hotels
};