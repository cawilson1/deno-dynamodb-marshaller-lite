export const booleanJson = {
  foo: true,
};

export const booleanDDB = {
  foo: {
    BOOL: true,
  },
};

export const multiBooleanJSON = {
  foo: true,
  bar: false,
  baz: false,
};

export const multiBooleanDDB = {
  foo: {
    BOOL: true,
  },
  bar: {
    BOOL: false,
  },
  baz: {
    BOOL: false,
  },
};
