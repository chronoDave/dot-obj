const test = require('tape');

const { set } = require('../dist/dotobj');

const { mockObject, mockObjectNested, mockArray } = require('./_utils');

test('[set] should set object property', t => {
  const actual = set(mockObject, 'array', mockArray);

  t.equal(actual.array, mockArray);

  t.end();
});

test('[set] should create new properties if they do not exist', t => {
  const actual = set(mockObject, 'newKey', mockArray);

  t.deepEqual(actual.newKey, mockArray);

  t.end();
});

test('[set] should not remove other properties', t => {
  const actual = set(mockObjectNested, 'array.0', mockArray);

  t.deepEqual(actual.array[0], mockArray);

  t.end();
});
