import { R } from "./deps.js";
import { _throw } from "./utils/_throw.js";

const { map, keys, prop } = R;

const typeOf = (arg) => typeof arg;

function marshallBranch(val) {
  const type = typeOf(val);
  if (type === "string") return marshallString(val);
  else if (type === "boolean") return marshallBoolean(val);
  else if (type === "number") return marshallNumber(val);
}

function unmarshallBranch(val) {
  const attrName = keys(val)?.[0]; //There should be exactly one key
  if (!attrName)
    _throw(
      `There was no attribute provided from the DynamoDB JSON. ${JSON.stringify(
        val
      )}`
    );
  const validAttributes = ["S", "BOOL", "N"];
  if (!validAttributes.includes(attrName))
    _throw(
      `he attribute was not one of the following: ${JSON.stringify(
        validAttributes
      )}`
    );
  return prop(attrName)(val);
}

export const marshall = map(marshallBranch);
export const unmarshall = map(unmarshallBranch);

const marshallString = (arg) => ({ S: arg });
const marshallBoolean = (arg) => ({ BOOL: arg });
const marshallNumber = (arg) => ({ N: arg });
