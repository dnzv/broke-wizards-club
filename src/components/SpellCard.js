import React from 'react'
import Tag from "./Tag"
import StatTable from './StatTable'
import Card from "./Card"

const SpellCard = props => (
  <Card border>
    <p className="text-2xl font-bold mb-6 capitalize">{props.name}</p>
    <StatTable stats={props.stats} image/>
    <p className="text-sm text-justify mb-4">{props.description}</p>
    <p className="text-sm text-justify mb-4">
      <span className="font-bold">At Higher Levels. </span>{props.higherLevel}
    </p>
    <p className="text-xs italic mb-8">{props.footnote}</p>
    <div className="flex flex-wrap justify-between mb-2">
      <TagList label="Spell Tags:" tags={props.tags}/>
      <TagList label="Available For:" tags={props.classes}/>
    </div>
    <div className="flex flex-row-reverse text-xs italic leading-loose
        border-solid border-t-2 border-purple-600 py-1">{props.reference}</div>
  </Card>
)

const TagList = ({ label, tags = [] }) => (
  <div className="flex flex-wrap mb-1">
    <p className="text-xs leading-loose">{label}</p>
    {tags.map(tag => <Tag key={tag} value={tag}/>)}
  </div>
)

export default SpellCard
