const http = require('http');

const userData = [
    {
        Name: 'Ganesh',
        Age: 30,
        City: 'Nagpur'
    },
    {
        Name: 'Ram',
        Age: 50,
        City: 'Ayodhya'
    },
    {
        Name: 'Krishna',
        Age: 9,
        City: 'Mathura'
    }
]

http.createServer((req, resp) => {
    resp.setHeader('Content-Type', "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();

}).listen(6001);