//index.js mission is to create a server and make it listen to a port

const http = require('http'); // Import http module
const app = require('./src/app'); // Import the app

const server = http.createServer(app); // Create a server with the app

require('dotenv').config(); // Import dotenv and configure it to read .env file & assign it to process.env


const PORT = process.env.PORT || 3000; // Define the port
server.listen(PORT); // Make the server listen to the port

server.on('listening', () => {
    console.log(`Server is running on port ${PORT}`);
}); // Log a message when the server is running

