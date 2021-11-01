export const arrayJson = {
  foo: ["a", 1, false],
};

export const arrayDDB = {
  foo: {
    L: [{ S: "a" }, { N: 1 }, { BOOL: false }],
  },
};

// export const multiArrayJSON = {
//   foo: true,
//   bar: false,
//   baz: false,
// };

// export const multiArrayDDB = {
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
