const http = require('http');
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit');

http.createServer((req, resp) => {

    if (req.url === '/') {
        userForm(req, resp);
    } else if (req.url === '/submit'){
        userDataSubmit(req, resp);
    }

    resp.end();
}).listen(4800);