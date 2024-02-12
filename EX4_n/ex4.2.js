const http = require('http');

// URL of the external API
const url = 'http://www.w3schools.com/html/';

// Make a GET request to the external API
const request = http.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });
    // The whole response has been received.
    response.on('end', () => {
        console.log(data);
    });
});
// Handle errors
request.on('error', (error) => {
    console.error(`Error making HTTP request: ${error.message}`);
});
