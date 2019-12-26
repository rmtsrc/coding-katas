import { PairingSchedule } from './PairingSchedule';

describe('PairingSchedule()', () => {
  let pairingSchedule;
  beforeEach(() => {
    pairingSchedule = new PairingSchedule();
  });

  it('adds 1 person', () => {
    pairingSchedule.addPerson('Bob');

    expect(pairingSchedule.genPairs()).toEqual({ Bob: [] });
    expect(pairingSchedule.getPairs()).toMatchInlineSnapshot(`
      "
      * Bob"
    `);
  });

  it('does not add the same person twice', () => {
    pairingSchedule.addPerson('a');
    pairingSchedule.addPerson('b');
    pairingSchedule.addPerson('b');
    pairingSchedule.addPerson('B');

    expect(pairingSchedule.genPairs()).toEqual({
      a: ['b'],
    });
    expect(pairingSchedule.getPairs()).toMatchInlineSnapshot(`
      "

      * a - b"
    `);
  });

  it('adds 2 people', () => {
    pairingSchedule.addPerson('Bob');
    pairingSchedule.addPerson('Jane');

    expect(pairingSchedule.genPairs()).toEqual({ Bob: ['Jane'] });
    expect(pairingSchedule.getPairs()).toMatchInlineSnapshot(`
      "

      * Bob - Jane"
    `);
  });

  it('adds 3 people', () => {
    pairingSchedule.addPerson('Bob');
    pairingSchedule.addPerson('Jane');
    pairingSchedule.addPerson('John');

    expect(pairingSchedule.genPairs()).toEqual({
      Bob: ['Jane', 'John'],
      Jane: ['John'],
      John: [],
    });
    expect(pairingSchedule.getPairs()).toMatchInlineSnapshot(`
      "

      * Bob - Jane
      * Bob - John

      * Jane - John
      * John"
    `);
  });

  it('adds 3 people', () => {
    pairingSchedule.addPerson('Bob');
    pairingSchedule.addPerson('Jane');
    pairingSchedule.addPerson('John');
    pairingSchedule.addPerson('Bonnie');

    expect(pairingSchedule.genPairs()).toEqual({
      Bob: ['Jane', 'John', 'Bonnie'],
      Jane: ['John', 'Bonnie'],
      John: ['Bonnie'],
    });
    expect(pairingSchedule.getPairs()).toMatchInlineSnapshot(`
      "

      * Bob - Jane
      * Bob - John
      * Bob - Bonnie

      * Jane - John
      * Jane - Bonnie

      * John - Bonnie"
    `);
  });
});
