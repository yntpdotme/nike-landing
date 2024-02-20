import { useState } from 'react';

import { navLinks } from '../constants';
import {hamburger} from '../assets/icons';
import {close} from '../assets/icons';


const DropdownMenu = () => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
    console.log(isDropdownOpen);
	};
	
	return (
    <>
      <div className="hidden max-lg:block" onClick={toggleDropdown}>
        <img
          src={isDropdownOpen ? close : hamburger}
          alt="hamburger icon"
          width={25}
          height={25}
        />
      </div>

      {isDropdownOpen && (
        <ul className="max-container absolute right-0 top-12 z-30 flex w-full flex-col items-center justify-center gap-4 rounded bg-white p-4 shadow-2xl md:w-[50%]">
          {navLinks.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray hover:font-medium hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default DropdownMenu