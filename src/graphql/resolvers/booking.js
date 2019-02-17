import Booking from '../../model/Booking'

export default {
  register: async (args, req) => {
    console.log(args, req)
    const booking = new Booking({
      name: args.input.name,
      email: args.input.email,
      phone: args.input.phone,
      plusOne: args.input.plusOne,
      guestName: args.input.guestName
    })
    try {
      const result = await booking.save()
      return result
    } catch (err) {
      throw err
    }
  },
  bookings: async () => {
    try {
      const bookings = await Booking.find()
      return bookings.map(booking => booking)
    } catch (err) {
      throw err
    }
  }
}
