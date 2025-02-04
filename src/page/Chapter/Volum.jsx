import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LanguageContext } from '../../App';

function Volum() {
  const { lang } = useContext(LanguageContext);
  const { number } = useParams();
  const [loading, setLoading] = useState(true);
  const [verses, setVerses] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function goToVerse(verseNumber) {
    navigate(`/chapter/${number}/verse/${verseNumber}`);
  }

  async function getAllVerses() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/verses/`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              'fa01877758msh83537b5a81e1c29p16d732jsnab8ca9c33787',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
          },
        }
      );

      const data = await response.json();
      // console.log(data);
      setVerses(data);
    } catch (error) {
      setError('Failed to load verses.');
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllVerses();
  }, [number]);

  function getTranslatedVerse(verseObject) {
    const foundTranslation = verseObject.translations.find(
      (translationObject) =>
        lang === 'English'
          ? translationObject.language === 'english'
          : translationObject.language === 'hindi'
    );

    if (foundTranslation) {
      return foundTranslation.description;
    }

    return 'No translation found.';
  }

  if (loading) {
    return (
      <div className='p-8'>
        <p className='text-center text-xl font-semibold animate-pulse'>
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-8'>
        <p className='text-center text-xl font-semibold text-red-700'>
          {error}
        </p>
      </div>
    );
  }

  if (verses === null) {
    return (
      <div className='p-8'>
        <p className='text-center text-xl font-semibold text-red-700'>
          Failed to load verses.
        </p>
      </div>
    );
  }

  return (
    <div className='mx-4 sm:mx-8 lg:mx-16'>
      <ul className='flex flex-col gap-4 my-4'>
        {verses.map((verseObject, index) => (
          <li
            key={index}
            onClick={() => goToVerse(verseObject.verse_number)}
            className='grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] p-4 hover:bg-orange-100 cursor-pointer'>
            <p className='text-orange-500 font-semibold'>
              Verse {verseObject.verse_number}
            </p>
            <p>{getTranslatedVerse(verseObject)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Volum;
