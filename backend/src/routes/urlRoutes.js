const express = require('express');
const router = express.Router();
const { createShortURL, getOriginalURL, updateURL } = require('../controllers/urlcontroller.js');

router.post('/', createShortURL);
router.get('/:shortCode', getOriginalURL);
router.put('/:shortCode', updateURL);



module.exports = router;
