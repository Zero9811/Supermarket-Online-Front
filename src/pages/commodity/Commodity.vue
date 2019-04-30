<template>
    <div>
      <commodity-header></commodity-header>
      <commodity-catalog></commodity-catalog>
      <commodity-details></commodity-details>
    </div>
</template>

<script>
import CommodityHeader from './components/Header'
import CommodityCatalog from './components/Catalog'
import CommodityDetails from './components/Details'
import HomeHeader from '../home/components/Header'
export default {
  name: 'Commodity',
  components: {
    CommodityHeader,
    CommodityCatalog,
    CommodityDetails,
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
