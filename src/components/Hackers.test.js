import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import helper from '../setupTests'
import Hackers from './Hackers'

const mockStore = configureStore([]);
 
describe('Hackers component', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      hackers: [
        helper.employee6,
        helper.employee9
      ]
    })

    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Hackers/>
        </BrowserRouter>
      </Provider>
    )
  })
 
  it('should render hackers from state', () => {
    expect(component.container).toHaveTextContent('Miika Somero')
    expect(component.container).toHaveTextContent('Testi Testinen')
  })
})