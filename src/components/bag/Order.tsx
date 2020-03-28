import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'email-validator';

import { IProduct } from '../../interfaces';

import { removeProductStatus } from '../../redux/actions';


type TProps = { products: IProduct[] }

export const Order: React.FC<TProps> = ({ products }) => {
   function createOrder(): void {
      if (!products.length) {
         showOrderMessage('Order is empty', 'red')
         return
      }
      if (!validator.validate(email)) {
         showOrderMessage('Invalid email', 'red')
         return
      }

      setEmail('')
      products.forEach((product) => dispatch(removeProductStatus(product.id)))
      showOrderMessage('Success', 'green')
   }


   const [email, setEmail] = useState<string>('');
   const dispatch = useDispatch();

   const productsCount: string = products.length + ((products.length === 1) ? ' minion' : ' minions');
   const amount: number = products.reduce((acc, product) => acc + product.price, 0);


   return (
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
         <a href="#email" className="order__button" onClick={createOrder}>Get order details</a>
         <div className="order__message"></div>
      </div>
   )
}


function showOrderMessage(message: string, color: string) {
   const messageContainer: Element = document.querySelector('.order__message')!
   messageContainer.className = "order__message order__message_color_" + color
   messageContainer.textContent = message;

   setTimeout(() => messageContainer.textContent = null, 3000)
}