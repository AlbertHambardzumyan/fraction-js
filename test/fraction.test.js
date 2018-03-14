var chai = require('chai')
var expect = chai.expect

var Fraction = require('../lib/fraction')

describe('Fraction', function () {

  describe('Fraction()', function () {
    it('should create Fraction instance with default values.', function () {
      expect((new Fraction()).toString()).to.be.equal('0/1')
    })

    it('should create Fraction instance given two numbers.', function () {
      expect((new Fraction(1, 3)).toString()).to.be.equal('1/3')
    })

    it('should create Fraction instance given two numbers (negative).', function () {
      expect((new Fraction(-1, 3)).toString()).to.be.equal('-1/3')
    })

    it('should create Fraction instance given two numbers (negative denominator).', function () {
      expect((new Fraction(1, -3)).toString()).to.be.equal('-1/3')
    })

    it('should create Fraction instance given two numbers (negative nominator & denominator).', function () {
      expect((new Fraction(-1, -3)).toString()).to.be.equal('1/3')
    })

    it('should create Fraction instance given two numbers & normalize.', function () {
      expect((new Fraction(2, 6)).toString()).to.be.equal('1/3')
    })

    it('should not create Fraction instance given two numbers (denominator is zero).', function () {
      var badConstructor = function () {
        return new Fraction(4, 0)
      }
      expect(badConstructor).to.throw(Error)
    })

    it('should create Fraction instance given single number.', function () {
      expect((new Fraction(2)).toString()).to.be.equal('2/1')
    })

    it('should create Fraction instance given another Fraction instance.', function () {
      var fraction = new Fraction(2, 3)
      expect((new Fraction(fraction)).toString()).to.be.equal('2/3')
    })
  })

  describe('gcd()', function () {
    it('should compute gcd of the Fraction instance.', function () {
      var fraction = new Fraction(2, 7)
      expect(fraction.gcd().toString()).to.be.equal('1')
    })

    it('should compute gcd of the Fraction instance (negative).', function () {
      var fraction = new Fraction(-2, 7)
      expect(fraction.gcd().toString()).to.be.equal('1')
    })
  })

  describe('add()', function () {
    it('should add Fraction instance values.', function () {
      var fraction1 = new Fraction(1, 5)
      var fraction2 = new Fraction(2, 5)

      expect(fraction1.add(fraction2).toString()).to.be.equal('3/5')
    })

    it('should add Fraction instance values (first negative).', function () {
      var fraction1 = new Fraction(-2, 5)
      var fraction2 = new Fraction(1, 5)

      expect(fraction1.add(fraction2).toString()).to.be.equal('-1/5')
    })

    it('should add Fraction instance values (second negative).', function () {
      var fraction1 = new Fraction(2, 5)
      var fraction2 = new Fraction(-1, 5)

      expect(fraction1.add(fraction2).toString()).to.be.equal('1/5')
    })

    it('should add Fraction instance values (first negative & smaller).', function () {
      var fraction1 = new Fraction(-1, 5)
      var fraction2 = new Fraction(2, 5)

      expect(fraction1.add(fraction2).toString()).to.be.equal('1/5')
    })

    it('should add Fraction instance values (second negative & bigger).', function () {
      var fraction1 = new Fraction(1, 5)
      var fraction2 = new Fraction(-2, 5)

      expect(fraction1.add(fraction2).toString()).to.be.equal('-1/5')
    })

    it('should add Fraction instance values & normalize.', function () {
      var fraction1 = new Fraction(1, 4)
      var fraction2 = new Fraction(1, 4)

      expect(fraction1.add(fraction2).toString()).to.be.equal('1/2')
    })

    it('should not pass validation and should throw error.', function () {
      var fraction = new Fraction(3, 4)
      var mock = {_numerator: 'mock-numerator'}

      expect(fraction.equals.bind(mock)).to.throw(Error)
    })
  })

  describe('subtract()', function () {
    it('should add Fraction instance values.', function () {
      var fraction1 = new Fraction(3, 5)
      var fraction2 = new Fraction(2, 5)

      expect(fraction1.subtract(fraction2).toString()).to.be.equal('1/5')
    })

    it('should add Fraction instance values (first negative).', function () {
      var fraction1 = new Fraction(-3, 5)
      var fraction2 = new Fraction(2, 5)

      expect(fraction1.subtract(fraction2).toString()).to.be.equal('-1/1')
    })

    it('should add Fraction instance values (second negative).', function () {
      var fraction1 = new Fraction(3, 5)
      var fraction2 = new Fraction(-2, 5)

      expect(fraction1.subtract(fraction2).toString()).to.be.equal('1/1')
    })

    it('should add Fraction instance values (first negative & smaller).', function () {
      var fraction1 = new Fraction(-2, 5)
      var fraction2 = new Fraction(3, 5)

      expect(fraction1.subtract(fraction2).toString()).to.be.equal('-1/1')
    })

    it('should add Fraction instance values (second negative & bigger).', function () {
      var fraction1 = new Fraction(2, 5)
      var fraction2 = new Fraction(-3, 5)

      expect(fraction1.subtract(fraction2).toString()).to.be.equal('1/1')
    })

    it('should subtract Fraction instance values & normalize.', function () {
      var fraction1 = new Fraction(3, 4)
      var fraction2 = new Fraction(1, 4)

      expect(fraction1.subtract(fraction2).toString()).to.be.equal('1/2')
    })

    it('should not pass validation and should throw error.', function () {
      var fraction = new Fraction(3, 4)
      var mock = {_numerator: 'mock-numerator'}

      expect(fraction.equals.bind(mock)).to.throw(Error)
    })
  })

  describe('multiply()', function () {
    it('should multiply with given Fraction instance values.', function () {
      var fraction1 = new Fraction(3, 4)
      var fraction2 = new Fraction(1, 7)

      expect(fraction1.multiply(fraction2).toString()).to.be.equal('3/28')
    })

    it('should multiply with given Fraction instance values (negative).', function () {
      var fraction1 = new Fraction(-3, 4)
      var fraction2 = new Fraction(1, 7)

      expect(fraction1.multiply(fraction2).toString()).to.be.equal('-3/28')
    })

    it('should multiply with given Fraction instance values (both negative).', function () {
      var fraction1 = new Fraction(-3, 4)
      var fraction2 = new Fraction(-1, 7)

      expect(fraction1.multiply(fraction2).toString()).to.be.equal('3/28')
    })

    it('should multiply with given Fraction instance values & normalize.', function () {
      var fraction1 = new Fraction(3, 5)
      var fraction2 = new Fraction(1, 6)

      expect(fraction1.multiply(fraction2).toString()).to.be.equal('1/10')
    })

    it('should not pass validation and should throw error.', function () {
      var fraction = new Fraction(3, 4)
      var mock = {_numerator: 'mock-numerator'}

      expect(fraction.equals.bind(mock)).to.throw(Error)
    })
  })

  describe('inverse()', function () {
    it('should inverse & return new Fraction instance.', function () {
      var fraction = new Fraction(3, 4)

      expect(fraction.inverse().toString()).to.be.equal('4/3')
      expect(fraction.toString()).to.be.equal('3/4')
    })

    it('should inverse & return new Fraction instance (negative).', function () {
      var fraction = new Fraction(-3, 4)

      expect(fraction.inverse().toString()).to.be.equal('-4/3')
      expect(fraction.toString()).to.be.equal('-3/4')
    })
  })

  describe('divide()', function () {
    it('should divide with given Fraction instance values.', function () {
      var fraction1 = new Fraction(3, 4)
      var fraction2 = new Fraction(2, 7)

      expect(fraction1.divide(fraction2).toString()).to.be.equal('21/8')
    })

    it('should divide with given Fraction instance values (negative).', function () {
      var fraction1 = new Fraction(-3, 4)
      var fraction2 = new Fraction(2, 7)

      expect(fraction1.divide(fraction2).toString()).to.be.equal('-21/8')
    })

    it('should divide with given Fraction instance values (both negative).', function () {
      var fraction1 = new Fraction(-3, 4)
      var fraction2 = new Fraction(-2, 7)

      expect(fraction1.divide(fraction2).toString()).to.be.equal('21/8')
    })

    it('should divide with given Fraction instance values & normalize.', function () {
      var fraction1 = new Fraction(4, 5)
      var fraction2 = new Fraction(2, 4)

      expect(fraction1.divide(fraction2).toString()).to.be.equal('8/5')
    })

    it('should not pass validation and should throw error.', function () {
      var fraction = new Fraction(3, 4)
      var mock = {_numerator: 'mock-numerator'}

      expect(fraction.equals.bind(mock)).to.throw(Error)
    })
  })

  describe('clone()', function () {
    it('should make a clone of Fraction instance.', function () {
      var fraction = new Fraction(1, 4)

      var clone = fraction.clone()
      fraction.add(new Fraction(1, 3))

      expect(clone.toString()).to.be.equal('1/4')
    })
  })

  describe('copy()', function () {
    it('should make a copy of given Fraction instance.', function () {
      var fraction1 = new Fraction(1, 4)
      var fraction2 = new Fraction(3, 4)

      fraction1.copy(fraction2)
      expect(fraction1.toString()).to.be.equal('3/4')
    })

    it('should not pass validation and should throw error.', function () {
      var fraction = new Fraction(3, 4)
      var mock = {_numerator: 'mock-numerator'}

      expect(fraction.equals.bind(mock)).to.throw(Error)
    })
  })

  describe('equals()', function () {
    it('should checks whether the given Fraction is equal or not - should be equal.', function () {
      var fraction1 = new Fraction(1, 4)
      var fraction2 = new Fraction(1, 4)

      expect(fraction1.equals(fraction2)).to.be.equal(true)
    })

    it('should checks whether the given Fraction is equal or not - should not be equal.', function () {
      var fraction1 = new Fraction(3, 4)
      var fraction2 = new Fraction(2, 3)

      expect(fraction1.equals(fraction2)).to.be.equal(false)
    })

    it('should not pass validation and should throw error.', function () {
      var fraction = new Fraction(3, 4)
      var mock = {_numerator: 'mock-numerator'}

      expect(fraction.equals.bind(mock)).to.throw(Error)
    })
  })

  describe('value()', function () {
    it('should get the value of the Fraction - 1 / 3.', function () {
      var fraction = new Fraction(1, 3)

      expect(fraction.value()).to.be.equal(1 / 3)
    })

    it('should get the value of the Fraction - 6 / 7.', function () {
      var fraction = new Fraction(6, 7)

      expect(fraction.value()).to.be.equal(6 / 7)
    })
  })

  describe('Fraction.isFraction()', function () {
    it('should be instance of Fraction.', function () {
      var fraction = new Fraction(1, 3)

      expect(Fraction.isFraction(fraction)).to.be.equal(true)
    })

    it('should not be instance of Fraction.', function () {
      var mock = {_numerator: 'mock-numerator'}

      expect(Fraction.isFraction(mock)).to.be.equal(false)
    })
  })

  describe('Fraction._validateFractionArg()', function () {
    it('should be instance of Fraction.', function () {
      var fraction = new Fraction(1, 3)

      expect(Fraction._validateFractionArg(fraction)).to.be.equal(undefined)
    })

    it('should not be instance of Fraction.', function () {
      var mock = {_numerator: 'mock-numerator'}

      expect(Fraction._validateFractionArg.bind(mock)).to.throw(Error)
    })
  })
})
