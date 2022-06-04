"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndefinedAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function UndefinedAssert(input) {
    if (ts_checkers_1.Is.Not.Undefined(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.UndefinedAssert = UndefinedAssert;
