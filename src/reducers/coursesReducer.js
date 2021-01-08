import { Service } from '../service'

const coursesService = Service('/api/studies/courses')

const coursesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_COURSES':
    return action.courses
  default:
    return state
  }
}

export const getCourses = () => {
  return async dispatch => {
    const courses = await coursesService.getAll()

    dispatch({
      type: 'GET_COURSES',
      courses
    })
  }
}

export default coursesReducer