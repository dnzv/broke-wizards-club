import React from 'react'
import SpellTableHeader from "./SpellTableHeader"
import SpellTableRow from "./SpellTableRow"

const SpellTable = ({ spells = [] }) => (
  <table className="w-full table-auto text-sm text-left font-medium">
    <SpellTableHeader/>
    <tbody>
    {spells.map(spell => (
      <React.Fragment>
        <SpellTableRow spell={spell}/>
        <tr>
          <td colSpan={9} style={{ fontSize: 8 }}>&nbsp;</td>
        </tr>
      </React.Fragment>
    ))}
    </tbody>
  </table>
)

export default SpellTable