const users = new Map();

users.set('1', {
  id: 1,
  name: 'Joe Blogs',
  dateOfBirth: '1970-01-01',
});

users.set('2', {
  id: 2,
  name: 'Jimmy Wales',
  dateOfBirth: '1975-12-25',
});

users.set('3', {
  id: 3,
  name: 'Edward Snowden',
  dateOfBirth: '1980-12-25',
});

module.exports = users;
