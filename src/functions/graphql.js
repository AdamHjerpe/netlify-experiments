import { ApolloServer } from 'apollo-server-lambda'

import getDb from '../services/getDb'
import typeDefs from '../graphql/schema/index'
import resolvers from '../graphql/resolvers/index'

const createHandler = async () => {
  const db = await getDb()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db }
  })
  return server.createHandler()
}

export const graphql = (event, context, callback) => {
  createHandler().then(handler => handler(event, context, callback))
}

// exports.handler = server.createHandler()
