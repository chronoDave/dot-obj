export default (object: Record<string, unknown>, path: string): any => {
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
