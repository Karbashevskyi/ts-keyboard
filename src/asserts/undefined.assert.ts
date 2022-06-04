import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function UndefinedAssert(input: any): asserts input {
  if (Is.Not.Undefined(input)) {
    throw new TypeError('Type of argument is not correct.');
  }
}
