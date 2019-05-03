<template>
    <div id="personal">
      <personal-header></personal-header>
      <order-review></order-review>
      <personal-info></personal-info>
      <personal-address></personal-address>
      <personal-safety></personal-safety>
    </div>
</template>

<script>
import PersonalHeader from './components/Header'
import PersonalInfo from './components/Info'
import PersonalAddress from './components/Address'
import OrderReview from './components/OrderReview'
import PersonalSafety from './components/Safety'
export default {
  name: 'Personal',
  components: {
    PersonalHeader,
    PersonalInfo,
    PersonalAddress,
    OrderReview,
    PersonalSafety
  }
}
</script>

<style scoped>
</style>
