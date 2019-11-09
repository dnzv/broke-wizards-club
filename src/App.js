import React from 'react'
import './App.css'
import SpellCard from "./components/SpellCard"
import SpellTable from "./components/SpellTable"

function App() {
  const spells = [
    {
      "id": "5dc29542b59f074f98e46de6",
      "name": "Acid Splash",
      "level": 0,
      "castingTime": {
        "amount": 1,
        "unit": "Action",
        "footnote": null
      },
      "duration": {
        "amount": 0,
        "unit": "Instantaneous",
        "footnote": null
      },
      "ritual": false,
      "concentration": false,
      "description": "<p>You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p>This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
      "higherLevel": null,
      "attack": null,
      "save": "DEX",
      "damageTypes": [
        "Acid"
      ],
      "damage": true,
      "effect": null,
      "range": 60,
      "area": null,
      "school": "Conjuration",
      "classes": [
        "SORCERER",
        "WIZARD",
        "ARTIFICER"
      ],
      "subClasses": [],
      "verbal": true,
      "somatic": true,
      "material": null,
      "source": {
        "title": "Basic Rules",
        "page": 211
      },
      "tags": [
        "DAMAGE"
      ]
    }
  ]
  return (
    <div className="px-2 py-8 md:px-4 lg:px-8 xl:px-64 text-gray-900">
      <SpellTable spells={spells}/>
      <br/>
      <SpellCard spell={spells[0]}/>
    </div>
  )
}

export default App
