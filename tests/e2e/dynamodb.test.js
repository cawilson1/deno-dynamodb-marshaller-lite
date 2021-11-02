import { Testing, AWS, DynamoDBService, dotenv } from "../../dev_deps.js";
import { marshall, unmarshall } from "../../mod.js";
import { deepObjectJson, deepObjectDDB } from "../object/objectSamples.js";

const { assertEquals } = Testing;
const { ApiFactory } = AWS;
const { DynamoDB } = DynamoDBService;
const { config } = dotenv;

/*This is a full end to end test. 
It should run on a real DynamoDB Table with the partition key named pk and the sort key named sk. 
These values should be stored in .env at project root*/

const { awsAccessKeyId, awsSecretKey, region, tableName, pk, sk } = config();
const ddb = new ApiFactory({
  credentials: {
    awsAccessKeyId,
    awsSecretKey,
    region,
  },
}).makeNew(DynamoDB);

Deno.test("Call putItem on a marshalled JSON object", async () => {
  const putResponse = await ddb.putItem({
    TableName: tableName,
    Item: marshall({
      ...deepObjectJson,
      pk,
      sk,
    }),
  });
  assertEquals(putResponse, {});
});

Deno.test("Successfully unmarshall a dynamodb getItem response", async () => {
  const getResponse = await ddb.getItem({
    TableName: tableName,
    Key: marshall({ pk, sk }),
  });

  assertEquals(getResponse.Item, {
    pk: {
      S: pk,
    },
    sk: {
      S: sk,
    },
    ...deepObjectDDB,
  });
});
