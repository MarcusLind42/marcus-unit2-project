import { Pokemon } from "../models/pokemon.js"
import fetch from 'node-fetch' 

function index(req, res) {
  Pokemon.find({})
    .then(pokemon => {
      res.render('pokemon/index', {
        title: 'All Pokemon'
      })
    }) 
    .catch(err => {
      console.log(err)
      res.redirect('/pokemon')
    })
}

export {
  index
}