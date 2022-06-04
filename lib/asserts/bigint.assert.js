"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function BigIntAssert(input) {
    if (ts_checkers_1.Is.Not.BigInt(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.BigIntAssert = BigIntAssert;
