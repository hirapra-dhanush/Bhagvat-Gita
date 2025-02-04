import React, { useContext } from 'react';
import { LanguageContext } from '../../../App';

function Form() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className='relative bg-amber-100'>
      <img
        src='main-background.webp'
        alt=''
        className='h-58 w-full'
      />
      <div className='absolute top-0 w-full'>
        <img
          src='newsbg.webp'
          alt=''
          className='w-full h-58'
        />
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4'>
        <h3 className='z-50 mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center'>
          {lang === 'English'
            ? 'Have the Shloka of the Day delivered to your inbox each morning'
            : ' दिन का श्लोक हर सुबह अपने इनबॉक्स में भेजें'}
        </h3>
        <form className='flex flex-col sm:flex-row gap-3.5'>
          <input
            type='text'
            placeholder='Enter Your name'
            className='bg-white px-7 py-2 mb-2 sm:mb-0'
          />
          <input
            type='text'
            placeholder='Enter Your email'
            className='bg-white px-7 py-2 mb-2 sm:mb-0'
          />
          <button
            type='submit'
            className='bg-[#F89231] text-white px-7 py-2 rounded-md'>
            Get Shloka
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
