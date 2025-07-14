const URL = require('../models/URL');
const { nanoid } = require('nanoid');

// POST /shorten
exports.createShortURL = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortCode = nanoid(6); // e.g. "aZ3kLp"

    try {
        const newUrl = await URL.create({
            url,
            shortCode
        });

        res.status(201).json(newUrl);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
