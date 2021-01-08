import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import booksReducer from './reducers/booksReducer'
import hackersReducer from './reducers/hackersReducer'
import reviewsReducer from './reducers/reviewsReducer'

const reducer = combineReducers({
  books: booksReducer,
  hackers: hackersReducer,
  reviews: reviewsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store