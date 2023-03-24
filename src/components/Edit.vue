<template>
<div>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Subscription</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="subscription.name" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="subscription.description" required>
                </div>
                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" v-model="subscription.amount" required>
                </div>
                <div class="form-group">
                    <label>Payment Frequency</label>
                    <select id='frequency' class="form-control" v-model="subscription.frequency" required>
                        <option value='weekly'>Weekly</option>
                        <option value='bimonthly'>Bi-monthly</option>
                        <option value='monthly'>Monthly</option>
                        <option value='quarterly'>Quarterly</option>
                        <option value='biannually'>Bi-annually</option>
                        <option value='annually'>Annually</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" @click="addSubscription">Update Subscription</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import db from '../firebaseDb'

export default {
  data () {
    return {
      subscription: {
        key: null,
        name: '',
        description: '',
        amount: '',
        frequency: ''
      }
    }
  },
  created () {
    const id = this.$route.params.id
    db.collection('subscriptions')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.subscription.key = doc.id
          this.subscription.name = doc.data().name
          this.subscription.description = doc.data().description
          this.subscription.amount = doc.data().amount
          this.subscription.frequency = doc.data().frequency
        } else {
          console.log('No such document!')
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  },
  methods: {
    onFormSubmit () {
      db.collection('subscriptions')
        .doc(this.subscription.key)
        .update({
          name: this.subscription.name,
          description: this.subscription.description,
          amount: this.subscription.amount,
          frequency: this.subscription.frequency
        })
        .then(() => {
          console.log('Subscription updated successfully!')
          this.$router.push('/')
        })
        .catch((error) => {
          console.error('Error updating subscription: ', error)
        })
    }
  }
}
</script>
