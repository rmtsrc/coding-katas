/*global define*/

define([], function () {
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

    /**
     * Gets the number of days since the French Republican calendar epoch
     *
     * @see http://www.windhorst.org/calendar/
     * @returns {number}
     */
    Date.prototype.getDaysSinceFrcEpoch = function () {
        var frcEpoch = new Date(1792, 9, 21),
            dateDiff = this.getTime() - frcEpoch.getTime();

        return Math.round(dateDiff / (24 * 60 * 60 * 1000));
    };

    /**
     * Returns the date as a French Republican calendar date
     *
     * @returns {{year: number, month: number, day: number}}
     */
    Date.prototype.getFrcDate = function () {
        var totalDays = this.getDaysSinceFrcEpoch(),
            dayCount = 1,
            revDay = 0,
            revMonth = 1,
            revYear = 1,
            leap = false;

        // "while" loop counts through the difference in days, applying the rules of the French calendar
        // and "accumulating" the French date
        while (dayCount <= totalDays) {
            revDay = revDay + 1;
            if (revDay === 31) {
                revDay = 1;
                revMonth = revMonth + 1;
            }
            if (revMonth === 13) {
                leap = false;
                if (revYear === 3 || revYear === 7 || revYear === 11 || revYear === 15) { //4 "if" statements apply the Romme rule for French leap years
                    leap = true;
                }
                if (revYear >= 20 && revYear % 4 === 0) {
                    leap = true;
                }
                if (revYear >= 100 && revYear % 100 === 0) {
                    leap = false;
                }
                if (revYear >= 400 && revYear % 400 === 0) {
                    leap = true;
                }
                if (!leap) {
                    if (revDay > 5) {
                        revDay = 1;
                        revMonth = 1;
                        revYear = revYear + 1;
                    }
                }
                if (leap) {
                    if (revDay > 6) {
                        revDay = 1;
                        revMonth = 1;
                        revYear = revYear + 1;
                    }
                }
            }
            dayCount = dayCount + 1;
        }

        return {
            'year': revYear,
            'month': revMonth,
            'day': revDay
        };
    };

    /**
     * Gets the French Republican calendar year
     *
     * @returns {number}
     */
    Date.prototype.getFrcYear = function () {
      return this.getFrcDate()['year'];
    };


    /**
     * Gets the French Republican calendar quarter
     *
     * @returns {number}
     */
    Date.prototype.getFrcQuarter = function () {
        return Math.floor(this.getFrcMonth() / 3) + 1;
    };

    /**
     * Gets the French Republican calendar month
     *
     * @returns {number}
     */
    Date.prototype.getFrcMonth = function () {
        return this.getFrcDate()['month'];
    };

    /**
     * Gets the French Republican calendar day
     *
     * @returns {number}
     */
    Date.prototype.getFrcDay = function () {
        return this.getFrcDate()['day'];
    };
});
