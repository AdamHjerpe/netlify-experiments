// import mongoose from 'mongoose'

// const getDb = async () => {
//   try {
//     mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       uesCreateIndex: true
//     })
//     const db = await mongoose.connection
//     return db
//   } catch (err) {
//     throw err
//   }
// }
const getDb = () => {
  return 'mongo connection'
}

export default getDb
