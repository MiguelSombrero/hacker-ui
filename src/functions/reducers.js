
export const skillByMaxKnowHow = (r, current) => {
  r[current.name] = (r[current.name] && r[current.name].knowHowMonths > current.knowHowMonths) ? r[current.name] : current
  
  return r
}

export const reviewByGreatestCreated = (current, next) =>
  (current.created > next.created) ? current : next

export const skillBySumOfKnowHows = (current, next) =>
  current.knowHowMonths + next.knowHowMonths

