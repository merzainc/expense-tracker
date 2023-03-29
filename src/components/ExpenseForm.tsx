import PropTypes from 'prop-types';
import categories from '../categories';

const ExpenseForm = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='desc'>Description</label>
          <input
            className='form-control'
            type='text'
            id='desc'
            placeholder='Enter expense description.'
          />
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='amount'>Amount</label>
          <input
            className='form-control'
            type='number'
            id='amount'
            placeholder='Enter total amount for the expense.'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='category'>Category</label>
          <select id='category' className='form-select mb-3'>
            <option value=''>All categories</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <button className='btn btn-secondary btn-lg mb-3 ' type='submit'>
        Save
      </button>
    </form>
  );
};

export default ExpenseForm;
