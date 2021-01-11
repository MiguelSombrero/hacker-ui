import { Service } from '../service'

const studiesService = Service('/api/studies')

const initialState = {
  books: [],
  courses: [],
  bookReviews: [],
  courseReviews: []
}

const studiesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_BOOKS':
    return { ...state, books: action.books }
  case 'GET_COURSES':
    return { ...state, courses: action.courses }
  case 'GET_BOOK_REVIEWS':
    return { ...state, bookReviews: action.bookReviews }
  case 'GET_COURSE_REVIEWS':
    return { ...state, courseReviews: action.courseReviews }
  default:
    return state
  }
}

export const getBooks = () => {
  return async dispatch => {
    const books = await studiesService.getResource('/books')

    dispatch({
      type: 'GET_BOOKS',
      books
    })
  }
}

export const getCourses = () => {
  return async dispatch => {
    const courses = await studiesService.getResource('/courses')

    dispatch({
      type: 'GET_COURSES',
      courses
    })
  }
}

export const getBookReviews = () => {
  return async dispatch => {
    const bookReviews = await studiesService.getResource('/books/reviews')

    dispatch({
      type: 'GET_BOOK_REVIEWS',
      bookReviews
    })
  }
}

export const getCourseReviews = () => {
  return async dispatch => {
    const courseReviews = await studiesService.getResource('/courses/reviews')

    dispatch({
      type: 'GET_COURSE_REVIEWS',
      courseReviews
    })
  }
}

export default studiesReducer