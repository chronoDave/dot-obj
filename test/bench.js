const { Suite } = require('benchmark');
const _get = require('lodash.get');
const _set = require('lodash.set');

const { get, set, some } = require('../dist/dotobj');

const { mockObjectNested } = require('./_utils');

const suite = new Suite();
const path = 'objects.c.array.4.0';

console.group('\nBenchmark');
suite
  .add('get', () => get(mockObjectNested, path))
  .add('lodash.get', () => _get(mockObjectNested, path))
  .add('set', () => set(mockObjectNested, path, path))
  .add('lodash.set', () => _set(mockObjectNested, path, path))
  .add('some', () => some(mockObjectNested, ([key]) => key === 'g'))
  .on('cycle', event => console.log(String(event.target)))
  .run();
