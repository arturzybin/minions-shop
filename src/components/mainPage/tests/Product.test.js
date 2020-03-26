import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

import { Product } from '../Product'
import { addProductToBag, saveProduct, removeProductStatus } from '../../../redux/actions'


const product = {
   "id": 0,
   "title": "Happy Minion",
   "image": "minion-00.png",
   "price": 31,
   "label": null,
   "eyes": "2",
   "color": "yellow",
   "clothes": "work",
   "status": null
}


describe('Product handles saving and adding to bag', () => {
   const mockStore = configureStore()

   it('saves', () => {
      const store = mockStore({})
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Product product={{...product}} /></Provider>)

      wrap.find('.main-page-product__save-button').simulate('click');
      expect(store.dispatch).toHaveBeenCalledWith(saveProduct(product.id))
   })

   it('adds to bag', () => {
      const store = mockStore({})
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Product product={{...product}} /></Provider>)

      wrap.find('.main-page-product__bag-button').simulate('click');
      expect(store.dispatch).toHaveBeenCalledWith(addProductToBag(product.id))
   })

   it('removes status on save button', () => {
      const store = mockStore({})
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Product product={{...product, status: 'saved'}} /></Provider>)

      wrap.find('.main-page-product__save-button').simulate('click');
      expect(store.dispatch).toHaveBeenCalledWith(removeProductStatus(product.id))
   })

   it('removes status on bag button', () => {
      const store = mockStore({})
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Product product={{...product, status: 'bag'}} /></Provider>)

      wrap.find('.main-page-product__bag-button').simulate('click');
      expect(store.dispatch).toHaveBeenCalledWith(removeProductStatus(product.id))
   })
})