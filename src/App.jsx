import React from 'react';

import 'normalize.css';
import './styles/style.scss';

import { Header } from './components/Header';
import { MainPage } from './components/mainPage/MainPage';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;