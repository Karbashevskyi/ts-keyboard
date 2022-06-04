import { Is } from 'ts-checkers';

/**
 *
 * @param input type is any
 */
export function SymbolAssert(input: any): asserts input is symbol {
  if (Is.Not.Symbol(input)) {
    throw new TypeError('Type of argument is not correct.');
  }
}
