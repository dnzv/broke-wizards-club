import React from 'react'

const SpellTableHeader = () => (
  <thead>
  <tr className="text-xs font-bold uppercase tracking-tighter">
    <td className="px-4"/>
    <td className="px-4">level</td>
    <td className="px-4">name</td>
    <td className="px-4 hidden md:table-cell">casting time</td>
    <td className="px-4 hidden md:table-cell">duration</td>
    <td className="px-4 hidden lg:table-cell">range/area</td>
    <td className="px-4 hidden lg:table-cell">attack/save</td>
    <td className="px-4 hidden lg:table-cell">damage/effect</td>
    <td className="px-4"/>
  </tr>
  <tr>
    <td colSpan={9} style={{ fontSize: 8 }}>&nbsp;</td>
  </tr>
  </thead>
)

export default SpellTableHeader