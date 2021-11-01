import { Testing } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import {
  booleanJson,
  booleanDDB,
  multiBooleanJSON,
  multiBooleanDDB,
} from "./booleanSamples.js";

const { assertEquals } = Testing;

Deno.test("Call marshall() on json with a boolean value type", () => {
  assertEquals(marshall(booleanJson), booleanDDB);
  assertEquals(marshall(multiBooleanJSON), multiBooleanDDB);
});

Deno.test("Call ummarshall() on json with a boolean value type", () => {
  assertEquals(unmarshall(booleanDDB), booleanJson);
  assertEquals(unmarshall(multiBooleanDDB), multiBooleanJSON);
});
