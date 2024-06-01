const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const config = require('../../config/directories.json');

// Helper function to find the full path of a gallery
function getGalleryPath(galleryName) {
    return config.galleries.find(g => path.basename(g) === galleryName);
}

// Serve an image
router.get('/:gallery/:image', (req, res) => {
    const { gallery, image } = req.params;
    const galleryPath = getGalleryPath(gallery);
    if (galleryPath) {
        const imagePath = path.join(galleryPath, image);
        if (fs.existsSync(imagePath)) {
            res.sendFile(imagePath);
        } else {
            res.status(404).send('Image not found');
        }
    } else {
        res.status(404).send('Gallery not found');
    }
});

// Serve a thumbnail
router.get('/:gallery/:image/thumbnail', (req, res) => {
    const { gallery, image } = req.params;
    const galleryPath = getGalleryPath(gallery);
    if (galleryPath) {
        const imagePath = path.join(galleryPath, image);
        const thumbnailDir = path.join(galleryPath, 'thumbnails');
        const thumbnailPath = path.join(thumbnailDir, image);

        if (fs.existsSync(thumbnailPath)) {
            res.sendFile(thumbnailPath);
        } else {
            if (!fs.existsSync(thumbnailDir)) {
                fs.mkdirSync(thumbnailDir);
            }
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
    } else {
        res.status(404).send('Gallery not found');
    }
});

module.exports = router;