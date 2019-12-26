/*global define*/

define([], function() {
    'use strict';

    var ROMAN_MAPPINGS = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    Number.prototype.toRoman = function() {
        var str = '',
            num = this.valueOf();

        for (var roman in ROMAN_MAPPINGS) {
            var arabic = ROMAN_MAPPINGS[roman];
            while (num >= arabic) {
                str += roman;
                num -= arabic;
            }
        }

        return str;
    };
});
