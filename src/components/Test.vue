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
export default {
  data: () => {
    return {
      name: 'Test',
      email: 'test@test.com',
      phone: '555-5555',
      plusOne: false,
      guestName: ''
    }
  },
  methods: {
    register () {
      const newBooking = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        plusOne: this.plusOne,
        guestName: this.guestName
      }
      console.log(process.env)
      fetch(`#{process.env.VUE_APP_LAMBDA_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(newBooking),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!')
        }
        return res.json()
      }).catch(err => {
        console.error(err)
      })
    },
    bookings () {

    }
  }
}
</script>
