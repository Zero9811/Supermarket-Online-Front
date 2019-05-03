<template>
    <div>
      <personal-header></personal-header>
      <personal-info></personal-info>
      <address></address>
    </div>
</template>

<script>
import PersonalHeader from './components/Header'
import PersonalInfo from './components/Info'
import Address from './components/Address'
export default {
  name: 'Personal',
  components: {
    PersonalHeader,
    PersonalInfo,
    Address
  }
}
</script>

<style scoped>

</style>
