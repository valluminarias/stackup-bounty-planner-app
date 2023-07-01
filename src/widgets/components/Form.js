import React, { useState } from "react";

export default function Form({ onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = {
      title,
      amount: +amount,
      type,
    };

    onAddTransaction(transactionData);

    setTitle("");
    setAmount(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="text-input"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          marginLeft: "6px",
        }}
        placeholder="Amount"
        className="text-input"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{
          marginLeft: "6px",
        }}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button
        type="submit"
        style={{
          marginLeft: "6px",
          paddingRight: "4px",
          paddingLeft: "4px",
        }}
      >
        Add
      </button>
    </form>
  );
}
