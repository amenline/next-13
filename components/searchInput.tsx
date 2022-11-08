import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  ref: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name = 'content-search', label = 'Search', ...otherProps },
  ref
) => {
  return (
    <div className='flex items-center'>
      <label htmlFor={name} className='sr-only'>
        {label}
      </label>

      <div className='relative w-full'>
        <input
          type='text'
          id={name}
          className='bg-white border border-app_primary text-gray-900 text-sm focus:ring-blue-500 focus:border-app_primary block w-full pl-3 p-2.5 rounded-xl'
          placeholder='Search something here...'
          {...otherProps}
        />
        <button
          type='button'
          className='flex absolute inset-y-0 right-0 items-center pr-3'
        >
          <svg
            aria-hidden='true'
            className='w-7 h-7 text-app_text1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export const SearchInput = React.forwardRef(Input);
