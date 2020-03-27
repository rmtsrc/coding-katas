import { chooseRandomWeapon, getCalculatedOutcome } from './game';

const subscribeToFormEvents = () => {
	const gameForm = document.getElementById('game');

	gameForm.onsubmit = event => {
		event.preventDefault();

		const formData = new FormData(gameForm);

		const formWeapon = formData.get('weapon');
		const selectedWeapon = formWeapon === 'computer' ? chooseRandomWeapon() : formWeapon;
		const computerWeapon = chooseRandomWeapon();

		const outcome = getCalculatedOutcome(selectedWeapon, computerWeapon);

		const result = `${selectedWeapon} vs. ${computerWeapon}, you ${outcome}`;

		const resultDom = document.getElementsByClassName('results')[0];
		resultDom.textContent = result;
		resultDom.style.display = 'block';
	};

	gameForm.onreset = () => {
		const resultDom = document.getElementsByClassName('results')[0];
		resultDom.style.display = 'none';
	};
};

export default subscribeToFormEvents;
