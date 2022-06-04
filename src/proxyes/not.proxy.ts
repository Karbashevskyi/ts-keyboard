import { Is } from 'ts-checkers';

import { AssertsInterface, AllAssertions } from '../asserts';

/**
 * Handler for reverse boolean result.
 */
const NotHandler: any = {
  apply(target: any, thisArg: any, args: any) {
    try {
      if (Is.Undefined(target(...args))) {
        throw new TypeError('Type of argument is not correct.');
      }
    } catch (error) {
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
const reduce: any = (object: { [p: string]: any }, item: { [p: string]: any }) => {
  return Object.assign(object, item);
};

/**
 *
 * @param key mu by string
 */
const map: any = (key: string) => {
  return { [key]: new Proxy((AllAssertions as any)[key], NotHandler) };
};

/**
 * Init const for reverse result of boolean.
 */
export const Not: AssertsInterface = Object.keys(AllAssertions).map(map).reduce(reduce, {}) as AssertsInterface;
