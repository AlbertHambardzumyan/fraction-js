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

The library provides the following API:

* [constructor(...)](#constructor)
* [add(...)](#add)
* [subtract(...)](#subtract)
* [multiply(...)](#multiply)
* [divide(...)](#divide)
* [inverse()](#inverse)
* [clone()](#clone)
* [copy(...)](#copy)
* [equals(...)](#equals)
* [value()](#value)
* [toString()](#tostring)
* [gcd()](#gcd)
* [Fraction.isFraction(...)](#value)

# Installation

```shell
 npm install @mathematics/fraction
```

# API ✍

### constructor

```javascript
 const Fraction = require('@mathematics/fraction')

// default constructor 
const fraction = new Fraction()  // -> 0/1

// single arg constructor
const fraction = new Fraction(2)  // -> 2/1

// single arg constructor (decimal)
const fraction = new Fraction(0.2)  // -> 1/5

// two args constructor
const fraction = new Fraction(2, 5) // -> 2/5

// two args constructor (decimal)
const fraction = new Fraction(2, 0.5) // -> 4/1

// two args constructor
const fraction = new Fraction(3, 0) // -> throws error

// copy constructor
const fraction = new Fraction(that)
```

### add

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(1, 3)
const that = new Fraction(1, 3)

fraction.add(that)  
```

### subtract

```javascript
 const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(2, 3)
const that = new Fraction(1, 3)

fraction.subtract(that)
```

### multiply

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(3, 4)
const that = new Fraction(1, 6)

fraction.multiply(that)  
```

### divide

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(1, 3)
const that = new Fraction(1, 6)

fraction.divide(that)
```

### inverse

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(2, 7)

const inverse = fraction.inverse()
```

### clone

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(4, 9)

const clone = fraction.clone()
```

### copy

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(4, 9)
const that = new Fraction(1, 4)

fraction.copy(that)
```

### equals

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(4, 5)
const that = new Fraction(3, 5)

const isEqual = fraction.equals(that)
````

### value

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(4, 9)

const value = fraction.value()
```

### toString

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(4, 9)

const string = fraction.toString()
```

### gcd

```javascript
const Fraction = require('@mathematics/fraction')

const fraction = new Fraction(4, 12)

const gcd = fraction.gcd()
```

### Fraction.isFraction

```javascript
const Fraction = require('@mathematics/fraction')

const that = new Fraction(7, 9)

const isFraction = Fraction.isFraction(that)
```
