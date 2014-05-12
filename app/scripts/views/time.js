/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'lib/time',
    'lib/calendar',
    'lib/calendar/en',
    'lib/calendar/fr'
], function ($, _, Backbone, JST) {
    'use strict';

    /**
     * Will adds an extra 0 to single place numbers
     *
     * @private
     * @param num
     * @returns {string}
     */
    var padNumTwoDecimalPlaces = function (num) {
        var s = '' + num;
        while (s.length < 2) {
            s = '0' + s;
        }
        return s;
    };

    var TimeView = Backbone.View.extend({
        template: JST['app/scripts/templates/time.hbs'],

        el: 'section[data-role=output]',

        /**
         * @var {Backbone.Model}
         */
        model: new Backbone.Model({
            showStandardTime: true,
            showDate: true,
            showQuarter: true,
            showMonthName: true,
            showDayName: true,
            showSeconds: true,
            lang: 'en'
        }),

        lang: require('lib/calendar/en'),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            app.vent.on('control:change:checkbox', this.checkboxControlChange, this);
            app.vent.on('control:change:radio', this.langControlChange, this);

            setInterval(_.bind(this.updateTime, this), 864);
        },

        /**
         * Updates the model when the model changes
         *
         * @param name
         * @param show
         */
        checkboxControlChange: function (name, show) {
            this.model.set(name, show);
        },

        /**
         * Handles language changes
         *
         * @param name
         * @param lang
         */
        langControlChange: function (name, lang) {
            this.lang = require('lib/calendar/' + lang);
            this.render();
        },

        /**
         * Returns the current date object
         *
         * @returns {Date}
         */
        getDate: function () {
            return new Date();
        },

        /**
         * Gets decimal time object
         *
         * @returns {{hours: string, minutes: string, seconds: string}}
         */
        getDecimalTime: function () {
            var d = this.getDate();

            return {
                hours: padNumTwoDecimalPlaces(d.getDecimalHours()),
                minutes: padNumTwoDecimalPlaces(d.getDecimalMinutes()),
                seconds: padNumTwoDecimalPlaces(d.getDecimalSeconds())
            };
        },

        /**
         * Gets the French Republican Calendar date
         *
         * @returns {{year: *, quarterName: *, month: string, monthName: *, day: string, dayName: *}}
         */
        getFrcDate: function () {
            var d = this.getDate(),
                frcDate = d.getFrcDate(),
                frcQuarterName = this.lang['frc']['quarters'][d.getFrcQuarter()],
                frcMonthName = this.lang['frc']['months'][frcDate['month']],
                frcDayName = this.lang['frc']['days'][frcDate['month']][frcDate['day']];

            return {
                year: frcDate['year'],
                quarterName: frcQuarterName,
                month: padNumTwoDecimalPlaces(frcDate['month']),
                monthName: frcMonthName,
                day: padNumTwoDecimalPlaces(frcDate['day']),
                dayName: frcDayName
            };
        },

        /**
         * Gets the standard time
         *
         * @returns {{hours: string, minutes: string, seconds: string}}
         */
        getStandardTime: function () {
            var d = this.getDate();

            return {
                hours: padNumTwoDecimalPlaces(d.getHours()),
                minutes: padNumTwoDecimalPlaces(d.getMinutes()),
                seconds: padNumTwoDecimalPlaces(d.getSeconds())
            };
        },

        /**
         * Gets the standard date
         *
         * @returns {{year: number, quarterName: *, month: string, monthName: *, day: string, dayName: *}}
         */
        getStandardDate: function () {
            var d = this.getDate(),
                quarterName = this.lang['standard']['quarters'][d.getQuarter()],
                month = d.getMonth() + 1,
                monthName = this.lang['standard']['months'][month],
                day = d.getDate(),
                dayName = this.lang['standard']['days'][d.getDay() + 1];

            return {
                year: d.getFullYear(),
                quarterName: quarterName,
                month: padNumTwoDecimalPlaces(month),
                monthName: monthName,
                day: padNumTwoDecimalPlaces(day),
                dayName: dayName
            };
        },

        /**
         * Handles model updates on each second tick
         */
        updateTime: function () {
            this.model.set('frenchRepublicanCalendarDate', this.getFrcDate());
            this.model.set('decimalTime', this.getDecimalTime());
            this.model.set('date', this.getStandardDate());
            this.model.set('time', this.getStandardTime());
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return TimeView;
});
