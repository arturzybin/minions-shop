import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IGlobalState, IProduct } from '../../interfaces';

import { changeActivePage } from '../../redux/actions';
import { Product } from './Product';
import { NothingThere } from '../NothingThere';

export function SavedProducts() {
   const dispatch = useDispatch();
   let products: IProduct[] = useSelector((state: IGlobalState) => state.products);

   products = products.filter((product: IProduct) => product.status === 'saved')
   const productsCount: number = products.length;

   const productsTemplate = products.map((product: IProduct) => (
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
            {productsCount ? productsTemplate : <NothingThere />}
         </div>
      </div>
   )
}