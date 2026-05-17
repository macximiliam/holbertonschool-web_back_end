const express = require('express');

const countStudents = require('./3-read_file_async');

const app = express();

const PORT = 1245;
const DATABASE_FILE = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const originalLog = console.log;
  let output = 'This is the list of our students\n';

  console.log = (msg) => {
    output += `${msg}\n`;
  };

  countStudents(DATABASE_FILE)
    .then(() => {
      console.log = originalLog;
      res.set('Content-Type', 'text/plain');
      res.send(output.trim());
    })
    .catch((error) => {
      console.log = originalLog;
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(PORT);

module.exports = app;
