import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFirstProducts, fetchNewProducts } from '../../redux/actions';
import { MainPageProduct } from './MainPageProduct';


export function MainPageProducts() {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products);
   const isLoading = useSelector((state => state.app.isLoading))

   if (!products.length && !isLoading) {
      dispatch(fetchFirstProducts())
   }

   const productsTemplate = products.map((product) => (
      <MainPageProduct product={product} key={product.id} />
   ));
   
   const nextId = (products.length) ? products[products.length - 1].id + 1 : null
   return (
      <div className="main-page__products">
         { productsTemplate }
         <button
            className="main-page__load-more-button"
            onClick={() => dispatch(fetchNewProducts(nextId))}
         >Load more</button>
      </div>
   )
}