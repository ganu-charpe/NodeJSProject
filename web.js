const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    // resp.write('<h1>Hello this is Ganesh</h1>');
    fs.readFile('html/web.html', 'utf-8', (err, data) => {
        if(err) {
            resp.writable('internal server error');
            resp.end();
            return;
        }

        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.write(data);
        resp.end();
    });
}).listen(4800);
