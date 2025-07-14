const express = require('express');
const router = express.Router();
const { createShortURL } = require('../controllers/urlcontroller.js');

router.post('/', createShortURL);

module.exports = router;
