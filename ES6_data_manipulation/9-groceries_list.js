/**
 * Returns a map of groceries with specific items and quantities.
 * @returns {Map<string, number>} A Map containing grocery items.
 */
export default function groceriesList() {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}
