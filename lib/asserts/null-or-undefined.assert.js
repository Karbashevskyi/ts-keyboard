"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function NullOrUndefinedAssert(input) {
    if (ts_checkers_1.Is.Not.NullOrUndefined(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.NullOrUndefinedAssert = NullOrUndefinedAssert;
