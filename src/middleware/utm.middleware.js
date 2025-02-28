module.exports = (req, res, next) => {
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