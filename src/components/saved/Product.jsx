import React from 'react';
import { useDispatch } from 'react-redux';

import { addProductToBag } from '../../redux/actions';


export function Product({ product }) {
   const dispatch = useDispatch()

   const { id, title, image, price, label } = product
   const imageSrc = process.env.PUBLIC_URL + '/minions/' + image


   const handleMoveToBag = () => {
      dispatch(addProductToBag(id))
   }


   return (
      <div className="saved-product">
         <img src={imageSrc} alt="minion" className="saved-product__image" />
         <h4 className="saved-product__title">{title}</h4>
         
         <div className="saved-product__price-button-container">
            <div className="saved-product__price">{price}$</div>
            <button className="saved-product__button" onClick={handleMoveToBag}>Move to bag</button>
         </div>

         {label && <div className={"saved-product__label saved-product__label_type_" + label}>{label}</div>}
      </div>
   )
}