import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function BigIntAssert(input: any): asserts input is BigInt {
  if (Is.Not.BigInt(input)) {
    throw new TypeError('Type of argument is not correct.');
  }
}
