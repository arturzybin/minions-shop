import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IGlobalState, IProduct } from '../../interfaces';

import { changeActivePage } from '../../redux/actions';
import { Product } from './Product';
import { NothingThere } from '../NothingThere';
import { Order } from './Order';


export const Bag: React.FC = () => {
   const dispatch = useDispatch();
   let products: IProduct[] = useSelector((state: IGlobalState) => state.products);

   products = products.filter((product: IProduct) => product.status === 'bag')
   let productsCount: number = products.length;

   const productsTemplate = products.map((product: IProduct) => (
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
               {productsCount ? productsTemplate : <NothingThere />}
            </div>

            <Order products={products} />
         </div>
      </div>
   )
}