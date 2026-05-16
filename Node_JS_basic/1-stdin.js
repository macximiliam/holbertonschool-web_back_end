/**
 * Interactive script that reads user input from STDIN.
 * It displays a welcome message, captures the name, and prints it back.
 * Finally, it displays a closing message when the stream ends.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (input) => {
  if (input !== null && input.toString().trim() !== '') {
    process.stdout.write(`Your name is: ${input.toString().trim()}\n`);
  }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});