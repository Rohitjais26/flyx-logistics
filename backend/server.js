// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from .env

// Import API routes
const dataRoutes = require('./routes/dataRoutes');
const contactRoutes = require('./routes/contactRoutes'); // We'll add this one next


const app = express();
const PORT = process.env.PORT || 5000;

// --- 1. Middleware ---
// Enable CORS for all origins (allows React frontend to connect)
app.use(cors()); 

// Body parser: allows parsing of JSON request bodies (e.g., from POST requests)
app.use(express.json()); 


// --- 2. Database Connection (MongoDB) ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    // Exit process with failure
    process.exit(1); 
  });


// --- 3. API Routes Integration ---

// Main data routes (Services, Projects) - Prefixed with /api
app.use('/api', dataRoutes); 

// Contact form submission route - Prefixed with /api
// This is where your multi-step form data will be sent
app.use('/api', contactRoutes); 



// --- 4. Simple Root Route (Health Check) ---
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Corporate API! Status: UP');
});


// --- 5. Start Server ---
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
});