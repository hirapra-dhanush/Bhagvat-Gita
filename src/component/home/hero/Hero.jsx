import React, { useContext } from 'react';
import { LanguageContext } from '../../../App';

function Hero() {
  const { lang } = useContext(LanguageContext);
  return (
    <div className='relative my-10'>
      <img
        src='banner2.webp'
        alt=''
        className='w-full rounded-2xl'
      />
      <div className='absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 px-4'>
        <h3 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white'>
          {lang === 'English' ? 'Experience the Gita' : 'भगवत गीता का अनुभव करें'}
          <br />
          <span className='text-[#FEDF89]'>
            {lang === 'English' ? 'Anywhere, Anytime' : 'कहीं भी कभी भी'}
          </span>
        </h3>
        <div className='flex justify-center items-center mt-3'>
          <button
            type='button'
            className='bg-white p-3.5 text-black text-sm sm:text-base md:text-lg font-normal rounded-2xl'>
            Read now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
