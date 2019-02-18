// import mongoose from 'mongoose'
// eslint-disable-next-line
import db from './server'

// Load the Product Model
import Booking from './bookingModel'

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const data = JSON.parse(event.body)
    const { name, email, plusOne, guestName } = data
    const booking = {
      name: name,
      email: email,
      plusOne: plusOne,
      guestName: guestName
    }
    const response = {
      msg: 'Booking successfully created',
      data: booking
    }

    await Booking.create(booking)
    // db.close()
    console.log('Booking created for ' + booking.name) // output to netlify function log
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
