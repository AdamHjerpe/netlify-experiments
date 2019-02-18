// import mongoose from 'mongoose'
// eslint-disable-next-line
import db from './server'

import Booking from './bookingModel'

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
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
