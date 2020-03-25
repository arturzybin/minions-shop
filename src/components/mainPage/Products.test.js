import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'

import { Products } from './Products'


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
}



describe('Products component should render right products count ', () => {

   const mockStore = configureStore([ thunk ])


   it('renders 0 products', () => {
      const state = {...initialState}
      state.products = []
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(0)
   })

   it('renders 3 products', () => {
      const state = {...initialState}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(3)
   })


   it('(eyes filter) renders 2 products', () => {
      const state = {...initialState}
      state.mainPage.filters = {eyes: '2'}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(2)
   })
   it('(eyes filter) renders 1 products', () => {
      const state = {...initialState}
      state.mainPage.filters = {eyes: '1'}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(1)
   })


   it('(color filter) renders 2 products', () => {
      const state = {...initialState}
      state.mainPage.filters = {color: 'yellow'}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(2)
   })
   it('(color filter) renders 1 products', () => {
      const state = {...initialState}
      state.mainPage.filters = {color: 'purple'}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(1)
   })

   
   it('(clothes filter) renders 2 products', () => {
      const state = {...initialState}
      state.mainPage.filters = {clothes: 'work'}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(2)
   })
   it('(clothes filter) renders 1 products', () => {
      const state = {...initialState}
      state.mainPage.filters = {clothes: 'casual'}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)

      expect(wrap.find('.main-page-product')).toHaveLength(1)
   })
})



describe('Products component should fetch products', () => {
   const mockStore = configureStore([ thunk ])

   beforeEach(() => {
      jest.spyOn(global, 'fetch')
   })
   afterEach(() => {
      jest.clearAllMocks()
   })

   it('fetches products if there are not products', () => {
      const state = {...initialState}
      state.products = [];
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)
      expect(global.fetch).toHaveBeenCalledTimes(1);
   })

   it('does NOT fetch products if loading', () => {
      const state = {...initialState}
      state.mainPage.isLoading = true;
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)
      expect(global.fetch).toHaveBeenCalledTimes(0);
   })

   it('does NOT fetch products if there already are products', () => {
      const state = {...initialState}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)
      expect(global.fetch).toHaveBeenCalledTimes(0);
   })

   it('fetches products on load more button click', () => {
      const state = {...initialState}
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Products /></Provider>)
      wrap.find('.main-page__load-more-button').simulate('click')
      expect(global.fetch).toHaveBeenCalledTimes(1);
   })
})