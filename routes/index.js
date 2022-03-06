import { Router } from 'express'
import axios from 'axios'

const router = Router()

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
// })

// router.get('/', (req, res) => {
//   let pokemonUrl = ('https://pokeapi.co/api/v2/pokemon?limit=151')
//   axios(pokemonUrl)
//   .then(res => res.json)
//   .then(allPokemon => console.log(allPokemon),
//     res.render('index', { title: 'Home Page', user: req.user ? req.user : null, pokemonUrl }))
// })

router.get('/', function(req, res) {
  let pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/';
  // Use request to call the API
  axios.get(pokemonUrl).then(response => {
    let pokemon = response.data.results;
    res.render('index', { title: 'Home Page', pokemon: pokemon.slice(0, 151) });
  });
});

export {
  router
}