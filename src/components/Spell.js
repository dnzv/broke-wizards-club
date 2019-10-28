import React from 'react'

const Spell = props => (
    <div className="m-6 px-6 pt-4 pb-4 shadow border-solid border-t-4 border-purple-600 text-gray-900">
        <p className="text-2xl font-bold mb-6 capitalize">{ props.name }</p>
        <div className="flex flex-wrap border-solid border-b-2 border-purple-600 mb-4">
            { props.stats.map(stat =>
                <div className="w-1/2 md:w-1/4 mb-4">
                    <p className="text-sm font-bold uppercase">{ stat.label }</p><p
                    className="text-sm capitalize">{ stat.value }</p>
                </div>
            ) }
        </div>
        <p className="text-sm text-justify mb-4">{ props.description }</p>
        <p className="text-sm text-justify mb-4">
            <span className="font-bold">At Higher Levels. </span>{ props.higherLevel }
        </p>
        <p className="text-xs italic mb-8">{ props.footnote }</p>
        <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap mb-2">
                <p className="text-xs leading-loose">Spell Tags:</p>
                { props.tags.map(tag =>
                    <div
                        style={ { fontSize: '0.58rem', borderColor: '#cbc6c3' } }
                        className="font-bold uppercase mx-1 mb-1 px-2 py-1
                    border-solid border shadow-inner">{ tag }</div>
                ) }
            </div>
            <div className="flex flex-wrap mb-2">
                <p className="text-xs leading-loose">Available For:</p>
                { props.classes.map(dndClass =>
                    <div
                        style={ { fontSize: '0.58rem', borderColor: '#cbc6c3' } }
                        className="font-bold uppercase mx-1 mb-1 px-2 py-1
                    border-solid border shadow-inner">{ dndClass }</div>
                ) }
            </div>
            <div className="text-xs italic leading-loose mb-2">{ props.reference }</div>
        </div>
    </div>
);

export default Spell