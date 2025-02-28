const express = require('express');
const router = express.Router();
const { getPostViews } = require('../controllers/analytics.controller');

router.post('/getPostViews', getPostViews);

module.exports = router;