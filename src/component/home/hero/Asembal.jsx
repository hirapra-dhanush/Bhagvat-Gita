import React from 'react';
import Hero from './Hero';
import VerseOfTheDay from './VerseOfTheDay';

function Asembal() {
  return (
    <div className='grid gap-4 relative mb-9'>
      <div className='px-4 sm:px-8 lg:px-28'>
        <Hero />
      </div>
      <div className='absolute bottom-12 z-[-1] w-full'>
        <div className='relative'>
          <img
            src='main-background.webp'
            alt=''
            className='w-full h-48 sm:h-64 md:h-96'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img
              src='flower (1).svg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='px-4 sm:px-8 lg:px-28'>
        <VerseOfTheDay />
      </div>
    </div>
  );
}

export default Asembal;
