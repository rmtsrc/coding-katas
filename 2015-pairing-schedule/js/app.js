import { PairingSchedule } from './PairingSchedule.js';

export async function appEntryPoint(querySelector) {
  const pairingSchedule = new PairingSchedule();

  querySelector('#add-new-person').addEventListener('submit', function(event) {
    event.preventDefault();

    const input = querySelector('#person');
    pairingSchedule.addPerson(input.value);
    querySelector('#pairs').innerText = pairingSchedule.getPairs();
    input.value = '';
  });
}
