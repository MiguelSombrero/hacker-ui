
const sum = (current, next) =>
  current.knowHowMonths + next.knowHowMonths

export const byKnowHow = (current, next) =>
  current.knowHowMonths > next.knowHowMonths ? -1 : 1

export const bySumOfKnowHows = (current, next) =>
  current.skills.reduce(sum) > next.skills.reduce(sum) ? 1 : -1
  