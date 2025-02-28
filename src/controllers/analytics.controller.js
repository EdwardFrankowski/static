module.exports = {
    getPostViews: async (req, res) => {
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
    }
};