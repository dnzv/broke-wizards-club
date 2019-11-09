import React from 'react'
import StatTable from "./StatTable"
import { mapFootnotes, mapStats } from "../utils/SpellUtils"
import Tag from "./Tag"

const SpellCardBody = ({ spell, image = true }) => (
  <React.Fragment>
    <StatTable stats={mapStats(spell)} image={image}/>
    <div className="text-sm text-justify mb-4 spell-description"
         dangerouslySetInnerHTML={{ __html: spell.description }}/>
    {spell.higherLevel ?
      <p className="text-sm text-justify mb-4">
        <span className="font-bold">At Higher Levels. </span>{spell.higherLevel}
      </p> : null
    }
    <div className="text-xs italic mb-8">
      {mapFootnotes(spell).map(footnote => <p key={footnote}>{footnote}</p>)}
    </div>
    <div className="flex flex-wrap justify-between mb-2">
      <TagList label="Spell Tags:" tags={spell.tags}/>
      <TagList label="Available For:" tags={spell.classes}/>
    </div>
  </React.Fragment>
)

const TagList = ({ label, tags = [] }) => (
  <div className="flex flex-wrap mb-1">
    <p className="text-xs leading-loose">{label}</p>
    {tags.map(tag => <Tag key={tag} value={tag}/>)}
  </div>
)

export default SpellCardBody