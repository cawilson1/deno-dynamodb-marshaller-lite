import { Testing } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import {
  objectJson,
  objectDDB,
  deepObjectDDB,
  deepObjectJson,
} from "./objectSamples.js";

const { assertEquals } = Testing;

Deno.test("Call marshall() on json with a object value type", () => {
  assertEquals(marshall(objectJson), objectDDB);
  assertEquals(marshall(deepObjectJson), deepObjectDDB);
});

Deno.test("Call ummarshall() on json with a object value type", () => {
  assertEquals(unmarshall(objectDDB), objectJson);
  assertEquals(unmarshall(deepObjectDDB), deepObjectJson);
});
