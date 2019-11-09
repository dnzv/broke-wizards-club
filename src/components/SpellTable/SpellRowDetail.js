import React from 'react'
import Card from "../Card"
import SpellCardBody from "../SpellCardBody"
import { mapSource } from "../../utils/SpellUtils"

const SpellRowDetail = ({ spell }) => (
  <Card>
    <SpellCardBody spell={spell} image={false}/>
    <div className="flex flex-col md:flex-row-reverse text-xs justify-between italic leading-loose py-1 items-center">
      <span>{mapSource(spell)}</span>
      <a href={`/spells/${spell.id}`} className="font-bold tracking-tighter bg-purple-600 text-gray-100
      rounded-sm px-4 py-1 focus:outline-none uppercase mt-2 md:mt-0 w-full md:w-auto not-italic">
        View Details Page
      </a>
    </div>
  </Card>
)

export default SpellRowDetail
