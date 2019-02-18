import mongoose from 'mongoose'
// eslint-disable-next-line no-unused-vars
if (process.env.NODE_env !== 'production') {
  require('dotenv-flow').config()
}

// Initialize connection to database
const dbUrl = process.env.MONGO_URL
const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false
}

// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

export default db
