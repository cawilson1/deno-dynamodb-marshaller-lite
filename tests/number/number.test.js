import { Testing } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import {
  numberJson,
  numberDDB,
  multiNumberJSON,
  multiNumberDDB,
} from "./numberSamples.js";

const { assertEquals } = Testing;

Deno.test("Call marshall() on json with a number value type", () => {
  assertEquals(marshall(numberJson), numberDDB);
  assertEquals(marshall(multiNumberJSON), multiNumberDDB);
});

Deno.test("Call ummarshall() on json with a number value type", () => {
  assertEquals(unmarshall(numberDDB), numberJson);
  assertEquals(unmarshall(multiNumberDDB), multiNumberJSON);
});
