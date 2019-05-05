<template>
  <div class="header">
    <div class="back">
      <div class="iconfont back-icon" @click="routerBack">&#xe624;</div>
    </div>
    <div class="title"></div>
  </div>
</template>

<script>
export default {
  name: 'CartHeader',
  methods: {
    routerBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    background $bgColor
    padding-bottom .5rem
    margin-bottom 1rem
    .back
      width : .64rem
      float : left
      margin-top .1rem
      .back-icon
        float left
        text-align : center
        font-size : .4rem
        color white
    .title
      /*margin-top .1rem*/
      padding-top .15rem
</style>
