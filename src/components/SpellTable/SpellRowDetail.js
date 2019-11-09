import React from 'react'
import Tag from "../Tag"
import StatTable from '../StatTable'
import Card from "../Card"

const SpellRowDetail = props => (
  <Card>
    <StatTable stats={props.stats}/>
    <p className="text-sm text-justify mb-4">{props.description}</p>
    <p className="text-sm text-justify mb-4">
      <span className="font-bold">At Higher Levels. </span>{props.higherLevel}
    </p>
    <p className="text-xs italic mb-8">{props.footnote}</p>
    <div className="flex flex-wrap justify-between mb-2">
      <TagList label="Spell Tags:" tags={props.tags}/>
      <TagList label="Available For:" tags={props.classes}/>
    </div>
    <div className="flex flex-col md:flex-row-reverse text-xs justify-between italic leading-loose py-1 items-center">
      <span>{props.reference}</span>
      <button className="font-bold tracking-tighter bg-purple-600 text-gray-100
      rounded-sm px-4 py-1 focus:outline-none uppercase mt-2 md:mt-0 w-full md:w-auto">
        View Details Page
      </button>
    </div>
  </Card>
)

const TagList = ({ label, tags = [] }) => (
  <div className="flex flex-wrap mb-1">
    <p className="text-xs leading-loose">{label}</p>
    {tags.map(tag => <Tag key={tag} value={tag}/>)}
  </div>
)

export default SpellRowDetail
