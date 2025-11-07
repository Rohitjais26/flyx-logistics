// server/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
// **CRITICAL: Ensure these function names match the exports exactly**
const { getServices, getProjects } = require('../controllers/dataController');

// Data Routes
router.get('/services', getServices);
router.get('/projects', getProjects);



module.exports = router;