import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IGlobalState, IProduct } from '../interfaces';

import title from '../img/title.svg';
import heart from '../img/heart.svg';
import bag from '../img/bag.svg';
import { changeActivePage } from '../redux/actions';


export function Header() {
   const dispatch = useDispatch();
   const products: IProduct[] = useSelector((state: IGlobalState) => state.products)
   const savedProductsCount: number = products.filter((product: IProduct) => product.status === 'saved').length;
   const bagProductsCount: number = products.filter((product: IProduct) => product.status === 'bag').length;

   return (
      <header className="header">
         <div className="header__container">
            <img src={title} alt="title" className="header__title" />

            <button
               className="header__button header__saved-button"
               onClick={() => dispatch(changeActivePage('saved'))}
            >
               <img src={heart} alt="saved" />
               <span className="header__products-count header__saved-count">{savedProductsCount}</span>
            </button>
            
            <button
               className="header__button header__bag-button"
               onClick={() => dispatch(changeActivePage('bag'))}
            >
               <img src={bag} alt="bag" />
               <span className="header__products-count">{bagProductsCount}</span>
            </button>
         </div>
      </header>
   )
}