const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = '7484491812:AAFj6wf3VQYoXy69UZMFtEu-DAc_rqOtsBw';
const TELEGRAM_CHAT_ID = '-1001580200946';

const getMessage = ({
                        name,
                        phone,
                        from,
                        to,
                        date,
                        time,
                        childSeat,
                        transport,
                    }) =>
    `
Основная информация:
ФИО: ${name}
Телефон: ${phone}
Откуда: ${from}
Отель: ${to}
Дата: ${date}
Время: ${time}
Детское кресло: ${childSeat}
Машина: ${transport}

Дополнительная:
https://port-comfort.pro/transfer
UTM source: maps
UTM medium: link
UTM campaign: moyka
`;

const sendTransferMessage = async (message) => {
    const fetch = (await import('node-fetch')).default;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
        }),
    });

    return response.status === 200;
};


const redirects =  [
    {
        source: "/_error",
        destination: "/",
        permanent: true,
    },
    {
        source: "/port",
        destination: "/",
        permanent: true,
    },
    {
        source: "/contact",
        destination: "/",
        permanent: true,
    },
    {
        source: "/contacts",
        destination: "/",
        permanent: true,
    },
    {
        source: "/dogovor-bescontact",
        destination: "/",
        permanent: false,
    },
    {
        source: "/partners",
        destination: "/",
        permanent: false,
    },
    {
        source: "/dogovor",
        destination: "/rules-of-accommodation",
        permanent: true,
    },
    {
        source: "/dopuslugi",
        destination: "/additional-services",
        permanent: true,
    },
    {
        source: "/loyalty",
        destination: "/loyalty-programs",
        permanent: true,
    },
    {
        source: "/payment",
        destination: "/payment-and-return",
        permanent: true,
    },
    {
        source: "/policy",
        destination: "/privacy-policy",
        permanent: true,
    },
    {
        source: "/rekvizity",
        destination: "/requisites",
        permanent: true,
    },
    {
        source: "/booking",
        destination: "/hotels/spb",
        permanent: true,
    },
    {
        source: "/dolgosrochnoeprojivanie",
        destination: "/hotels/spb",
        permanent: true,
    },
    {
        source: "/hotels",
        destination: "/hotels/spb",
        permanent: true,
    },
    {
        source: "/hotelsmoscow",
        destination: "/hotels/msk",
        permanent: true,
    },
    {
        source: "/port-comfort-by-moyka",
        destination: "/hotels/spb/moyka",
        permanent: true,
    },
    {
        source: "/port-comfort-by-old-nevsky",
        destination: "/hotels/spb/old-nevskiy",
        permanent: true,
    },
    {
        source: "/port-comfort-by-smolnyy",
        destination: "/hotels/spb/smolnyy",
        permanent: true,
    },
    {
        source: "/port-comfort-by-the-gostiny-dvor",
        destination: "/hotels/spb/gostiniy-dvor",
        permanent: true,
    },
    {
        source: "/port-comfort-by-the-griboedov",
        destination: "/hotels/spb/griboedov",
        permanent: true,
    },
    {
        source: "/port-comfort-on-ligovskiy",
        destination: "/hotels/spb/ligovskiy",
        permanent: true,
    },
    {
        source: "/port-comfort-on-moyka",
        destination: "/hotels/spb/moyka",
        permanent: true,
    },
    {
        source: "/port-comfort-on-pokrovka",
        destination: "/hotels/msk/pokrovka",
        permanent: true,
    },
    {
        source: "/sennaya_square",
        destination: "/hotels/spb/sennaya-square",
        permanent: true,
    },
    {
        source: "/booking?hotel_id=20176&room-type=145132",
        destination: "/hotels/spb/gostiniy-dvor",
        permanent: true,
    },
    {
        source: "/booking?hotel_id=10970",
        destination: "/hotels/spb/ligovskiy",
        permanent: true,
    },
    {
        source: "/book-a-room/ligovskiy",
        destination: "/hotels/spb/ligovskiy",
        permanent: true,
    },
    {
        source: "/book-a-room/gostiniy-dvor",
        destination: "/hotels/spb/gostiniy-dvor",
        permanent: true,
    },
    {
        source: "/book-a-room/pokrovka",
        destination: "/hotels/msk/pokrovka",
        permanent: true,
    },
    {
        source: "/book-a-room/moyka",
        destination: "/hotels/spb/moyka",
        permanent: true,
    },
    {
        source: "/book-a-room/old-nevskiy",
        destination: "/hotels/spb/old-nevskiy",
        permanent: true,
    },
    {
        source: "/book-a-room/smolnyy",
        destination: "/hotels/spb/smolnyy",
        permanent: true,
    },
    {
        source: "/book-a-room/griboedov",
        destination: "/hotels/spb/griboedov",
        permanent: true,
    },
    {
        source: "/book-a-room/sennaya-square",
        destination: "/hotels/spb/sennaya-square",
        permanent: true,
    },
    {
        source: "/book-a-room/angliyskiy",
        destination: "/hotels/spb/angliyskiy",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=20176",
        destination: "/hotels/spb/gostiniy-dvor",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=32789",
        destination: "/hotels/msk/pokrovka",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=21668",
        destination: "/hotels/spb/old-nevskiy",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=42043",
        destination: "/hotels/spb/angliyskiy",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=20776",
        destination: "/hotels/spb/griboedov",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=33783",
        destination: "/hotels/spb/sennaya-square",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=10970",
        destination: "/hotels/spb/ligovskiy",
        permanent: true,
    },
    {
        source: "/book-a-room?hotel_id=27469",
        destination: "/hotels/spb/moyka",
        permanent: true,
    },
    {
        source: "/book-a-room?book-a-room?hotel_id=27859",
        destination: "/hotels/spb/smolnyy",
        permanent: true,
    },
]

app.use((req, res, next) => {
    const { originalUrl } = req;
    const redirect = redirects.find(r => originalUrl.startsWith(r.source));

    if (redirect) {
        const redirectTo = redirect.destination;

        res.redirect(redirect.permanent ? 301 : 302, redirectTo);
    } else {
        next();
    }
});

app.post('/send-transfer-message', async (req, res) => {
    try {
        const data = req.body;

        const message = getMessage(data);

        const ok = await sendTransferMessage(message);

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
