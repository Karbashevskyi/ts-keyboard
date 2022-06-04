"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function NumberAssert(input) {
    if (ts_checkers_1.Is.Not.Number(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.NumberAssert = NumberAssert;
