import { useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseList from './components/ExpenseList';

/** initial state object */
const initialExpenses = [
  { id: 1, desc: 'Rent', amount: 75, category: 'Utilities' },
  { id: 2, desc: 'Joger Pants', amount: 15, category: 'Clothing' },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSelectedCategory = (category: string) => {
    setExpenses(expenses.filter((e) => e.category === category));
  };

  return (
    <div className='container'>
      <ExpenseFilter onSelectCategory={handleSelectedCategory} />
      <ExpenseList expenses={expenses} onRemove={removeExpense} />
    </div>
  );
}

export default App;
