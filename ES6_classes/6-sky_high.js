import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   *
   * @param {Number} sqft
   * @param {Number} floors
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = val;
  }

  /**
   *
   * @returns {String}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}