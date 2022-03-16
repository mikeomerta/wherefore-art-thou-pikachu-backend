import mongoose from 'mongoose'

const pokemonSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  pokedexEntry: { type: String, required: true, maxlength: 1000 },
  image: { type: String, required: true },
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export default Pokemon