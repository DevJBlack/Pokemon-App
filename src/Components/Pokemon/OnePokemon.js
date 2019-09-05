import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OnePokemon = (props) => {
  const [pokemons, setPokemons] = useState({})

  let { id } = props.match.params

  useEffect(() => {
    axios.get(`/api/pokemons/${id}`).then(res => {
      setPokemons(res.data)
    })
  },[id])

  console.log(pokemons.name)
  return (
    <div>
      <img width='300' src={pokemons.image} alt=''/>
      <div>
        <p>{pokemons.name}</p>
        <p>{pokemons.type}</p>
      </div>
      <p>{pokemons.disc}</p>
    </div>
  )
}

export default OnePokemon