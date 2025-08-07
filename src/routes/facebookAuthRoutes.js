const express = require('express');
const router = express.Router();
const { facebookCallback } = require('../controllers/facebookAuthController');

router.get('/facebook/callback', facebookCallback);

module.exports = router;
