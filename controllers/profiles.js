import { Profile } from '../models/profile.js'
import { Pokemon } from '../models/pokemon.js'
import { PokemonTeam } from '../models/pokemon-team.js'

function index(req, res, next) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles: profiles,
      title: "All Pokemon Trainers"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('team')
  .then((profile) => {
    console.log(profile);
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `Pokemon Trainer ${profile.name}`,
        isSelf,
        profile,
      })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}

function createTeam(req, res) {
  PokemonTeam.create({trainer: req.user.profile._id})
    .then(pokemonTeam => {
      pokemonTeam.save()
        .then(function() {
          res.redirect('/pokemon')
        })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}

export {
  index,
  show,
  createTeam,
}