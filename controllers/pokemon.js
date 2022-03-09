import { Pokemon } from "../models/pokemon.js"
import { Profile } from "../models/profile.js"
import { PokemonTeam } from '../models/pokemon-team.js'

function index(req, res) {
  Pokemon.find({})
    .then(pokemon => {
      res.render('pokemon/index', {
        pokemon,
        title: 'All Pokemon'
      })
    }) 
    .catch(err => {
      console.log(err)
      res.redirect('/pokemon')
    })
}

function show(req, res) {
  Pokemon.findById(req.params.id)
    .then(pokemon => {
      res.render('pokemon/show', {
        pokemon,
        title: "pokemon"
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect('/pokemon')
  })
}

function addToTeam(req, res) {
  Pokemon.findById(req.params.id)
    .then(pokemon => {
      PokemonTeam.findOne({trainer: req.user.profile._id})
        .then(pokemonTeam => {
          console.log("Yo-dle", pokemon);
          pokemonTeam.names.push(pokemon);
          pokemonTeam.save()
            .then(pokemon => {
              console.log('41', pokemon);
              Profile.findById(req.user.profile._id)
                .then(profile => {
                  console.log('Yo', pokemon);
                  pokemon.names.forEach(name => {
                    profile.team.push(name)
                  })
                  // profile.team.push(pokemon.names)
                  profile.save()
                    .then(function() {
                      res.redirect('/pokemon')
                      pokemon 
                    })
                })
            })
        })
        .catch(err => {
          console.log(err)
        })
    })
}

export {
  index,
  show,
  addToTeam,
}