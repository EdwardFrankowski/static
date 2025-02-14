const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
const utmMiddleware = (req, res, next) => {
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const utmData = {};

    utmParams.forEach(param => {
        if (req.query[param]) {
            utmData[param] = req.query[param];
        }
    });

    if (Object.keys(utmData).length > 0) {
        res.cookie('utm', JSON.stringify(utmData), { maxAge: 24 * 60 * 60 * 1000 });
    }

    next();
};
app.use(utmMiddleware);


app.set('trust proxy', true);
app.use((req, res, next) => {
    if (req.headers.host.startsWith('www.')) {
        const newHost = req.headers.host.slice(4);
        const newUrl = `${req.protocol}://${newHost}${req.originalUrl}`;
        res.redirect(301, newUrl);
    } else {
        next();
    }
});



const TELEGRAM_TRANSFER_BOT_TOKEN = '7484491812:AAFj6wf3VQYoXy69UZMFtEu-DAc_rqOtsBw';
const TELEGRAM_TRANSFER_CHAT_ID = '-1001580200946';

const TELEGRAM_INVESTOR_BOT_TOKEN = '8160507532:AAEy470RtHkMd2rklC3DtYqt4GexFlr6fnM';
const TELEGRAM_INVESTOR_CHAT_ID = '-1002375162538';

const TRANSFER_TYPE = 'transfer'
const INVESTOR_TYPE = 'investor'

const getMessage = (type, data) => {
    const baseUrl = "https://port-comfort.pro";
    const templates = {
        transfer: `
Основная информация:
ФИО: ${data.name}
Телефон: ${data.phone}
Откуда: ${data.from}
Отель: ${data.to}
Дата: ${data.date}
Время: ${data.time}
Детское кресло: ${data.childSeat}
Машина: ${data.transport}

Дополнительная:
${baseUrl}/transfer
UTM source: maps
UTM medium: link
UTM campaign: moyka
`,
        investor: `
Основная информация:
Имя: ${data.name}
Телефон: ${data.phone}

Дополнительная:
${baseUrl}/become-owner/
`,
    };

    return templates[type];
};

const sendMessage = async (message, token, id) => {
    const fetch = (await import('node-fetch')).default;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: id,
                text: message,
            }),
        });
        return response.status === 200;
    } catch (error) {
        console.error("Telegram API error:", error);
        return false;
    }
};
const createInvestorBitrixLead = async (name, phone) => {
    try {
        const bitrixUrl = 'https://inreit.bitrix24.ru/rest/15526/9zql0nw1y8314xyd/crm.lead.add';

        const data = {
            fields: {
                TITLE: `Заявка от ${name}`,
                NAME: name,
                PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
            },
            params: { REGISTER_SONET_EVENT: 'Y' },
        };

        const response = await fetch(bitrixUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Ошибка Bitrix24: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        if (result.error) {
            throw new Error(`Ошибка создания лида: ${result.error_description || 'Неизвестная ошибка'}`);
        }

        return { success: true, leadId: result.result };
    } catch (error) {
        console.error('Ошибка при отправке лида в Bitrix24:', error.message);

        return { success: false, message: error.message };
    }
};

const handleSendMessage = async (req, res, type, token, chatId) => {
    try {
        const data = req.body;
        const message = getMessage(type, data);

        const ok = await sendMessage(message, token, chatId);

        if (type === INVESTOR_TYPE) {
            const leadResult = await createInvestorBitrixLead(data.name, data.phone);
            if (!leadResult.success) {
                console.error('Ошибка при добавлении лида в Bitrix24:', leadResult.message);
                return res.status(500).json({
                    status: "error",
                    message: "Failed to send lead to Bitrix24",
                });
            }
        }

        if (ok) {
            res.json({
                status: "success",
                message: "Message sent successfully",
            });
        } else {
            res.status(500).json({
                status: "error",
                message: "Failed to send message",
            });
        }
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to send message",
        });
    }
};


function extractRoomOccupancy(data) {
    const result = {};

    data.hotels.forEach(hotel => {
        hotel.room_types.forEach(room => {
            result[room.code] = room.max_occupancy;
        });
    });

    return result;
}

const hotels = ["10970", "20776", "20176", "21668", "42043", "27469", "33783", "27859", "32789"];

app.get('/getRoomTypes', async (req, res) => {
    try {
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

        const results = await Promise.all(responses.map(async response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for hotel code: ${response.url}`);
            }
            return response.json();
        }));

        const occupancies = results.reduce((acc, data) => {
            const roomOccupancy = extractRoomOccupancy(data);
            return { ...acc, ...roomOccupancy };
        }, {});

        res.status(200).json(occupancies);

    } catch (error) {
        res.status(500).send(error.message || 'Unknown error occurred');
    }
});


const cache = new Map();
const CACHE_EXPIRATION_TIME = 3600000;

const fetchWithTimeout = (url, options, timeout = 10000) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

        fetch(url, options)
            .then(response => {
                clearTimeout(timer);
                return response.ok ? resolve(response.json()) : reject(new Error(`HTTP error! status: ${response.status}`));
            })
            .catch(reject);
    });
};

app.post('/getPrice', async (req, res) => {
    try {
        const { start_date, end_date, max_nights, guests, room_types } = req.body;

        if (!Array.isArray(hotels) || hotels.length === 0) {
            return res.status(400).json({ message: 'Hotels should be a non-empty array' });
        }

        const fetchPromises = hotels.map(hotel => {
            const cacheKey = `${hotel}_${start_date}_${end_date}_${max_nights}`;
            const now = Date.now();
            const cached = cache.get(cacheKey);

            if (cached && (now - cached.timestamp < CACHE_EXPIRATION_TIME)) {
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
                cache.set(cacheKey, { data, timestamp: now });
                return data;
            }).catch(error => {
                console.error(`Error fetching data for hotel ${hotel}:`, error);
                return null;
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
                            return
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
});

app.post('/getPostViews', async (req, res) => {
    const accessToken = 'y0_AgAAAAB2OV8jAAxaBAAAAAEPQlwTAAD-8ew_44lI8Z8xBGltN2IM2jTtBQ';
    const id = '83537836';
    const { goalNumber } = req.body;

    const url = `https://api-metrika.yandex.net/stat/v1/data?ids=${id}&metrics=ym:s:goal${goalNumber}reaches&date1=2024-01-01&date2=today`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `OAuth ${accessToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            res.json({ views: data.totals[0] });
        } else {
            console.error('Ошибка при получении данных:', response.statusText);
            res.status(response.status).json({ error: response.statusText });
        }
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});


app.post('/send-transfer-message', async (req, res) => {
    await handleSendMessage(
        req,
        res,
        TRANSFER_TYPE,
        TELEGRAM_TRANSFER_BOT_TOKEN,
        TELEGRAM_TRANSFER_CHAT_ID
    );
});
app.post('/send-investor-message', async (req, res) => {
    await handleSendMessage(
        req,
        res,
        INVESTOR_TYPE,
        TELEGRAM_INVESTOR_BOT_TOKEN,
        TELEGRAM_INVESTOR_CHAT_ID
    );
});



app.use((req, res, next) => {
    if (req.url.startsWith('/404/')) {
        return res.status(404).sendFile(path.join(__dirname, 'dist', '404', 'index.html'));
    }
    next();
});

app.use(express.static(path.join(__dirname, 'dist')));

const redirects =  [
    {
        source: "/_error/",
        destination: "/404/",
        permanent: true,
    },
    {
        source: "/port/",
        destination: "/",
        permanent: true,
    },
    {
        source: "/contact/",
        destination: "/404/",
        permanent: true,
    },
    {
        source: "/contacts/",
        destination: "/404/",
        permanent: true,
    },
    {
        source: "/dogovor-bescontact/",
        destination: "/non-contact-check-in/",
        permanent: false,
    },
    {
        source: "/partners/",
        destination: "/places-to-go/",
        permanent: false,
    },
    {
        source: "/dogovor/",
        destination: "/rules-of-accommodation/",
        permanent: true,
    },
    {
        source: "/dopuslugi/",
        destination: "/additional-services/",
        permanent: true,
    },
    {
        source: "/loyalty/",
        destination: "/loyalty-programs/",
        permanent: true,
    },
    {
        source: "/payment/",
        destination: "/payment-and-return/",
        permanent: true,
    },
    {
        source: "/policy/",
        destination: "/privacy-policy/",
        permanent: true,
    },
    {
        source: "/rekvizity/",
        destination: "/requisites/",
        permanent: true,
    },
    {
        source: "/booking/",
        destination: "/hotels/spb/",
        permanent: true,
    },
    {
        source: "/dolgosrochnoeprojivanie/",
        destination: "/hotels/spb/",
        permanent: true,
    },
    {
        source: "/hotels/",
        destination: "/hotels/spb/",
        permanent: true,
    },
    {
        source: "/hotelsmoscow/",
        destination: "/hotels/msk/",
        permanent: true,
    },
    {
        source: "/port-comfort-by-moyka/",
        destination: "/hotels/spb/moyka/",
        permanent: true,
    },
    {
        source: "/port-comfort-by-old-nevsky/",
        destination: "/hotels/spb/old-nevskiy/",
        permanent: true,
    },
    {
        source: "/port-comfort-by-smolnyy/",
        destination: "/hotels/spb/smolnyy/",
        permanent: true,
    },
    {
        source: "/port-comfort-by-the-gostiny-dvor/",
        destination: "/hotels/spb/gostiniy-dvor/",
        permanent: true,
    },
    {
        source: "/port-comfort-by-the-griboedov/",
        destination: "/hotels/spb/griboedov/",
        permanent: true,
    },
    {
        source: "/port-comfort-on-ligovskiy/",
        destination: "/hotels/spb/ligovskiy/",
        permanent: true,
    },
    {
        source: "/port-comfort-on-moyka/",
        destination: "/hotels/spb/moyka/",
        permanent: true,
    },
    {
        source: "/port-comfort-on-pokrovka/",
        destination: "/hotels/msk/pokrovka/",
        permanent: true,
    },
    {
        source: "/sennaya_square/",
        destination: "/hotels/spb/sennaya-square/",
        permanent: true,
    },
    {
        source: "/booking?hotel_id=20176&room-type=145132/",
        destination: "/hotels/spb/gostiniy-dvor/",
        permanent: true,
    },
    {
        source: "/booking?hotel_id=10970/",
        destination: "/hotels/spb/ligovskiy/",
        permanent: true,
    },
    {
        source: "/book-a-room/ligovskiy/",
        destination: "/hotels/spb/ligovskiy/",
        permanent: true,
    },
    {
        source: "/book-a-room/gostiniy-dvor/",
        destination: "/hotels/spb/gostiniy-dvor/",
        permanent: true,
    },
    {
        source: "/book-a-room/pokrovka/",
        destination: "/hotels/msk/pokrovka/",
        permanent: true,
    },
    {
        source: "/book-a-room/moyka/",
        destination: "/hotels/spb/moyka/",
        permanent: true,
    },
    {
        source: "/book-a-room/old-nevskiy/",
        destination: "/hotels/spb/old-nevskiy/",
        permanent: true,
    },
    {
        source: "/book-a-room/smolnyy/",
        destination: "/hotels/spb/smolnyy/",
        permanent: true,
    },
    {
        source: "/book-a-room/griboedov/",
        destination: "/hotels/spb/griboedov/",
        permanent: true,
    },
    {
        source: "/book-a-room/sennaya-square/",
        destination: "/hotels/spb/sennaya-square/",
        permanent: true,
    },
    {
        source: "/book-a-room/angliyskiy/",
        destination: "/hotels/spb/angliyskiy/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=20176/",
        destination: "/hotels/spb/gostiniy-dvor/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=32789/",
        destination: "/hotels/msk/pokrovka/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=21668/",
        destination: "/hotels/spb/old-nevskiy/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=42043/",
        destination: "/hotels/spb/angliyskiy/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=20776/",
        destination: "/hotels/spb/griboedov/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=33783/",
        destination: "/hotels/spb/sennaya-square/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=10970/",
        destination: "/hotels/spb/ligovskiy/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=27469/",
        destination: "/hotels/spb/moyka/",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=27859/",
        destination: "/hotels/spb/smolnyy/",
        permanent: true,
    },
    {
        source: "/spb/griboedov/",
        destination: "/hotels/spb/griboedov/",
        permanent: true,
    },
    {
        source: "/spb/smolnyy/",
        destination: "/hotels/spb/smolnyy/",
        permanent: true,
    },
    {
        source: "/spb/old-nevskiy/",
        destination: "/hotels/spb/old-nevskiy/",
        permanent: true,
    },
    {
        source: "/msk/pokrovka/",
        destination: "/hotels/msk/pokrovka/",
        permanent: true,
    },
    {
        source: "/spb/moyka/",
        destination: "/hotels/spb/moyka/",
        permanent: true,
    },
    {
        source: "/spb/ligovskiy/",
        destination: "/hotels/spb/ligovskiy/",
        permanent: true,
    },
    {
        source: "/spb/sennaya-square/",
        destination: "/hotels/spb/sennaya-square/",
        permanent: true,
    },
    {
        source: "/spb/gostiniy-dvor/",
        destination: "/hotels/spb/gostiniy-dvor/",
        permanent: true,
    },
    {
        source: "/spb/angliyskiy/",
        destination: "/hotels/spb/mariinsky/",
        permanent: true,
    },
    {
        source: "/hotels/spb/angliyskiy/",
        destination: "/hotels/spb/mariinsky/",
        permanent: true,
    },
    {
        source: "/spb/moyka/",
        destination: "/hotels/spb/moyka/",
        permanent: true,
    },
    {
        source: "/spb/gostiniy-dvor/",
        destination: "/hotels/spb/gostiniy-dvor/",
        permanent: true,
    },
    {
        source: "/spb/sennaya-square/",
        destination: "/hotels/spb/sennaya-square/",
        permanent: true,
    },
    {
        source: "/msk/pokrovka/",
        destination: "/hotels/msk/pokrovka/",
        permanent: true,
    },
    {
        source: "/spb/old-nevskiy/",
        destination: "/hotels/spb/old-nevskiy/",
        permanent: true,
    },
    {
        source: "/spb/smolnyy/",
        destination: "/hotels/spb/smolnyy/",
        permanent: true,
    },
    {
        source: "/spb/griboedov/",
        destination: "/hotels/spb/griboedov/",
        permanent: true,
    },
    {
        source: "/spb/ligovskiy/",
        destination: "/hotels/spb/ligovskiy/",
        permanent: true,
    },
    {
        source: "/spb/mariinsky/",
        destination: "/hotels/spb/mariinsky/",
        permanent: true,
    },
]

app.use((req, res, next) => {
    const redirect = redirects.find(r => r.source === req.originalUrl);

    const url = new URL(req.originalUrl, `http://${req.headers.host}`);
    const hotelId = url.searchParams.get('hotel_id');
    const queryParams = url.searchParams.toString();


    switch (hotelId){
        case '20176': return res.redirect(301, `/hotels/spb/gostiniy-dvor?${queryParams}`);
        case '21668': return res.redirect(301, `/hotels/spb/old-nevskiy?${queryParams}`);
        case '42043': return res.redirect(301, `/hotels/spb/mariinsky?${queryParams}`);
        case '20776': return res.redirect(301, `/hotels/spb/griboedov?${queryParams}`);
        case '33783': return res.redirect(301, `/hotels/spb/sennaya-square?${queryParams}`);
        case '10970': return res.redirect(301, `/hotels/spb/ligovskiy?${queryParams}`);
        case '27469': return res.redirect(301, `/hotels/spb/moyka?${queryParams}`);
        case '27859': return res.redirect(301, `/hotels/spb/smolnyy?${queryParams}`);
        case '32789': return res.redirect(301, `/hotels/msk/pokrovka?${queryParams}`);
    }


    if (redirect) {
        return res.redirect(301, redirect.destination);
    }

    next();
});


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'dist', '404', 'index.html'));
});


app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    fs.access(indexPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('Index file not found:', err);
            res.status(404).send('Index file not found');
            return;
        }
        res.sendFile(indexPath);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
