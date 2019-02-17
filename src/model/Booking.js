import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BookingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  plusOne: {
    type: Boolean,
    required: true
  },
  guestName: {
    type: String
  }
},
{ timestamps: true }
)

export default mongoose.model('Booking', BookingSchema)
