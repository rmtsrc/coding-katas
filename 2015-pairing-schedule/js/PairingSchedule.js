export class PairingSchedule {
  constructor() {
    this.people = [];
  }

  addPerson(name) {
    if (!this.people.map(person => person.toLowerCase()).includes(name.toLowerCase())) {
      this.people.push(name);
    }
  }

  genPairs() {
    let processedPeople = [];
    return this.people.reduce((pairList, person, index) => {
      processedPeople.push(person);
      const personPairs = { [person]: this.people.filter(item => !processedPeople.includes(item)) };

      const isLastPerson = index && index === this.people.length - 1;
      const isOddNumOfPeople = this.people.length % 2 === 1;
      const list = {
        ...pairList,
        ...(isLastPerson && !isOddNumOfPeople && personPairs[person].length === 0 ? {} : personPairs),
      };
      return list;
    }, {});
  }

  getPairs() {
    return Object.entries(this.genPairs()).reduce((str, pairs) => {
      const [key, value] = pairs;
      if (value.length === 0) {
        return `${str}\n* ${key}`;
      } else {
        return `${str}\n${value.reduce((list, person) => `${list}\n* ${key} - ${person}`, '')}`;
      }
    }, '');
  }
}
