import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((items, key) => {
        return (
          <ExpenseItem
            key={key}
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
