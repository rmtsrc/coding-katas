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

        model: new Backbone.Model({
            showStandardTime: true
        }),

        lang: require('lib/calendar/en'),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            app.vent.on('control:change:checkbox', this.checkboxControlChange, this);
            app.vent.on('control:change:radio', this.langControlChange, this);

            setInterval(_.bind(this.updateTime, this), 864);
        },

        checkboxControlChange: function (name, show) {
            this.model.set('show' + name, show);
        },

        langControlChange: function (name, lang) {
            this.lang = require('lib/calendar/' + lang);
            this.render();
        },

        getDate: function () {
            return new Date();
        },

        getDecimalTime: function () {
            var d = this.getDate();

            return padNumTwoDecimalPlaces(d.getDecimalHours()) + ':' +
                padNumTwoDecimalPlaces(d.getDecimalMinutes()) + ':' +
                padNumTwoDecimalPlaces(d.getDecimalSeconds());
        },

        getFrcDateString: function () {
            var d = this.getDate(),
                frcDate = d.getFrcDate(),
                frcQuarterName = this.lang['frc']['quarters'][d.getFrcQuarter()],
                frcMonthName = this.lang['frc']['months'][frcDate['month']],
                frcDayName = this.lang['frc']['days'][frcDate['month']][frcDate['day']];

            return frcDate['year'] + '-' +
                padNumTwoDecimalPlaces(frcDate['month']) + '-' +
                padNumTwoDecimalPlaces(frcDate['day']) + ' ' +
                frcQuarterName + ' : ' + frcMonthName + ' : ' + frcDayName;
        },

        getStandardTime: function () {
            var d = this.getDate();

            return padNumTwoDecimalPlaces(d.getHours()) + ':' +
                padNumTwoDecimalPlaces(d.getMinutes()) + ':' +
                padNumTwoDecimalPlaces(d.getSeconds());
        },

        getStandardDateString: function () {
            var d = this.getDate(),
                quarterName = this.lang['standard']['quarters'][d.getQuarter()],
                month = d.getMonth() + 1,
                monthName = this.lang['standard']['months'][month],
                day = d.getDate(),
                dayName = this.lang['standard']['days'][d.getDay() + 1];

            return d.getFullYear() + '-' +
                padNumTwoDecimalPlaces(month) + '-' +
                padNumTwoDecimalPlaces(day) + ' ' +
                quarterName + ' : ' + monthName + ' : ' + dayName;
        },

        updateTime: function () {
            this.model.set('decimalTime', this.getFrcDateString() + ' ' + this.getDecimalTime());
            this.model.set('time', this.getStandardDateString() + ' ' + this.getStandardTime());
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return TimeView;
});
