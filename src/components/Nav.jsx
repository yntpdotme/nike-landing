import {hamburger} from '../assets/icons';
import {headerLogo} from '../assets/images';
import {navLinks} from '../constants';

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
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
                className="font-montserrat text-lg leading-normal text-slate-gray hover:font-medium hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 font-montserrat text-lg font-medium leading-normal max-lg:hidden wide:mx-12">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
