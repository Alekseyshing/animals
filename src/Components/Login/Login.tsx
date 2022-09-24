import React from 'react'
import {
  Form,
} from "react-router-dom";

export const Login = (): JSX.Element => {

  const handleSubmit = () => {
    
  }

  return (
    <div className={"flex mt-20 flex-col items-center justify-center text-center"}>
      <h1 className={'text-6xl bold mb-10'}>Авторизация</h1>
      <Form method="post" className={'flex flex-col gap-10 min-w-[600px] justify-center text-center'}>
        <label htmlFor="email"></label>
        <input type="text" name="login" id="login" className={'w-3/5 mx-auto p-2 border-2 border-gray-200 border-solid rounded-md'} placeholder="Введите Логин"/>
        <label htmlFor="password"></label>
        <input type="text" name="password" id="password" className={'w-3/5 mx-auto p-2 border-2 border-gray-200 border-solid rounded-md'} placeholder="Введите Пароль"/>
        <button type="submit" onSubmit={handleSubmit} className={'w-3/5 mx-auto border-2 border-gray-200 border-solid rounded-md'}>New</button>
      </Form>
    </div>
  );
}