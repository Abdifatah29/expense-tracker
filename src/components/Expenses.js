import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
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
  );
}


export default Expenses;
