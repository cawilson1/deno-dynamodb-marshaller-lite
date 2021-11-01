export const nullJson = {
  foo: null,
};

export const nullDDB = {
  foo: {
    NULL: true,
  },
};

export const multiNullJSON = {
  foo: null,
  bar: null,
  baz: "",
};

export const multiNullDDB = {
  foo: {
    NULL: true,
  },
  bar: {
    NULL: true,
  },
  baz: {
    S: "",
  },
};
