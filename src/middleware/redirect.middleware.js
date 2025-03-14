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
        const normalizedPath = requestedPath.replace(/\/$/, '');
        const pathWithSlash = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
        const redirect = redirects.find(r =>
            r.source === normalizedPath || r.source === pathWithSlash
        );



        const url = new URL(req.originalUrl, `http://${req.headers.host}`);
        const hotelId = url.searchParams.get('hotel_id');

        url.searchParams.delete('hotel_id');
        const queryParams = url.searchParams.toString();

        const hotelRedirects = {
            '20176': `/hotels/spb/gostiniy-dvor`,
            '21668': `/hotels/spb/old-nevskiy`,
            '42043': `/hotels/spb/mariinsky`,
            '20776': `/hotels/spb/griboedov`,
            '33783': `/hotels/spb/sennaya-square`,
            '10970': `/hotels/spb/ligovskiy`,
            '27469': `/hotels/spb/moyka`,
            '27859': `/hotels/spb/smolnyy`,
            '32789': `/hotels/msk/pokrovka`
        };

        if (hotelId && hotelRedirects[hotelId]) {
            const redirectUrl = queryParams
                ? `${hotelRedirects[hotelId]}?${queryParams}`
                : hotelRedirects[hotelId];
            return res.redirect(301, redirectUrl);
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