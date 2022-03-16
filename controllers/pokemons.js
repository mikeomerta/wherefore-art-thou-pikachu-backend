import { NotFound } from '../lib/errors.js'
import Pokemon from '../models/pokemon.js'

async function pokemonIndex(_req, res) {
  const pokemons = await Pokemon.find()
  return res.status(200).json(pokemons)
}

async function pokemonCreate(req, res) {
  try {
    const createdPokemon = await Pokemon.create(req.body)
    return res.status(200).json(createdPokemon)
  } catch (err) {
    return res.status(422).json(err)
  }
}

async function pokemonShow(req, res) {
  const { pokemonId } = req.params
  try {
    const pokemonToFind = await Pokemon.findById(pokemonId)
    if (!pokemonToFind) {
      throw new NotFound()
    }
    return res.status(200).json(pokemonToFind)
  } catch (err) {
    return res.status(404).json({ message: 'Not Found' })
  }
}

export default {
  index: pokemonIndex,
  create: pokemonCreate,
  show: pokemonShow,
}