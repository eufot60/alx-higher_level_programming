#!/usr/bin/node

const arg2 = process.argv[2];
const parseNumber = parseInt(arg2);

if (isNAN(parseNumber)) {
  console.log('Not a number');
} else {
  console.log('My number: ${parseNumber}');
}
