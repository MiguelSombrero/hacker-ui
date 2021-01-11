import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import hackersReducer from './reducers/hackersReducer'
import studiesReducer from './reducers/studiesReducer'

const reducer = combineReducers({
  hackers: hackersReducer,
  studies: studiesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store