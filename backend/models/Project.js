// server/models/Project.js

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Project title is required'],
        trim: true,
        unique: true
    },
    client: {
        type: String,
        required: true,
    },
    location: {
        type: String
    },
    category: { // Essential for the interactive filter (e.g., 'Civil', 'Structural', 'MEP')
        type: String,
        required: true,
        enum: ['Civil', 'MEP', 'Structural', 'Commercial', 'Residential'] // Example categories
    },
    description: {
        type: String,
        required: true
    },
    galleryImages: [ // Array of URLs for the image showcase/lightbox
        { type: String, required: true }
    ],
    status: {
        type: String,
        enum: ['Completed', 'In Progress', 'Planned'],
        default: 'Completed'
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);