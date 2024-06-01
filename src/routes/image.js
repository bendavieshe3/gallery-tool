const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

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

// Serve a thumbnail
router.get('/:gallery/:image/thumbnail', (req, res) => {
    const { gallery, image } = req.params;
    const imagePath = path.join(__dirname, '../../public/images', gallery, image);
    const thumbnailPath = path.join(__dirname, '../../public/thumbnails', gallery, image);

    if (fs.existsSync(thumbnailPath)) {
        res.sendFile(thumbnailPath);
    } else {
        sharp(imagePath)
            .resize(200)
            .toFile(thumbnailPath, (err, info) => {
                if (err) {
                    res.status(500).send('Error generating thumbnail');
                } else {
                    res.sendFile(thumbnailPath);
                }
            });
    }
});

module.exports = router;