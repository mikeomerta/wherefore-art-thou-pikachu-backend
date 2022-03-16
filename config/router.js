import express from 'express'
import pokemons from '../controllers/pokemons.js'

const router = express.Router()

router.route('/pokemon')
  .get(pokemons.index)
  .post(pokemons.create)

router.route('/pokemon/:pokemonId')
  .get(pokemons.show)
  
export default router