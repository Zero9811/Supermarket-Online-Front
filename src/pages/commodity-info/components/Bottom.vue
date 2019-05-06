<template>
    <div class="bottom">
      <div class="iconfont cart-icon" @click="handleCartClick">&#xe621;</div>
      <el-button class="add-cart">加入购物车</el-button>
    </div>
</template>

<script>
export default {
  name: 'CommodityInfoBottom',
  methods: {
    handleCartClick () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.bottom
  position fixed
  width 100%
  left 0
  right 0
  bottom 0
  height 1rem
  z-index 100
  background #F2F2F2
  border-top .01rem solid #ccc
  .add-cart
    float right
    margin-right .3rem
    margin-top .1rem
    width 3.5rem
    border-radius .3rem
    color $bgColor
    font-weight bold
    font-size .32rem
  .cart-icon
    float left
    font-size .6rem
    padding-left 20%
    padding-top .2rem
</style>
