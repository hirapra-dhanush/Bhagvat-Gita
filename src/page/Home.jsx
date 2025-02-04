import React from 'react';
import Asembal from '../component/home/hero/Asembal';
import Form from '../component/home/form/form';
import Chapters from '../component/home/Chapters/Chapters';

function Home() {
  return (
    <>
      <Asembal />
      <Form />
      <div className='px-28 my-10'>
        <Chapters />
      </div>
    </>
  );
}

export default Home;
