/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Link } from "react-router-dom";
import { useExecutionsData } from '../../hooks/useExecutions';


export const Today = (): JSX.Element => {
  const token = localStorage.getItem('token')
 
  const [posts] = useExecutionsData('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMjNkYTkzLTJhN2MtNDBkMS04NTExLTc2Yjc4MDIxZmFmYiIsInJvbGUiOiJDVVNUT01FUiIsImxvZ2luIjoidGVzdF91c2VyIiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVXNlciIsImlhdCI6MTY2NDE5NDk5MCwiZXhwIjoxNjY0MTk1NTkwfQ.ZT-6oYuCP3KWT6s8fyOdkcuepTBhU0RhQbIgMZ93gn8');

  console.log(posts);
  
  return (
    <>
      {token && token !== null && (
        <div >Toa</div>
      )}
      {token === null && (
        <div className='flex flex-col max-w-[600px] hover:shadow-lg duration-300 ease-in mx-auto items-center justify-center p-10 gap-4 border-2 rounded-lg border-solid'>
          <h2 className='text-base  font-bold'>Время сеанса истекло</h2>
          <div className='flex gap-2'>
            <p className='text-sm'>Пожалуйста</p>
            <Link to='/login' className='text-lime-600 hover:text-lime-400 duration-150 ease-in text-sm font-bold'>авторизуйтесь</Link>
          </div>
        </div>
      )}
    </>
  );
}