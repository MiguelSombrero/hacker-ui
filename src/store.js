import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import booksReducer from './reducers/booksReducer'
import employeesReducer from './reducers/employeesReducer'

const reducer = combineReducers({
  books: booksReducer,
  employees: employeesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store