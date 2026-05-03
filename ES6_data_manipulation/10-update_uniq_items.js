/**
 * Updates the quantity to 100 for all items in a map that have an initial quantity of 1.
 * @param {Map} map - The map of grocery items to update.
 * @returns {Map} The updated map.
 * @throws {Error} "Cannot process" if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
