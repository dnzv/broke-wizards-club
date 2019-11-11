import Constants from "./Constants"

export const mapStats = (spell) => {
  return [
    { label: 'LEVEL', value: mapLevel(spell.level) },
    { label: 'CASTING TIME', value: mapTime(spell.castingTime) },
    { label: 'RANGE/AREA', value: mapRangeArea(spell) },
    { label: 'COMPONENTS', value: mapComponents(spell) },
    { label: 'DURATION', value: mapTime(spell.duration) },
    { label: 'SCHOOL', value: Constants.School[spell.school] },
    { label: 'ATTACK/SAVE', value: mapAttackSave(spell) },
    { label: 'DAMAGE/EFFECT', value: mapDamageEffect(spell) },
  ]
}

export const mapLevel = (level) => {
  if (level === 0) return 'Cantrip'
  if (level === 1) return '1st'
  if (level === 2) return '2nd'
  if (level === 3) return '3rd'
  if (level > 3) return `${level}th`
}

export const mapComponents = (spell) => {
  const component = []
  if (spell.verbal) component.push('V')
  if (spell.somatic) component.push('S')
  if (spell.material) component.push('M')
  return component.join(', ')
}

export const mapTime = (time) => {
  const castingTime = []
  if (time.amount > 0) castingTime.push(time.amount)
  castingTime.push(Constants.TimeUnit[time.unit])
  if (time.footnote) castingTime.push('*')
  return castingTime.join(' ')
}

export const mapRangeArea = (spell) => {
  const range = spell.range === 0 ? 'Touch' : (spell.range === null ? 'Self' : `${spell.range} ft`)
  const area = spell.area > 0 ? `(${spell.area} ft)` : ''
  return (`${range} ${area}`).trim()
}

export const mapAttackSave = (spell) => spell.attack ? Constants.Attack[spell.attack] : `${spell.save} Save`

export const mapDamageEffect = (spell, stripped = false) => {
  if (spell.damage) {
    let damage = Constants.DamageType[spell.damageTypes[0]]
    if (spell.damageTypes.length > 1) damage += ' (...)'
    return damage
  }
  if (spell.effect) {
    return Constants.Condition[spell.effect]
  }
  return stripped ? '' : 'None'
}

export const mapFootnotes = (spell) => {
  const footnotes = []
  if (spell.castingTime.footnote) footnotes.push(spell.castingTime.footnote)
  if (spell.duration.footnote) footnotes.push(spell.duration.footnote)
  if (spell.material) footnotes.push(`(${(spell.material || {}).component})`)
  return footnotes
}

export const mapSource = (spell) => `${Constants.Source[spell.source.title]}, pg. ${spell.source.page}`