const fs = require('fs');

const operation  = process.argv[2]

if (operation === 'write'){
    const name = process.argv[3];
    const content = process.argv[4]
    const fullName = `files/${name}.txt`;

    fs.writeFileSync(fullName, content, 'utf-8');

} else if (operation === 'read') {
    const name = process.argv[3];
    const fullName = `files/${name}.txt`;

    const data = fs.readFileSync(fullName, 'utf-8');
    console.log(data);

} else if (operation === 'update') {
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = `files/${name}.txt`;

    fs.appendFileSync(fullName, content, 'utf-8');

} else if (operation === 'delete') {
    const name = process.argv[3];
    const fullName = `files/${name}.txt`;

    fs.unlinkSync(fullName);

} else {
    console.log('operation not found');
}