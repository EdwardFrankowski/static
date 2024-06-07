const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

const redirects = [
    {
        source: '/_error',
        destination: '/',
        permanent: true,
    },
    {
        source: '/port',
        destination: '/',
        permanent: true,
    },
    {
        source: '/dolgosrochnoeprojivanie',
        destination: '/book-a-room?hotel_id=10970',
        permanent: true,
    },
    {
        source: '/port-comfort-by-the-gostiny-dvor',
        destination: '/book-a-room?hotel_id=20176',
        permanent: true,
    },
    {
        source: '/port-comfort-by-the-griboedov',
        destination: '/book-a-room?hotel_id=20776',
        permanent: true,
    },
    {
        source: '/port-comfort-on-ligovskiy',
        destination: '/book-a-room?hotel_id=10970',
        permanent: true,
    },
    {
        source: '/port-comfort-by-moyka',
        destination: '/book-a-room?hotel_id=27469',
        permanent: true,
    },
    {
        source: '/hotelsmoscow',
        destination: '/book-a-room?hotel_id=32789',
        permanent: true,
    },
    {
        source: '/port-comfort-by-old-nevsky',
        destination: '/book-a-room?hotel_id=21668',
        permanent: true,
    },
    {
        source: '/hotels',
        destination: '/book-a-room?hotel_id=10970',
        permanent: true,
    },
    {
        source: '/port-comfort-on-pokrovka',
        destination: '/book-a-room?hotel_id=32789',
        permanent: true,
    },
    {
        source: '/sennaya_square',
        destination: '/book-a-room?hotel_id=33783',
        permanent: true,
    },
    {
        source: '/port-comfort-by-smolnyy',
        destination: '/book-a-room?hotel_id=27859',
        permanent: true,
    },
    {
        source: '/booking?hotel_id=42043',
        destination: '/book-a-room?hotel_id=42043',
        permanent: true,
    },
    {
        source: '/port-comfort-on-moyka',
        destination: 'https://port-comfort.pro/book-a-room?hotel_id=42043',
        permanent: true,
    },
    {
        source: '/booking?hotel_id=20176&room-type=145132',
        destination: '/book-a-room?hotel_id=20176',
        permanent: true,
    },
    {
        source: '/booking',
        destination: '/book-a-room?hotel_id=10970',
        permanent: true,
    },
    {
        source: '/transfer',
        destination: '/',
        permanent: true,
    },
    {
        source: '/dopuslugi',
        destination: '/',
        permanent: false,
    },
    {
        source: '/partners',
        destination: '/',
        permanent: false,
    },
    {
        source: '/payment',
        destination: '/payment-and-return',
        permanent: true,
    },
    {
        source: '/dogovor-bescontact',
        destination: '/',
        permanent: true,
    },
    {
        source: '/dogovor',
        destination: '/rules-of-accommodation',
        permanent: true,
    },
    {
        source: '/policy',
        destination: '/privacy-policy',
        permanent: true,
    },
    {
        source: '/rekvizity',
        destination: '/requisites',
        permanent: true,
    },
    {
        source: '/loyalty',
        destination: '/loyalty-programs',
        permanent: true,
    },
    {
        source: '/contacts',
        destination: '/',
        permanent: true,
    },
    {
        source: '/contact',
        destination: '/',
        permanent: true,
    },
];

redirects.forEach(redirect => {
    const { source, destination, permanent } = redirect;
    app.get(source, (req, res) => {
        res.redirect(permanent ? 301 : 302, destination);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
