import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function NullAssert(input: any): asserts input {
  if (Is.Not.Null(input)) {
    throw new TypeError('Type of argument is not correct.');
  }
}
