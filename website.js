const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    let headerData = fs.readFileSync('html/header.html', 'utf-8');
    let footerData = fs.readFileSync('html/footer.html', 'utf-8');

    let file = '/home';
    if (req.url !== '/') {
        file = req.url;
    }

    if(req.url !== '/style.css') {
        fs.readFile(`html${file}.html`, 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, {'content-type': 'text/plain'});
                resp.end('Internal server error');
                return;
            }
    
            resp.writeHead(200, {'content-type': 'text/html'});
            resp.write(headerData+ '' + data + '' + footerData);
            resp.end();
        });
    } else if(req.url === '/style.css') {
        fs.readFile('html/style.css', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, {'content-type': 'text/plain'});
                resp.end('CSS file not found');
                return;
            }

            resp.writeHead(200, {'content-type': 'text/css'});
            resp.write(data);
            resp.end();
        });
    }



}).listen(4800);