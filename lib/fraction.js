class Fraction {
  /**
   * @constructor
   * @param {number|Fraction} [numerator]
   * @param {number} [denominator]
   * @throws {Error} - if the given denominator is zero.
   * @returns {Fraction}
   * @description Default, copy, single arg, basic constructor.
   *  Always keep sign on the numerator. If denominator gets negative value, then shift sign to the numerator.
   */
  constructor(numerator, denominator) {
    // Defaults to 0/1 = 0 if no valid arguments have passed.
    this._numerator = 0
    this._denominator = 1

    // Two numbers are passed.
    if (!isNaN(arguments[0]) && !isNaN(arguments[1])) {
      if (Number(arguments[1] === 0)) {
        throw new Error('Cannot divide by zero.')
      }

      this._numerator = Number(arguments[0])
      this._denominator = Number(arguments[1])

      // shift denominator sign to the numerator.
      if (this._denominator < 0) {
        this._numerator *= -1
        this._denominator *= -1
      }
    }
    // Single number is passed.
    else if (!isNaN(arguments[0])) {
      this._numerator = Number(arguments[0])
    }
    // Instance of Fraction is passed.
    else if (arguments[0] instanceof Fraction) {
      this._numerator = arguments[0]._numerator
      this._denominator = arguments[0]._denominator
    }

    this._handleDecimal()
    this._normalize()
  }

  /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Add.
   */
  add(that) {
    Fraction._validateFractionArg(that)

    this._numerator = this._numerator * that._denominator + this._denominator * that._numerator
    this._denominator = this._denominator * that._denominator

    return this._normalize()
  }

  /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Subtract.
   */
  subtract(that) {
    Fraction._validateFractionArg(that)

    this._numerator = this._numerator * that._denominator - this._denominator * that._numerator
    this._denominator = this._denominator * that._denominator

    return this._normalize()
  }

  /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Multiply.
   */
  multiply(that) {
    Fraction._validateFractionArg(that)

    this._numerator *= that._numerator
    this._denominator *= that._denominator

    return this._normalize()
  }

  /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Divide.
   */
  divide(that) {
    Fraction._validateFractionArg(that)

    return this.multiply(that.inverse())
  }

  /**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Inverse.
   *  Keep the sign on numerator.
   */
  inverse() {
    let sign = 1
    if (this._numerator < 0) {
      sign = -1
    }

    return new Fraction(sign * this._denominator, sign * this._numerator)
  }

  /**
   * @public
   * @returns {Fraction} - New Fraction instance.
   * @description Clone.
   */
  clone() {
    return new Fraction(this)
  }

  /**
   * @public
   * @param {Fraction} that
   * @returns {Fraction}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Copy the values from the given Fraction.
   */
  copy(that) {
    Fraction._validateFractionArg(that)

    this._numerator = that._numerator
    this._denominator = that._denominator

    return this
  }

  /**
   * @public
   * @param {Fraction} that
   * @returns {boolean}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Checks whether the given Fraction is equal or not.
   */
  equals(that) {
    Fraction._validateFractionArg(that)

    return this._numerator === that._numerator && this._denominator === that._denominator
  }

  /**
   * @public
   * @returns {number}
   * @description Get the value.
   */
  value() {
    return this._numerator / this._denominator
  }

  /**
   * @public
   * @returns {string}
   * @description Convert to string.
   */
  toString() {
    return this._numerator + '/' + this._denominator
  }

  /**
   * @public
   * @returns {number}
   * @description Compute gcd (Euclidean algorithm).
   *  Compute based on absolute values to handle negative numbers as well.
   */
  gcd() {
    let a = Math.abs(this._numerator)
    let b = Math.abs(this._denominator)

    if (a === 0) {
      return b
    }

    while (b !== 0) {
      const temp = b
      b = a % b
      a = temp
    }

    return a
  }

  /**
   * @public
   * @param {any} that
   * @returns {boolean}
   * @description Checks whether the given instance is a Fraction instance.
   */
  static isFraction(that) {
    return that instanceof Fraction
  }

  /**
   * @private
   * @returns {void}
   * @description Handle decimal.
   */
  _handleDecimal() {
    if (!Number.isInteger(this._numerator) || !Number.isInteger(this._denominator)) {
      const f1 = Fraction._numberToFraction(this._numerator)
      const f2 = Fraction._numberToFraction(this._denominator)

      const fraction = f1.divide(f2)
      this._numerator = fraction._numerator
      this._denominator = fraction._denominator
    }
  }

  /**
   * @private
   * @returns {Fraction}
   * @description Normalize.
   */
  _normalize() {
    const gcd = this.gcd()

    this._numerator /= gcd
    this._denominator /= gcd

    return this
  }

  /**
   * @private
   * @param {any} that
   * @returns {void}
   * @throws {Error} - if the given argument is not an instance of Fraction.
   * @description Validate Fraction argument.
   */
  static _validateFractionArg(that) {
    if (!Fraction.isFraction(that)) {
      throw new Error('Should be an instance of Fraction.')
    }
  }

  /**
   * @private
   * @param {number} number
   * @returns {Fraction}
   * @description Number to fraction.
   */
  static _numberToFraction(number) {
    const _number = String(number)

    const decimalPointIndex = _number.indexOf('.')

    if (decimalPointIndex !== -1) {
      const whole = _number.substring(0, decimalPointIndex)
      const isNegative = whole.indexOf('-') !== -1
      const remaining = _number.substring(decimalPointIndex + 1, _number.length)
      const nthPlace = Math.pow(10, remaining.length)

      return isNegative
        ? (new Fraction(Number(whole)).subtract(new Fraction(Number(remaining), nthPlace)))
        : (new Fraction(Number(whole)).add(new Fraction(Number(remaining), nthPlace)))
    } else {
      return new Fraction(Number(number))
    }
  }
}

module.exports = Fraction
