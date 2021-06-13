const test = require('tape');

const { every } = require('..');

test('[every] should return true if every key or value matches, at any depth', t => {
  t.true(every({ a: 1 }, ([key]) => key === 'a'));
  t.true(every({ a: 1 }, ([,value]) => value === 1));
  t.true(every({ a: { b: 1 } }, ([key]) => typeof key === 'string'));
  t.true(every({ a: { b: {} } }, ([,value]) => typeof value === 'object'));
  t.true(every({ a: { b: [{ c: 1 }] } }, ([key]) => typeof key === 'string'));
  t.true(every({ a: { b: [{ c: [] }] } }, ([,value]) => typeof value === 'object'));

  t.end();
});

test('[every] should return false if object does not match key or value, at any depth', t => {
  t.false(every({ a: 1 }, ([key]) => key === 'b'));
  t.false(every({ a: 1 }, ([,value]) => value === 2));
  t.false(every({ a: { b: 1 } }, ([key]) => key === 'c'));
  t.false(every({ a: { b: 1 } }, ([,value]) => value === 2));
  t.false(every({ a: { b: [{ c: 1 }] } }, ([key]) => key === 'd'));
  t.false(every({ a: { b: [{ c: 1 }] } }, ([,value]) => value === 2));

  t.end();
});
