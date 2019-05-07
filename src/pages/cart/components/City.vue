<template>
  <div class="city-total-wrapper">
    <div class="city-wrapper">
      <div class="iconfont city-icon">&#xe65d;</div>
      <div class="city-title">&nbsp;&nbsp;送至：{{this.$store.state.city}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartCity',
  mounted () {
    // 这里vuex中请求默认地址
    console.log('购物车城市初始化')
  },
  data () {
    return {
      city: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  @import "~styles/varibles.styl"
  .city-total-wrapper
    margin-top -.05rem
    background $bgColor
    height 1rem
    padding-top .3rem
    padding-bottom .1rem
    .city-wrapper
      height .7rem
      border-radius .15rem
      background white
      margin-left .2rem
      margin-right .2rem
      .city-title
        padding-top .2rem
        margin-left .4rem
        text-align left
      .city-icon
        float left
        font-size .4rem
        padding-top .15rem
        padding-left .3rem
</style>
