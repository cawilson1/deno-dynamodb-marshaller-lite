import { R } from "./deps.js";
const { map, keys, prop } = R;

export const marshall = map((key) => marshallString(key));
export const unmarshall = map(prop("S"));

const marshallString = (arg) => ({ S: arg });

const getType = () => {};

// const isJSBoolean = () => {};
// const isJSString = () => {};
// const isJSNumber = () => {};
// const isJSArray = () => {};
// const isJSNull = () => {};
// const isJSObject = () => {};

// const isDDBBoolean = () => {};
// const isDDBString = () => {};
// const isDDBNumber = () => {};
// const isDDBArray = () => {};
// const isDDBNull = () => {};
// const isDDBObject = () => {};
