const http = require('http');

const arg = process.argv;

let port;

http.createServer((req, resp) => {
    console.log(arg[2]);
    port = arg[2];
    resp.write('<h1>Hello this is Ganesh</h1>');
    resp.end();
}).listen(port);
