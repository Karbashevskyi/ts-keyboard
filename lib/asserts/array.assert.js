"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function ArrayAssert(input) {
    if (ts_checkers_1.Is.Not.Array(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.ArrayAssert = ArrayAssert;
