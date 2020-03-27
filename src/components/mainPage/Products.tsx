import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IGlobalState, IProduct } from '../../interfaces';

import { fetchFirstProducts, fetchNewProducts } from '../../redux/actions';
import { Product } from './Product';
import { Loading } from '../Loading';
import { NothingThere } from '../NothingThere';


export function Products() {
   const dispatch = useDispatch();
   const isLoading = useSelector((state: IGlobalState) => state.mainPage.isLoading)
   const filters = useSelector((state: IGlobalState) => state.mainPage.filters)
   let products = useSelector((state: IGlobalState) => state.products);
   const nextId: number | null = (products.length) ? products[products.length - 1].id + 1 : null

   if (!products.length && !isLoading) {
      dispatch(fetchFirstProducts())
   }

   products = products.filter((product: IProduct) => filterProduct(product, filters))
   const productsTemplate = products.map((product: IProduct) => (
      <Product product={product} key={product.id} />
   ));


   return (
      products.length ?
         <div className="main-page__products">
            {productsTemplate}
            <button
               className="main-page__load-more-button"
               onClick={() => dispatch(fetchNewProducts(nextId))}
            >Load more</button>
         </div>
         :
         isLoading ? <Loading /> : <NothingThere />
   )
}


function filterProduct(product, filters) {
   for (let filter of Object.keys(filters)) {
      if ( !filters[filter] ) continue
      if (product[filter] !== filters[filter]) return false
   }
   return true
}