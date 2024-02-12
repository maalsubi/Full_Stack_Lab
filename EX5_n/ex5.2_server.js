const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.method == 'POST' && req.url == '/count') {
        let body = '';
        // Collect data from the request stream
        req.on('data', chunk => {
            body += chunk.toString();
        });
        // When all data has been received
        req.on('end', () => {
            // Parse the received data
            const data = JSON.parse(body);

            // Count words and characters
            const wordCount = data.message.split(' ').length;
            const charCount = data.message.length;

            // Prepare response object
            const response = {
                wordCount: wordCount,
                charCount: charCount
            };

            // Send response to the client
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(response));
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid request');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

