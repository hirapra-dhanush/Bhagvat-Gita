import React, { useContext } from 'react';
import { LanguageContext } from '../../../App';

function VerseOfTheDay() {
  const { lang } = useContext(LanguageContext);
  return (
    <div className='bg-[#FFFFFF] p-6 sm:p-8 md:p-12 rounded-2xl shadow-black shadow-[0px_6px_59px_-27px] max-w-full lg:max-w-3xl mx-auto'>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F57903] relative after:content-[''] after:block after:w-[50%] sm:after:w-[70%] md:after:w-[79%] after:h-[3px] after:bg-[#E5E7EB] after:absolute after:right-0 after:top-4.5">
        {lang === 'English' ? 'Verse of the day ' : 'आज का श्लोक'} - BG 1.29
      </h2>
      <p className='text-[#9CA3B2] p-3.5'>
        {lang === 'English'
          ? 'My limbs fail, my mouth is parched, my body quivers, and my hair stands on end.'
          : '।।1.32।। हे कृष्ण! मैं न तो विजय चाहता हूँ, न राज्य चाहता हूँ और न सुखों को ही चाहता हूँ। हे गोविन्द! हमलोगों को राज्य से क्या लाभ? भोगों से क्या लाभ? अथवा जीने से भी क्या लाभ? '}
      </p>
      <a
        href=''
        className='font-bold text-lg sm:text-xl'>
        {lang === 'English' ? 'See more' : 'और देखें '}
      </a>
    </div>
  );
}

export default VerseOfTheDay;
