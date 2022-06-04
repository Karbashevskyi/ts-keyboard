"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyboard = void 0;
const ts_keycode_1 = require("ts-keycode");
const index_enum_1 = require("ts-keycode/lib/enums/index.enum");
function keyboard($event, configuration) {
    var _a, _b, _c, _d, _e, _f;
    const cancel = () => {
        $event.preventDefault();
        return false;
    };
    let notAllowed = true;
    if (($event === null || $event === void 0 ? void 0 : $event.metaKey) || $event.ctrlKey) {
        notAllowed = !((_b = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.allow) === null || _a === void 0 ? void 0 : _a.commands) !== null && _b !== void 0 ? _b : true);
    }
    else {
        const key = (_c = $event === null || $event === void 0 ? void 0 : $event.which) !== null && _c !== void 0 ? _c : $event === null || $event === void 0 ? void 0 : $event.keyCode;
        const allow = configuration === null || configuration === void 0 ? void 0 : configuration.allow;
        if (allow) {
            const target = $event === null || $event === void 0 ? void 0 : $event.target;
            const max = (_e = (_d = allow === null || allow === void 0 ? void 0 : allow.max) !== null && _d !== void 0 ? _d : target === null || target === void 0 ? void 0 : target.max) !== null && _e !== void 0 ? _e : 0;
            if (max > 0) {
                if (max <= ((_f = target.value) === null || _f === void 0 ? void 0 : _f.length)) {
                    return cancel();
                }
            }
            Object.keys(allow).forEach((keyName) => {
                var _a, _b, _c, _d, _e, _f;
                if (allow[keyName]) {
                    if ((_a = ts_keycode_1.keycodeSegments[keyName]) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(index_enum_1.KeycodeEnum[key])) {
                        if (($event === null || $event === void 0 ? void 0 : $event.shiftKey) || $event.getModifierState('CapsLock')) {
                            if (((_b = allow === null || allow === void 0 ? void 0 : allow.shift) !== null && _b !== void 0 ? _b : true) ||
                                ((_d = (_c = allow[keyName]) === null || _c === void 0 ? void 0 : _c.shift) !== null && _d !== void 0 ? _d : true)) {
                                if ((_f = (_e = allow[keyName]) === null || _e === void 0 ? void 0 : _e.shift) !== null && _f !== void 0 ? _f : true) {
                                    notAllowed = false;
                                }
                            }
                        }
                        else {
                            notAllowed = false;
                        }
                    }
                }
            });
        }
    }
    if (notAllowed) {
        return cancel();
    }
    return true;
}
exports.keyboard = keyboard;
;
