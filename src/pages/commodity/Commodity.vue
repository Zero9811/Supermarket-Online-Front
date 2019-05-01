<template>
    <div>
      <commodity-header></commodity-header>
      <search-icon></search-icon>
      <commodity-catalog @detailChange="handleDetailChange"></commodity-catalog>
      <commodity-details :typeId="typeId"></commodity-details>
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
  },
  data () {
    return {
      typeId: 0
    }
  },
  methods: {
    handleDetailChange (typeId) {
      this.typeId = typeId
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
