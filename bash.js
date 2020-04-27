// Outpumpt a prompt
process.stdout.write('prompt >');
const pwd = require('./pwd')
const ls = require('./ls')

// The stdin 'data' event fires after we type in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove \n i.e. newLine.
    if (cmd === 'pwd') {
        pwd()
    } 
    else if (cmd === 'ls') {
        ls()
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});

// console.log(`${process.cwd()}`);
