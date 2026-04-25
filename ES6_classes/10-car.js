export default class Car {
  /**
   *
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  /**
   *
   * @returns {Object}
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}