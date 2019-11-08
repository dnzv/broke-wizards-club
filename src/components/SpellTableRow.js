import React from 'react'
import Abjuration from '../images/abjuration.png'
import SpellCard from "./SpellCard"

class SpellTableRow extends React.Component {
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
        <tr className={`shadow ${this.state.show ? 'bg-gray-100' : 'bg-white'}`}>
          <td style={{ width: 72 }} className="px-4 py-2">
            <img style={{ height: 40 }} className="rounded-lg" src={Abjuration} alt="School of Abjuration"/>
          </td>
          <td className="px-4 py-2 text-xs font-bold">{spell.level}</td>
          <td className="px-4 py-2">
            <div className="text-base font-bold">{spell.name}</div>
            <div className="text-xs text-gray-600">{spell.school} • {component.join(', ')}</div>
          </td>
          <td className="px-4 py-2">{spell.castingTime}</td>
          <td className="px-4 py-2">{spell.duration}</td>
          <td className="px-4 py-2">{`${range} ${area}`}</td>
          <td className="px-4 py-2">{spell.attack ? spell.attack : spell.save}</td>
          <td className="px-4 py-2">{spell.damage ? spell.damage : spell.effect}</td>
          <td className="px-2 text-center">
            <button className="text-3xl text-purple-700 focus:outline-none" onClick={this.onToggle}>
              {this.state.show ? '-' : '+'}
            </button>
          </td>
        </tr>
        <tr className="shadow" style={{ display: this.state.show ? 'table-row' : 'none' }}>
          <td colSpan={9}>
            <SpellCard name={spell.name} description={spell.description}
                       higherLevel={spell.higherLevel} footnote={spell.footnote}
                       stats={spell.stats} classes={spell.classes}
                       tags={spell.tags} reference={spell.reference}/>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default SpellTableRow
