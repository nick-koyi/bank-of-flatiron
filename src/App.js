// App.js
import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2019-12-01", description: "Paycheck from Bob's Burgers", category: "Income", amount: 1000 },
    { id: 2, date: "2019-12-01", description: "South by South West Quinoa Bowl at Fresh & Co", category: "Food", amount: -10.55 },
    { id: 3, date: "2019-12-02", description: "South by South West Quinoa Bowl at Fresh & Co", category: "Food", amount: -10.55 },
    { id: 4, date: "2019-12-04", description: "Sunglasses, Urban Outfitters", category: "Fashion", amount: -24.99 },
    { id: 5, date: "2019-12-06", description: "Venmo, Alice Pays you for Burrito", category: "Food", amount: 8.75 },
    { id: 6, date: "2019-12-06", description: "Chipotle", category: "Food", amount: -17.59 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTransaction = (newTransaction) => {
    const newId = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
    setTransactions([...transactions, { id: newId, ...newTransaction }]);
  };

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;