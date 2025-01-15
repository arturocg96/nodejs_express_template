//app.js is the express app that will be used to serve the API. 

const express = require('express'); // Import express
const cors = require('cors'); // Import cors

const app = express(); // Create an express app
app.use(express.json()); // Enable the app to parse JSON payloads
app.use(cors()); // Enable the app to use cors

/// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app; // Export the app