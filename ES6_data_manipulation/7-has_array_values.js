/**
 * Returns a boolean indicating if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array containing values to verify.
 * @returns {Boolean} True if all array elements are in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
