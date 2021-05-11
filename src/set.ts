import type { NestedObject } from './types';

export default (object: NestedObject, path: string, value: unknown) => {
  const ref = object;
  const keys = path.split('.');

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    if (key !== '__proto__' && key !== 'constructor') {
      if (typeof object[key] !== 'object') object[key] = {};
      if (i === keys.length - 1) object[key] = value;
      // @ts-ignore
      object = object[key];
    }
  }

  return ref;
};
