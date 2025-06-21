import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ExpenseForm({ onAdd, onUpdate, editing, setEditing }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: 'Food',
    date: '',
    notes: '',
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.date || Number(form.amount) < 0) return;

    if (editing) {
      onUpdate(form);
      setEditing(null);
    } else {
      onAdd({ ...form, id: uuidv4() });
    }
    setForm({ title: '', amount: '', category: 'Food', date: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <input name="title" className="form-control" placeholder="Title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <input name="amount" type="number" className="form-control" placeholder="Amount" value={form.amount} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <select name="category" className="form-select" value={form.category} onChange={handleChange}>
            <option>Food</option>
            <option>Utilities</option>
            <option>Transport</option>
            <option>Health</option>
            <option>Entertainment</option>
          </select>
        </div>
        <div className="col-md-4">
          <input name="date" type="date" className="form-control" value={form.date} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <input name="notes" className="form-control" placeholder="Notes (optional)" value={form.notes} onChange={handleChange} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            {editing ? 'Update Expense' : 'Add Expense'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
