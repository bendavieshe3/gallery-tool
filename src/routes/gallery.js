const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const config = require('../../config/directories.json');

router.get('/', (req, res) => {
    res.json(config.galleries.map(gallery => path.basename(gallery)));
});

router.get('/:galleryName', (req, res) => {
    const galleryName = req.params.galleryName;
    const galleryPath = config.galleries.find(g => path.basename(g) === galleryName);
    if (galleryPath) {
        fs.readdir(galleryPath, (err, files) => {
            if (err) {
                res.status(500).send('Error reading directory');
            } else {
                res.json(files.filter(file => file.endsWith('.png')));
            }
        });
    } else {
        res.status(404).send('Gallery not found');
    }
});

module.exports = router;