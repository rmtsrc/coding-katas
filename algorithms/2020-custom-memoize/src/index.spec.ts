import { memoize } from '.';

let reverseCounter = 0;
const reverse = (input: string) => {
  reverseCounter++;
  return input
    .split('')
    .reverse()
    .join('');
};
const memoizedReverse = memoize(reverse);

let upperCounter = 0;
const upper = (input: string) => {
  upperCounter++;
  return input.toUpperCase();
};
const memoizedUpper = memoize(upper);

describe('Memoize test', () => {
  it('(A) should reverse the input', () => {
    expect(memoizedReverse('foo')).toBe('oof');
  });

  it('(B) should have run the reverse function for new arguments', () => {
    expect(reverseCounter).toBe(1);
  });

  it('(C) should reverse the input', () => {
    expect(memoizedReverse('foo')).toBe('oof');
  });

  it('(D) should not have run the reverse function for same arguments', () => {
    expect(reverseCounter).toBe(1);
  });

  it('(E) should upper-case the input', () => {
    expect(memoizedUpper('foo')).toBe('FOO');
  });

  it('(F) should run the upper function for new arguments', () => {
    expect(upperCounter).toBe(1);
  });

  it('(G) should upper-case the input', () => {
    expect(memoizedUpper('foo')).toBe('FOO');
  });

  it('(H) should not run the upper function for same arguments', () => {
    expect(upperCounter).toBe(1);
  });

  it('(I) should reverse the input', () => {
    expect(memoizedReverse('foo')).toBe('oof');
  });

  it('(J) should not have run the reverse function for same arguments', () => {
    expect(reverseCounter).toBe(1);
  });

  it('(K) should upper-case the input', () => {
    expect(memoizedUpper('bar')).toBe('BAR');
  });

  it('(L) should run the upper function again for new arguments', () => {
    expect(upperCounter).toBe(2);
  });

  it('(M) should upper-case the input', () => {
    expect(memoizedUpper('foo')).toBe('FOO');
  });

  it('(N) should run the upper function again for new arguments', () => {
    expect(upperCounter).toBe(3);
  });
});
