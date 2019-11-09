import React from 'react'
import Card from "./Card"
import { mapSource } from "../utils/SpellUtils"
import SpellCardBody from "./SpellCardBody"

const SpellCard = ({ spell }) => {
  return (
    <Card border>
      <p className="text-2xl font-bold mb-6 capitalize">{spell.name}</p>
      <SpellCardBody spell={spell}/>
      <div className="flex flex-row-reverse text-xs italic leading-loose
        border-solid border-t-2 border-purple-600 py-1">{mapSource(spell)}</div>
    </Card>
  )
}

export default SpellCard
