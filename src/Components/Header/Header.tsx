import { HeaderProps } from './Header.props';
import { Link } from "react-router-dom";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className="py-5 shadow-lg">
      <nav className={'flex gap-2 items-center justify-center'}>
        <Link to={'/login'} className={'text-2xl'}>Login</Link>
        <Link to={'/today'} className={'text-2xl'}>Today</Link>
        <Link to={'/animals'} className={'text-2xl'}>Animals</Link>
      </nav>
    </header>
  );
}
