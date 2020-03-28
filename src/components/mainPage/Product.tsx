import React from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../interfaces';

import heart from '../../img/heart.svg';
import filledHeart from '../../img/filled-heart.svg';
import bag from '../../img/bag.svg';
import filledBag from '../../img/filled-bag.svg';

import { saveProduct, addProductToBag, removeProductStatus } from '../../redux/actions';


type TProps = { product: IProduct }

export const Product: React.FC<TProps> = ({ product }) => {
   const dispatch = useDispatch()

   const { id, title, image, price, label, status }: IProduct = product
   const imageSrc: string = process.env.PUBLIC_URL + '/minions/' + image
   const heartSrc: string = (status === 'saved') ? filledHeart : heart
   const bagSrc: string = (status === 'bag') ? filledBag : bag


   const handleSave = (): void => {
      if (status === 'saved') {
         dispatch(removeProductStatus(id))
         return
      }
      dispatch(saveProduct(id))
   }


   const handleAddToBag = (): void => {
      if (status === 'bag') {
         dispatch(removeProductStatus(id))
         return
      }
      dispatch(addProductToBag(id))
   }


   return (
      <div className="main-page-product">
         <img src={imageSrc} alt="minion" className="main-page-product__image" />
         <h4 className="main-page-product__title">{title}</h4>
         <div className="main-page-product__price-buttons-container">
            <div className="main-page-product__price">{price}$</div>

            <button className="main-page-product__button main-page-product__save-button" onClick={handleSave}>
               <img src={heartSrc} alt="saved" />
            </button>

            <button className="main-page-product__button main-page-product__bag-button" onClick={handleAddToBag}>
               <img src={bagSrc} alt="bag" />
            </button>
         </div>

         {label && <div className={"main-page-product__label main-page-product__label_type_" + label}>{label}</div>}
      </div>
   )
}