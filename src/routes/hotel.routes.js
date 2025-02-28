const express = require('express');
const router = express.Router();
const { getRoomTypes, getPrice } = require('../controllers/hotel.controller');

router.get('/getRoomTypes', getRoomTypes);
router.post('/getPrice', getPrice);

module.exports = router;