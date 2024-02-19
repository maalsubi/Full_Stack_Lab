const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Handle GET request to /hello
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, client!' });
});

// Handle POST request to /count
app.post('/count', (req, res) => {
    const { message } = req.body;
    const wordCount = message.split(' ').length;
    const charCount = message.length;
    res.json({ words:wordCount, charCount });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});