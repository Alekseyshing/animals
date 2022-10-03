import React from 'react';
import { generateRandomString } from '../services/ts/generateRandomIndex';

interface IPagination {
  animalsPerPage: number,
  totalAnimals: number,
  paginate: (number: number) => void
}

export const Pagination = ({ animalsPerPage, totalAnimals, paginate }: IPagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAnimals / animalsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='flex gap-5 items-center justify-center'>
        {pageNumbers.map(number => (
          <li key={generateRandomString()}>
            <button className={'text-base p-3 hover:bg-slate-100 hover:text-lime-500 active:text-white active:bg-slate-600 transition-all ease-in-out duration-500'} type='button' onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}