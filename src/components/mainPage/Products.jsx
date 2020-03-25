import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchFirstProducts, fetchNewProducts } from '../../redux/actions';
import { Product } from './Product';
import { Loading } from './Loading';


export function Products() {
   const dispatch = useDispatch();
   const isLoading = useSelector((state => state.mainPage.isLoading))
   const filters = useSelector((state) => state.mainPage.filters)
   let products = useSelector((state) => state.products);
   const nextId = (products.length) ? products[products.length - 1].id + 1 : null

   if (!products.length && !isLoading) {
      dispatch(fetchFirstProducts())
   }

   products = products.filter((product) => filterProduct(product, filters))

   products = products.map((product) => (
      <Product product={product} key={product.id} />
   ));


   return (
      products.length ?
         <div className="main-page__products">
            {products}
            <button
               className="main-page__load-more-button"
               onClick={() => dispatch(fetchNewProducts(nextId))}
            >Load more</button>
         </div>
         :
         <Loading />
   )
}


function filterProduct(product, filters) {
   for (let filter of Object.keys(filters)) {
      if (!filters[filter]) continue
      if (product[filter] !== filters[filter]) return false
   }
   return true
}