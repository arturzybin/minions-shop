import React from 'react';

import 'normalize.css';
import './styles/style.scss';

import { Header } from './components/Header';
import { MainPage } from './components/mainPage/MainPage';


function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;