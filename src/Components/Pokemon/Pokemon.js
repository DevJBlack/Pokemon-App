import React, { useState, useEffect } from 'react'
import './Pokemon.scss'
import { connect } from 'react-redux'
import { allPokemons, getOnePokemons } from '../../redux/reducers/pokemons'
import axios from 'axios'



const Pokemon = (props) => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get('/api/pokemons').then(res => {
      setPokemons(res.data)
    })
  }, [])

  const viewPokemon = (pokemon) => {
    props.history.push(`/onepokemons/${pokemon.pokemons_id}`)
  }

  console.log(pokemons)
  return (
    <div>
      { pokemons.map((pokemon) => {
        return (
          <div key={pokemon.pokemons_id}>
            <div>
              <img onClick={() => viewPokemon(pokemon)} src={pokemon.image} alt=''/>
              <p>{pokemon.name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

let mapStateToProps = reduxState => {
  let { data: pokemons } = reduxState.pokemons
  return { pokemons }
}

let mapToDispatchToProps = {
  getOnePokemons,
  allPokemons
}

export default connect( mapStateToProps, (mapToDispatchToProps) )(Pokemon)