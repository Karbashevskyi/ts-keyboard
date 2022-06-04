"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringAssert = void 0;
const ts_checkers_1 = require("ts-checkers");
/**
 *
 * @param input type is any
 */
function StringAssert(input) {
    if (ts_checkers_1.Is.Not.String(input)) {
        throw new TypeError('Type of argument is not correct.');
    }
}
exports.StringAssert = StringAssert;
