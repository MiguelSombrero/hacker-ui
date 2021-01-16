import { reviewByGreatestCreated, skillBySumOfKnowHows } from './reducers'

export const skillByKnowHow = (current, next) =>
  current.knowHowMonths > next.knowHowMonths ? -1 : 1

export const employeeBySumOfSkillKnowHows = (current, next) =>
  current.skills.reduce(skillBySumOfKnowHows, 0) > next.skills.reduce(skillBySumOfKnowHows, 0) ? -1 : 1

export const contentByRating = (current, next) =>
  current.rating > next.rating ? -1 : 1

export const reviewByCreated = (current, next) =>
  current.created > next.created ? -1 : 1

export const contentByReviewsCount = (current, next) =>
  current.reviews.length > next.reviews.length ? -1 : 1
