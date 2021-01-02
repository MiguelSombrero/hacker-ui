import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './FrontPage'
import Books from './Books'
import Book from './Book'
import Hackers from './Hackers'
import Hacker from './Hacker'

const Router = () =>
    <Switch>
      <Route path='/books/:bookId'>
        <Book />
      </Route>
      <Route path='/books'>
        <Books />
      </Route>
      <Route path='/hackers/:hackerId'>
        <Hacker />
      </Route>
      <Route path='/hackers'>
        <Hackers />
      </Route>
      <Route exact path='/'>
        <FrontPage />
      </Route>
    </Switch>

export default Router