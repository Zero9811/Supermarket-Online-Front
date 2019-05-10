<template>
    <div>
      <address-header></address-header>
      <address-list id="list"></address-list>
    </div>
</template>

<script>
import AddressHeader from './components/Header'
import AddressList from './components/List'
export default {
  name: 'AddressMain',
  components: {
    AddressHeader,
    AddressList
  }
}
</script>

<style>
  #list {
    text-align: left;
    line-height: .35rem;
  }
</style>
