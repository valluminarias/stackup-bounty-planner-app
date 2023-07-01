import React, { useEffect, useState } from "react";
import TransactionTypeList from "./TransactionTypeList";

export default function TransactionList({ transactions, onDeleteTransaction }) {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    setExpenses(transactions?.filter((t) => t.type === "expense") || []);
    setIncomes(transactions?.filter((t) => t.type === "income") || []);
  }, [transactions]);

  const totalExpenses =
    expenses?.reduce((total, expense) => total + expense.amount, 0) || 0;
  const totalIncome =
    incomes?.reduce((total, transaction) => total + transaction.amount, 0) || 0;

  const formatCurrency = (num) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(num);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TransactionTypeList
          style={{
            marginTop: "20px",
            width: "45%",
          }}
          title={"Incomes"}
          list={incomes}
          formatCurrency={formatCurrency}
          onDeleteTransaction={onDeleteTransaction}
        />
        <TransactionTypeList
          style={{
            marginTop: "20px",
            width: "45%",
          }}
          title={"Expenses"}
          list={expenses}
          formatCurrency={formatCurrency}
          onDeleteTransaction={onDeleteTransaction}
        />
      </div>

      <hr
        style={{
          marginTop: "20px",
        }}
      />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p>Total Income: {formatCurrency(totalIncome)}</p>
        <p>Total Expenses: {formatCurrency(totalExpenses)}</p>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>Net: {formatCurrency(totalIncome - totalExpenses)}</p>
      </div>
    </div>
  );
}
