const weapons = new Map();
weapons.set('rock', { beats: 'scissors' });
weapons.set('paper', { beats: 'rock' });
weapons.set('scissors', { beats: 'paper' });

export const chooseRandomWeapon = () => [...weapons.keys()][Math.floor(Math.random() * weapons.size)];

export const getCalculatedOutcome = (selectedWeapon, nemesisWeapon) => {
	if (selectedWeapon === nemesisWeapon) return 'drew';

	if (weapons.get(selectedWeapon).beats === nemesisWeapon) return 'won';

	return 'lost';
};
