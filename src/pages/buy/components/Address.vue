<template>
  <div class="outer">
    <div class="address-wrapper" @click="chooseAddressClick">
      <div class="address-icon-wrapper">
        <div class="iconfont address-icon">&#xe65d;</div>
      </div>
      <div class="name">张三</div>
      <div class="phone">13701010101</div>
      <div class="address">重庆市北碚区天生2路西南大学</div>
      <div class="notice">收货不便时，可选择免费代收货服务</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryAddress',
  methods: {
    chooseAddressClick () {
      this.$router.push('/address')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  @import "~styles/varibles.styl"
  .outer
    padding-top 1.2rem
    padding-bottom .1rem
    background #F2F2F2
    .address-wrapper
      border-radius .15rem
      background white
      margin-left .2rem
      margin-right .2rem
      margin-bottom .3rem
      height 2rem
      .address-icon-wrapper
        float left
        margin-left .3rem
        margin-top .75rem
        margin-right .5rem
        margin-bottom .5rem
        width .6rem
        height .6rem
        border-radius .4rem
        text-align center
        line-height .6rem
        background  $bgColor
        .address-icon
          font-size .5rem
          color white
      .name
        float left
        text-align left
        padding-top .3rem
        font-size .36rem
      .phone
        padding-top .3rem
      .address
        text-align left
        font-size .3rem
        width 95%
        height 42%
        margin-top .2rem
      .notice
        color $bgColor
        font-size .2rem
        text-align left
</style>
