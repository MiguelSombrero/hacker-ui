import { reviewByGreatestCreated, skillBySumOfKnowHows } from './reducers'

export const skillByKnowHow = (current, next) =>
  current.knowHowMonths > next.knowHowMonths ? -1 : 1

export const employeeBySumOfSkillKnowHows = (current, next) =>
  current.skills.reduce(skillBySumOfKnowHows) > next.skills.reduce(skillBySumOfKnowHows) ? -1 : 1
  
export const bookByReviewCreated = (current, next) =>
  current.reviews.reduce(reviewByGreatestCreated).created > next.reviews.reduce(reviewByGreatestCreated).created ? -1 : 1