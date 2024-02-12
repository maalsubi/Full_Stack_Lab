
const url = require('url');

const urlString = 'https://www.example.com:8080/path/to/resource?query=string&param=value#fragment';

// Parse the URL
const parsedUrl = url.parse(urlString, true);


console.log('Parsed URL:');
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Hostname:', parsedUrl.hostname);
console.log('Port:', parsedUrl.port);
console.log('Path:', parsedUrl.pathname);
console.log('Query:', parsedUrl.query);
console.log('Hash:', parsedUrl.hash);


