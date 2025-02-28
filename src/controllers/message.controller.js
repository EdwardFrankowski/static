const CONFIG_TG = require('../config/telegram');
const { sendMessage } = require('../services/telegram.service');

const createMessageHandler = (configKey) => async (req, res) => {
    const config = CONFIG_TG[configKey];

    try {
        const success = await sendMessage({
            type: config.type,
            data: req.body,
            files: req.files || [],
            token: config.token,
            chatId: config.chatId,
            hasMedia: config.hasMedia || false
        });

        res.status(success ? 200 : 500).json({
            status: success ? 'success' : 'error',
            message: success ? 'Message sent successfully' : 'Failed to send message'
        });
    } catch (error) {
        console.error(`Error in ${configKey} handler:`, error);
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = {
    sendTransferMessage: createMessageHandler('transfer'),
    sendInvestorMessage: createMessageHandler('investor'),
    sendNonContactMessage: createMessageHandler('nonContact')
};