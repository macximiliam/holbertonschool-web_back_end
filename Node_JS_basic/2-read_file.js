const fs = require('fs');

/**
 * Counts the students in a CSV file.
 * @param {String} path - The path to the dataset.
 */

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8').trim();

        const lines = data.split('\n').filter((line) => line.length > 0);

        console.log(`Number of students: ${lines.length - 1}`);

        const fields = {};

        for (let i = 1; i < lines.length; i += 1) {
            const studentData = lines[i].split(',');
            const firstName = studentData[0];
            const field = studentData[3];

            if (!fields[field]) {
                fields [field] = [];
            }

            fields[field].push(firstName);
        }

        for (const field in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, field)) {
                const list = fields[field];
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
        }
    } catch (error) {

    throw new Error('Cannot load the database')
    }
}

module.exports = countStudents;
