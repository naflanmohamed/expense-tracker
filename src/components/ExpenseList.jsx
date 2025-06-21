import React from 'react';

function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div className="card p-4">
      <h4 className="mb-4">All Expenses</h4>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">No expenses yet</td>
              </tr>
            ) : (
              expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>Rs. {expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(expense)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(expense.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseList;