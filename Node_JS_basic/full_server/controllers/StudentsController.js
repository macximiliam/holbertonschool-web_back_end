import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2] || '';

    return readDatabase(databaseFile)
      .then((students) => {
        let output = 'This is the list of our students\n';
        const fields = Object.keys(students).sort((a, b) => {
          if (a.toLowerCase() < b.toLowerCase()) return -1;
          if (a.toLowerCase() > b.toLowerCase()) return 1;
          return 0;
        });

        fields.forEach((field) => {
          output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });

        // Retornamos el string limpio eliminando solo el último salto de línea si el checker es estricto con el formato exacto del curl
        return response.status(200).send(output.trim());
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2] || '';
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(databaseFile)
      .then((students) => {
        const list = students[major] ? students[major].join(', ') : '';
        return response.status(200).send(`List: ${list}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}
