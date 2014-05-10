/*global define*/

define([], function() {
    'use strict';

    /**
     * Returns the number of milliseconds since midnight
     *
     * @see https://stackoverflow.com/questions/10944396/how-to-calculate-ms-since-midnight-in-javascript
     * @returns {Number}
     */
    Date.prototype.getMillisecondsSinceMidnight = function () {
        var lastMidnight = new Date(
            this.getFullYear(),
            this.getMonth(),
            this.getDate(),
            0, 0, 0);

        return this.getTime() - lastMidnight.getTime();
    };

    // function timePartFormat (num) {
    //     var s = "" + num;
    //     while (s.length < 2) s = "0" + s;
    //     return s;
    // }

    /**
     * Returns the number of decimal seconds since midnight
     *
     * @returns {Number}
     */
    Date.prototype.getDecimalSecondsSinceMidnight = function () {
        return this.getMillisecondsSinceMidnight() / 864;
    };

    /**
     * Returns the number of decimal seconds
     *
     * @returns {Number}
     */
    Date.prototype.getDecimalSeconds = function () {
        return Math.floor(this.getDecimalSecondsSinceMidnight() % 100);
    };

    /**
     * Returns the number of decimal minutes
     *
     * @returns {Number}
     */
    Date.prototype.getDecimalMinutes = function () {
        return Math.floor((this.getDecimalSecondsSinceMidnight() / 100) % 100);
    };

    /**
     * Returns the number of decimal hours
     *
     * @returns {Number}
     */
    Date.prototype.getDecimalHours = function () {
        return Math.floor((this.getDecimalSecondsSinceMidnight() / 100 / 100) % 10);
    };
});
