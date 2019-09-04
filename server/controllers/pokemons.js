module.exports = {
  allPokemons: async ( req, res ) => {
    try {
      let db = req.app.get('db')
      let pokemons = await db.pokemon_app.get_all_pokemons()
      res.send(pokemons)
    } catch ( error ) {
      console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  getOnePokmons: async( req, res ) => {
    try {
      let db = req.app.get('db')
      const { id } = req.params
      let pokemons = await db.pokemon_app.one_pokemons(id)
      let pokemon = pokemons[0]
      res.send(pokemon)
    } catch ( error ) {
      console.log('error fetching posts:', error)
      res.status(500).send(error) 
  }
  }
}