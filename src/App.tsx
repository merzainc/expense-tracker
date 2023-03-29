import { useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import categories from './categories';

/** initial state object */
const initialExpenses = [
  { id: 1, desc: 'Drink 5L', amount: 3.5, category: 'Groceries' },
  { id: 2, desc: 'Joger Pants', amount: 15, category: 'Clothing' },
  { id: 3, desc: 'Plumbing', amount: 20, category: 'Utilities' },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [selectedCategory, setCategory] = useState('');

  const summary = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className='container'>
      <h3 className='text-center mt-2 text-secondary'>Expense Tracker</h3>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([{ id: expenses.length + 1, ...expense }, ...expenses])
        }
      />
      <ExpenseFilter onSelectCategory={(category) => setCategory(category)} />
      <ExpenseList expenses={summary} onRemove={removeExpense} />
    </div>
  );
}

export default App;
