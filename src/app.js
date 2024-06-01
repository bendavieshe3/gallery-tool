//app.js
const express = require('express');
const path = require('path');
const galleryRoutes = require('./routes/gallery');
const imageRoutes = require('./routes/image');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/gallery', galleryRoutes);
app.use('/api/image', imageRoutes);

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});