import helper from '../setupTests'
import {
  skillByKnowHow,
  employeeBySumOfSkillKnowHows,
  contentByRating
} from './sorting'

describe('Sorting functions work', () => {
  test('skillByKnowHow', () => {
    const greater = helper.java2
    const lesser = helper.java1

    const negative = skillByKnowHow(greater, lesser)
    expect(negative).toBe(-1)

    const positive = skillByKnowHow(lesser, greater)
    expect(positive).toBe(1)
  })

  test('employeeBySumOfSkillKnowHows', () => {
    const greater = helper.employee9
    const lesser = helper.employee6

    const negative = employeeBySumOfSkillKnowHows(greater, lesser)
    expect(negative).toBe(-1)

    const positive = employeeBySumOfSkillKnowHows(lesser, greater)
    expect(positive).toBe(1)
  })

  test('contentByRating', () => {
    const greater = helper.book50
    const lesser = helper.book47

    const negative = contentByRating(greater, lesser)
    expect(negative).toBe(-1)

    const positive = contentByRating(lesser, greater)
    expect(positive).toBe(1)
  })
})