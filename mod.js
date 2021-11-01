import { R } from "./deps.js";
import { _throw } from "./utils/_throw.js";

const { map, includes, keys, prop } = R;

const typeOf = (arg) => typeof arg;

function marshallBranch(val) {
  const type = typeOf(val);
  if (type === "string") return marshallString(val);
  else if (type === "boolean") return marshallBoolean(val);
  else if (type === "number") return marshallNumber(val);
  else if (val === null) return marshallNull(val);
  else if (Array.isArray(val)) return marshallArray(val);
  else if (val instanceof Object) return marshallObject(val);
}

function unmarshallBranch(val) {
  const attrName = keys(val)?.[0]; //There should be exactly one key
  if (!attrName)
    _throw(
      `There was no attribute provided from the DynamoDB JSON. ${JSON.stringify(
        val
      )}`
    );
  const validAttributes = ["S", "BOOL", "N", "NULL", "L", "M"];
  if (!includes(attrName)(validAttributes))
    _throw(
      `he attribute was not one of the following: ${JSON.stringify(
        validAttributes
      )}`
    );
  if (attrName === "NULL") return null;
  if (attrName === "L") return unmarshallArray(val);
  if (attrName === "M") return unmarshallObject(val);
  return prop(attrName)(val);
}

export const marshall = map(marshallBranch);
export const unmarshall = map(unmarshallBranch);

const marshallString = (arg) => ({ S: arg });
const marshallBoolean = (arg) => ({ BOOL: arg });
const marshallNumber = (arg) => ({ N: arg });
const marshallNull = (arg) => ({ NULL: true });
const marshallArray = (arg) => ({ L: marshall(arg) });
const marshallObject = (arg) => ({ M: marshall(arg) });

const unmarshallArray = (arg) => unmarshall(prop("L")(arg));
const unmarshallObject = (arg) => unmarshall(prop("M")(arg));
