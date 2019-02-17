// eslint-disable-next-line
import db from '../services/server'

// Load the Product Model
import Booking from '../model/Booking'

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    // Use Product.Model to find all products
    const bookings = await Booking.find()
    const response = {
      msg: 'Bookings successfully found',
      data: bookings
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message })
    }
  }
}
