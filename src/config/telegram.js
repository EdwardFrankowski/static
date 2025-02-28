module.exports = {
    transfer: {
        token: process.env.TRANSFER_TOKEN,
        chatId: process.env.TRANSFER_CHAT_ID,
        type: 'transfer'
    },
    investor: {
        token: process.env.INVESTOR_TOKEN,
        chatId: process.env.INVESTOR_CHAT_ID,
        type: 'investor'
    },
    nonContact: {
        token: process.env.NON_CONTACT_TOKEN,
        chatId: process.env.NON_CONTACT_CHAT_ID,
        type: 'nonContact',
        hasMedia: true
    }
};