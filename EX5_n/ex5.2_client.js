const http = require('http');

const postData = JSON.stringify({ message: 'Hello, this is a test message.' });

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/count',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = http.request(options, (res) => {
    let data = '';
    // Receive data from the server
    res.on('data', (chunk) => {
        data += chunk;
    });

    // When all data has been received
    res.on('end', () => {
        console.log('Response:', data);
    });
});

// Handle errors
req.on('error', (error) => {
    console.error('Error:', error);
});

// Send data to the server
req.write(postData);
req.end();
