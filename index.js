const http = require('http');

http.createServer((req, resp) => {

    resp.write('<h1>Hello All!</h1>');
    resp.end(); 
}).listen(4800);