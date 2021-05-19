export default <T extends Record<string, unknown>>(object: T, fn: (entries: [string, unknown]) => boolean) => {
  const stack = Object.entries(object);

  while (stack.length > 0) {
    const item = stack.pop();

    if (item) {
      if (fn(item)) return true;

      const [, value] = item;
      if (value && typeof value === 'object') {
        const entries = Object.entries(value);
        for (let i = 0; i < entries.length; i += 1) stack.push(entries[i]);
      }
    }
  }

  return false;
};
