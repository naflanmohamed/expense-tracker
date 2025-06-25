import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import { loadExpenses, saveExpenses } from './utils/localStorage';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const stored = loadExpenses();
    setExpenses(stored);
  }, []);

  const addExpense = (expense) => {
    const newList = [expense, ...expenses];
    setExpenses(newList);
    saveExpenses(newList);
  };

  const updateExpense = (updated) => {
    const updatedList = expenses.map((exp) =>
      exp.id === updated.id ? updated : exp
    );
    setExpenses(updatedList);
    saveExpenses(updatedList);
  };

  const deleteExpense = (id) => {
    const filtered = expenses.filter((exp) => exp.id !== id);
    setExpenses(filtered);
    saveExpenses(filtered);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: '#3d82dc' }}>💰Expense Tracker</h1>
        <p className="text-muted">Track and visualize your spending easily</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-6">
          <ExpenseForm
            onAdd={addExpense}
            onUpdate={updateExpense}
            editing={editingExpense}
            setEditing={setEditingExpense}
          />
        </div>
        <div className="col-lg-6">
          <ExpenseSummary expenses={expenses} />
        </div>
      </div>
      <div className="mt-4">
        <ExpenseList
          expenses={expenses}
          onDelete={deleteExpense}
          onEdit={setEditingExpense}
        />
      </div>
      <footer className="text-center mt-5">
        <p className="text-muted">
          Developed by <a href="https://www.linkedin.com/in/naflan-mohamed/" target="_blank" rel="noopener noreferrer">Naflan Mohamed</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
