function passUserToView(req, res, next) {
  res.locals.user = req.user ? req.user : null
  next()
}

function passProfileToView(req, res, next) {
  res.locals.profile = req.profile ? req.profile : null
  next()
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

export {
  passUserToView,
  passProfileToView,
  isLoggedIn,
}