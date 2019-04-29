<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
  <!--    <div class="swiper-button-prev" slot="button-prev"></div>-->
  <!--    <div class="swiper-button-next" slot="button-next"></div>-->
  <!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 4000
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img.alicdn.com/tfs/TB1.YGjS5LaK1RjSZFxXXamPFXa-750-291.jpg_Q90.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://img.alicdn.com/tfs/TB1QYB_SAzoK1RjSZFlXXai4VXa-750-291.jpg_Q90.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*轮播图片page页的颜色*/
  .wrapper >>> .swiper-pagination-bullet-active
    background : brown !important
  .wrapper
    width : 100%
    height : 0
    overflow : hidden
    //这里定义轮播图片的高宽比，以后用自己的图片时再来改
    padding-bottom : 38.8%
    .swiper-img
      width : 100%
</style>
