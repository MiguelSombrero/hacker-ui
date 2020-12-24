import { Service } from '../service'

const booksService = Service('/api/books/')

const booksReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_BOOKS':
    return action.books
  default:
    return state
  }
}

export const getBooks = () => {
  return async dispatch => {
    const books = await booksService.getAll()

    dispatch({
      type: 'GET_BOOKS',
      books
    })
  }
}

export default booksReducer