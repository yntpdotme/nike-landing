import {useEffect, useState} from 'react';

import {sun} from '../assets/icons';
import {moon} from '../assets/icons';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    console.log(theme);
  };

  return (
    <div className="mr-2 flex items-start justify-end max-lg:mr-5 max-lg:flex-1">
      <img
        src={theme === 'dark' ? sun : moon}
        alt="ThemeToggler"
        width={27}
        height={27}
        onClick={handleThemeSwitch}
        className="align-top lg:text-black"
      />
    </div>
  );
};

export default ThemeToggler;
