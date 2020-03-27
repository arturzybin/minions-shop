import React from 'react';
import { Products } from './Products';
import { Filters } from './Filters';

export const MainPage = () => (
   <div className="main-page">
      <Filters />
      <Products />
   </div>
)