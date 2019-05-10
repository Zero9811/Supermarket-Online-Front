<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
    <div class="header-mid">
      <div>
        <div class="iconfont address-icon">&#xe65d;</div>
        <div class="address-content">北京北京北京北京北京北京北京北京北京北京北京</div>
        <div class="iconfont address-choose" @click="chooseAddressClick">&#xe62d;</div>
      </div>
      <div class="iconfont cart-icon" @click="handleCartClick">&#xe621;</div>
    </div>
    <div class="header-right">
      <div class="iconfont my-icon" @click="myClick">&#xe656;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommodityHeader',
  methods: {
    myClick () {
      if (document.cookie.includes('smo_token')) {
        this.$router.push({path: '/personal'})
      } else {
        this.$router.push({path: '/login'})
      }
    },
    handleCartClick () {
      this.$router.push('/cart')
    },
    chooseAddressClick () {
      this.$router.push('/address')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
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
    .header-mid
      flex : 1
      height : .64rem
      line-height : .64rem
      margin-top : .12rem
      margin-left : .2rem
      /*padding-left : .2rem*/
      border-radius : .1rem
      min-width 0
      color : #fff
      .address-icon
        font-size .4rem
        text-align left
        padding-left .3rem
        float left
      .address-content
        /*color #fff*/
        float left
        display inline-block
        width 3rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .address-choose
        font-size .2rem
        float left
      .cart-icon
        font-size .4rem
        float right
        padding-right .4rem
    .header-right
      width : 1.24rem
      float : right
      text-align : center
      .my-icon
        text-align center
        font-size .5rem
</style>
