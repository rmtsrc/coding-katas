/*global define*/

define([
    'views/time'
], function (TimeView) {
    'use strict';

    describe('view', function () {
        describe('time', function () {
            var view;

            window.app = window.app || {};
            window.app.vent = window.app.vent || {};

            beforeEach(function () {
                window.app.vent = jasmine.createSpyObj('event', ['trigger', 'on']);
                spyOn(TimeView.prototype.model, 'set').andCallThrough();
            });

            it('should render the time automatically', function () {
                spyOn(TimeView.prototype, 'render');
                view = new TimeView();

                view.model.set('foo', 'bar');
                expect(TimeView.prototype.render).toHaveBeenCalled();
            });

            it('should listen to changes to controls', function () {
                new TimeView();
                expect(app.vent.on).toHaveBeenCalledWith('control:change:checkbox', jasmine.any(Function), jasmine.any(Object));
                expect(app.vent.on).toHaveBeenCalledWith('control:change:radio', jasmine.any(Function), jasmine.any(Object));
            });

            it('should set the model with the correct decimalTime at midnight', function () {
                var d = new Date(2014, 4, 11, 0, 0, 0, 0);
                spyOn(TimeView.prototype, 'getDate').andReturn(d);

                view = new TimeView();
                view.updateTime();

                expect(view.model.set).toHaveBeenCalledWith('frenchRepublicanCalendarDate', {
                    year: 222,
                    quarterName: 'Spring',
                    month: '08',
                    monthName: 'Flower',
                    day: '22',
                    dayName: 'Fritillary'
                });
                expect(view.model.set).toHaveBeenCalledWith('decimalTime', {
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
                expect(view.model.set).toHaveBeenCalledWith('date', {
                    year: 2014,
                    quarterName: 'Q2',
                    month: '05',
                    monthName: 'May',
                    day: '11',
                    dayName: 'Sunday'
                });
                expect(view.model.set).toHaveBeenCalledWith('time', {
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
            });

            it('should set the model with the correct decimalTime at midday', function () {
                var d = new Date(2014, 4, 11, 12, 0, 0, 0);
                spyOn(TimeView.prototype, 'getDate').andReturn(d);

                view = new TimeView();
                view.updateTime();

                expect(view.model.set).toHaveBeenCalledWith('frenchRepublicanCalendarDate', {
                    year: 222,
                    quarterName: 'Spring',
                    month: '08',
                    monthName: 'Flower',
                    day: '22',
                    dayName: 'Fritillary'
                });
                expect(view.model.set).toHaveBeenCalledWith('decimalTime', {
                    hours: '05',
                    minutes: '00',
                    seconds: '00'
                });
                expect(view.model.set).toHaveBeenCalledWith('date', {
                    year: 2014,
                    quarterName: 'Q2',
                    month: '05',
                    monthName: 'May',
                    day: '11',
                    dayName: 'Sunday'
                });
                expect(view.model.set).toHaveBeenCalledWith('time', {
                    hours: '12',
                    minutes: '00',
                    seconds: '00'
                });
            });
        });
    });
});
