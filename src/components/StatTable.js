import React from 'react'
import Abjuration from '../images/abjuration.png'

const StatTable = ({ stats = [], image = false }) => (
  <div className="flex justify-between w-full border-solid border-b-2 border-purple-600 mb-4">
    <div className="flex flex-wrap flex-grow">
      {stats.map(stat => <Stat key={stat.label} label={stat.label} value={stat.value}/>)}
    </div>
    {image ? (<img className="hidden md:block rounded-lg self-end mb-4"
                   style={{ height: 116 }} src={Abjuration} alt="School of Abjuration"/>) : null}
  </div>
)

const Stat = ({ label, value }) => (
  <div className="w-1/2 sm:w-1/4 mb-4">
    <p className="text-sm font-bold">{label}</p>
    <p className="text-sm">{value}</p>
  </div>
)

export default StatTable
