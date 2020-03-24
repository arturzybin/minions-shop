import React from 'react'

import title from '../img/title.svg';
import heart from '../img/heart.svg';
import bag from '../img/shopping-bag.svg';


export function Header() {
   return (
      <header className="header">
         <div className="header__container">
            <img src={title} alt="title" className="header__title" />

            <button className="header__button header__saved-button">
               <img src={heart} alt="saved" />
            </button>
            
            <button className="header__button header__bag-button">
               <img src={bag} alt="bag" />
               <span className="header__bag-count">0</span>
            </button>
         </div>
      </header>
   )
}