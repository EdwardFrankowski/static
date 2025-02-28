const express = require('express');
const router = express.Router();
const {
    sendTransferMessage,
    sendInvestorMessage,
    sendNonContactMessage
} = require('../controllers/message.controller');
const upload = require('../middleware/multer.middleware');

router.post('/send-transfer-message', sendTransferMessage);
router.post('/send-investor-message', sendInvestorMessage);
router.post('/send-non-contact-check-in-message', upload.array('files'), sendNonContactMessage);

module.exports = router;