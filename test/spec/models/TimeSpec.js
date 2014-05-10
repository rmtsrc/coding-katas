/*global define*/

define([
    'models/Time'
], function (Time) {
    'use strict';

    describe('model', function () {
        describe('Time', function () {
            it('should get the number of milliseconds since midnight', function () {
                var time = new Time();
                console.log('work?');
            });
        });
    });
});
