import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './FrontPage'
import Books from './Books'

const Router = ({ books }) =>
    <Switch>
      <Route path='/books'>
        <Books books={books} />
      </Route>

      <Route exact path='/'>
        <FrontPage />
      </Route>
    </Switch>

export default Router