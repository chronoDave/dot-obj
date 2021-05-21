const test = require('tape');

const { get } = require('..');

const { mockArray, mockObject, mockObjectNested } = require('./_utils');

test('[get] should return object property', t => {
  t.deepEqual(get(mockObject, 'string'), mockObject.string);
  t.deepEqual(get(mockObject, 'number'), mockObject.number);
  t.deepEqual(get(mockObject, 'boolean'), mockObject.boolean);
  t.deepEqual(get(mockObject, 'null'), mockObject.null);
  t.deepEqual(get(mockObject, 'array'), mockObject.array);

  t.end();
});

test('[get] should not mutate original object property', t => {
  const actual = get(mockObject, 'string');

  t.notDeepEqual(mockObject, actual, 'should not mutate original object');

  t.end();
});

test('[get] should return array property', t => {
  const expected = mockArray[0];
  const actual = get(mockArray, '0');

  t.deepEqual(expected, actual);
  t.notDeepEqual(mockArray, actual, 'should not mutate original array');

  t.end();
});

test('[get] should return nested object property', t => {
  const expected = mockObjectNested.mockObject.array;
  const actual = get(mockObjectNested, 'mockObject.array');

  t.deepEqual(expected, actual);
  t.notDeepEqual(mockObjectNested, actual, 'should not mutate original object');

  t.end();
});

test('[get] should return nested array property', t => {
  const expected = mockArray[4][0];
  const actual = get(mockArray, '4.0');

  t.deepEqual(expected, actual);
  t.notDeepEqual(mockArray, actual, 'should not mutate original array');

  t.end();
});

test('[get] should return complex property', t => {
  const expected = mockObjectNested.objects.c.array[4][0];
  const actual = get(mockObjectNested, 'objects.c.array.4.0');

  t.deepEqual(expected, actual);
  t.notDeepEqual(mockObjectNested, actual, 'should not mutate original object');

  t.end();
});

test('[get] should return last valid property if property does not exist', t => {
  const expected = undefined;
  const actual = get(mockObjectNested, 'objects.c.array.4.4');

  t.deepEqual(expected, actual);
  t.notDeepEqual(mockObjectNested, actual, 'should not mutate original object');

  t.end();
});
