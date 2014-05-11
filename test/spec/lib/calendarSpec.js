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
        });
    });
});
