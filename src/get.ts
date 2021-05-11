import type { NestedObject } from './types';

export default (object: NestedObject, path: string): unknown => {
  const keys = path.split('.');

  for (let i = 0; i < keys.length; i += 1) {
    try {
      // @ts-ignore
      object = object[keys[i]];
    } catch (err) {
      return object;
    }
  }

  return object;
};
