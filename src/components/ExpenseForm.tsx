import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

const schema = z.object({
  desc: z
    .string()
    .min(3, { message: 'Description should be at least 3 characters.' })
    .max(50),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .min(0.01, { message: 'Amount should be greater than zero.' })
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (expense: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit((expense) => onSubmit(expense))}>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <label htmlFor='desc'>Description</label>
          <input
            {...register('desc')}
            className='form-control'
            type='text'
            id='desc'
            placeholder='Enter expense description.'
          />
          {errors.desc && <p className='text-danger'>{errors.desc.message}</p>}
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor='amount'>Amount</label>
          <input
            {...register('amount', { valueAsNumber: true })}
            className='form-control'
            type='number'
            id='amount'
            placeholder='Enter total amount for the expense.'
          />
          {errors.amount && (
            <p className='text-danger'>{errors.amount.message}</p>
          )}
        </div>
        <div className='col-md-6'>
          <label htmlFor='category'>Category</label>
          <select
            {...register('category')}
            id='category'
            className='form-select mb-3'
          >
            <option value=''>All categories</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          {errors.category && (
            <p className='text-danger'>{errors.category.message}</p>
          )}
        </div>
      </div>
      <button
        disabled={!isValid}
        className='btn btn-secondary btn-lg mb-3 '
        type='submit'
      >
        Save
      </button>
    </form>
  );
};

export default ExpenseForm;
