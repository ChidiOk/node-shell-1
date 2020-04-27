// Outpumpt a prompt
process.stdout.write('prompt >');

// The stdin 'data' event fires after we type in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove \n i.e. newLine.
    if (cmd === 'pwd') {
        process.stdout.write(`${process.cwd()}`);
        process.stdout.write('\nprompt > ');
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});

// console.log(`${process.cwd()}`);

