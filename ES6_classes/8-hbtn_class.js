export default class HolbertonClass {
  /**
   *
   * @param {Number} size
   * @param {String} location
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   *
   * @returns {Number}
   */
  valueOf() {
    return this._size;
  }

  /**
   * @returns {String}
   */
  toString() {
    return this._location;
  }
}
