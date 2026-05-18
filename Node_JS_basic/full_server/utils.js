import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const firstnameIndex = headers.indexOf('firstname');

    const result = {};

    lines.slice(1).forEach((line) => {
      const cols = line.split(',');
      const field = cols[fieldIndex];
      const firstname = cols[firstnameIndex];

      if (field && firstname) {
        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      }
    });

    resolve(result);
  });
});

export default readDatabase;
