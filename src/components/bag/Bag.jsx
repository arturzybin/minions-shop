import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeActivePage } from '../../redux/actions';
import { Product } from './Product';
import { NothingThere } from '../NothingThere';

export function Bag() {
   const dispatch = useDispatch();
   let products = useSelector((state) => state.products);

   products = products.filter((product) => product.status === 'bag')
   const productsCount = products.length;
   const amount = products.reduce((acc, product) => acc + product.price, 0);

   products = products.map((product) => (
      <Product product={product} key={product.id} />
   ));

   return (
      <div className="bag">
         <div className="bag__container">
            <div className="bag__title-container">
               <h2 className="bag__title">Bag ({productsCount})</h2>
               <button
                  className="bag__main-page-button"
                  onClick={() => dispatch(changeActivePage('main'))}
               >To main page</button>
            </div>

            <div className="bag__products">
               {products.length ? products : <NothingThere />}
            </div>

            <div className="bag__order order">
               <h3 className="order__title">Total</h3>
               <div className="order__amount">{amount}$</div>
               <div className="order__products-count">{productsCount} minions</div>
               <input type="text" name="email" className="order__email" placeholder="Email" />
               <button className="order__button">Receive order</button>
            </div>
         </div>
      </div>
   )
}