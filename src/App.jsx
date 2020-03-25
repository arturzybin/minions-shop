import React from 'react';
import { useSelector } from 'react-redux';

import 'normalize.css';
import './styles/style.scss';

import { Header } from './components/Header';
import { MainPage } from './components/mainPage/MainPage';
import { Footer } from './components/Footer';
import { SavedProducts } from './components/saved/SavedProducts';
import { Bag } from './components/bag/Bag'


function App() {
  const activePage = useSelector((state) => state.app.activePage)
  let activePageComponent
  switch (activePage) {
    case 'saved':
      activePageComponent = <SavedProducts />
      break
    case 'bag':
      activePageComponent = <Bag />
      break
    default:
      activePageComponent = <MainPage />
  }


  return (
    <>
      <Header />
      {activePageComponent}
      <Footer />
    </>
  );
}

export default App;