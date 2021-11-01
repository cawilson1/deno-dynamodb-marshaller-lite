import { Testing } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import {
  arrayJson,
  arrayDDB,
  multiArrayJSON,
  multiArrayDDB,
} from "./arraySamples.js";

const { assertEquals } = Testing;

Deno.test("Call marshall() on json with a array value type", () => {
  assertEquals(marshall(arrayJson), arrayDDB);
  assertEquals(marshall(multiArrayJSON), multiArrayDDB);
});

Deno.test("Call ummarshall() on json with a array value type", () => {
  assertEquals(unmarshall(arrayDDB), arrayJson);
  assertEquals(unmarshall(multiArrayDDB), multiArrayJSON);
});
