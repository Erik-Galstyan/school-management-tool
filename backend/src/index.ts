import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import express from 'express'
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4'
import { schema } from './graphql'
import { context } from './middleware/auth.middleware'
import { createAdminUser } from './services'

const main = async () => {
  dotenv.config()
  const app = express()
  const server = new ApolloServer({ schema })

  try {
    await server.start()
    await createAdminUser()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, { context }),
  )

  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
  })
}

main()
