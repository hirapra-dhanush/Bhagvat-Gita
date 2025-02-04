import React, { useContext, useEffect, useState } from 'react';
import { TfiMenuAlt } from 'react-icons/tfi';
import { useNavigate, useParams } from 'react-router-dom';
import { LanguageContext } from '../../../App';

function Chapters() {
  const { lang } = useContext(LanguageContext);
  const [chapters, setChapters] = useState(null);
  const Navigate = useNavigate();
  const { number } = useParams();

  async function getdata() {
    try {
      const response = await fetch(
        'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              'b5fbc1698emshb24e44b27a13d44p1059a3jsn72a9c9fb8f1b',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      setChapters(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
  }, [number]);

  if (!chapters) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='bg-[#FFFFFF] p-4 sm:p-8'>
      <h1 className='text-black font-bold text-2xl sm:text-3xl mb-4 text-center'>
        Chapters
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {chapters.map((valus, index) => (
          <div
            className='p-3 grid gap-2.5 m-3 shadow-black shadow-[2px_1px_35px_-27px] border-2 border-white rounded-2xl hover:cursor-pointer hover:border-[#f89231] hover:filter hover:brightness-110'
            onClick={() => {
              Navigate(`/chapter/${valus.chapter_number}`);
            }}
            key={index}>
            <h2 className='text-[#f89231] font-bold border-2 border-white'>
              {lang === 'English' ? 'Chapter' : 'अध्याय'} {valus.chapter_number}
            </h2>
            <h3>{lang === 'English' ? valus.name_translated : valus.name}</h3>
            <p className='line-clamp-4 mb-2'>
              {lang === 'English'
                ? valus.chapter_summary
                : valus.chapter_summary_hindi}
            </p>
            <div className='flex items-center gap-2'>
              <TfiMenuAlt />
              <p>Verses {valus.verses_count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chapters;
