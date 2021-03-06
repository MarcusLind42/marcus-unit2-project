import { Router } from "express";
import * as pokemonCtrl from "../controllers/pokemon.js";
import { isLoggedIn } from "../middleware/middleware.js";
const router = Router();

router.get("/", isLoggedIn, pokemonCtrl.index);
router.get("/:id", isLoggedIn, pokemonCtrl.show);
router.post("/:id/addtoteam", isLoggedIn, pokemonCtrl.addToTeam);
router.post("/:id/addtoteam2", isLoggedIn, pokemonCtrl.addToTeam);

export { router };
