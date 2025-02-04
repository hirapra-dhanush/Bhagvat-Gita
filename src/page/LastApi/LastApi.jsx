import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../App';

function LastApi() {
  const { lang } = useContext(LanguageContext);
  const { number, verseNumber } = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState('');

  async function getApi() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/verses/${verseNumber}/`,
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
      setData(data);
    } catch (error) {
      setError('Failed to load verse.');
      console.log(error.message);
    }
  }

  function getEnglishTranslation() {
    if (!data) return 'No translation found.';

    const foundTranslation = data.translations.find((translationObject) =>
      lang === 'English'
        ? translationObject.language === 'english'
        : translationObject.language === 'hindi'
    );

    if (foundTranslation) {
      return foundTranslation.description;
    }
    return 'No translation found.';
  }

  function getEnglishCommentary() {
    if (!data) return 'No commentary found.';

    const foundCommentary = data.commentaries.find((commentaryObject) =>
      lang === 'English'
        ? commentaryObject.language === 'english'
        : commentaryObject.language === 'hindi'
    );

    if (foundCommentary) {
      return foundCommentary.description;
    }
    return 'No commentary found.';
  }

  useEffect(() => {
    getApi();
  }, [number, verseNumber]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4 sm:p-8 max-w-full md:max-w-[1200px] m-auto'>
      <div>
        <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8'>
          {number}.{verseNumber}
        </p>
        <h2 className='text-center text-orange-500 text-xl sm:text-2xl mb-8'>
          {data.text}
        </h2>
      </div>
      <div>
        <div className='mb-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8'>
            Translation
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-center'>
            {getEnglishTranslation()}
          </p>
        </div>
        <div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8'>
            Commentary
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-center'>
            {getEnglishCommentary()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastApi;
