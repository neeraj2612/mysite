import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';

const DarkThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BsFillMoonStarsFill onClick={toggleDarkMode} className={'cursor-pointer text-black md:text-3xl md:mr-5 hover:text-teal-500 ${isDarkMode ? bg-gray-800 : bg-gray-200 }'}/>
  );
};

export default DarkThemeButton;
