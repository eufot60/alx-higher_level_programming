#!/usr/bin/node
// Write a class Rectangle that defines a rectangle class that takes two arguments w and h.

module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) { [this.width, this.height] = [w, h]; }
  }
};
