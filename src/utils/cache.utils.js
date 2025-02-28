const cache = new Map();

module.exports = {
    cache,
    fetchWithTimeout: (url, options, timeout = 10000) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

            fetch(url, options)
                .then(response => {
                    clearTimeout(timer);
                    return response.ok ? resolve(response.json()) : reject(new Error(`HTTP error! status: ${response.status}`));
                })
                .catch(reject);
        });
    }
};