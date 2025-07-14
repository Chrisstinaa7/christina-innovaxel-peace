const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const urlRoutes = require('./routes/urlRoutes.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/shorten', urlRoutes);

// Start server
app.listen(PORT, () => {
    console.log('Server running on port 5000');
});

//jHop65On0UQBaey2
//mongodb+srv://peacechristina32:jHop65On0UQBaey2@cluster0.p7cw6zx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0