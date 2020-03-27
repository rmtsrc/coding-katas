import logger from '../src/js/logger';

describe('Logger()', () => {
	let originalConsoleLog;

	beforeEach(() => {
		originalConsoleLog = console.log;
	});

	afterEach(() => {
		console.log = originalConsoleLog;
	});

	it('should log out a message to the console', () => {
		let consoleLogWasCalledWith;
		const fakeConsoleLog = message => (consoleLogWasCalledWith = message);
		console.log = fakeConsoleLog;
		// exercise
		logger('some message');
		expect(consoleLogWasCalledWith).toMatch('some message');
	});
});
