/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars'
    }
});

require([
    'backbone',
    'views/time',
    'views/timeControl'
], function (Backbone, TimeView, TimeControlView) {
    Backbone.history.start();

    window.app = window.app || {};
    window.app.vent = _.extend({}, Backbone.Events);

    new TimeView();
    new TimeControlView();
});
