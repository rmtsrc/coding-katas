import '../src/js/';

import logger from '../src/js/logger';
import subscribeToFormEvents from '../src/js/events';

jest.mock('../src/js/logger');
jest.mock('../src/js/events');

describe('App setup', () => {
	test('calls subscribeToFormEvents and logger', () => {
		expect(logger).toHaveBeenCalledTimes(1);
		expect(logger).toHaveBeenCalledWith('it works well!');

		expect(subscribeToFormEvents).toHaveBeenCalledTimes(1);
	});
});
