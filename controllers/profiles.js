import { Profile } from '../models/profile.js'

function index(req, res, next) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles: profiles,
      name: req.query.name,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}

export {
  index,
}