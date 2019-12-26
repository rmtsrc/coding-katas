/*global define, app*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'lib/time',
    'lib/calendar',
    'lib/romanNumerals',
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
            showYear: true,
            showYearInRoman: true,
            showMonth: true,
            showDay: true,
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
         * Returns an object with the dates formated based on user selection
         *
         * @returns {Object}
         */
        getDateStringAsObj: function (year, month, day, quarterName, monthName, dayName) {
            var date = [];
            if (this.model.get('showYear')) date.push(year);
            if (this.model.get('showMonth')) date.push(padNumTwoDecimalPlaces(month));
            if (this.model.get('showDay')) date.push(padNumTwoDecimalPlaces(day));

            var dateName = [];
            if (this.model.get('showQuarter')) dateName.push(quarterName);
            if (this.model.get('showMonthName')) dateName.push(monthName);
            if (this.model.get('showDayName')) dateName.push(dayName);

            return {
                date: date.join('-'),
                dateName: dateName.join(' : ')
            };
        },

        /**
         * Gets the French Republican Calendar date
         *
         * @returns {{year: *, quarterName: string, month: number, monthName: string, day: number, dayName: string}}
         */
        getFrcDate: function () {
            var d = this.getDate(),
                frcDate = d.getFrcDate(),
                frcQuarterName = this.lang['frc']['quarters'][d.getFrcQuarter()],
                frcMonthName = this.lang['frc']['months'][frcDate['month']],
                frcDayName = this.lang['frc']['days'][frcDate['month']][frcDate['day']];

            return this.getDateStringAsObj(
                this.model.get('showYearInRoman') ? Number(frcDate['year']).toRoman() : frcDate['year'],
                frcDate['month'],
                frcDate['day'],
                frcQuarterName,
                frcMonthName,
                frcDayName
            );
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
         * @returns {{year: number, quarterName: string, month: number, monthName: string, day: number, dayName: string}}
         */
        getStandardDate: function () {
            var d = this.getDate(),
                year = d.getFullYear(),
                quarterName = this.lang['standard']['quarters'][d.getQuarter()],
                month = d.getMonth() + 1,
                monthName = this.lang['standard']['months'][month],
                day = d.getDate(),
                dayName = this.lang['standard']['days'][d.getDay() + 1];

            return this.getDateStringAsObj(
                year,
                month,
                day,
                quarterName,
                monthName,
                dayName
            );
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
