<template>
    <div>
      <detail-header></detail-header>
      <detail></detail>
    </div>
</template>

<script>
import DetailHeader from './components/DetailHeader'
import Detail from './components/Detail'
export default {
  name: 'AddressDetail',
  components: {
    DetailHeader,
    Detail
  }
}
</script>

<style lang="stylus" scoped>

</style>
