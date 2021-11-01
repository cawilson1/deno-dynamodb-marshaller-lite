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
  empStr: "",
  numStr: "8.3",
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
  empStr: {
    S: "",
  },
  numStr: {
    S: "8.3",
  },
};
