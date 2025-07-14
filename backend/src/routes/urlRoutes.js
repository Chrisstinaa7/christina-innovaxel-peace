const express = require('express');
const router = express.Router();
const { createShortURL, getOriginalURL } = require('../controllers/urlcontroller.js');

router.post('/', createShortURL);
router.get('/:shortCode', getOriginalURL);


module.exports = router;
