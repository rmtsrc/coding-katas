/*global define*/

define([
    'lib/calendar'
], function () {
    'use strict';

    describe('lib', function () {
        describe('calendar', function () {
            var date;

            beforeEach(function () {
                date = new Date(2014, 5, 10, 0, 0, 0, 0);
            });

            it('should work out leap years', function () {
                expect(date.isLeapYear()).toBeFalsy();

                date = new Date(2008, 5, 10, 12, 0, 0, 0);
                expect(date.isLeapYear()).toBeTruthy();

                date = new Date(2020, 5, 10, 12, 0, 0, 0);
                expect(date.isLeapYear()).toBeTruthy();
            });

            describe('French Republican', function () {
                it('should get the correct number of days since FR epoch', function () {
                    expect(date.getDaysSinceFrcEpoch()).toBe(80950);
                });

                it('should compute the correct FR date', function () {
                    expect(date.getFrcDate()).toEqual({
                        'year': 222,
                        'month': 8,
                        'day': 22
                    });
                });

                it('should get the correct year', function () {
                    expect(date.getFrcYear()).toBe(222);
                });

                it('should get the correct quarter', function () {
                    expect(date.getFrcQuarter()).toBe(3);

                    date = new Date(2014, 9, 24, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(1);

                    date = new Date(2014, 12, 23, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(2);

                    date = new Date(2014, 6, 20, 0, 0, 0, 0);
                    expect(date.getFrcQuarter()).toBe(4);
                });

                it('should get the correct month', function () {
                    expect(date.getFrcMonth()).toBe(8);
                });

                it('should get the correct day', function () {
                    expect(date.getFrcDay()).toBe(22);
                });
            });
        });
    });
});
