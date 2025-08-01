// src/routes/intakeRoutes.js
const express = require('express');
const router = express.Router();
const { processIntakeForm } = require('../controllers/intakeController');

// This must match the exported function
router.post('/', processIntakeForm);

module.exports = router;
