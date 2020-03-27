import React from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../interfaces';

import { removeProductStatus, saveProduct } from '../../redux/actions';


type TProps = {product: IProduct}

export function Product({ product }: TProps) {
   const dispatch = useDispatch()

   const { id, title, image, price, label } = product
   const imageSrc: string = process.env.PUBLIC_URL + '/minions/' + image


   const handleSave = () => {
      dispatch(saveProduct(id))
   }
   const handleRemove = () => {
      dispatch(removeProductStatus(id))
   }

   return (
      <div className="bag-product">
         <img src={imageSrc} alt="minion" className="bag-product__image" />
         <h4 className="bag-product__title">{title}</h4>

         <div className="bag-product__price">{price}$</div>
         <button className="bag-product__save-button" onClick={handleSave}>
            Save <span className="bag-product__heart">&#9825;</span>
         </button>

         <button className="bag-product__remove-button" onClick={handleRemove}>&#215;</button>
         {label && <div className={"bag-product__label bag-product__label_type_" + label}>{label}</div>}
      </div>
   )
}