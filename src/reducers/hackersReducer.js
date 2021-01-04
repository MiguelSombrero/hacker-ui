import { Service } from '../service'

const hackersService = Service('/api/hackers')

const hackersReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_HACKERS':
    return action.hackers
  default:
    return state
  }
}

export const getHackers = () => {
  return async dispatch => {
    const hackers = await hackersService.getAll()

    dispatch({
      type: 'GET_HACKERS',
      hackers
    })
  }
}

export default hackersReducer