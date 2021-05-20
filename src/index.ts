export { default as get } from './get';
export { default as set } from './set';
export { default as some } from './some';

export const keys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
export const entries = Object.entries as <T extends object>(obj: T) => Array<[keyof T, T[keyof T]]>;
