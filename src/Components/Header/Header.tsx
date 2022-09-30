/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeaderProps } from './Header.props';
import {
  Link,
} from "react-router-dom";
import { GiSittingDog } from 'react-icons/gi'


export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (

    <div>
      <header className="flex gap-2 items-center justify-center py-5 shadow-lg mb-[120px]">
        <GiSittingDog size={40} />
        <nav className={'flex gap-2 items-center justify-center'}>
          <Link to={'/login'} className={'text-2xl'}>Login</Link>
          <Link to={'/today'} className={'text-2xl'}>Today</Link>
          <Link to={'/animals'} className={'text-2xl'}>Animals</Link>
        </nav>
      </header>
    </div>

  );
}
