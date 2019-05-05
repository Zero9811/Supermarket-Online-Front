<template>
    <div class="outer-layer">
      <div class="content-wrapper">
        <div>
          <div class="all">全选</div>
        </div>
        <el-button class="buy">发起结算</el-button>
        <div class="price">合计: 222222</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CalculatePrice'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.outer-layer
  border-top .01rem solid #ccc
  bottom 0
  overflow hidden
  position absolute
  left 0
  right 0
  top 90%
  .all
    float left
    margin-top .5rem
    margin-left .2rem
  .buy
    float right
    margin-top .25rem
    margin-right .2rem
    border-radius .3rem
    background $bgColor
    color white
    font-size .32rem
    font-family "Adobe 黑体 Std R"
  .price
    float right
    margin-top .5rem
    margin-right .2rem
    font-size .30rem
</style>
