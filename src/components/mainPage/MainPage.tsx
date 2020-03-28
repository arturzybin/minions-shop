import React from 'react';
import { Products } from './Products';
import { Filters } from './Filters';

export const MainPage: React.FC = () => (
   <div className="main-page">
      <Filters />
      <Products />
   </div>
)