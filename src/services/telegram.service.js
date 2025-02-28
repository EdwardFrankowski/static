
const telegramApiCall = async (endpoint, token, payload) => {
    const url = `https://api.telegram.org/bot${token}/${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            ...payload,
            timeout: 10000
        });

        if (!response.ok) {
            throw new Error(`Telegram API returned ${response.status}`);
        }

        return true;
    } catch (error) {
        console.error("Telegram API error:", error);
        return false;
    }
};

const sendMessage = async ({ type, data, files = [], token, chatId, hasMedia = false }) => {
    const { getMessage } = require('../utils/message.utils');
    const message = getMessage(type, data);

    if (hasMedia) {
        if (!files.length) {
            throw new Error('Files are required for media messages');
        }

        const mediaGroup = files.map((file, index) => ({
            type: 'document',
            media: 'attach://' + file.originalname,
            caption: index === files.length - 1 ? message : undefined
        }));

        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('media', JSON.stringify(mediaGroup));
        files.forEach(file => {
            formData.append(file.originalname, new Blob([file.buffer]), file.originalname);
        });

        return telegramApiCall('sendMediaGroup', token, { body: formData });
    }

    return telegramApiCall('sendMessage', token, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    });
};

module.exports = {
    telegramApiCall,
    sendMessage
};