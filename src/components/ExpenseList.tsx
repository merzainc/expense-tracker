interface Expense {
  id: number;
  desc: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onRemove: (id: number) => void;
}

const ExpenseList = ({ expenses, onRemove }: Props) => {
  if (expenses.length === 0)
    return (
      <p className='text-primary text-center'>
        No expenses were found, add an expense !!
      </p>
    );

  return (
    <table className='table table-bordered'>
      <thead className='thead'>
        <tr>
          <th scope='col'>Description</th>
          <th scope='col'>Amount</th>
          <th scope='col'>Category</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.desc}</td>
            <td>{expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => onRemove(expense.id)}
                className='btn btn-outline-danger btn-sm'
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td colSpan={3}>
            $
            {expenses
              .reduce((acc, expense) => acc + expense.amount, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
