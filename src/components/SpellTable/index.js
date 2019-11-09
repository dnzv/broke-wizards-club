import React from 'react'
import SpellTableHeader from "./SpellTableHeader"
import SpellRow from "./SpellRow"

const SpellTable = ({ spells = [] }) => (
  <table className="w-full table-auto text-sm text-left font-medium">
    <SpellTableHeader/>
    <tbody>
    {spells.map(spell => <SpellRow key={spell.id} spell={spell}/>)}
    </tbody>
  </table>
)

export default SpellTable