<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
    </div>
    <div class="header-right">
      <div class="iconfont my-icon" @click="myClick">&#xe607;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommodityHeader',
  methods: {
    myClick () {
      var cPos = document.cookie.indexOf('smo_token')
      // eslint-disable-next-line eqeqeq
      if (cPos != -1) {
        this.$router.push({path: '/personal'})
      } else {
        this.$router.push({path: '/login'})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display : flex
    line-height : .86rem
    background : $bgColor
    /*background : #00bcd4*/
    color : #fff
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align : center
        font-size : .4rem
        color : #fff
    .header-input
      flex : 1
      height : .64rem
      line-height : .64rem
      margin-top : .12rem
      margin-left : .2rem
      /*padding-left : .2rem*/
      border-radius : .1rem
      color : #ccc
    .header-right
      width : 1.24rem
      float : right
      text-align : center
      .my-icon
        text-align center
        font-size .5rem
</style>
