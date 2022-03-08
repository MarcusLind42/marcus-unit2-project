import { Router } from 'express'
import * as pokemonCtrl from "../controllers/pokemon.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/', pokemonCtrl.index)
router.get("/:id", pokemonCtrl.show)
router.post("/:id/profiles/:id", isLoggedIn,pokemonCtrl.addToTeam)

export {
  router
}