import {headerLogo} from '../assets/images';
import {navLinks} from '../constants';
import DropdownMenu from './DropdownMenu';
import ThemeToggler from './ThemeToggler';

const Nav = () => {
  return (
    <header className="padding-x absolute z-30 w-full py-8">
      <nav className="max-container relative flex items-center justify-between">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 h-[29px] w-[129px]"
          />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray hover:font-medium hover:text-black dark:text-slate-200 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggler />

        <div className="flex gap-2 font-montserrat text-lg font-medium leading-normal max-lg:hidden wide:mx-8 dark:text-white-400">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <DropdownMenu />
      </nav>
    </header>
  );
};

export default Nav;
