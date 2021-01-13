import { skillByKnowHow, employeeBySumOfSkillKnowHows } from './sorting'
import helper from '../setupTests'

describe('Sorting functions work', () => {
  test('skillByKnowHow', () => {
    const greater = helper.java10
    const lesser = helper.java9

    const result = skillByKnowHow(greater, lesser)
    expect(result).toBe(-1)
  })

  test('employeeBySumOfSkillKnowHows', () => {
    const greater = helper.employee37
    const lesser = helper.employee28

    const result = employeeBySumOfSkillKnowHows(greater, lesser)
    expect(result).toBe(-1)
  })
})