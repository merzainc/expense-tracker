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
  return (
    <table className='table table-bordered table-sm'>
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
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button className='btn btn-outline-danger btn-sm'>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
