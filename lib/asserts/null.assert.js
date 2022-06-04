"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function NullAssert(input) {
    if (ts_checkers_1.Is.Not.Null(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.NullAssert = NullAssert;
