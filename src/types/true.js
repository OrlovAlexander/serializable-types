/* @flow */
import type { TypeDef } from "../TypeDef";
const decorateTypeDef = require("../decorateTypeDef");

module.exports = decorateTypeDef(
  ({
    description: "true",
    serializedDescription: '{ $type: "boolean", $value: true }',
    check(val) {
      return val === true;
    },
    serialize(bool) {
      return { $type: "boolean", $value: bool };
    },
    checkSerialized(serialized) {
      return serialized.$type === "boolean" && serialized.$value === true;
    },
    deserialize(serialized) {
      return serialized.$value;
    },
  }: TypeDef<true>)
);
