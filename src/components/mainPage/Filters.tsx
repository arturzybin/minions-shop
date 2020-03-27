import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { IGlobalState } from '../../interfaces';

export function Filters() {
   const dispatch = useDispatch();
   const {eyes, clothes, color} = useSelector((state: IGlobalState) => state.mainPage.filters)


   function handleFilterChange(event: React.FormEvent<HTMLSelectElement>) {
      const target = event.target as HTMLSelectElement
      const filter: string = target.name
      const value: string = target.value
      dispatch(changeFilter(filter, value))
   }


   return (
      <div className="main-page__filters filters">
         <div className="filters__select">
            <select name="eyes" value={eyes} onChange={handleFilterChange}>
               <option value="">Eyes count</option>
               <option value="1">One eye</option>
               <option value="2">Two eyes</option>
            </select>
         </div>

         <div className="filters__select">
            <select name="clothes" value={clothes} onChange={handleFilterChange}>
               <option value="">Clothes type</option>
               <option value="work">Work clothes</option>
               <option value="casual">Casual clothes</option>
            </select>
         </div>

         <div className="filters__select">
            <select name="color" value={color} onChange={handleFilterChange}>
               <option value="">Color</option>
               <option value="yellow">Yellow</option>
               <option value="purple">Purple</option>
            </select>
         </div>
      </div>
   )
}