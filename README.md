# Dynamodb Marshaller Lite

## A simple utility to marshall and unmarshall javascript types to and from DynamoDB types

This only works for basic JSON types. string, number, boolean, null, array, and object.
Other dynamodb types, such as binary and set types are ignored.

To test, run `deno test --allow-read --allow-env --allow-net`
