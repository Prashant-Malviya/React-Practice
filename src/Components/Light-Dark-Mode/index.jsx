import React from 'react';
import useLocalStorage from './useLocalStorage';

function  LightAndDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`light-dark-mode ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} h-96` }>
      <div className='container flex justify-center items-center flex-col gap-8'>
        <p className='text-5xl'>Hello World</p>
        <h1>This is Prashant, How Can I Help You</h1>
        <button
          onClick={handleToggleTheme}
          className={`px-4 py-2 rounded-md font-semibold ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default LightAndDarkMode;
