
const net = require('net');

const client = net.connect({ port: 3000 }, 'localhost', () => {
    console.log('Connected to Server.');
});

client.on('data', (data) => {
    console.log("From server : ",data.toString());
    if(data.toString().toLowerCase()!='goodbye'){
        console.log("Type message to send to server");
    }
    //client.write("hello from client");
    //client.end();
});

client.on('end', () => {
    console.log('Disconnected from server.');
    console.log('Client Program Ended.');
});

// Read from stdin and send data to server
process.stdin.on('data', data => {
    client.write(data.toString());
  });

