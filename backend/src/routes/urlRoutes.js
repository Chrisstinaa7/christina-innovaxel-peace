const express = require('express');
const router = express.Router();
const { createShortURL, getOriginalURL, updateURL, deleteURL, getStats } = require('../controllers/urlcontroller.js');

router.post('/', createShortURL);
router.get('/:shortCode', getOriginalURL);
router.put('/:shortCode', updateURL);
router.delete('/:shortCode', deleteURL);
router.get('/:shortCode/stats', getStats);





module.exports = router;
