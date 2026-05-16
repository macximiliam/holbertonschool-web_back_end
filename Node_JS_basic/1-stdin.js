/**
 * Interactive script that reads user input from STDIN.
 * It displays a welcome message, captures the name, and prints it back.
 * Finally, it displays a closing message when the stream ends.
 */

/**
 * Interactive script that reads user input from STDIN.
 */


process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
