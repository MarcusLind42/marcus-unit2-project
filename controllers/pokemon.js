import { Pokemon } from "../models/pokemon.js"
import { Profile } from "../models/profile.js"
import { PokemonTeam } from '../models/pokemon-team.js'

function index(req, res) {
  Pokemon.find({})
    .then(pokemon => {
        Profile.findById(req.user.profile.id)
          .then(profile => {
            res.render('pokemon/index', {
              profile,
              pokemon,
              title: 'All Pokemon'
            })
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
          pokemonTeam.names.push(pokemon);
          pokemonTeam.save()
            .then(savedpokemonTeam => {
              Profile.findById(req.user.profile._id)
                .then(profile => {
                  console.log("saved", savedpokemonTeam);
                  console.log("profileteam", pokemon );
                  profile.team.push(pokemon)
                  profile.save()
                    .then(function() {
                      res.redirect('/pokemon')
                    })
                })
            })
          })
      .catch(err => {
          console.log(err)
          res.redirect('/pokemon')
    })
  })
}



export {
  index,
  show,
  addToTeam,
}