export const loadExpenses = () => {
  return JSON.parse(localStorage.getItem("expenses")) || [];
};

export const saveExpenses = (expenses) => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};
