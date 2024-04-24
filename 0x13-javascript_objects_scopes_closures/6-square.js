#!/usr/bin/node

//Create an instance method called charPrint(c) that prints the rectangle using the character c

const OldSquare = require('./5-square');

module.exports = class Square extends OldSquare {
  constructor (size) {
    super(size, size);
  }

  double () {
    super.double();
  }

  charPrint (c = 'X') {
    super.print(c);
  }
};
