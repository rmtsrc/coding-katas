/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var TimeControlView = Backbone.View.extend({
        el: '.well',

        /**
         * @var {Backbone.Events}
         */
        events: {
            'click input': 'controlClick'
        },

        /**
         * Handler for all control clicks
         *
         * @param event
         */
        controlClick: function (event) {
            var control = event.target,
                type = control.type,
                name = control.name,
                checked = control.checked,
                value = control.value,
                data = (type === 'checkbox') ? checked : value;

            app.vent.trigger('control:change:' + type, name, data);
        }
    });

    return TimeControlView;
});
