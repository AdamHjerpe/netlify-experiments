<template>
  <div>
    <form @submit.prevent="register">
        <input
          type="text"
          placeholder="Name"
          v-model="name"
        >
        <input
          type="email"
          placeholder="Email"
          v-model="email"
        >
        <input
          type="tel"
          placeholder="Phonenumber"
          v-model="phone"
        >
        <div>
          <label for="plusOne">Plus one?</label>
          <input
            id="plusOne"
            type="checkbox"
            v-model="plusOne"
          >
        </div>
        <input
          v-if="plusOne"
          placeholder="Guest Name"
          type="text"
          v-model="guestName"
        >
        <input
          type="submit"
          value="Submit"
          @click="register"
        >
    </form>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  data: () => {
    return {
      name: 'Test',
      email: 'test@test.com',
      phone: '555-5555',
      plusOne: false,
      guestName: '',
      bookings: []
    }
  },
  methods: {
    async register () {
      const newBooking = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        plusOne: this.plusOne,
        guestName: this.guestName
      }
      api().post('/register', {
        body: JSON.stringify(newBooking)
      }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!')
        }
        return res.json()
      }).catch(err => {
        throw err
      })
    }
  },
  mounted: {
    async bookings () {
      // console.log(process.env.VUE_APP_LAMBDA_URL)
      try {
        const response = await api().get('/bookings')
        const incomingBookings = await response.data
        incomingBookings.forEach(booking => {
          this.bookings.push(booking)
        })
        // console.log(json)
      } catch (err) {
        throw err
      }
    },
    componentDidMount () {
    // Fetch the products from the database
      fetch('/.netlify/functions/productRead')
        .then(res => res.json())
        .then(response => {
          // console.log(response.msg)
          const inputs = [...this.state.inputs]
          const bookings = response.data
          bookings.forEach(product => {
            const productProps = this.setProductProps(product)
            inputs.push(productProps)
          })
          this.setState({
            bookings,
            inputs
          })
        })
        .catch(err => console.log('Error retrieving products: ', err))
    }
  }
}
</script>
