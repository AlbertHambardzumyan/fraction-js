# fraction-js
[![Build Status](https://travis-ci.org/AlbertHambardzumyan/fraction-js.svg?branch=master)](https://travis-ci.org/AlbertHambardzumyan/fraction-js)
[![npm](https://img.shields.io/npm/v/@mathematics/fraction.svg)](https://www.npmjs.com/package/@mathematics/fraction) 
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/AlbertHambardzumyan/fraction-js/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/AlbertHambardzumyan/fraction-js.svg)](https://github.com/AlbertHambardzumyan/fraction-js/issues)


[![Maintained](https://img.shields.io/badge/maintained-%E2%9C%94-brightgreen.svg)](https://github.com/AlbertHambardzumyan/fraction-js)
[![Known Vulnerabilities](https://snyk.io/test/github/AlbertHambardzumyan/fraction-js/badge.svg)](https://snyk.io/test/github/AlbertHambardzumyan/fraction-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


Fraction library written in JavaScript.

# Description
The Library provides the following API:
  
  * [add(...)](#add)
  * [subtract(...)](#subtract)
  * [multiply(...)](#multiply)
  * [divide(...)](#divide)
  * [inverse(...)](#inverse)
  * [clone(...)](#clone)
  * [copy(...)](#copy)
  * [equals(...)](#equals)
  * [value(...)](#value)
  
  * [Fraction.isFraction(...)](#value)
    
# Installation 
```bash
 npm install @mathematics/fraction
```

# API ✍

### add
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(1, 3)
   let that = new Fraction(1, 3)
  
   /**
    * @param {Fraction} that
    * @throws {Error} - if the given argument is not instance of Fraction.
    * @returns {Fraction}
    * @description Add.
    */
   fraction.add(that)
````

### subtract
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(2, 3)
   let that = new Fraction(1, 3)
  
   /**
    * @param {Fraction} that
    * @throws {Error} - if the given argument is not instance of Fraction.
    * @returns {Fraction}
    * @description Subtract.
    */
   fraction.subtract(that)
````

### multiply
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(3, 4)
   let that = new Fraction(1, 6)
  
   /**
    * @param {Fraction} that
    * @throws {Error} - if the given argument is not instance of Fraction.
    * @returns {Fraction}
    * @description Multiply.
    */
   fraction.multiply(that)
````

### divide
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(1, 3)
   let that = new Fraction(1, 6)
  
   /**
    * @param {Fraction} that
    * @throws {Error} - if the given argument is not instance of Fraction.
    * @returns {Fraction}
    * @description Divide.
    */
   fraction.divide(that)
````

### inverse
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(2, 7)
  
   /**
    * @returns {Fraction} - New Fraction instance.
    * @description Inverse.
    */
   let inverse = fraction.inverse()
````

### clone
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(4, 9)
  
   /**
    * @returns {Fraction} - New Fraction instance.
    * @description Clone.
    */
   let clone = fraction.clone()
````

### copy
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(4, 9)
   let that = new Fraction(1, 4)
  
   /**
    * @param {Fraction} that
    * @throws {Error} - if the given argument is not instance of Fraction.
    * @returns {Fraction}
    * @description Copy the values from the given Fraction.
    */
   fraction.copy(that)
````

### equals
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(4, 5)
   let that = new Fraction(3, 5)
  
   /**
    * @param {Fraction} that
    * @throws {Error} - if the given argument is not instance of Fraction.
    * @returns {boolean}
    * @description Checks whether the given Fraction is equal or not.
    */
   const isEqual = fraction.equals(that)
````

### value
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(4, 9)
  
   /**
    * @returns {number}
    * @description Get the value.
    */
   const value = fraction.value()
````

### Fraction.isFraction
```` javascript
   const Fraction = require('@mathematics/fraction')
   let fraction = new Fraction(7, 9)
  
   /**
    * @param {Fraction | Object } that
    * @returns {boolean}
    * @description Checks whether the given instance is a Fraction instance.
    */
   const isFraction = Fraction.isFraction()
````
