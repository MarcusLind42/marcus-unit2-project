import { Pokemon } from "../models/pokemon.js"
import fetch from 'node-fetch' 

function index(req, res) {
  Taco.find({})
    .then(tacos => {
      res.render('tacos/index', {
        tacos,
        title: 'All Tacos'
      })
    }) 
    .catch(err => {
      console.log(err)
      res.redirect('/tacos')
    })
}

export {
  pokedex
}