export default class Building {
  /**
   *
   * @param {Number} sqft
   */
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = val;
  }
}
