import { gql } from 'apollo-server-lambda'

// Try alternative method for schema
export default gql`
  type Booking {
    _id: ID!
    name: String!
    email: String!
    phone: String!
    plusOne: Boolean!
    guestName: String!
    date: String!
  }  

  input BookingInput {
    name: String!
    email: String!
    phone: String!
    plusOne: Boolean!
    guestName: String!
  }


  type RootMutation {
    register(bookingInput: BookingInput): Booking!
  }
  type RootQuery {
    bookings: [Booking!]!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`
