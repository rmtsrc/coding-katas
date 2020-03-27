import { chooseRandomWeapon, getCalculatedOutcome } from '../src/js/game';

describe('game', () => {
	test('choosing a random weapon', () => {
		expect(['rock', 'paper', 'scissors']).toContain(chooseRandomWeapon());
	});

	test.each([
		['rock', 'scissors', 'won'],
		['paper', 'rock', 'won'],
		['scissors', 'paper', 'won'],
		['rock', 'rock', 'drew'],
		['paper', 'paper', 'drew'],
		['scissors', 'scissors', 'drew'],
		['rock', 'paper', 'lost'],
		['paper', 'scissors', 'lost'],
		['scissors', 'rock', 'lost'],
	])('%s vs. %s', (selectedWeapon, nemesisWeapon, expected) => {
		expect(getCalculatedOutcome(selectedWeapon, nemesisWeapon)).toBe(expected);
	});
});
