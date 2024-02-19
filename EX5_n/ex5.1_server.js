//server code
const net = require('net');

const PORT = 3000;

const server = net.createServer(client => {
    console.log('Client connected');
    client.write('Welcome to the chat!\n');

    client.on('data', data => {
        const message = data.toString().trim();
        console.log('Received:', message);
        if(message.toLowerCase()=='exit'){
            client.end("goodbye");
            return;
        }
        process.stdin.on('data', data => {
            client.write(data.toString());
        });
    });
    client.on('end', () => {
        console.log('Client disconnected');
    });
    client.on('error', () => {
        console.log('Handled error');
    });
});

server.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});
