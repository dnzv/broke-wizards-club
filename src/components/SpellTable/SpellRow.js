import React from 'react'
import Abjuration from '../../images/abjuration.png'
import SpellRowDetail from "./SpellRowDetail"

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
    const component = []
    if (spell.verbal) component.push('V')
    if (spell.somatic) component.push('S')
    if (spell.material) component.push('M')
    const range = spell.range === 0 ? 'Touch' : (spell.range === null ? 'Self' : `${spell.range} ft`)
    const area = spell.area > 0 ? `(${spell.area} ft)` : ''

    return (
      <React.Fragment>
        <tr className="shadow cursor-pointer" onClick={this.onToggle}
            style={{ backgroundColor: this.state.show ? '#f1f0ed' : '#fff' }}>
          <td style={{ minWidth: 50 }} className="pl-2">
            <img style={{ height: 40 }} className="rounded-lg" src={Abjuration} alt="School of Abjuration"/>
          </td>
          <td className="px-1 py-2 md:px-4 text-xs font-bold">{spell.level}</td>
          <td style={{ maxWidth: 150 }} className="px-1 py-2 md:px-4">
            <div className="text-base font-bold truncate">{spell.name}</div>
            <div className="text-xs text-gray-600">{spell.school} • {component.join(', ')}</div>
          </td>
          <td className="px-4 py-2 hidden md:table-cell">{spell.castingTime}</td>
          <td className="px-4 py-2 hidden md:table-cell">{spell.duration}</td>
          <td className="px-4 py-2 hidden lg:table-cell">{`${range} ${area}`}</td>
          <td className="px-4 py-2 hidden lg:table-cell">{spell.attack ? spell.attack : spell.save}</td>
          <td className="px-4 py-2 hidden lg:table-cell">{spell.damage ? spell.damage : spell.effect}</td>
          <td className="px-2 text-center">
            <button className="text-3xl text-purple-700 focus:outline-none">
              {this.state.show ? '-' : '+'}
            </button>
          </td>
        </tr>
        <tr style={{ display: this.state.show ? 'table-row' : 'none' }}>
          <td colSpan={9}>
            <SpellRowDetail stats={spell.stats} classes={spell.classes}
                            description={spell.description} tags={spell.tags}
                            footnote={spell.footnote} reference={spell.reference}
                            higherLevel={spell.higherLevel} />
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
