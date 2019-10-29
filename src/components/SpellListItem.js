import React from 'react'
import Abjuration from '../images/abjuration.png'

const SpellListItem = props => (
  <tr className="shadow">
    <td style={{ width: 72 }} className="px-4 py-2">
      <img style={{ height: 40 }} className="rounded-lg" src={Abjuration} alt="School of Abjuration"/>
    </td>
    <td className="px-4 py-2 text-xs font-bold">{props.level}</td>
    <td className="px-4 py-2">
      <div className="text-base font-bold">{props.name}</div>
      <div className="text-xs text-gray-600">{props.school} • {props.component}</div>
    </td>
    <td className="px-4 py-2">{props.time}</td>
    <td className="px-4 py-2">{props.duration}</td>
    <td className="px-4 py-2">{props.range + (props.area ? `/${props.area}` : '')}</td>
    <td className="px-4 py-2">{props.attack ? props.attack : props.save}</td>
    <td className="px-4 py-2">{props.damage ? props.damage : props.effect}</td>
    <td className="px-2 text-center">
      <button className="text-3xl text-purple-700 focus:outline-none">+</button>
    </td>
  </tr>
)

export default SpellListItem
