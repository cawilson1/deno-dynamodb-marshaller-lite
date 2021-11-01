import { Testing } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import {
  arrayJson,
  arrayDDB,
  deepArrayDDB,
  deepArrayJson,
} from "./arraySamples.js";

const { assertEquals } = Testing;

Deno.test("Call marshall() on json with a array value type", () => {
  assertEquals(marshall(arrayJson), arrayDDB);
  assertEquals(marshall(deepArrayJson), deepArrayDDB);
});

Deno.test("Call ummarshall() on json with a array value type", () => {
  assertEquals(unmarshall(arrayDDB), arrayJson);
  assertEquals(unmarshall(deepArrayDDB), deepArrayJson);
});
