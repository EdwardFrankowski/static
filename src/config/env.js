require('dotenv').config();

const requiredEnvVars = [
    'TRANSFER_TOKEN', 'TRANSFER_CHAT_ID',
    'INVESTOR_TOKEN', 'INVESTOR_CHAT_ID',
    'NON_CONTACT_TOKEN', 'NON_CONTACT_CHAT_ID'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
}

module.exports = {
    port: process.env.PORT || 3000
};