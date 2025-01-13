//app.js is the express app that will be used to serve the API. 

const express = require('express'); // Import express

const app = express(); // Create an express app

app.use(express.json()); // Enable the app to parse JSON payloads

app.use('/api', require('./routes/apiRoutes')); // Use the apiRoutes

module.exports = app; // Export the app