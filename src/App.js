import React from 'react'
import './App.css'
import SpellCard from "./components/SpellCard"
import SpellTable from "./components/SpellTable"

function App() {
  const spells = [
    {
      id: 1,
      name: 'Absorb Elements',
      description: `The spell captures some of the incoming energy, 
    lessening its effect on you and storing it for your next melee attack. 
    You have resistance to the triggering damage type until the start of your next turn. 
    Also, the first time you hit with a melee attack on your next turn, 
    the target takes an extra 1d6 damage of the triggering type, and the spell ends.`,
      higherLevel: `When you cast this spell using a spell slot of 2nd level or higher, 
    the extra damage increases by 1d6 for each slot level above 1st.`,
      footnote: '* - which you take when you take acid, cold, fire, lightning, or thunder damage',
      level: 'Cantrip',
      concentration: false,
      castingTime: '1 Reaction *',
      range: 150,
      area: 30,
      verbal: false,
      somatic: true,
      material: null,
      duration: '1 Round',
      school: 'Abjuration',
      attack: null,
      save: null,
      damage: 'Acid (...)',
      effect: null,
      stats: [
        { label: 'level', value: '1st' },
        { label: 'casting time', value: '1 reaction *' },
        { label: 'range/area', value: 'self' },
        { label: 'components', value: 's' },
        { label: 'duration', value: '1 round' },
        { label: 'school', value: 'abjuration' },
        { label: 'attack/save', value: 'none' },
        { label: 'damage/effect', value: 'acid (...)' },
      ],
      classes: [ 'Druid', 'Ranger', 'Sorcerer', 'Wizard' ],
      tags: [ 'Damage', 'Warding' ],
      reference: 'Elemental Evil Player\'s Companion, pg. 150'
    }
  ]
  return (
    <div className="px-2 py-8 md:px-4 lg:px-8 xl:px-64 text-gray-900">
      <SpellTable spells={spells}/>
      <br/>
      <SpellCard name={spells[0].name} description={spells[0].description}
                 higherLevel={spells[0].higherLevel} footnote={spells[0].footnote}
                 stats={spells[0].stats} classes={spells[0].classes}
                 tags={spells[0].tags} reference={spells[0].reference}/>
    </div>
  )
}

export default App
