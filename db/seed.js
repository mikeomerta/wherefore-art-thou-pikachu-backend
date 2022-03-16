import Pokemon from '../models/pokemon.js'
import pokemonData from './data/pokemon.js'
import { connectDb, disconnectDb, truncateDb } from './helpers.js'

async function seed() {
  try {
    await connectDb()
    console.log('Database Connected')
    await truncateDb()
    console.log('Database Dropped')
    const pokemon = await Pokemon.create(pokemonData)
    console.log(`${pokemon.length} Pokemon added to the database`)
    console.log('Go catch them all!')
  } catch (err) {
    console.log('Something went wrong')
    console.log(err)
  }
  disconnectDb()
}

seed()
