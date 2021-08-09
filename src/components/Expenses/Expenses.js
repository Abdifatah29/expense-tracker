import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  // we are defining our state functions to state the filter value
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        {/* We passing  onSaveExpenseFilter function as prop to ExpensesFilter compoment*/}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
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
      </Card>
    </div>
  );
}

export default Expenses;
