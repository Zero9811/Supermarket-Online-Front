<template>
  <div class="wrapper">
    <div class="back">
      <div class="iconfont back-icon" @click="routerBack">&#xe624;</div>
    </div>
    <div class="title">确认订单</div>
  </div>
</template>

<script>
export default {
  name: 'BuyHeader',
  methods: {
    routerBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position fixed
  width 100%
  z-index 100
  .back
    width : .64rem
    float : left
    margin-top .2rem
    background #F2F2F2
    .back-icon
      float left
      text-align : center
      font-size : .4rem
      color #333333
  .title
    padding-top .22rem
    padding-bottom .2rem
    text-align left
    font-size .36rem
    background #F2F2F2
</style>
