import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ transactions: [], users: {}, retailers: {} });

  useEffect(() => {
    const getTransactions = async () => {
      const response = await fetch('http://localhost:3001/transactions');

      const transactions = await response.json();
      setState(state => ({ ...state, transactions }));

      const users = {};
      const retailers = {};
      transactions.forEach(async transaction => {
        const getUser = async userId => {
          if (!users[userId]) {
            users[userId] = { name: 'Loading...' };

            const user = await fetch(`http://localhost:3001/users/${userId}`);
            users[userId] = await user.json();
            setState(state => ({ ...state, users }));
          }
        };
        getUser(transaction.userId);

        const getRetailer = async retailerId => {
          if (!retailers[retailerId]) {
            retailers[retailerId] = { name: 'Loading...', city: '' };

            const retailer = await fetch(`http://localhost:3001/retailers/${retailerId}`);
            retailers[retailerId] = await retailer.json();
            setState(state => ({ ...state, retailers }));
          }
        };
        getRetailer(transaction.retailerId);
      });
    };
    getTransactions();
  }, []);

  const { transactions, users, retailers } = state;
  return (
    <div className="App">
      <h1>Transactions</h1>
      {!transactions ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>User</th>
              <th>Retailer</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>
                  {transaction.amount} {transaction.currency}
                </td>
                <td>{users[transaction.userId] ? users[transaction.userId].name : 'Loading...'}</td>
                <td>
                  {retailers[transaction.retailerId]
                    ? `${retailers[transaction.retailerId].name} ${retailers[transaction.retailerId].city}`
                    : 'Loading...'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
