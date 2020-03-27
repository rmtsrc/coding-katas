import subscribeToFormEvents from '../src/js/events';

jest.mock('../src/js/game', () => ({
	chooseRandomWeapon: () => 'mockedRandomWeapon',
	getCalculatedOutcome: () => 'mockedOutcome',
}));

describe('UI events', () => {
	test.each([
		['testInput', 'testInput vs. mockedRandomWeapon, you mockedOutcome'],
		['computer', 'mockedRandomWeapon vs. mockedRandomWeapon, you mockedOutcome'],
	])('submitting the form with %s', (selectedWeapon, expectedOutput) => {
		document.body.innerHTML = `<form id="game">
      <input name="weapon" value="${selectedWeapon}" />
      <span class="results"></span>
    </form>`;

		subscribeToFormEvents();

		const mockPreventDefault = jest.fn();

		const gameForm = document.getElementById('game');
		gameForm.onsubmit({ preventDefault: mockPreventDefault });

		expect(mockPreventDefault).toHaveBeenCalledTimes(1);

		const resultDom = document.getElementsByClassName('results')[0];
		expect(resultDom.textContent).toBe(expectedOutput);
		expect(resultDom.style.display).toBe('block');
	});

	test('resetting the game', () => {
		document.body.innerHTML = `<form id="game">
			<input type="reset"/>
      <span class="results"></span>
		</form>`;

		subscribeToFormEvents();

		const gameForm = document.getElementById('game');
		gameForm.onreset();

		const resultDom = document.getElementsByClassName('results')[0];
		expect(resultDom.style.display).toBe('none');
	});
});
