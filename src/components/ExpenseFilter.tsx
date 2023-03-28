interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className='form-select mb-3'
    >
      <option value=''>All categories</option>
      <option value='Clothing'>Entertainment</option>
      <option value='Groceries'>Groceries</option>
      <option value='Utilities'>Utilities</option>
      <option value='Entertainment'>Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
