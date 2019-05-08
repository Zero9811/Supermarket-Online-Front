<template>
    <div>
      <commodity-info-banner></commodity-info-banner>
      <commodity-info-header></commodity-info-header>
      <commodity-detail></commodity-detail>
      <commodity-info-bottom></commodity-info-bottom>
      <commodity-info-recommendation></commodity-info-recommendation>
      <div class="content"></div>
    </div>
</template>

<script>
import CommodityInfoBanner from './components/Banner'
import CommodityInfoHeader from './components/Header'
import CommodityDetail from './components/Detail'
import CommodityInfoBottom from './components/Bottom'
import CommodityInfoRecommendation from './components/Recommendation'
export default {
  name: 'CommodityInfo',
  components: {
    CommodityInfoBanner,
    CommodityInfoHeader,
    CommodityDetail,
    CommodityInfoBottom,
    CommodityInfoRecommendation
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 1rem
</style>
