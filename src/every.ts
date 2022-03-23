export default (object: Record<string, unknown>, match: (entries: [string, unknown]) => boolean) => {
  const stack = Object.entries(object);

  while (stack.length > 0) {
    const item = stack.pop();

    if (item) {
      if (!match(item)) return false;

      const [, value] = item;
      if (value && typeof value === 'object') {
        Object.entries(value).forEach(entry => stack.push(entry));
      }
    }
  }

  return true;
};
