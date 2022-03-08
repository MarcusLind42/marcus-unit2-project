import { Pokemon } from "../models/pokemon.js"
import { Profile } from "../models/profile.js"


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

function addToTeam(req,res) {
  Profile.findById(req.params.id)
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("/pokemon", {
        profile,
        self,
        isSelf
      })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/pokemon');
  })
}

export {
  index,
  show,
  addToTeam,
}