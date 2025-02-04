import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Fast from '../../svg/fast';
import Volum from './volum';
import { LanguageContext } from '../../App';

function Chapter() {
  const { lang } = useContext(LanguageContext);
  const { number } = useParams();
  const [data, setData] = useState(null);

  async function Chapter_Numbar_Api() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'b5fbc1698emshb24e44b27a13d44p1059a3jsn72a9c9fb8f1b',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Chapter_Numbar_Api();
  }, [number]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='relative'>
        <div className='absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]'>
          <Fast />
        </div>
        <div>
          <h2 className='text-center text-amber-600 text-xl sm:text-2xl font-bold'>
            {lang === 'English' ? 'Chapter' : 'अध्याय'} {data.chapter_number}
          </h2>
          <h3 className='mt-7 text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold'>
            {lang === 'English' ? data.name_translated : data.name}
          </h3>
          <div className='flex justify-center'>
            <p className='mt-7 text-center text-gray-800 text-base sm:text-lg max-w-4xl px-4'>
              {lang === 'English'
                ? data.chapter_summary
                : data.chapter_summary_hindi}
            </p>
          </div>
        </div>
      </div>
      <div className='mx-4 sm:mx-10 lg:mx-20 mt-12'>
        <hr />
        <h2 className='py-4 text-center text-lg sm:text-xl'>
          {data.chapter_number} {lang === 'English' ? 'Verses' : 'श्लोक'}
        </h2>
        <hr />
      </div>
      <Volum />
    </>
  );
}

export default Chapter;
