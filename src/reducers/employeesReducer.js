import { Service } from '../service'

const employeesService = Service('/api/hackers')

const employeesReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_EMPLOYEES':
    return action.employees
  default:
    return state
  }
}
  
export const getEmployees = () => {
  return async dispatch => {
    const employees = await employeesService.getAll()
  
    dispatch({
      type: 'GET_EMPLOYEES',
      employees
    })
  }
}
  
export default employeesReducer