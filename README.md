# Dynamodb Marshaller Lite

## A simple utility to marshall and unmarshall javascript types to and from DynamoDB types. Works for arbitrarily deeply nested objects

This only works for basic JSON types. string, number, boolean, null, array, and object.
Other dynamodb types, such as binary and set types are ignored.

### What it does:

marshall() converts a plain JS object to the JS format required for DynamoDB. unmarshall() converts a JS object with the format required for DynamoDB object to plain JS. Generally, you would use marshall() to transform a JSON body to DynamoDB format before a request to DynamoDB, and unmarshall() to convert a response from DynamoDB to a plain JS object.  
See https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html form more information on DynamoDB attribute types.

#### marshall()

```javascript
/*deps.js
export {
  marshall,
  unmarshall,
} from "https://x.nest.land/dynamodb-marshaller-lite@YOURVERSIONHERE/mod.js";
*/

import { marshall, unmarshall } from "./deps.js";

const objectJson = {
  foo: { str: "a", num: 1, bool: false },
};
marshall(objectJson); //outputs:
// {
//   foo: {
//     M: { str: { S: "a" }, num: { N: "1" }, bool: { BOOL: false } },
//   },
// }

const deepObjectJson = {
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

marshall(deepObjectJson); //outputs:
// {
//   foo: {
//     M: {
//       str: { S: "a" },
//       num: { N: "1" },
//       bool: { BOOL: false },
//       obj: {
//         M: {
//           str: { S: "a" },
//           num: { N: "1" },
//           bool: { BOOL: false },
//           obj: {
//             M: { str: { S: "a" }, num: { N: "1" }, bool: { BOOL: false } },
//           },
//         },
//       },
//       arr: { L: [{ S: "a" }, { N: "1" }, { BOOL: false }] },
//     },
//   },
// }
```

#### unmarshall()

```javascript
/*deps.js
export {
  marshall,
  unmarshall,
} from "https://x.nest.land/dynamodb-marshaller-lite@YOURVERSIONHERE/mod.js";
*/

import { marshall, unmarshall } from "./deps.js";

const objectDDB = {
  foo: {
    M: { str: { S: "a" }, num: { N: "1" }, bool: { BOOL: false } },
  },
};
unmarshall(objectDDB); //outputs:
// {
//   foo: { str: "a", num: 1, bool: false },
// }

const deepObjectDDB = {
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
unmarshall(deepObjectDDB); //outputs:
// {
//   foo: {
//     str: "a",
//     num: 1,
//     bool: false,
//     obj: {
//       str: "a",
//       num: 1,
//       bool: false,
//       obj: { str: "a", num: 1, bool: false },
//     },
//     arr: ["a", 1, false],
//   },
// }
```

#### Usage with aws_api:

```javascript
/*deps.js
export * as AWS from "https://deno.land/x/aws_api/client/mod.ts";
export * as DynamoDBService from "https://deno.land/x/aws_api@v0.5.0/services/dynamodb/mod.ts";
export * as dotenv from "https://deno.land/x/dotenv/mod.ts";
*/

import { AWS, DynamoDBService, dotenv } from "./deps.js";
import { deepObjectJson } from "./someSampleFileExportingAnObject.js";
const { ApiFactory } = AWS;
const { DynamoDB } = DynamoDBService;
const { config } = dotenv;

const { awsAccessKeyId, awsSecretKey, region, tableName, pk, sk } = config();

const ddb = new ApiFactory({
  credentials: {
    awsAccessKeyId,
    awsSecretKey,
    region,
  },
}).makeNew(DynamoDB);

//putItem example
ddb
  .putItem({
    TableName: tableName,
    Item: marshall({
      ...deepObjectJson,
      pk,
      sk,
    }),
  })
  .then(console.log)
  .catch(console.log);

//getItem example
ddb
  .getItem({
    TableName: tableName,
    Key: marshall({ pk, sk }),
  })
  .then((response) => console.log(unmarshall(response.Item)))
  .catch(console.log);
```

To test, run `deno test --allow-read --allow-env --allow-net`
