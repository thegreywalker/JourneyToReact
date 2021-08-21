import ExpenseItem from "./components/ExpenseItem";

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
    <div>
      <h2>Let's Get Started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>

      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>

      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
