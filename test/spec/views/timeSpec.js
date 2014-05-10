/*global define*/

define([
    'views/time'
], function (TimeView) {
    'use strict';

    describe('view', function () {
        describe('time', function () {
            var view;

            beforeEach(function () {
                spyOn(TimeView.prototype.model, 'set');
            });

            it('should set the model with the correct decimalTime at midnight', function () {
                var d = new Date(2014, 5, 10, 0, 0, 0, 0);
                spyOn(TimeView.prototype, 'getDate').andReturn(d);

                view = new TimeView();
                view.updateDecimalTime();

                expect(view.model.set).toHaveBeenCalledWith('time', '00:00:00');
            });

            it('should set the model with the correct decimalTime at midday', function () {
                var d = new Date(2014, 5, 10, 12, 0, 0, 0);
                spyOn(TimeView.prototype, 'getDate').andReturn(d);

                view = new TimeView();
                view.updateDecimalTime();

                expect(view.model.set).toHaveBeenCalledWith('time', '05:00:00');
            });
        });
    });
});
