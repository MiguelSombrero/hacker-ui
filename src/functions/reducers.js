
export const bySkillMaxKnowHow = (r, current) => {
  r[current.name] = (r[current.name] && r[current.name].knowHowMonths > current.knowHowMonths) ? r[current.name] : current
  
  return r
}