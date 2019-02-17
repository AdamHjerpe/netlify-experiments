import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './schema/index'
import resolvers from './resolvers/booking'

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
