const express = require('express');
const app = express();

const urlRoutes = require('./routes/urlRoutes');
app.use('/shorten', urlRoutes);