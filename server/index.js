const express = require('express')
const massive = require('massive')
require('dotenv/config')

const PokemonCtrl = require('./controllers/pokemons')

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive( CONNECTION_STRING ).then(db => {
  app.set('db', db)
    console.log('DataBase Is Secure')
  app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))
})

app.get('/api/pokemons', PokemonCtrl.allPokemons)
app.get('/api/pokemons/:id', PokemonCtrl.getOnePokmons)

app.use(express.json())