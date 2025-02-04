import React, { useContext } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { LanguageContext } from '../../../App';

function Nav() {
  const { lang, setLang } = useContext(LanguageContext);
  
  function handleChange(e) {
    setLang(e.target.value);
    console.log(e.target.value);
  }

  return (
    <nav className='flex flex-col sm:flex-row sm:justify-between items-center p-4 bg-gray-100'>
      <div className='mb-4 sm:mb-0'>
        <h1 className='font-black text-2xl sm:text-3xl md:text-4xl'>
          {lang === 'English' ? 'Bhagavad Gita' : 'भागवद गीता'}
        </h1>
      </div>
      <ul className='flex flex-col sm:flex-row text-lg sm:text-xl gap-4'>
        <li className='p-2'>
          <a href='#' className='hover:text-orange-500'>Home</a>
        </li>
        <li className='p-2'>
          <a href='#' className='hover:text-orange-500'>About</a>
        </li>
        <li className='p-2'>
          <a href='#' className='hover:text-orange-500'>Contact</a>
        </li>
        <li className='p-2'>
          <a href='#' className='hover:text-orange-500'>Search</a>
        </li>
        <li className='p-2 flex justify-center items-center gap-2'>
          <GrLanguage />
          <select onChange={handleChange} className='bg-white border border-gray-300 rounded p-1'>
            <option value='English'>English</option>
            <option value='Hindi'>Hindi</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
