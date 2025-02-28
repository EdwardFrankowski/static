const path = require('path');
const { redirects } = require('../constants/redirects');

module.exports = {
    removeWWW: (req, res, next) => {
        if (req.headers.host.startsWith('www.')) {
            const newHost = req.headers.host.slice(4);
            const newUrl = `${req.protocol}://${newHost}${req.originalUrl}`;
            res.redirect(301, newUrl);
        } else {
            next();
        }
    },

    handleRedirects: (req, res, next) => {
        const requestedPath = req.originalUrl;
        const normalizedPath = requestedPath.replace(/\/$/, ''); // Без слеша
        const pathWithSlash = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`; // С слешем

        const redirect = redirects.find(r =>
            r.source === normalizedPath || r.source === pathWithSlash
        );

        const url = new URL(req.originalUrl, `http://${req.headers.host}`);
        const hotelId = url.searchParams.get('hotel_id');
        const queryParams = url.searchParams.toString();

        const hotelRedirects = {
            '20176': `/hotels/spb/gostiniy-dvor?${queryParams}`,
            '21668': `/hotels/spb/old-nevskiy?${queryParams}`,
            '42043': `/hotels/spb/mariinsky?${queryParams}`,
            '20776': `/hotels/spb/griboedov?${queryParams}`,
            '33783': `/hotels/spb/sennaya-square?${queryParams}`,
            '10970': `/hotels/spb/ligovskiy?${queryParams}`,
            '27469': `/hotels/spb/moyka?${queryParams}`,
            '27859': `/hotels/spb/smolnyy?${queryParams}`,
            '32789': `/hotels/msk/pokrovka?${queryParams}`
        };

        if (hotelId && hotelRedirects[hotelId]) {
            return res.redirect(301, hotelRedirects[hotelId]);
        }

        if (redirect) {
            const destination = redirect.destination.endsWith('/')
                ? redirect.destination
                : `${redirect.destination}/`;
            return res.redirect(redirect.permanent ? 301 : 302, destination);
        }

        next();
    },

    handle404: (req, res, next) => {
        if (req.url.startsWith('/404/')) {
            return res.status(404).sendFile(path.join(__dirname, '..', '..', 'public','dist', '404', 'index.html'));
        }
        next();
    }
};