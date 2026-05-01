/**
 * Returns an array of ids from a list of objects.
 * @param {Array} listStudents - The list of student objects.
 * @returns {Array} An array of ids or an empty array if input is not an array.
 */
export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  return listStudents.map((student) => student.id);
}
