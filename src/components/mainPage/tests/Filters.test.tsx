import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

import { Filters } from '../Filters'
import { CHANGE_FILTER } from '../../../redux/types'



describe('Filters component takes values from store', () => {
   const mockStore = configureStore()

   it('takes eyes filter', () => {
      const state = { mainPage: { isLoading: false, filters: {eyes: '1'} }, products: [] }
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Filters /></Provider>)

      expect(wrap.find('.filters__select select[name="eyes"]').instance().value).toBe('1')
   })

   it('takes clothes filter', () => {
      const state = { mainPage: { isLoading: false, filters: {clothes: 'casual'} }, products: [] }
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Filters /></Provider>)

      expect(wrap.find('.filters__select select[name="clothes"]').instance().value).toBe('casual')
   })

   it('takes color filter', () => {
      const state = { mainPage: { isLoading: false, filters: {color: 'purple'} }, products: [] }
      const store = mockStore(state)
      const wrap = mount(<Provider store={store}><Filters /></Provider>)

      expect(wrap.find('.filters__select select[name="color"]').instance().value).toBe('purple')
   })
})



describe('Filters component change filters', () => {
   const mockStore = configureStore()

   it('changes eyes filter', () => {
      const state = { mainPage: { isLoading: false, filters: {} }, products: [] }
      const store = mockStore(state)
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Filters /></Provider>)

      wrap.find('.filters__select select[name="eyes"]').simulate('change', { target: { name: 'eyes', value: '1' } });

      expect(store.dispatch).toHaveBeenCalledWith({type: CHANGE_FILTER, payload: {filter: 'eyes', value: '1'}})
   })

   it('changes clothes filter', () => {
      const state = { mainPage: { isLoading: false, filters: {} }, products: [] }
      const store = mockStore(state)
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Filters /></Provider>)

      wrap.find('.filters__select select[name="clothes"]').simulate('change', { target: { name: 'clothes', value: '1' } });

      expect(store.dispatch).toHaveBeenCalledWith({type: CHANGE_FILTER, payload: {filter: 'clothes', value: '1'}})
   })

   it('changes color filter', () => {
      const state = { mainPage: { isLoading: false, filters: {} }, products: [] }
      const store = mockStore(state)
      const origDispatch = store.dispatch
      store.dispatch = jest.fn(origDispatch)
      const wrap = mount(<Provider store={store}><Filters /></Provider>)

      wrap.find('.filters__select select[name="color"]').simulate('change', { target: { name: 'color', value: '1' } });

      expect(store.dispatch).toHaveBeenCalledWith({type: CHANGE_FILTER, payload: {filter: 'color', value: '1'}})
   })
})