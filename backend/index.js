const express = require('express');
const app = express();

app.use(express.json());

const urlRoutes = require('./routes/urlRoutes');
app.use('/shorten', urlRoutes);