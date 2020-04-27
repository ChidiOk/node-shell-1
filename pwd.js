// process.stdout.write('prompt >');

// The stdin 'data' event fires after we type in a line
// const pwd = process.stdin.on('data', (data) => {
//         process.stdout.write(`${process.cwd()}`);
//         process.stdout.write('\nprompt > ');
// });


module.exports =  function () {
    process.stdout.write(`${process.cwd()}`);
    process.stdout.write('\nprompt > ');
    
}