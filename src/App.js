import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", date: new Date(2021, 10, 29), amount: 294.67 },
    { title: "Toilet Paper", date: new Date(2021, 6, 17), amount: 294.67 },
    { title: "Football Ticket", date: new Date(2021, 4, 11), amount: 450 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
