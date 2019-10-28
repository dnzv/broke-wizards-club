import React from 'react';
import './App.css';
import Spell from "./components/Spell";

function App() {
    const name = 'Absorb Elements';
    const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores, ex hic laboriosam modi nostrum
            officia provident quis rem similique. Autem dicta ea enim facilis ipsam quasi sapiente tempore ullam. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur enim et incidunt itaque labore
            magnam nulla! Aliquid distinctio dolores eaque eveniet fugit molestiae nesciunt, numquam officiis provident
            rerum sed.`;
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
    return (
        <div>
            <Spell name={ name } description={ description } footnote={ footnote }
                   stats={ stats } classes={ classes } tags={ tags }/>
        </div>
    );
}

export default App;
