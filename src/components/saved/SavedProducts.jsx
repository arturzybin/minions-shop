import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Product } from './Product';
import { changeActivePage } from '../../redux/actions';

export function SavedProducts() {
   const dispatch = useDispatch();
   let products = useSelector((state) => state.products);

   products = products.filter((product) => product.status === 'saved')
   const productsCount = products.length;

   products = products.map((product) => (
      <Product product={product} key={product.id} />
   ));

   return (
      <div className="saved">
         <div className="saved__title-container">
            <h2 className="saved__title">Saved minions ({productsCount})</h2>
            <button
               className="saved__main-page-button"
               onClick={() => dispatch(changeActivePage('main'))}
            >To main page</button>
         </div>
         <div className="saved__products">
            {products}
         </div>
      </div>
   )
}