import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'email-validator';

import { changeActivePage, removeProductStatus } from '../../redux/actions';
import { Product } from './Product';
import { NothingThere } from '../NothingThere';

export function Bag() {
   function createOrder() {
      if (!validator.validate(email)) {
         showOrderMessage('Invalid email')
         return
      }
      if (!products.length) {
         showOrderMessage('Order is empty')
         return
      }
      
      setEmail('')
      products.forEach((product) => dispatch(removeProductStatus(product.id)))
   }


   const [email, setEmail] = useState('');

   const dispatch = useDispatch();
   let products = useSelector((state) => state.products);

   products = products.filter((product) => product.status === 'bag')
   let productsCount = products.length;
   productsCount += (productsCount === 1) ? ' minion' : ' minions';
   const amount = products.reduce((acc, product) => acc + product.price, 0);

   const productsTemplate = products.map((product) => (
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
               {products.length ? productsTemplate : <NothingThere />}
            </div>

            <div className="bag__order order">
               <h3 className="order__title">Total</h3>
               <div className="order__amount">{amount}$</div>
               <div className="order__products-count">{productsCount}</div>
               <input
                  className="order__email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text" name="email" placeholder="Email"
               />
               <button className="order__button" onClick={createOrder}>Receive order</button>
               <div className="order__message"></div>
            </div>
         </div>
      </div>
   )
}

function showOrderMessage(message) {
   document.querySelector('.order__message').textContent = message;
   setTimeout(() => document.querySelector('.order__message').textContent = null, 3000)
}