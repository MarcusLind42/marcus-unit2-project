import { Profile } from '../models/profile.js'

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
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `Pokemon Trainer ${profile.name}`,
        profile,
      })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
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
  addToTeam
}