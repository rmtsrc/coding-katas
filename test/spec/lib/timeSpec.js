/*global define*/

define([
    'lib/time'
], function () {
    'use strict';

    describe('lib', function () {
        describe('time', function () {
            var date;

            beforeEach(function () {
                date = new Date(2014, 5, 10, 0, 0, 0, 0);
            });

            it('should get the correct number of milliseconds since midnight', function () {
                expect(date.getMillisecondsSinceMidnight()).toBe(0);

                date = new Date(2014, 5, 10, 1, 0, 0, 0);
                expect(date.getMillisecondsSinceMidnight()).toBe(3600000);

                date = new Date(2014, 5, 10, 12, 0, 0, 0);
                expect(date.getMillisecondsSinceMidnight()).toBe(3600000 * 12);
            });

            it('should get correct decimal seconds', function () {
                expect(date.getDecimalSeconds()).toBe(0);

                date = new Date(2014, 5, 10, 0, 0, 10, 0);
                expect(date.getDecimalSeconds()).toBe(11);
            });

            it('should get correct decimal minutes', function () {
                expect(date.getDecimalMinutes()).toBe(0);

                date = new Date(2014, 5, 10, 0, 10, 0, 0);
                expect(date.getDecimalMinutes()).toBe(6);
            });

            it('should get correct decimal hours', function () {
                expect(date.getDecimalHours()).toBe(0);

                date = new Date(2014, 5, 10, 12, 0, 0, 0);
                expect(date.getDecimalHours()).toBe(5);
            });
        });
    });
});
