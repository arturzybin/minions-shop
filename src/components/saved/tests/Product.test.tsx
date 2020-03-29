import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

import { Product } from '../Product'
import { addProductToBag, removeProductStatus } from '../../../redux/actions'


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


describe('Product changes status on buttons click', () => {
   const mockStore = configureStore()

   it('moves to bag', () => {
      const store = mockStore({})
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Product product={{...product}} /></Provider>)

      wrap.find('.saved-product__move-to-bag-button').simulate('click');
      expect(store.dispatch).toHaveBeenCalledWith(addProductToBag(product.id))
   })

   it('removes status', () => {
      const store = mockStore({})
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Product product={{...product, status: 'saved'}} /></Provider>)

      wrap.find('.saved-product__remove-button').simulate('click');
      expect(store.dispatch).toHaveBeenCalledWith(removeProductStatus(product.id))
   })
})