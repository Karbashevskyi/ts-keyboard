"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asserts = void 0;
const asserts_1 = require("./asserts");
const not_proxy_1 = require("./proxyes/not.proxy");
exports.Asserts = Object.assign(Object.assign({}, asserts_1.AllAssertions), { Not: not_proxy_1.Not });
