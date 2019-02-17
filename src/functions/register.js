// eslint-disable-next-line
import db from '../services/server'

// Load the Product Model
import Booking from '../model/Booking'

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const data = JSON.parse(event.body)
    const { name, email, plusOne, guestName } = data
    // const id = mongoose.Types.ObjectId()
    const booking = {
      // _id: id,
      name: name,
      email: email,
      plusOne: plusOne,
      guestName: guestName
    }
    const response = {
      msg: 'Booking successfully created',
      data: booking
    }

    // Use Product.Model to create a new product
    await Booking.create(booking)

    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log('product.create', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
