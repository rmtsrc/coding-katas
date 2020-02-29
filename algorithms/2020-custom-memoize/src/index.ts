import { MemoizeFunc } from './types';

/**
 * Write a memoize function such that immediately-repeated calls
 * with the same argument return the same result without invoking
 * the underlying function.
 *
 * NOTE: The input function can be assumed to only ever take a single
 * parameter
 *
 * IMPORTANT: Only IMMEDIATELY repeated calls with the same arguments
 * should be cached
 */

export const memoize: MemoizeFunc = inputFunc => {
  let lastInput: string;
  let lastResult: string;

  return input => {
    if (input === lastInput) {
      return lastResult;
    }

    const result = inputFunc(input);
    lastInput = input;
    lastResult = result;

    return result;
  };
};
