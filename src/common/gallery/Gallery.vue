<template>
    <div class="container" @click="handleGalleryClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <!-- slides -->
          <swiper-slide v-for="(item, index) in imgs" :key="index">
            <img class="gallery-img" :src="item"/>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <!--    <div class="swiper-button-prev" slot="button-prev"></div>-->
          <!--    <div class="swiper-button-next" slot="button-next"></div>-->
          <!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagenation: 'swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  justify-content center
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 99
  background #000
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 100%
    .gallery-img
      width 100%
</style>
