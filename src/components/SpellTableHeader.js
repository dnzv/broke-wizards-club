import React from 'react'

const SpellTableHeader = () => (
  <thead>
  <tr className="text-sm font-bold uppercase">
    <td className="px-4"/>
    <td className="px-4">level</td>
    <td className="px-4">name</td>
    <td className="px-4">casting time</td>
    <td className="px-4">duration</td>
    <td className="px-4">range/area</td>
    <td className="px-4">attack/save</td>
    <td className="px-4">damage/effect</td>
    <td className="px-4"/>
  </tr>
  <tr>
    <td colSpan={9} style={{ fontSize: 8 }}>&nbsp;</td>
  </tr>
  </thead>
)

export default SpellTableHeader