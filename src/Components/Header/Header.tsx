/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeaderProps } from './Header.props';
import useToken from '../../hooks/useToken';
import { useExecutionsData } from '../../hooks/useExecutions';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Login from '../Login/Login';



export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (

    <div>
      <header className="py-5 shadow-lg mb-[80px]">
        <nav className={'flex gap-2 items-center justify-center'}>
            <Link to={'/login'} className={'text-2xl'}>Login</Link>
            <Link to={'/today'} className={'text-2xl'}>Today</Link>
            <Link to={'/animals'} className={'text-2xl'}>Animals</Link>
        </nav>
      </header>
    </div>

  );
}
