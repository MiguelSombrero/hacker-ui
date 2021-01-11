import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { IconContext } from 'react-icons'

ReactDOM.render(
  <IconContext.Provider value={{ size: '2rem', color: 'white' }}>
    <Provider store={store} >
      <App />
    </Provider>
  </IconContext.Provider>,
  document.getElementById('root')
)