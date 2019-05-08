<template>
  <div>
    <div class="outer">
      <el-button class="buy" size="medium" @click="payment = true">提交订单</el-button>
      <div class="nums">共{{this.totalWeight}} kg</div>
      <div class="price">合计：￥{{this.totalAmount}}</div>
    </div>
    <el-dialog
      title="在线支付"
      :visible.sync="payment"
      width="80%"
      center class="payment">
      <span>您的订单总金额为 {{this.totalAmount}} 请立即支付</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="payment = false">稍 后</el-button>
          <el-button type="primary" @click="payment = false">支 付</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BuyBottom',
  props: ['totalAmount', 'totalWeight'],
  data () {
    return {
      payment: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  @import "~styles/varibles.styl"
.outer
  position fixed
  left 0
  right 0
  bottom 0
  z-index 100
  background white
  height 1rem
  width 100%
  .price
    margin-top .1rem
    padding-top .25rem
    text-align right
  .nums
    float left
    margin-top .1rem
    padding-top .25rem
    padding-left .3rem
  .buy
    float right
    margin-top .1rem
    margin-right .25rem
    margin-left .3rem
    border-radius .3rem
    background $bgColor
    color white
    font-size .30rem
    font-family iconfont
</style>
