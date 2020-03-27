import React from 'react';
import minion from '../img/minion.svg';

export const NothingThere: React.FC = () => (
   <div className="nothing-there">
      <h6 className="nothing-there__title">Nothing there</h6>
      <img src={minion} alt="minion" className="nothing-there__image" />
   </div>
)