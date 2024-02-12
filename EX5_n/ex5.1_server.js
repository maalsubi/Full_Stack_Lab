//server code
const net = require('net');

const PORT = 3000;

const server = net.createServer(client => {
    console.log('Client connected');
    client.write('Welcome to the chat!\n');

    client.on('data', data => {
        const message = data.toString().trim();
        console.log('Received:', message);
        //client.write(`You said: ${message}`);
        //client.end();
    });
    client.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});
