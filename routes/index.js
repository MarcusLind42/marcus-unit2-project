import { Router } from 'express'
import fetch from "node-fetch"
import { Pokemon } from '../models/pokemon.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})

// What I used to pull data from the PokeAPI to my database

router.get('/add', async function (req, res) {
  const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${req.query.pokemon}`)

  const data = await response.json()
  
  const pokemon = data
  
  const pokemonId = pokemon.id
  const pokemonName = pokemon.name
  const pokemonHeight = pokemon.height
  const pokemonWeight = pokemon.weight 
  const pokemonSprite = pokemon.sprites.front_default
  const pokemonSpriteShiny = pokemon.sprites.front_shiny
  const pokemonType1 = pokemon.types[0].type.name

  const responseDescription = await fetch(`http://pokeapi.co/api/v2/pokemon-species/${req.query.pokemon}`)

  const data2 = await responseDescription.json()

  const pokemonText = data2

  const pokemonDescription = pokemonText.flavor_text_entries[2].flavor_text
  
  Pokemon.create({
    pokedexId: pokemonId,
    name: pokemonName,
    height: pokemonHeight,
    weight: pokemonWeight,
    sprite: pokemonSprite,
    sprite_shiny: pokemonSpriteShiny,
    type1: pokemonType1,
    description: pokemonDescription
  })
  res.redirect('/')
})

export {
  router
}