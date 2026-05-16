/**
 * Interactive script that reads user input from STDIN.
 * It displays a welcome message, captures the name, and prints it back.
 * Finally, it displays a closing message when the stream ends.
 */

/**
 * Interactive script that reads user input from STDIN.
 */


process.stdin.setEncoding('utf8');


process.stdout.write('Welcome to Holberton School, what is your name?\n');


process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input !== null) {

    process.stdout.write(`Your name is: ${input.trim()}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
