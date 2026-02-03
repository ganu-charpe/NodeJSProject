const queryString = require('querystring');

function userDataSubmit (req, resp) {
    let dataBody = [];
    req.on('data', (chunk) => {
        dataBody.push(chunk);
    })

    let readData = {};
    req.on('end', () => {
        const rawData = Buffer.concat(dataBody).toString();
        const readableData = queryString.parse(rawData);
        readData = {
            name: readableData.name,
            email: readableData.email
        }

        const dataString = `My name is ${readData.name} and My Email is ${readData.email}`;
        console.log(dataString);
    });
     resp.write(`<h1>Data submitted</h1>`);
}

module.exports = userDataSubmit;