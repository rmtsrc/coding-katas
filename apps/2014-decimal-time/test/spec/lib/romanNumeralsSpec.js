/*global define*/

define([
    'lib/romanNumerals'
], function () {
    'use strict';

    describe('lib', function () {
        describe('romanNumerals', function () {
            describe('Number.toRoman', function () {
                it('should transforms 1 to I', function () {
                    expect(Number(1).toRoman()).toBe('I');
                });
                it('should transforms 2 to II', function () {
                    expect(Number(2).toRoman()).toBe('II');
                });
                it('should transforms 3 to III', function () {
                    expect(Number(3).toRoman()).toBe('III');
                });
                it('should transforms 4 to IV', function () {
                    expect(Number(4).toRoman()).toBe('IV');
                });
                it('should transforms 5 to V', function () {
                    expect(Number(5).toRoman()).toBe('V');
                });
                it('should transforms 6 to VI', function () {
                    expect(Number(6).toRoman()).toBe('VI');
                });
                it('should transforms 7 to VII', function () {
                    expect(Number(7).toRoman()).toBe('VII');
                });
                it('should transforms 8 to VIII', function () {
                    expect(Number(8).toRoman()).toBe('VIII');
                });
                it('should transforms 9 to IX', function () {
                    expect(Number(9).toRoman()).toBe('IX');
                });
                it('should transforms 10 to X', function () {
                    expect(Number(10).toRoman()).toBe('X');
                });
                it('should transforms 11 to XI', function () {
                    expect(Number(11).toRoman()).toBe('XI');
                });
                it('should transforms 39 to XXXIX', function () {
                    expect(Number(39).toRoman()).toBe('XXXIX');
                });
                it('should transforms 49 to XLIX', function () {
                    expect(Number(49).toRoman()).toBe('XLIX');
                });
                it('should transforms 89 to LXXXIX', function () {
                    expect(Number(89).toRoman()).toBe('LXXXIX');
                });
                it('should transforms 399 to CCCXCIX', function () {
                    expect(Number(399).toRoman()).toBe('CCCXCIX');
                });
                it('should transforms 499 to CDXCIX', function () {
                    expect(Number(499).toRoman()).toBe('CDXCIX');
                });
                it('should transforms 899 to DCCCXCIX', function () {
                    expect(Number(899).toRoman()).toBe('DCCCXCIX');
                });
                it('should transforms 999 to CMXCIX', function () {
                    expect(Number(999).toRoman()).toBe('CMXCIX');
                });
                it('should transforms 1999 to MCMXCIX', function () {
                    expect(Number(1999).toRoman()).toBe('MCMXCIX');
                });
            });
        });
    });
});