//gallery.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const config = require('../../config/directories.json');

router.get('/', (req, res) => {
    res.json(config.galleries);
});

module.exports = router;