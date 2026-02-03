const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp) => {
    fs.readFile('html/form.html', 'utf-8', (error, data) => {

        if(error) {
            resp.writeHead(500, {'content-type': 'text/plain'});
            resp.write('Interval server error');
            return;
        }

        resp.writeHead(200, {'content-type': 'text/html'});

        if (data) {
             if (req.url === '/') {
                resp.write(data);
            } else if(req.url === '/submit') {
                let dataBody = [];
               req.on('data', (chunk) => {
                    dataBody.push(chunk);
               })

               let readData = {};
               req.on('end', () => {
                    const rawData = Buffer.concat(dataBody).toString();
                    const readableData = queryString.parse(rawData);
                    console.log(readableData);
                    readData = {
                        name: readableData.name,
                        email: readableData.email
                    }

                    const dataString = `My name is ${readData.name} and My Email is ${readData.email}`;

                    // fs.writeFileSync(`text/${readData.name}.txt`, dataString);
                    fs.writeFile(`text/${readData.name}.txt`, dataString, (err) => {
                        if (err) {
                            resp.end('Internal server error');
                            return false;
                        } else {
                            console.log('File created');
                        }
                    });

                    resp.write(`<h1>${readData.name} and ${readData.email} Submitted</h1>`);
                    resp.end();
                });
                return
            }
        }
        resp.end();
    })
}).listen(4800);

// http.createServer((req, resp) => {
//     resp.writeHead(200, {'content-type': 'text/html'});

//     if (req.url === '/') {
//         resp.write(`
//         <form action="/submit" method="post">
//             <input type="text" placeholder="enter name" name="name"/>
//             <input type="text" placeholder="enter email" name="email"/>
//             <button>Submit</button>
//         </form>
//         `);
//     } else if(req.url === '/submit') {
//         resp.write('<h1>Data Submitted </h1>')
//     }
    
//     resp.end();
    
// }).listen(4800);
