export const arrayJson = {
  foo: ["a", 1, false],
};

export const arrayDDB = {
  foo: {
    L: [{ S: "a" }, { N: "1" }, { BOOL: false }],
  },
};

export const deepArrayJson = {
  foo: [
    "a",
    1,
    false,
    ["a", 1, false, ["a", 1, false, { str: "a", num: 1, bool: false }]],
    { str: "a", num: 1, bool: false },
  ],
};

export const deepArrayDDB = {
  foo: {
    L: [
      { S: "a" },
      { N: "1" },
      { BOOL: false },
      {
        L: [
          { S: "a" },
          { N: "1" },
          { BOOL: false },
          {
            L: [
              { S: "a" },
              { N: "1" },
              { BOOL: false },
              {
                M: { str: { S: "a" }, num: { N: "1" }, bool: { BOOL: false } },
              },
            ],
          },
        ],
      },
      { M: { str: { S: "a" }, num: { N: "1" }, bool: { BOOL: false } } },
    ],
  },
};
