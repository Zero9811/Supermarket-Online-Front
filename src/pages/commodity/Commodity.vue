<template>
    <div>
      <commodity-header></commodity-header>
      <search-icon></search-icon>
      <commodity-catalog></commodity-catalog>
      <commodity-details></commodity-details>
    </div>
</template>

<script>
import CommodityHeader from './components/Header'
import CommodityCatalog from './components/Catalog'
import CommodityDetails from './components/Details'
import SearchIcon from './components/Search'
export default {
  name: 'Commodity',
  components: {
    CommodityHeader,
    CommodityCatalog,
    CommodityDetails,
    SearchIcon
  }
}
</script>

<style lang="stylus" scoped>

</style>
