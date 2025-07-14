const express = require('express');
const router = express.Router();
const { createShortURL, getOriginalURL, updateURL, deleteURL } = require('../controllers/urlcontroller.js');

router.post('/', createShortURL);
router.get('/:shortCode', getOriginalURL);
router.put('/:shortCode', updateURL);
router.delete('/:shortCode', deleteURL);




module.exports = router;
