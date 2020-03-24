import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';

export function Filters() {
   const dispatch = useDispatch();

   function handleFilterChange(event) {
      const filter = event.target.name
      const value = event.target.value
      dispatch(changeFilter(filter, value))
   }

   return (
      <div className="main-page__filters filters">
         <div className="filters__select">
            <select name="eyes" onChange={handleFilterChange}>
               <option value="">Eyes count</option>
               <option value="1">One eye</option>
               <option value="2">Two eyes</option>
            </select>
         </div>

         <div className="filters__select">
            <select name="clothes" onChange={handleFilterChange}>
               <option value="">Clothes type</option>
               <option value="work">Work clothes</option>
               <option value="casual">Casual clothes</option>
            </select>
         </div>

         <div className="filters__select">
            <select name="color" onChange={handleFilterChange}>
               <option value="">Color</option>
               <option value="yellow">Yellow</option>
               <option value="purple">Purple</option>
            </select>
         </div>
      </div>
   )
}