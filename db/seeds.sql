CREATE TABLE pokemons (
  pokemons_id INT,
  image TEXT,
  name VARCHAR(255),
  type VARCHAR(255),
  disc TEXT,
  health INT,
  attack INT,
  defense INT,
  sp_attack INT,
  sp_defense INT,
  speed INT
)

INSERT INTO pokemons (
  pokemons_id,
  image,
  name,
  type, 
  disc,
  health,
  attack,
  defense,
  sp_attack,
  sp_defense,
  speed
)

VALUES (
  003,
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  'Venusaur',
  'Grass',
  'Venusaur uses its flower to catch the suns rays to convert them into energy, which causes the flower to become more vibrant. The flower releases a soothing scent that attracts Pokémon and calms emotions. This scent becomes stronger after a rainy day.',
  80,
  82,
  83,
  100,
  100,
  80
)

VALUES (
  006,
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  'Charizard',
  'fire',
  'Charizard flies in search of powerful opponents to battle, and its fire will burn hotter as it gains experience. Its fiery breath is capable of melting boulders, massive glaciers, and has been known to accidentally cause forest fires.',
  78,
  84,
  78,
  109,
  85,
  100
)

VALUES (
  009,
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
  'Blastoise',
  'water',
  'The powerful cannons on this Pokémons back are capable of producing water blasts that can pierce steel and concrete and can be used for high-speed charges. Blastoise deliberately makes itself heavy to withstand these powerful blasts and to crush its opponents',
  79,
  83,
  100,
  85,
  105,
  78
)