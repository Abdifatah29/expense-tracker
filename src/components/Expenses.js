import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return(
    <div className="expenses">
      {Object.keys(props.expenses).map((items, key) => {
        return (
          <ExpenseItem
            key={key}
            title={props.expenses[items].title}
            amount={props.expenses[items].amount}
            date={props.expenses[items].date}
          />
        );
      })}
    </div>
  );
}


export default Expenses;
