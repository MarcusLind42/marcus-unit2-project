import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema ({
  name: {type: [String], required: true, unique: true},
}, {
  timestamps: true
})



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  pokemonTeam: [{type: Schema.Types.ObjectId, ref: 'Team'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
