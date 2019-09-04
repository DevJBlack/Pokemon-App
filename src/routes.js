import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokemon from './Components/Pokemon/Pokemon'

export default (
  <Switch>
    <Route path='/' exact component={Pokemon}/>
  </Switch>
)