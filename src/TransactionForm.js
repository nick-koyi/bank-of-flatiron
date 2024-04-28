// TransactionForm.js
import React, { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({ date: "", description: "", category: "", amount: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    onAddTransaction(newTransaction);
    setNewTransaction({ date: "", description: "", category: "", amount: "" });
  };

  return (
    <div className="form">
      <input type="date" name="date" placeholder="Date" value={newTransaction.date} onChange={handleInputChange} />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTransaction}>Add transaction</button>
    </div>
  );
}

export default TransactionForm;
