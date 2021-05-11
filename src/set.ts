export default (object: { [key: string]: unknown }, path: string, value: any) => {
  const ref = object;
  const keys = path.split('.');

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];

    if (key === '__proto__' || key === 'constructor') continue
    if (typeof object[key] !== 'object') object[key] = {};
    if (i === keys.length - 1) object[key] = value;
    // @ts-ignore
    object = object[key];
  }

  return ref;
};
