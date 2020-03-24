import React from 'react'
import { useSelector } from 'react-redux';

import title from '../img/title.svg';
import heart from '../img/heart.svg';
import bag from '../img/bag.svg';


export function Header() {
   const products = useSelector((state) => state.products)
   const savedProductsCount = products.filter((product) => product.status === 'saved').length;
   const bagProductsCount = products.filter((product) => product.status === 'bag').length;

   return (
      <header className="header">
         <div className="header__container">
            <img src={title} alt="title" className="header__title" />

            <button className="header__button header__saved-button">
               <img src={heart} alt="saved" />
               <span className="header__products-count header__saved-count">{savedProductsCount}</span>
            </button>
            
            <button className="header__button header__bag-button">
               <img src={bag} alt="bag" />
               <span className="header__products-count">{bagProductsCount}</span>
            </button>
         </div>
      </header>
   )
}