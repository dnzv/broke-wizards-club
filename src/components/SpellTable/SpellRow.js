import React from 'react'
import Abjuration from '../../images/abjuration.png'
import SpellRowDetail from "./SpellRowDetail"
import { mapAttackSave, mapComponents, mapDamageEffect, mapLevel, mapRangeArea, mapTime } from "../../utils/SpellUtils"

class SpellRow extends React.Component {
  state = {
    show: false
  }

  onToggle = (e) => {
    e.stopPropagation()
    this.setState({ show: !this.state.show })
  }

  render() {
    const { spell } = this.props
    return (
      <React.Fragment>
        <tr className="shadow" style={{ backgroundColor: this.state.show ? '#f1f0ed' : '#fff' }}>
          <td style={{ minWidth: 50 }} className="pl-2">
            <img style={{ height: 40 }} className="rounded-lg" src={Abjuration} alt="School of Abjuration"/>
          </td>
          <td className="px-1 py-2 md:px-4 text-xs font-bold">{mapLevel(spell.level)}</td>
          <td style={{ maxWidth: 240 }} className="px-1 py-2 md:px-4">
            <div className="text-base font-bold truncate hover:text-purple-500">
              <a href={`/spells/${spell.id}`}>{spell.name}</a>
            </div>
            <div className="text-xs text-gray-600">{spell.school} • {mapComponents(spell, true)}</div>
          </td>
          <td className="px-4 py-2 hidden md:table-cell">{mapTime(spell.castingTime)}</td>
          <td className="px-4 py-2 hidden md:table-cell">{mapTime(spell.duration)}</td>
          <td className="px-4 py-2 hidden lg:table-cell">{mapRangeArea(spell)}</td>
          <td className="px-4 py-2 hidden lg:table-cell">{mapAttackSave(spell)}</td>
          <td className="px-4 py-2 hidden lg:table-cell">{mapDamageEffect(spell)}</td>
          <td className="px-2 text-center" onClick={this.onToggle}>
            <button className="text-3xl text-purple-700 focus:outline-none">
              {this.state.show ? '-' : '+'}
            </button>
          </td>
        </tr>
        <tr style={{ display: this.state.show ? 'table-row' : 'none' }}>
          <td colSpan={9}>
            <SpellRowDetail spell={spell}/>
          </td>
        </tr>
        <tr>
          <td colSpan={9} style={{ fontSize: 8 }}>&nbsp;</td>
        </tr>
      </React.Fragment>
    )
  }
}

export default SpellRow
