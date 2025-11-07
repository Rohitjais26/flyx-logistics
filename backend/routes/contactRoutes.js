// server/routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Contact Form Submission
router.post('/contact', submitContactForm);

module.exports = router;