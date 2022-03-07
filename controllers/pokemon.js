import { Pokemon } from "../models/pokemon.js"
import fetch from 'node-fetch' 

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

export {
  index,
  show
}