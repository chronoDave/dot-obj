export type NestedObject = { [key: string]: unknown };

export type Validator = (entries: [string, unknown]) => boolean;
