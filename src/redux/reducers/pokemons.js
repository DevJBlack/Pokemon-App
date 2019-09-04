import axios from 'axios'

const ALL_POKEMONS = 'ALL_POKEMONS'
const ALL_POKEMONS_FULFILLED = 'ALL_POKEMONS_FULFILLED'

const GET_ONE_POKEMONS = 'GET_ONE_POKEMONS'
const GET_ONE_POKEMONS_FULFILLED = 'GET_ONE_POKEMONS_FULFILLED'

let initialState = {
  data: []
}

export default function ( state = initialState, action){
  switch(action.type){
    case ALL_POKEMONS_FULFILLED:
      return { ...state, data: action.payload.data }
    case GET_ONE_POKEMONS_FULFILLED:
      return { ...state, data: action.payload.data }
    default:
      return state
  }
}

export function allPokemons(){
  return {
    type: ALL_POKEMONS,
    payload: axios.get('/api/pokemons')
  }
}

export function getOnePokemons(id){
  return {
    type: GET_ONE_POKEMONS,
    payload: axios.get(`/api/pokemons/${id}`)
  }
}