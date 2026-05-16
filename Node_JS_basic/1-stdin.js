/**
 * Interactive script that reads user input from STDIN.
 * It displays a welcome message, captures the name, and prints it back.
 * Finally, it displays a closing message when the stream ends.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
// 1. Listen for the event to start reading data
process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input !== null) {
    // 2. Output the captured name
    process.stdout.write('Your name is: ' + input.trim() + '\n');
  }
});

// 3. Listen for the event when the input stream is finished
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
