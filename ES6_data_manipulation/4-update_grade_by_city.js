/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Array} students - The list of student objects.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - Array of objects containing studentId and grade.
 * @returns {Array} A list of students with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object for the current student
      const gradeItem = newGrades.find((item) => item.studentId === student.id);

      return {
        ...student,
        // If gradeItem exists, use its grade; otherwise, use 'N/A'
        grade: gradeItem ? gradeItem.grade : 'N/A',
      };
    });
}
