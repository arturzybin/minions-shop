import React from 'react';
import { useDispatch } from 'react-redux';

import { addProductToBag, removeProductStatus } from '../../redux/actions';


export function Product({ product }) {
   const dispatch = useDispatch()

   const { id, title, image, price, label } = product
   const imageSrc = process.env.PUBLIC_URL + '/minions/' + image


   const handleMoveToBag = () => {
      dispatch(addProductToBag(id))
   }
   const handleRemove = () => {
      dispatch(removeProductStatus(id))
   }

   return (
      <div className="saved-product">
         <img src={imageSrc} alt="minion" className="saved-product__image" />
         <h4 className="saved-product__title">{title}</h4>
         
         <div className="saved-product__price-button-container">
            <div className="saved-product__price">{price}$</div>
            <button className="saved-product__move-to-bag-button" onClick={handleMoveToBag}>Move to bag</button>
         </div>

         <button className="saved-product__remove-button" onClick={handleRemove}>&#215;</button>
         {label && <div className={"saved-product__label saved-product__label_type_" + label}>{label}</div>}
      </div>
   )
}