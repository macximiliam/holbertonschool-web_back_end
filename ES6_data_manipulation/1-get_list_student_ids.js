/**
 * Returns the sum of all student IDs.
 * @param {Array} students - The list of student objects.
 * @returns {Number} The total sum of all IDs.
 */
export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
