import { Link } from "react-router-dom"


export const TodayErrComponent = () => {
  return (
    <div className='flex flex-col h-96 my-auto min-w-[320px] max-w-[600px] hover:shadow-lg hover:bg-slate-100 duration-300 ease-in mx-auto items-center justify-center gap-4 border-2 rounded-lg border-solid p-5 mb-10'>
        <h2 className='text-base font-bold'>Время сеанса истекло</h2>
        <div className='flex gap-2'>
          <p className='text-sm'>Пожалуйста</p>
          <Link to='/login' className='text-lime-600 hover:text-lime-400 duration-150 ease-in text-sm font-bold'>авторизуйтесь</Link>
        </div>
    </div>
  )
}