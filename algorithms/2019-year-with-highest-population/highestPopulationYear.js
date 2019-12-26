// Given a list of people with their birth and death years, find the year with the highest population

const people = [
  {name: 'Joe Bloggs', yearOfBirth: 1900, yearOfDeath: 1980},
  {name: 'Foo', yearOfBirth: 1984, yearOfDeath: 2074},
  {name: 'Bar', yearOfBirth: 1979, yearOfDeath: 1983},
  {name: 'Jane', yearOfBirth: 1980, yearOfDeath: 1982},
];

const sortedByBirth = people.sort((a, b) => a.yearOfBirth - b.yearOfBirth)
const lowestYear = sortedByBirth[0].yearOfBirth;

const sortedByDeath = people.sort((a, b) => b.yearOfDeath - a.yearOfDeath)
const highestYear = sortedByDeath[0].yearOfDeath;

const populationYears = [];
for (let year = lowestYear; year <= highestYear; year++) {
  const livingPeople = people.filter((person) => year >= person.yearOfBirth && year <= person.yearOfDeath);
  populationYears.push({ year, livingPeople: livingPeople.length });
}

const populationYearsSorted = populationYears.sort((a, b) => b.livingPeople - a.livingPeople);
const yearWithHighestPopulation = populationYearsSorted[0]

console.log(yearWithHighestPopulation);

console.assert(yearWithHighestPopulation.year === 1980)
console.assert(yearWithHighestPopulation.livingPeople === 3)
