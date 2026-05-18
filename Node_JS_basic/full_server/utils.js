import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    
    const lines = data.split('\n');
    const students = {};
    
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i].trim() !== '') {
        const row = lines[i].split(',');
        const firstName = row[0];
        const field = row[3];
        
        if (firstName && field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        }
      }
    }
    resolve(students);
  });
});

export default readDatabase;
