import express from 'express'
import { connectDb } from './db/helpers.js'
import logger from './lib/logger.js'
import router from './config/router.js'
import { port } from './config/environment.js'

const app = express()

app.use(express.json())
app.use('/', logger)
app.use('/api', router)

async function startServer() {
  try {
    await connectDb()
    console.log('Mongo is Connected')
    app.listen(port, () => console.log(`Listening on Port: ${port}`))
  } catch (err) {
    console.log('Something went wrong!')
    console.log(err)
  }
}

startServer()