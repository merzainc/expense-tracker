import ExpenseList from './components/ExpenseList';

const expenses = [
  { id: 1, desc: 'Rent', amount: 75, category: 'Utilities' },
  { id: 2, desc: 'Joger Pants', amount: 15, category: 'Clothing' },
  { id: 3, desc: 'Samon and Curry', amount: 75, category: 'Foods' },
];

function App() {
  return (
    <ExpenseList
      expenses={expenses}
      onRemove={(expense) => console.log(expense)}
    />
  );
}

export default App;
