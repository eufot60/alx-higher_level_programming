#!/us/bin/node

// Creates a squsre class that extends Rectangle class

module.exports = class Square extends require('./4-rectangle.js') {
  constructor (size) {
    super(size, size);
  }
};
