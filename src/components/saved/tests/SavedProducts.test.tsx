import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'

import { SavedProducts } from '../SavedProducts'
import { changeActivePage } from '../../../redux/actions'
import { IGlobalState } from '../../../interfaces'

const initialState = {
   mainPage: { isLoading: false, filters: {} },
   products: [
      {
         "id": 0,
         "title": "Happy Minion",
         "image": "minion-00.png",
         "price": 31,
         "label": null,
         "eyes": "2",
         "color": "yellow",
         "clothes": "work",
         "status": null
      },
      {
         "id": 1,
         "title": "Fighting Minion",
         "image": "minion-01.png",
         "price": 89,
         "label": "hot",
         "eyes": "2",
         "color": "yellow",
         "clothes": "work",
         "status": null
      },
      {
         "id": 2,
         "title": "Smart Minion",
         "image": "minion-02.png",
         "price": 15,
         "label": null,
         "eyes": "1",
         "color": "purple",
         "clothes": "casual",
         "status": null
      }
   ]
} as IGlobalState


describe('SavedProducts component should render right products count ', () => {
   const mockStore = configureStore([thunk])


   it('renders 0 products', () => {
      const state = { ...initialState } as IGlobalState
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><SavedProducts /></Provider>)

      expect(wrap.find('.saved-product')).toHaveLength(0)
   })

   it('renders 1 product', () => {
      const state = { ...initialState } as IGlobalState
      state.products[0].status = 'saved'
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><SavedProducts /></Provider>)

      expect(wrap.find('.saved-product')).toHaveLength(1)

      initialState.products[0].status = null
   })
})



test('SavedProducts component should change active page', () => {
   const mockStore = configureStore()
   const store = mockStore(initialState)
   const origDispatch = store.dispatch
   store.dispatch = jest.fn(origDispatch)
   const wrap = mount(<Provider store={store}><SavedProducts /></Provider>)

   wrap.find('.saved__main-page-button').simulate('click');
   expect(store.dispatch).toHaveBeenCalledWith(changeActivePage('main'))
})


test('SavedProducts component should render NothingThere if there is no products', () => {
   const mockStore = configureStore()
   const state = { ...initialState } as IGlobalState
   const store = mockStore(state)
   const wrap = mount(<Provider store={store}><SavedProducts /></Provider>)

   expect(wrap.find('.nothing-there')).toHaveLength(1)
})