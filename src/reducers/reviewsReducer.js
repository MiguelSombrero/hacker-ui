import { Service } from '../service'

const reviewsService = Service('/api/studies/reviews')

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_REVIEWS':
    return action.reviews
  default:
    return state
  }
}

export const getReviews = () => {
  return async dispatch => {
    const reviews = await reviewsService.getAll()

    dispatch({
      type: 'GET_REVIEWS',
      reviews
    })
  }
}

export default reviewsReducer