import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

const fetchUser = async userId => {
  const response = await fetch(`http://localhost:3001/api/users/${userId}`);

  return await response.json();
};

function App() {
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const getTransactions = async () => {
      const response = await fetch('http://localhost:3001/api/transactions');
      // response.status

      const trans = await response.json();

      trans.forEach(async transaction => {
        if (!users[transaction.userId]) {
          const user = await fetchUser(transaction.userId);
          setUsers({ ...users, [transaction.userId]: user });
        }
      });

      setTransactions(trans);
    };
    getTransactions();
  }, []);

  return (
    <div className="App">
      <h1>Transactions</h1>
      <table>
        <tr>
          <th>Currency</th>
          <th>Amount</th>
          <th>User</th>
        </tr>
        {transactions.map(transaction => (
          <tr>
            <td>{transaction.currency}</td>
            <td>{transaction.amount}</td>
            <td>{users[transaction.userId] && users[transaction.userId].name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
