export const stringJson = {
  foo: "bar",
};

export const stringDDB = {
  foo: {
    S: "bar",
  },
};

export const multiStringJSON = {
  foo: "bar",
  bar: "baz",
  baz: "This is another string",
};

export const multiStringDDB = {
  foo: {
    S: "bar",
  },
  bar: {
    S: "baz",
  },
  baz: {
    S: "This is another string",
  },
};
