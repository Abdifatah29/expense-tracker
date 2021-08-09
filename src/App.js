import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  { title: "Car Insurance", date: new Date(2021, 10, 29), amount: 294.67 },
  { title: "Toilet Paper", date: new Date(2019, 6, 17), amount: 294.67 },
  { title: "Football Ticket", date: new Date(2021, 4, 11), amount: 450 },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandle = (expense) => {
    setExpenses((prevState) => {
      expense.date = new Date(expense.date);
      return [...prevState, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
