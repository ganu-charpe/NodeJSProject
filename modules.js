const fs = require('fs');
const os = require('os')

// fs.writeFileSync('dummy.txt', '');

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());



console.log(process.cwd());
console.log(process.pid);