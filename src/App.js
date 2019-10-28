import React from 'react';
import './App.css';
import Spell from "./components/Spell";

function App() {
    const name = 'Absorb Elements';
    const description = `The spell captures some of the incoming energy, 
    lessening its effect on you and storing it for your next melee attack. 
    You have resistance to the triggering damage type until the start of your next turn. 
    Also, the first time you hit with a melee attack on your next turn, 
    the target takes an extra 1d6 damage of the triggering type, and the spell ends.`;
    const higherLevel = `When you cast this spell using a spell slot of 2nd level or higher, 
    the extra damage increases by 1d6 for each slot level above 1st.`;
    const footnote = '* - which you take when you take acid, cold, fire, lightning, or thunder damage';
    const statBlock = {
        level: 1,
        castingTime: '1 Reaction *',
        range: 'Self',
        area: 'Self',
        verbal: false,
        somatic: true,
        material: false,
        duration: '1 Round',
        school: 'Abjuration',
        attack: null,
        save: null,
        damage: null,
        damageType: [],
        effect: null
    };
    const stats = [
        { label: 'level', value: '1st' },
        { label: 'casting time', value: '1 reaction *' },
        { label: 'range/area', value: 'self' },
        { label: 'components', value: 's' },
        { label: 'duration', value: '1 round' },
        { label: 'school', value: 'abjuration' },
        { label: 'attack/save', value: 'none' },
        { label: 'damage/effect', value: 'acid' },
    ];
    const classes = [ 'Druid', 'Ranger', 'Sorcerer', 'Wizard' ];
    const tags = [ 'Damage', 'Warding' ];
    const reference = 'Elemental Evil Player\'s Companion, pg. 150';
    return (
        <div>
            <Spell name={ name } description={ description }
                   higherLevel={ higherLevel } footnote={ footnote }
                   stats={ stats } classes={ classes }
                   tags={ tags } reference={ reference }/>
        </div>
    );
}

export default App;
