<template>
    <div class="address-total-wrapper">
      <div class="address-wrapper">
        <div class="address-manage" @click="handleAddressClick">管理收货地址</div>
        <div class="address-title">收货地址</div>
        <div class="address-detail">
          <div class="iconfont address-icon">&#xe65d;</div>
          <div class="address-content">北京天津南京1111111111111111111111111111111</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PersonalAddress',
  methods: {
    handleAddressClick () {
      this.$router.push('/address')
    }
  }
}
</script>

<style lang="stylus" scoped>
.address-total-wrapper
  background #F2F2F2
  height 2rem
  padding-top .7rem
  padding-bottom .1rem
  .address-wrapper
    border-radius .2rem
    background white
    margin-left .2rem
    margin-right .2rem
    .address-manage
      float right
      padding .1rem .1rem
    .address-title
      text-align left
      padding .1rem .1rem
      border-bottom .01rem solid #ccc
    .address-detail
      padding-top .2rem
      .address-icon
        text-align left
        float left
        font-size .44rem
        padding-left 1rem
        padding-right .1rem
      .address-content
        width 77%
        height .6rem
        padding-top .05rem
        text-align left
        font-size .32rem
        display inline-block
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
</style>
