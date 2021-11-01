export const objectJson = {
  foo: { str: "a", num: 1, bool: false },
};

export const objectDDB = {
  foo: {
    M: { str: { S: "a" }, num: { N: 1 }, bool: { BOOL: false } },
  },
};

// export const multiObjectJSON = {
//   foo: true,
//   bar: false,
//   baz: false,
// };

// export const multiObjectDDB = {
//   foo: {
//     BOOL: true,
//   },
//   bar: {
//     BOOL: false,
//   },
//   baz: {
//     BOOL: false,
//   },
// };
