const http = require('http');

http.createServer((req, resp) => {
    resp.write('<h1>Hello this is Ganesh</h1>');
    resp.end('Hello');
}).listen(4800);

http.createServer((req, resp) => {
    resp.write('<h1>Hello this is 2nd server</h1>');
    resp.end();
}).listen(5800);