/**
 * Returns an array of students located in a specific city.
 * @param {Array} students - The list of student objects.
 * @param {String} city - The city to filter by.
 * @returns {Array} An array of objects belonging to the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === city);
}
