import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import booksReducer from './reducers/booksReducer'
import hackersReducer from './reducers/hackersReducer'

const reducer = combineReducers({
  books: booksReducer,
  hackers: hackersReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store