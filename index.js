const http = require('http');
const server = http.createServer((req, res) => {
    res.end('API-Node Criado com sucesso, agora com volumes | Docker!\n');
});

server.listen(3000);