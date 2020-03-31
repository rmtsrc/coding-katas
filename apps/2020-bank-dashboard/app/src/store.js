import { decorate, action, observable } from 'mobx';

export default class BankStore {
  transactions = [];
  users = {};
  retailers = {};

  async getTransactions() {
    const response = await fetch('http://localhost:3001/transactions');
    this.transactions = await response.json();

    const promises = [];
    this.transactions.forEach(transaction => {
      const getUser = async userId => {
        if (!this.users[userId]) {
          this.users[userId] = { name: 'Loading...' };

          const user = await fetch(`http://localhost:3001/users/${userId}`);
          this.users[userId] = await user.json();
        }
      };
      promises.push(getUser(transaction.userId));

      const getRetailer = async retailerId => {
        if (!this.retailers[retailerId]) {
          this.retailers[retailerId] = { name: 'Loading...', city: '' };

          const retailer = await fetch(`http://localhost:3001/retailers/${retailerId}`);
          this.retailers[retailerId] = await retailer.json();
        }
      };
      promises.push(getRetailer(transaction.retailerId));
    });

    return promises;
  }
}

decorate(BankStore, {
  transactions: observable,
  users: observable,
  retailers: observable,
  getTransactions: action,
});
