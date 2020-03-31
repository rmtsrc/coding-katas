import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';

function App({ bankStore }) {
  useEffect(() => {
    bankStore.getTransactions();
  }, [bankStore]);

  return (
    <div className="App">
      <h1>Transactions</h1>
      {!bankStore.transactions.length ? (
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
            {bankStore.transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>
                  {transaction.amount} {transaction.currency}
                </td>
                <td>{bankStore.users[transaction.userId] ? bankStore.users[transaction.userId].name : 'Loading...'}</td>
                <td>
                  {bankStore.retailers[transaction.retailerId]
                    ? `${bankStore.retailers[transaction.retailerId].name} ${
                        bankStore.retailers[transaction.retailerId].city
                      }`
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

export default inject(({ bankStore }) => ({ bankStore }))(observer(App));
