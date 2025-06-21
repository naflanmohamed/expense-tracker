import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((acc, exp) => acc + Number(exp.amount), 0);
  const byCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + Number(exp.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(byCategory),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(byCategory),
        backgroundColor: ['#0d6efd', '#6f42c1', '#20c997', '#ffc107', '#dc3545'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Summary</h5>
        <p>Total Spent: <strong>Rs. {total}</strong></p>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary;