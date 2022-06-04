"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllAssertions = void 0;
const array_assert_1 = require("./array.assert");
const boolean_assert_1 = require("./boolean.assert");
const null_or_undefined_assert_1 = require("./null-or-undefined.assert");
const number_assert_1 = require("./number.assert");
const object_assert_1 = require("./object.assert");
const string_assert_1 = require("./string.assert");
const symbol_assert_1 = require("./symbol.assert");
const bigint_assert_1 = require("./bigint.assert");
const undefined_assert_1 = require("./undefined.assert");
const null_assert_1 = require("./null.assert");
const function_assert_1 = require("./function.assert");
exports.AllAssertions = {
    Array: array_assert_1.ArrayAssert,
    BigInt: bigint_assert_1.BigIntAssert,
    Boolean: boolean_assert_1.BooleanAssert,
    Function: function_assert_1.FunctionAssert,
    Null: null_assert_1.NullAssert,
    NullOrUndefined: null_or_undefined_assert_1.NullOrUndefinedAssert,
    Number: number_assert_1.NumberAssert,
    Object: object_assert_1.ObjectAssert,
    String: string_assert_1.StringAssert,
    Symbol: symbol_assert_1.SymbolAssert,
    Undefined: undefined_assert_1.UndefinedAssert,
};
