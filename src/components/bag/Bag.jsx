import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeActivePage } from '../../redux/actions';
import { Product } from './Product';
import { NothingThere } from '../NothingThere';
import { Order } from './Order';

export function Bag() {
   const dispatch = useDispatch();
   let products = useSelector((state) => state.products);

   products = products.filter((product) => product.status === 'bag')
   let productsCount = products.length;

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

            <Order products={products} productsCount={productsCount} />
         </div>
      </div>
   )
}