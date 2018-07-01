/* @flow */
import type { TypeDef } from "../TypeDef";
const decorateTypeDef = require("../decorateTypeDef");

module.exports = decorateTypeDef(
  ({
    description: "false",
    serializedDescription: '{ $type: "boolean", $value: false }',
    check(val) {
      return val === false;
    },
    serialize(bool) {
      return { $type: "boolean", $value: bool };
    },
    checkSerialized(serialized) {
      return serialized.$type === "boolean" && serialized.$value === false;
    },
    deserialize(serialized) {
      return serialized.$value;
    },
  }: TypeDef<false>)
);
