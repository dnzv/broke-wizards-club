import React from 'react'
import './App.css'
import SpellCard from "./components/SpellCard"
import SpellListItem from "./components/SpellListItem"

const School = {
  Abjuration: 'Abjuration',
  Conjuration: 'Conjuration',
  Divination: 'Divination',
  Enchantment: 'Enchantment',
  Evocation: 'Evocation',
  Illusion: 'Illusion',
  Necromancy: 'Necromancy',
  Transmutation: 'Transmutation',
}

const Unit = {
  Action: 'Action',
  BonusAction: 'Bonus Action',
  Reaction: 'Reaction',
  Round: 'Round',
  Hour: 'Hour',
  Minute: 'Minute'
}

function App() {
  const name = 'Absorb Elements'
  const description = `The spell captures some of the incoming energy, 
    lessening its effect on you and storing it for your next melee attack. 
    You have resistance to the triggering damage type until the start of your next turn. 
    Also, the first time you hit with a melee attack on your next turn, 
    the target takes an extra 1d6 damage of the triggering type, and the spell ends.`
  const higherLevel = `When you cast this spell using a spell slot of 2nd level or higher, 
    the extra damage increases by 1d6 for each slot level above 1st.`
  const footnote = '* - which you take when you take acid, cold, fire, lightning, or thunder damage'
  const statBlock = {
    level: '1st',
    concentration: false,
    castingTime: {
      value: 1,
      unit: Unit.Reaction,
      footnote: 'which you take when you take acid, cold, fire, lightning, or thunder damage'
    },
    range: 0,
    area: 0,
    verbal: false,
    somatic: true,
    material: null,
    duration: {
      value: 1,
      unit: Unit.Round
    },
    school: School.Abjuration,
    attack: null,
    save: null,
    damage: {
      type: null,
      value: null
    },
    effect: null
  }
  console.log('stat block', statBlock)
  const stats = [
    { label: 'level', value: '1st' },
    { label: 'casting time', value: '1 reaction *' },
    { label: 'range/area', value: 'self' },
    { label: 'components', value: 's' },
    { label: 'duration', value: '1 round' },
    { label: 'school', value: 'abjuration' },
    { label: 'attack/save', value: 'none' },
    { label: 'damage/effect', value: 'acid (...)' },
  ]
  const classes = [ 'Druid', 'Ranger', 'Sorcerer', 'Wizard' ]
  const tags = [ 'Damage', 'Warding' ]
  const reference = 'Elemental Evil Player\'s Companion, pg. 150'
  return (
    <div className="p-8">
      <table style={{ borderSpacing: '0 15px' }}
             className="w-full table-auto border-separate text-gray-900 text-sm text-left font-medium">
        <tbody>
        <SpellListItem name={name} level={statBlock.level}
                       school={statBlock.school} component={'S'}
                       time={'1 Reaction *'} duration={'1 Round'}
                       range={'Self'} area={null} attack={null}
                       save={null} damage={'Acid (...)'} effect={null}/>
        <SpellListItem name={name} level={statBlock.level}
                       school={statBlock.school} component={'S'}
                       time={'1 Reaction *'} duration={'1 Round'}
                       range={'Self'} area={null} attack={'Ranged'}
                       save={null} damage={'Acid (...)'} effect={null}/>
        </tbody>
      </table>
      <br/>
      <SpellCard name={name} description={description}
                 higherLevel={higherLevel} footnote={footnote}
                 stats={stats} classes={classes}
                 tags={tags} reference={reference}/>
    </div>
  )
}

export default App
