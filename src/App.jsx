// App.js
import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout';
import Chapter from './page/Chapter/Chapter';
import Home from './page/Home';
import LastApi from './page/LastApi/LastApi';
import Volum from './page/Chapter/volum';

export const LanguageContext = createContext();

function App() {
  const [lang, setLang] = useState('English');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Layout />}>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/Chapter/:number'
              element={<Chapter />}
            />
            <Route
              path='/chapter/:number/verse/:verseNumber'
              element={<LastApi />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
