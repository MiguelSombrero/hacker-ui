
export const skillByMaxKnowHow = (r, current) => {
  r[current.name] = (r[current.name] && r[current.name].knowHowMonths > current.knowHowMonths) ? r[current.name] : current

  return r
}

export const reviewByGreatestCreated = (current, next) =>
  (current.created > next.created) ? current : next

export const skillBySumOfKnowHows = (current, next) =>
  current.knowHowMonths + next.knowHowMonths

export const reviewByCreateDate = (array, review) => {
  const date = review.created.substring(0, 7)

  array[date] = (array[date])
    ? { date: date, count: array[date].count + 1 }
    : { date: date, count: 1 }

  return array
}