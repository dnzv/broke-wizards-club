import React from 'react';
import Abjuration from '../images/abjuration.png';

const SpellListItem = props => (
  <div style={{ height: 70 }}
       className="flex items-center justify-between
       m-6 px-4 py-4 shadow text-gray-900 text-sm font-medium">
    <img className="h-full rounded-lg" src={Abjuration} alt="School of Abjuration"/>
    <div className="text-xs font-bold">1st</div>
    <div className="flex flex-col">
      <div className="text-base font-bold">Absorb Elements</div>
      <div className="text-xs text-gray-600">Abjuration • S</div>
    </div>
    <div className="">1 Reaction *</div>
    <div className="">1 Round</div>
    <div className="">Self</div>
    <div className="">None</div>
    <div className="">Acid (...)</div>
  </div>
);

export default SpellListItem;