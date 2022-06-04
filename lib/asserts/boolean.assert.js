"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function BooleanAssert(input) {
    if (ts_checkers_1.Is.Not.Boolean(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.BooleanAssert = BooleanAssert;
