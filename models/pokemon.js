import mongoose from "mongoose";

const Schema = mongoose.Schema

const pokemonSchema = new Schema ({
  pokedexId: Number,
  name: String,
  height: Number,
  weight: Number,
  // need front_default
  sprite: String,
  sprite_shiny: String, 
  type1: [String],
  type2: [String],
  description: String,
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema)

export {
  Pokemon
}