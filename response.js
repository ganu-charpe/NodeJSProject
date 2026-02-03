const http = require('http');

const server = http.createServer((req, resp) => {
    resp.setHeader("Content-Type", 'text/html');
    resp.write(`<h1> Hello Ganesh ${new Date()}<\h1>`);
    resp.end();
})

server.listen(4800);