import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default BaseRouter
