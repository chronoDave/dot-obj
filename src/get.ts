export default <T extends Record<string, any>>(object: T, path: string): unknown => {
  const keys = path.split('.');

  for (let i = 0; i < keys.length; i += 1) {
    try {
      object = object[keys[i]];
    } catch (err) {
      return object;
    }
  }

  return object;
};
