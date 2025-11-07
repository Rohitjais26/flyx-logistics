// server/models/Service.js

const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Service title is required'],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Service description is required']
    },
    iconUrl: { // For the improved design's icon-based services
        type: String,
        default: '/icons/default.svg'
    },
    shortDescription: { // For use on the Home page services overview
        type: String,
        maxLength: 150
    }
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);