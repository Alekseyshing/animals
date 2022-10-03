/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeaderProps } from './Header.props';
import {
  Link,
} from "react-router-dom";
import { GiSittingDog } from 'react-icons/gi'


export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (

    <div>
      <header className="flex gap-12 items-center justify-center py-5 shadow-lg mb-[120px]">
        <GiSittingDog size={40} className={'hover:text-lime-500 transition-all ease-in-out duration-300'}/>
        <nav className={'flex gap-5 items-center justify-center'}>
          <Link to={'/login'} className={'text-2xl hover:text-lime-500  transition-all ease-in-out duration-300'}>Login</Link>
          <Link to={'/today'} className={'text-2xl hover:text-lime-500  transition-all ease-in-out duration-300'} >Today</Link>
          <Link to={'/animals'} className={'text-2xl hover:text-lime-500  transition-all ease-in-out duration-300'}>Animals</Link>
        </nav>
      </header>
    </div>

  );
}
