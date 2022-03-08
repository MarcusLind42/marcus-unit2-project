import { Pokemon } from "../models/pokemon.js"
import { Profile } from "../models/profile.js"
import fetch from 'node-fetch' 

function index(req, res) {
  Pokemon.find({})
    .then(pokemon => {
      res.render('pokemon/index', {
        profiles,
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
      profiles,
      pokemon,
      title: "pokemon"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/pokemon')
  })
}

export {
  index,
  show
}