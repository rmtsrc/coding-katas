/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'lib/time'
], function ($, _, Backbone, JST) {
    'use strict';

    var timePartFormat = function (num) {
        var s = '' + num;
        while (s.length < 2) { s = '0' + s; }
        return s;
    };

    var TimeView = Backbone.View.extend({
        template: JST['app/scripts/templates/time.hbs'],

        el: '#decimalTime',

        model: new Backbone.Model(),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);

            setInterval(_.bind(this.updateDecimalTime, this), 864);
        },

        getDate: function () {
            return new Date();
        },

        updateDecimalTime: function () {
            var d = this.getDate(),
                decimalTime =   timePartFormat(d.getDecimalHours()) + ':' +
                                timePartFormat(d.getDecimalMinutes()) + ':' +
                                timePartFormat(d.getDecimalSeconds());

            this.model.set('time', decimalTime);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return TimeView;
});
