import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

interface Expense {
  id: number;
  desc: string;
  amount: number;
  category: string;
}

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

  return <ExpenseList expenses={expenses} onRemove={removeExpense} />;
}

export default App;
