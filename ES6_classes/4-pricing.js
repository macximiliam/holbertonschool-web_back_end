import Currency from './3-currency.js';

export default class Pricing {
  /**
   *
   * @param {Number} amount
   * @param {Currency} currency
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = val;
  }

  /**
   *
   * @returns {String} amount currency_name (currency_code)
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   *
   * @param {Number} amount 
   * @param {Number} conversionRate
   * @returns {Number}
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}