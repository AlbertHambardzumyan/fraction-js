'use strict'

/**
 *
 * @constructor
 * @param {number | Fraction} [numerator]
 * @param {number} [denominator]
 * @returns {Fraction}
 */
function Fraction (numerator, denominator) {
  // Defaults to 0/1 = 0 if no valid arguments have passed.
  this._numerator = 0
  this._denominator = 1

  // Two numbers are passed.
  if (!isNaN(arguments[0]) && !isNaN(arguments[1])) {
    this._numerator = Number(arguments[0])
    this._denominator = Number(arguments[1])
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

  this.normalize()
}

/**
 * @returns {number}
 * @description Compute gcd (Euclidean algorithm).
 *  Compute based on absolute values to handle negative numbers as well.
 */
Fraction.prototype.gcd = function () {
  var a = Math.abs(this._numerator)
  var b = Math.abs(this._denominator)

  if (a === 0) {
    return b
  }

  while (b !== 0) {
    a > b
      ? a -= b
      : b -= a
  }

  return a
}

/**
 * @returns {Fraction}
 * @description Normalize.
 */
Fraction.prototype.normalize = function () {
  var gcd = this.gcd()

  this._numerator /= gcd
  this._denominator /= gcd

  return this
}

/**
 * @param {Fraction} that
 * @throws {Error} - if the given argument is not instance of Fraction.
 * @returns {Fraction}
 * @description Add.
 */
Fraction.prototype.add = function (that) {
  Fraction._validateFractionArg(that)

  this._numerator = this._numerator * that._denominator + this._denominator * that._numerator
  this._denominator = this._denominator * that._denominator

  return this.normalize()
}

/**
 * @param {Fraction} that
 * @throws {Error} - if the given argument is not instance of Fraction.
 * @returns {Fraction}
 * @description Subtract.
 */
Fraction.prototype.subtract = function (that) {
  Fraction._validateFractionArg(that)

  this._numerator = this._numerator * that._denominator - this._denominator * that._numerator
  this._denominator = this._denominator * that._denominator

  return this.normalize()
}

/**
 * @param {Fraction} that
 * @throws {Error} - if the given argument is not instance of Fraction.
 * @returns {Fraction}
 * @description Multiply.
 */
Fraction.prototype.multiply = function (that) {
  Fraction._validateFractionArg(that)

  this._numerator *= that._numerator
  this._denominator *= that._denominator

  return this.normalize()
}

/**
 * @returns {Fraction} - New Fraction instance.
 * @description Inverse.
 *  Keep the sign on numerator.
 */
Fraction.prototype.inverse = function () {
  var sign = 1
  if (this._numerator < 0) {
    sign = -1
  }

  return new Fraction(sign * this._denominator, sign * this._numerator)
}

/**
 * @param {Fraction} that
 * @throws {Error} - if the given argument is not instance of Fraction.
 * @returns {Fraction}
 * @description Divide.
 */
Fraction.prototype.divide = function (that) {
  Fraction._validateFractionArg(that)

  return this.multiply(that.inverse())
}

/**
 * @returns {string}
 * @description Convert to string.
 */
Fraction.prototype.toString = function () {
  return this._numerator + '/' + this._denominator
}

/**
 * @returns {Fraction}
 * @description Make a new copy.
 */
Fraction.prototype.clone = function () {
  return new Fraction(this)
}

/**
 * @param {Fraction} that
 * @throws {Error} - if the given argument is not instance of Fraction.
 * @returns {Fraction}
 * @description Copy the values from given Fraction.
 */
Fraction.prototype.copy = function (that) {
  Fraction._validateFractionArg(that)

  this._numerator = that._numerator
  this._denominator = that._denominator

  return this
}

/**
 * @param {Fraction} that
 * @throws {Error} - if the given argument is not instance of Fraction.
 * @returns {boolean}
 * @description Checks whether the given Fraction is equal or not.
 */
Fraction.prototype.equals = function (that) {
  Fraction._validateFractionArg(that)

  return this._numerator === that._numerator && this._denominator === that._denominator
}

/**
 * @returns {number}
 * @description Get the value.
 */
Fraction.prototype.value = function () {
  return this._numerator / this._denominator
}

/**
 * @param {Fraction | Object } that
 * @returns {boolean}
 * @description Checks whether the given instance is a Fraction instance.
 */
Fraction.isFraction = function (that) {
  return that instanceof Fraction
}

/**
 * @param {Fraction | Object } that
 * @throws {Error} - if the given argument is not instance of Fraction.
 * @returns {boolean}
 * @description Validate Fraction argument. Throw error if arg is not instance of Fraction.
 */
Fraction._validateFractionArg = function (that) {
  if (!Fraction.isFraction(that)) {
    throw new Error('Not instance of Fraction.')
  }
}

module.exports = Fraction
