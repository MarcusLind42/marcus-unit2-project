import mongoose from "mongoose";

const Schema = mongoose.Schema

const pokemonTeamSchema = new Schema ({
  names: [String],
}, {
  timestamps: true
})

const PokemonTeam = mongoose.model('PokemonTeam', pokemonTeamSchema)

export {
  PokemonTeam
}