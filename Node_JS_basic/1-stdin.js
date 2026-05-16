process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (input) => {
  if (input !== null && input !== '\n') {
    process.stdout.write(`Your name is: ${input.replace(/\n$/, '')}\n`);
  }
});

process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});
