const mockArray = [
  'string',
  4,
  true,
  null,
  ['string', 4, true, null]
];

const mockObject = {
  string: 'string',
  number: 4,
  boolean: true,
  null: null,
  array: mockArray
};

const mockObjectNested = {
  mockObject,
  array: [
    mockObject,
    mockObject,
    mockObject
  ],
  objects: {
    a: mockObject,
    b: mockObject,
    c: mockObject
  },
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: true
            }
          }
        }
      }
    }
  }
};

module.exports = {
  mockArray,
  mockObject,
  mockObjectNested
};
