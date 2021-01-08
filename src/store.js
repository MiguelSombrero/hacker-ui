import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import booksReducer from './reducers/booksReducer'
import hackersReducer from './reducers/hackersReducer'
import reviewsReducer from './reducers/reviewsReducer'
import coursesReducer from './reducers/coursesReducer'

const reducer = combineReducers({
  books: booksReducer,
  hackers: hackersReducer,
  reviews: reviewsReducer,
  courses: coursesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store