/*global define*/

define([], function() {
    'use strict';

    /**
     * Works out if the year is a leap year
     *
     * @returns {Boolean}
     */
    Date.prototype.isLeapYear = function () {
        var year = this.getFullYear();

        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    };
});
