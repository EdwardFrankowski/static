const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { port } = require('./config/env');
const utmMiddleware = require('./middleware/utm.middleware');
const { removeWWW, handleRedirects, handle404 } = require('./middleware/redirect.middleware');
const messageRoutes = require('./routes/message.routes');
const hotelRoutes = require('./routes/hotel.routes');
const analyticsRoutes = require('./routes/analytics.routes');

const app = express();

app.set('trust proxy', true);

app.use(removeWWW);
app.use(handle404);
app.use(handleRedirects);

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(utmMiddleware);

app.use(express.static(path.join(__dirname, '..', 'public', 'dist')));

app.use('/api', messageRoutes);
app.use('/api', hotelRoutes);
app.use('/api', analyticsRoutes);


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', 'dist', '404', 'index.html'));
});

app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, '..', 'public', 'dist', 'index.html');
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

module.exports = app;