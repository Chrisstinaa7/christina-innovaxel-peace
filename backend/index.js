const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const urlRoutes = require('./routes/urlRoutes');
app.use('/shorten', urlRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
