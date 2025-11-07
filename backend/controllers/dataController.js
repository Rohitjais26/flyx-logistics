// server/controllers/dataController.js

const Service = require('../models/Service');
const Project = require('../models/Project');


// @route   GET /api/services
// @desc    Get all services
const getServices = async (req, res) => {
    try {
        const services = await Service.find().sort({ title: 1 });
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @route   GET /api/projects
// @desc    Get all projects (can be filtered by category later)
const getProjects = async (req, res) => {
    try {
        // Optional: Implement filtering based on a query parameter like ?category=Civil
        const category = req.query.category;
        const filter = category ? { category: category } : {};
        
        const projects = await Project.find(filter).sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    getServices,
    getProjects
};