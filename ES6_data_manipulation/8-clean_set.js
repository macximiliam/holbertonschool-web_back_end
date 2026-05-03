/**
 * Returns a string of all set values that start with a specific string,
 * appending only the rest of the string and separating them with '-'.
 * @param {Set} set - The set of strings to process.
 * @param {String} startString - The prefix to filter by.
 * @returns {String} The cleaned string.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
