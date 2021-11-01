import { Testing } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import {
  nullJson,
  nullDDB,
  multiNullJSON,
  multiNullDDB,
} from "./nullSamples.js";

const { assertEquals } = Testing;

Deno.test("Call marshall() on json with a null value type", () => {
  assertEquals(marshall(nullJson), nullDDB);
  assertEquals(marshall(multiNullJSON), multiNullDDB);
});

Deno.test("Call ummarshall() on json with a null value type", () => {
  assertEquals(unmarshall(nullDDB), nullJson);
  assertEquals(unmarshall(multiNullDDB), multiNullJSON);
});
