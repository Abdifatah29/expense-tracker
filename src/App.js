import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", date: new Date(2021, 10, 29), amount: 294.67 },
    { title: "Toilet Paper", date: new Date(2021, 6, 17), amount: 294.67 },
    { title: "Football Ticket", date: new Date(2021, 4, 11), amount: 450 },
  ];
    const addExpenseHandle = expense => {
        console.log('in app.js');
        console.log(expense)
}
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandle} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
