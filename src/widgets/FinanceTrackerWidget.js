import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import ExpenseList from './components/TransactionList';

export default function FinanceTrackerWidget () {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || []
    if (!transactions || transactions === "undefined") {
      transactions = []
    }
    setTransactions(transactions)
  }, []);

  useEffect(() => {
    if (! transactions) {
        return;
    }
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transactionData) => {
    const newTransaction = {
        ...transactionData,
        id: uuidv4(),
    };

    setTransactions((prevData) => [...prevData, newTransaction]);
  };

  const deleteTransaction = (transaction) => {
    const newTransactions = transactions.splice(transactions.indexOf(transaction), 1)
    setTransactions((prevData) => [...prevData, newTransactions]);
  }

  return (
    <div style={{ minWidth: 600 }}>
      <h1>Simple Finance Tracker</h1>
      <Form onAddTransaction={addTransaction} />
      <ExpenseList transactions={transactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
};
