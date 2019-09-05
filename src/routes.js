import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokemon from './Components/Pokemon/Pokemon'
import OnePokemon from './Components/Pokemon/OnePokemon'

export default (
  <Switch>
    <Route path='/' exact component={Pokemon}/>
    <Route path='/onepokemons/:id'  component={OnePokemon}/>
  </Switch>
)