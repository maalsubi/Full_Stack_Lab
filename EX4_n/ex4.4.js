const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Extract cookies from the request header
    const cookies = req.headers.cookie;

    // Check if cookies exist in the request header
    if (cookies) {
        console.log('Cookies found in the request header:');
        console.log(cookies);
    } else {
        console.log('No cookies found in the request header.');
    }
    // Send a response to the client
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Request header checked for cookies!\n');
});

// Define the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
