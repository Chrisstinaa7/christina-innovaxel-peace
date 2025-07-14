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

// GET /shorten/:shortCode
exports.getOriginalURL = async (req, res) => {
    const { shortCode } = req.params;

    try {
        const urlEntry = await URL.findOne({ shortCode });

        if (!urlEntry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        res.status(200).json(urlEntry);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// PUT /shorten/:shortCode
exports.updateURL = async (req, res) => {
    const { shortCode } = req.params;
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const updated = await URL.findOneAndUpdate(
            { shortCode },
            { url, updatedAt: Date.now() },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
// DELETE /shorten/:shortCode
exports.deleteURL = async (req, res) => {
    const { shortCode } = req.params;

    try {
        const deleted = await URL.findOneAndDelete({ shortCode });

        if (!deleted) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        res.status(204).send(); // No content
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
