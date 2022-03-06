import { Pokemon } from "../models/pokemon.js"
import fetch from 'node-fetch' 

router.get('/', (req, res) => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res => res.json)
  .then(allPokemon => console.log(allPokemon))
})

export {
  pokedex
}