/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var TimeControlView = Backbone.View.extend({
        el: '.well',

        events: {
            'click input': 'controlClick'
        },

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
