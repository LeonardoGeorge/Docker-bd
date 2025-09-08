const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, Docker! :) \n');
});

server.listen(3000);