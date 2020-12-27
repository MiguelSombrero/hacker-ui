import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './FrontPage'
import Books from './Books'
import Book from './Book'
import Employees from './Employees'
import Employee from './Employee'

const Router = () =>
    <Switch>
      <Route path='/books/:bookId'>
        <Book />
      </Route>
      <Route path='/books'>
        <Books />
      </Route>
      <Route path='/employees/:employeeId'>
        <Employee />
      </Route>
      <Route path='/employees'>
        <Employees />
      </Route>
      <Route exact path='/'>
        <FrontPage />
      </Route>
    </Switch>

export default Router