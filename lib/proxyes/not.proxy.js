"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Not = void 0;
const ts_checkers_1 = require("ts-checkers");
const asserts_1 = require("../asserts");
/**
 * Handler for reverse boolean result.
 */
const NotHandler = {
    apply(target, thisArg, args) {
        try {
            if (ts_checkers_1.Is.Undefined(target(...args))) {
                throw new TypeError('Type of argument is not correct.');
            }
        }
        catch (error) {
            if (!(error instanceof TypeError)) {
                throw error;
            }
        }
    },
};
/**
 *
 * @param object must by object with string key and any value
 * @param item must by object with string key and any value
 */
const reduce = (object, item) => {
    return Object.assign(object, item);
};
/**
 *
 * @param key mu by string
 */
const map = (key) => {
    return { [key]: new Proxy(asserts_1.AllAssertions[key], NotHandler) };
};
/**
 * Init const for reverse result of boolean.
 */
exports.Not = Object.keys(asserts_1.AllAssertions).map(map).reduce(reduce, {});
