<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img.alicdn.com/imgextra/i2/725677994/O1CN0128vIcQKNi9ihlb3_!!725677994.jpg_430x430q90.jpg"/>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'CommodityInfoBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      imgs: ['https://img.alicdn.com/imgextra/i2/725677994/O1CN0128vIcQKNi9ihlb3_!!725677994.jpg_430x430q90.jpg',
        '//img.alicdn.com/imgextra/i4/725677994/O1CN01UKT2PW28vIfN3wqnH_!!725677994.jpg_2200x2200Q100s50.jpg_.webp'],
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 100%
    .banner-img
      width 100%
</style>
