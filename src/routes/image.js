//image.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Serve an image
router.get('/:gallery/:image', (req, res) => {
    const { gallery, image } = req.params;
    const imagePath = path.join(__dirname, '../../public/images', gallery, image);
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send('Image not found');
    }
});

module.exports = router;