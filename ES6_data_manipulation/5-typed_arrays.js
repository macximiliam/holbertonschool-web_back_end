/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The index where the value should be placed.
 * @param {Number} value - The Int8 value to store.
 * @returns {DataView} A DataView of the created buffer.
 * @throws {Error} If the position is outside the range of the buffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setInt8(position, value);

  return view;
}
