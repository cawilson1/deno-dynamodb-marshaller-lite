import { Testing } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import {
  stringJson,
  stringDDB,
  multiStringJSON,
  multiStringDDB,
} from "./stringSamples.js";

const { assertEquals } = Testing;

Deno.test("Call marshall() on json with a string value type", () => {
  assertEquals(marshall(stringJson), stringDDB);
  assertEquals(marshall(multiStringJSON), multiStringDDB);
});

Deno.test("Call ummarshall() on json with a string value type", () => {
  assertEquals(unmarshall(stringDDB), stringJson);
  assertEquals(unmarshall(multiStringDDB), multiStringJSON);
});
