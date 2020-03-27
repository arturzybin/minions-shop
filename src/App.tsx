import React from 'react';
import { useSelector } from 'react-redux';

import { IGlobalState } from './interfaces';

import 'normalize.css';
import './styles/style.scss';

import { Header } from './components/Header';
import { MainPage } from './components/mainPage/MainPage';
import { Footer } from './components/Footer';
import { SavedProducts } from './components/saved/SavedProducts';
import { Bag } from './components/bag/Bag'


const App: React.FC = () => {
  const activePage = useSelector((state: IGlobalState) => state.app.activePage)
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