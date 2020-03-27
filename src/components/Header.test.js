import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

import { Header } from './Header'


describe('Header should show right saved and bag products count', () => {
   const mockStore = configureStore()

   
   it('shows 0 saved and 0 bag products', () => {
      const state = { products: [{ "status": null }, { "status": null }, { "status": null }, { "status": null }] }
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Header /></Provider>)

      expect(wrap.find('.header__saved-button').text()).toBe('0')
      expect(wrap.find('.header__bag-button').text()).toBe('0')
   })


   it('shows 2 saved and 2 bag products', () => {
      const state = { products: [{ "status": 'saved' }, { "status": 'saved' }, { "status": 'bag' }, { "status": 'bag' }] }
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Header /></Provider>)

      expect(wrap.find('.header__saved-button').text()).toBe('2')
      expect(wrap.find('.header__bag-button').text()).toBe('2')
   })


   it('shows 3 saved and 0 bag products', () => {
      const state = { products: [{ "status": 'saved' }, { "status": 'saved' }, { "status": 'saved' }, { "status": null }] }
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Header /></Provider>)

      expect(wrap.find('.header__saved-button').text()).toBe('3')
      expect(wrap.find('.header__bag-button').text()).toBe('0')
   })
})