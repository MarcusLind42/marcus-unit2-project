import mongoose from "mongoose";

const Schema = mongoose.Schema

const pokemonTeamSchema = new Schema ({
  names: [{type: Schema.Types.ObjectId, ref: "Pokemon"}],
  trainer: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const PokemonTeam = mongoose.model('PokemonTeam', pokemonTeamSchema)

export {
  PokemonTeam
}