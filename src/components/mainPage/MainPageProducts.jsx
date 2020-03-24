import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFirstProducts } from '../../redux/actions';
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
   
   return (
      <div className="main-page__products">
         { productsTemplate }
      </div>
   )
}