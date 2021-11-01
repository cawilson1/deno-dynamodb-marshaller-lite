export const objectJson = {
  foo: { str: "a", num: 1, bool: false },
};

export const objectDDB = {
  foo: {
    M: { str: { S: "a" }, num: { N: "1" }, bool: { BOOL: false } },
  },
};

export const deepObjectJson = {
  foo: {
    str: "a",
    num: 1,
    bool: false,
    obj: {
      str: "a",
      num: 1,
      bool: false,
      obj: { str: "a", num: 1, bool: false },
    },
    arr: ["a", 1, false],
  },
};

export const deepObjectDDB = {
  foo: {
    M: {
      str: { S: "a" },
      num: { N: "1" },
      bool: { BOOL: false },
      obj: {
        M: {
          str: { S: "a" },
          num: { N: "1" },
          bool: { BOOL: false },
          obj: {
            M: { str: { S: "a" }, num: { N: "1" }, bool: { BOOL: false } },
          },
        },
      },
      arr: { L: [{ S: "a" }, { N: "1" }, { BOOL: false }] },
    },
  },
};
