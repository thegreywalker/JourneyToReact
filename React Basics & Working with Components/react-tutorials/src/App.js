import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 6, 24),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 9, 7),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.66,
      date: new Date(2021, 4, 18),
    },
    {
      id: 'e4',
      title: 'New Desk (Wodden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ]
  return (
    // We cannot directly use data of One component into anothe Component ... To Share data between Components we use concepts of props in React ... where we pass data using "Attributes" from the Components tags as you see below ...
    <div>
      <h2>Let's Get Started</h2>
      <Expenses data={expenses}/> 
    </div>
  );
}

export default App;
