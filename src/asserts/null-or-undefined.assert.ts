import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function NullOrUndefinedAssert(input: any): asserts input {
  if (Is.Not.NullOrUndefined(input)) {
    throw new TypeError('Type of argument is not correct.');
  }
}
