export default class Airport {
  /**
   *
   * @param {String} name
   * @param {String} code 
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
