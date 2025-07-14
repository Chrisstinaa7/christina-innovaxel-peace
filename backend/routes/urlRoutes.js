const express = require('express');
const router = express.Router();
const { createShortURL } = require('backend/controllers/urlController.js');

router.post('/', createShortURL);

module.exports = router;
