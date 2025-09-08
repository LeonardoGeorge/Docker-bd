const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, Docker... :) API-Node; Criado com sucesso, agora com volumes! \n');
});

server.listen(3000);