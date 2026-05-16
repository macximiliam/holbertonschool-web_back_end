const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      if (data) {
        const lines = data.trim().split('\n').filter((line) => line.length > 0);

        console.log(`Number of students: ${lines.length - 1}`);

        const fields = {};

        for (let i = 1; i < lines.length; i += 1) {
          const student = lines[i].split(',');
          const firstName = student[0];
          const field = student[3];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const list = fields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
