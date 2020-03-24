import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function MainPageProducts() {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products);

   if (!products.length) {
      
   }

   return <div></div>
}