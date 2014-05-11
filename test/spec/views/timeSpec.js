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
                var d = new Date(2014, 4, 11, 0, 0, 0, 0);
                spyOn(TimeView.prototype, 'getDate').andReturn(d);

                view = new TimeView();
                view.updateTime();

                expect(view.model.set).toHaveBeenCalledWith('decimalTime', '222-08-22 Spring : Flower : Fritillary 00:00:00');
                expect(view.model.set).toHaveBeenCalledWith('time', '2014-05-11 Q2 : May : Sunday 00:00:00');
            });

            it('should set the model with the correct decimalTime at midday', function () {
                var d = new Date(2014, 4, 11, 12, 0, 0, 0);
                spyOn(TimeView.prototype, 'getDate').andReturn(d);

                view = new TimeView();
                view.updateTime();

                expect(view.model.set).toHaveBeenCalledWith('decimalTime', '222-08-22 Spring : Flower : Fritillary 05:00:00');
                expect(view.model.set).toHaveBeenCalledWith('time', '2014-05-11 Q2 : May : Sunday 12:00:00');
            });
        });
    });
});
