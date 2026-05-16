const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const DATABASE_FILE = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    const originalLog = console.log;
    let output = '';
    console.log = (msg) => { output += `${msg}\n`; };

    countStudents(DATABASE_FILE)
      .then(() => {
        console.log = originalLog;
        res.write(output.trim());
        res.end();
      })
      .catch((error) => {
        console.log = originalLog;
        res.write(error.message);
        res.end();
      });
  }
});

app.listen(PORT);

module.exports = app;
