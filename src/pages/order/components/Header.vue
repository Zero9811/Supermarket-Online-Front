<template>
  <div class="wrapper">
    <div class="back">
      <div class="iconfont back-icon" @click="routerBack">&#xe624;</div>
    </div>
    <div class="title">我的订单</div>
  </div>
</template>

<script>
export default {
  name: 'OrderHeader',
  methods: {
    routerBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  .back
    width : .64rem
    float : left
    padding-top .2rem
    background #F2F2F2
    .back-icon
      float left
      text-align : center
      font-size : .4rem
      color #333333
  .title
    padding-top .25rem
    background #F2F2F2
    padding-bottom .2rem
</style>
