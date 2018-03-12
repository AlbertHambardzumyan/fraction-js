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
 
  * [divide(...)](#divide(...))    

# Installation 
```bash
 npm install @mathematics/fraction
```

# API

### divide(...)
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
   fraction.divide(that);
````
