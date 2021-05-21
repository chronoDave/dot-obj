const test = require('tape');

const { some } = require('..');

test('[some] should return true if object has key or value, at any depth', t => {
  t.true(some({ a: 1 }, ([key]) => key === 'a'));
  t.true(some({ a: 1 }, ([,value]) => value === 1));
  t.true(some({ a: { b: 1 } }, ([key]) => key === 'b'));
  t.true(some({ a: { b: 1 } }, ([,value]) => value === 1));
  t.true(some({ a: { b: [{ c: 1 }] } }, ([key]) => key === 'c'));
  t.true(some({ a: { b: [{ c: 1 }] } }, ([,value]) => value === 1));

  t.end();
});

test('[some] should return false if object does not have key or value, at any depth', t => {
  t.false(some({ a: 1 }, ([key]) => key === 'b'));
  t.false(some({ a: 1 }, ([,value]) => value === 2));
  t.false(some({ a: { b: 1 } }, ([key]) => key === 'c'));
  t.false(some({ a: { b: 1 } }, ([,value]) => value === 2));
  t.false(some({ a: { b: [{ c: 1 }] } }, ([key]) => key === 'd'));
  t.false(some({ a: { b: [{ c: 1 }] } }, ([,value]) => value === 2));

  t.end();
});
