<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <router-link to="/commodity/search" class="header-input">
      <div>
          <span class="iconfont">&#xe632;</span>
          搜索商品
      </div>
    </router-link>
      <div class="header-right">
        <div class="iconfont my-icon" @click="myClick">&#xe656;</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    myClick () {
      if (document.cookie.includes('smo_token')) {
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
    .header-input
      flex : 1
      height : .64rem
      line-height : .64rem
      margin-top : .12rem
      margin-left : .2rem
      /*padding-left : .2rem*/
      background : #ffffff
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
