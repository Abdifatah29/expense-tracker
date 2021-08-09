import React from "react";

const ExpensesFilter = (props) => {
  // we using props to get and use the onSaveExpenseFilter function
    // then we pass the selected year as an Argument to that functions
  const selectChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
              <select value={props.selected }onChange={selectChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// add filter component
// forward the pick year
// listen to event
// forward
// in that even, store in an state
