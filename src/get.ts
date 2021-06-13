export default <T>(object: Record<string, any>, path: string): T => {
  const keys = path.split('.');

  for (let i = 0; i < keys.length; i += 1) {
    try {
      object = object[keys[i]];
    } catch (err) {
      return object as T;
    }
  }

  return object as T;
};
