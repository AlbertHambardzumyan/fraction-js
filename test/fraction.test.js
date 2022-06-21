const Fraction = require('../lib/fraction')

describe('Fraction', () => {
  describe('constructor(...)', () => {
    test('should create Fraction instance with default values.', () => {
      const fraction = new Fraction()
      const result = fraction.toString()

      expect(result).toBe('0/1')
    })

    test('should create Fraction instance given two numbers.', () => {
      const fraction = new Fraction(1, 3)
      const result = fraction.toString()

      expect(result).toBe('1/3')
    })

    test('should create Fraction instance given two numbers (special case).', () => {
      const fraction = new Fraction(7324218750000001, 292968750000)
      const result = fraction.toString()

      expect(result).toBe('7324218750000001/292968750000')
    })

    test('should create Fraction instance given two numbers (decimal).', () => {
      const fraction = new Fraction(0.2, 0.4)
      const result = fraction.toString()

      expect(result).toBe('1/2')
    })

    test('should create Fraction instance given two numbers (negative).', () => {
      const fraction = new Fraction(-1, 3)
      const result = fraction.toString()

      expect(result).toBe('-1/3')
    })

    test('should create Fraction instance given two numbers (negative denominator).', () => {
      const fraction = new Fraction(1, -3)
      const result = fraction.toString()

      expect(result).toBe('-1/3')
    })

    test('should create Fraction instance given two numbers (negative nominator & denominator).', () => {
      const fraction = new Fraction(-1, -3)
      const result = fraction.toString()

      expect(result).toBe('1/3')
    })

    test('should create Fraction instance given two numbers & normalize.', () => {
      const fraction = new Fraction(2, 6)
      const result = fraction.toString()

      expect(result).toBe('1/3')
    })

    test('should not create Fraction instance given two numbers (denominator is zero).', () => {
      const result = () => new Fraction(4, 0)

      expect(result).toThrow(Error)
    })

    test('should create Fraction instance given single number.', () => {
      const fraction = new Fraction(2)
      const result = fraction.toString()

      expect(result).toBe('2/1')
    })

    test('should create Fraction instance given single number (decimal).', () => {
      const fraction = new Fraction(0.2)
      const result = fraction.toString()

      expect(result).toBe('1/5')
    })

    test('should create Fraction instance given another Fraction instance.', () => {
      const fraction = new Fraction(2, 3)
      const result = fraction.toString()

      expect(result).toBe('2/3')
    })
  })

  describe('add(...)', () => {
    test('should add Fraction instance values.', () => {
      const fraction = new Fraction(1, 5)
      const that = new Fraction(2, 5)

      fraction.add(that)
      const result = fraction.toString()

      expect(result).toBe('3/5')
    })

    test('should add Fraction instance values (first negative).', () => {
      const fraction = new Fraction(-2, 5)
      const that = new Fraction(1, 5)

      fraction.add(that)
      const result = fraction.toString()

      expect(result).toBe('-1/5')
    })

    test('should add Fraction instance values (second negative).', () => {
      const fraction = new Fraction(2, 5)
      const that = new Fraction(-1, 5)

      fraction.add(that)
      const result = fraction.toString()

      expect(result).toBe('1/5')
    })

    test('should add Fraction instance values (first negative & smaller).', () => {
      const fraction = new Fraction(-1, 5)
      const that = new Fraction(2, 5)

      fraction.add(that)
      const result = fraction.toString()

      expect(result).toBe('1/5')
    })

    test('should add Fraction instance values (second negative & bigger).', () => {
      const fraction = new Fraction(1, 5)
      const that = new Fraction(-2, 5)

      fraction.add(that)
      const result = fraction.toString()

      expect(result).toBe('-1/5')
    })

    test('should add Fraction instance values & normalize.', () => {
      const fraction = new Fraction(1, 4)
      const that = new Fraction(1, 4)

      fraction.add(that)
      const result = fraction.toString()

      expect(result).toBe('1/2')
    })

    test('should not pass validation and should throw error.', () => {
      const fraction = new Fraction(3, 4)
      const object = {_numerator: 'mock-numerator'}

      const result = () => fraction.add(object)

      expect(result).toThrow(Error)
    })
  })

  describe('subtract(...)', () => {
    test('should add Fraction instance values.', () => {
      const fraction = new Fraction(3, 5)
      const that = new Fraction(2, 5)

      fraction.subtract(that)
      const result = fraction.toString()

      expect(result).toBe('1/5')
    })

    test('should add Fraction instance values (first negative).', () => {
      const fraction = new Fraction(-3, 5)
      const that = new Fraction(2, 5)

      fraction.subtract(that)
      const result = fraction.toString()

      expect(result).toBe('-1/1')
    })

    test('should add Fraction instance values (second negative).', () => {
      const fraction = new Fraction(3, 5)
      const that = new Fraction(-2, 5)

      fraction.subtract(that)
      const result = fraction.toString()

      expect(result).toBe('1/1')
    })

    test('should add Fraction instance values (first negative & smaller).', () => {
      const fraction = new Fraction(-2, 5)
      const that = new Fraction(3, 5)

      fraction.subtract(that)
      const result = fraction.toString()

      expect(result).toBe('-1/1')
    })

    test('should add Fraction instance values (second negative & bigger).', () => {
      const fraction = new Fraction(2, 5)
      const that = new Fraction(-3, 5)

      fraction.subtract(that)
      const result = fraction.toString()

      expect(result).toBe('1/1')
    })

    test('should subtract Fraction instance values & normalize.', () => {
      const fraction = new Fraction(3, 4)
      const that = new Fraction(1, 4)

      fraction.subtract(that)
      const result = fraction.toString()

      expect(result).toBe('1/2')
    })

    test('should not pass validation and should throw error.', () => {
      const fraction = new Fraction(3, 4)
      const object = {_numerator: 'mock-numerator'}

      const result = () => fraction.subtract(object)

      expect(result).toThrow(Error)
    })
  })

  describe('multiply(...)', () => {
    test('should multiply with given Fraction instance values.', () => {
      const fraction = new Fraction(3, 4)
      const that = new Fraction(1, 7)

      fraction.multiply(that)
      const result = fraction.toString()

      expect(result).toBe('3/28')
    })

    test('should multiply with given Fraction instance values (negative).', () => {
      const fraction = new Fraction(-3, 4)
      const that = new Fraction(1, 7)

      fraction.multiply(that)
      const result = fraction.toString()

      expect(result).toBe('-3/28')
    })

    test('should multiply with given Fraction instance values (both negative).', () => {
      const fraction = new Fraction(-3, 4)
      const that = new Fraction(-1, 7)

      fraction.multiply(that)
      const result = fraction.toString()

      expect(result).toBe('3/28')
    })

    test('should multiply with given Fraction instance values & normalize.', () => {
      const fraction = new Fraction(3, 5)
      const that = new Fraction(1, 6)

      fraction.multiply(that)
      const result = fraction.toString()

      expect(result).toBe('1/10')
    })

    test('should not pass validation and should throw error.', () => {
      const fraction = new Fraction(3, 4)
      const object = {_numerator: 'mock-numerator'}

      const result = () => fraction.subtract(object)

      expect(result).toThrow(Error)
    })
  })

  describe('divide(...)', () => {
    test('should divide with given Fraction instance values.', () => {
      const fraction = new Fraction(3, 4)
      const that = new Fraction(2, 7)

      fraction.divide(that)
      const result = fraction.toString()

      expect(result).toBe('21/8')
    })

    test('should divide with given Fraction instance values (negative).', () => {
      const fraction = new Fraction(-3, 4)
      const that = new Fraction(2, 7)

      fraction.divide(that)
      const result = fraction.toString()

      expect(result).toBe('-21/8')
    })

    test('should divide with given Fraction instance values (both negative).', () => {
      const fraction = new Fraction(-3, 4)
      const that = new Fraction(-2, 7)

      fraction.divide(that)
      const result = fraction.toString()

      expect(result).toBe('21/8')
    })

    test('should divide with given Fraction instance values & normalize.', () => {
      const fraction = new Fraction(4, 5)
      const that = new Fraction(2, 4)

      fraction.divide(that)
      const result = fraction.toString()

      expect(result).toBe('8/5')
    })

    test('should not pass validation and should throw error.', () => {
      const fraction = new Fraction(3, 4)
      const object = {_numerator: 'mock-numerator'}

      const result = () => fraction.subtract(object)

      expect(result).toThrow(Error)
    })
  })

  describe('inverse()', () => {
    test('should inverse & return new Fraction instance.', () => {
      const fraction = new Fraction(3, 4)
      const inverse = fraction.inverse().toString()

      expect(inverse.toString()).toBe('4/3')
      expect(fraction.toString()).toBe('3/4')
    })

    test('should inverse & return new Fraction instance (negative).', () => {
      const fraction = new Fraction(-3, 4)
      const inverse = fraction.inverse().toString()

      expect(inverse.toString()).toBe('-4/3')
      expect(fraction.toString()).toBe('-3/4')
    })
  })

  describe('clone()', () => {
    test('should make a clone of Fraction instance.', () => {
      const fraction = new Fraction(1, 4)
      const clone = fraction.clone()

      fraction.add(new Fraction(1, 3))

      expect(clone.toString()).toBe('1/4')
    })
  })

  describe('copy()', () => {
    test('should make a copy of given Fraction instance.', () => {
      const fraction = new Fraction(1, 4)
      const that = new Fraction(3, 4)

      fraction.copy(that)

      expect(fraction.toString()).toBe('3/4')
    })

    test('should not pass validation and should throw error.', () => {
      const fraction = new Fraction(3, 4)
      const object = {_numerator: 'mock-numerator'}

      const result = () => fraction.subtract(object)

      expect(result).toThrow(Error)
    })
  })

  describe('equals()', () => {
    test('should checks whether the given Fraction is equal or not - should be equal.', () => {
      const fraction = new Fraction(1, 4)
      const that = new Fraction(1, 4)

      const result = fraction.equals(that)

      expect(result).toBe(true)
    })

    test('should checks whether the given Fraction is equal or not - should not be equal.', () => {
      const fraction = new Fraction(3, 4)
      const that = new Fraction(2, 3)

      const result = fraction.equals(that)

      expect(result).toBe(false)
    })

    test('should not pass validation and should throw error.', () => {
      const fraction = new Fraction(3, 4)
      const object = {_numerator: 'mock-numerator'}

      const result = () => fraction.subtract(object)

      expect(result).toThrow(Error)
    })
  })

  describe('value()', () => {
    test('should get the value of the Fraction - 1 / 3.', () => {
      const fraction = new Fraction(1, 3)

      expect(fraction.value()).toBe(1 / 3)
    })

    test('should get the value of the Fraction - 6 / 7.', () => {
      const fraction = new Fraction(6, 7)

      expect(fraction.value()).toBe(6 / 7)
    })
  })

  describe('toString()', () => {
    test('should get the string of the Fraction - 1 / 3.', () => {
      const fraction = new Fraction(1, 3)

      expect(fraction.toString()).toBe('1/3')
    })
  })

  describe('gcd()', () => {
    test('should compute gcd of the Fraction instance.', () => {
      const fraction = new Fraction(2, 7)
      const result = fraction.gcd().toString()

      expect(result).toBe('1')
    })

    test('should compute gcd of the Fraction instance (negative).', () => {
      const fraction = new Fraction(-2, 7)
      const result = fraction.gcd().toString()

      expect(result).toBe('1')
    })
  })

  describe('Fraction.isFraction()', () => {
    test('should be instance of Fraction.', () => {
      const fraction = new Fraction(1, 3)
      const result = Fraction.isFraction(fraction)

      expect(Fraction.isFraction(fraction)).toBe(true)
    })

    test('should not be instance of Fraction.', () => {
      const object = {_numerator: 'mock-numerator'}
      const result = Fraction.isFraction(object)

      expect(result).toBe(false)
    })
  })

  describe('Fraction._validateFractionArg()', () => {
    test('should be instance of Fraction.', () => {
      const fraction = new Fraction(1, 3)
      const result = Fraction._validateFractionArg(fraction)

      expect(result).toBe(undefined)
    })

    test('should not be instance of Fraction.', function () {
      const object = {_numerator: 'mock-numerator'}
      const result = () => Fraction._validateFractionArg(object)

      expect(result).toThrow(Error)
    })
  })

  describe('Fraction._numberToFraction()', () => {
    test('should be instance of Fraction.', () => {
      const result = Fraction._numberToFraction(12.2)

      expect(result).toBeInstanceOf(Fraction)
      expect(result._numerator).toBe(61)
      expect(result._denominator).toBe(5)
    })
  })
})
