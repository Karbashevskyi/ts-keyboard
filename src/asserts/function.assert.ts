import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function FunctionAssert(input: any): asserts input is object {
  if (Is.Not.Function(input)) {
    throw new TypeError('Type of argument is not correct.');
  }
}
