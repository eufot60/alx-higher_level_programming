#!/usr/bin/node
// Write a class Square that defines a square and inherits from Square of 5-square.js:

const Rectangle = require('./5-square.js');

module.exports = class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c === undefined) { c = 'X'; }
    const array = [];
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        array.push(c);
      }
      console.log(array.join(''));
      array.length = 0;
    }
  }
};
