<template>
    <div class="order-review">
      <div class="order-wrapper">
        <div class="all-orders">查看全部订单</div>
        <div class="order-header">我的订单</div>
        <div class="order-icons-wrapper">
          <div class="icon" v-for="(item,index) of category"  :key="index" @click="handleOrderClick(item.orderStatus)">
            <div class="iconfont order-icon">{{item.icon}}</div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
          <div class="icon" @click="handleOrderClick(5)">
            <div class="iconfont order-icon">&#xe639;</div>
            <p class="icon-desc comment">评价</p>
          </div>
          <div class="icon">
            <div class="iconfont order-icon">&#xe64c;</div>
            <p class="icon-desc service">售后/退款</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OrderReview',
  data () {
    return {
      category: [{
        icon: '\ue615',
        desc: '待付款',
        orderStatus: 1
      }, {
        icon: '\ue601',
        desc: '待发货',
        orderStatus: 2
      }, {
        icon: '\ue60b',
        desc: '待收货',
        orderStatus: 3
      }]
    }
  },
  methods: {
    handleOrderClick (status) {
      this.$store.dispatch('changeOrderStatus', status)
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.order-review
  height 2rem
  background #F2F2F2
  padding-top .9rem
  padding-bottom .1rem
  .order-wrapper
    border-radius .2rem
    background white
    margin-left .2rem
    margin-right .2rem
    /*padding-bottom .4rem*/
  .order-header
    text-align left
    padding .1rem .1rem
    border-bottom .01rem solid #ccc
  .all-orders
    float right
    padding .1rem .1rem
  .order-icons-wrapper
    padding-top .2rem
    overflow : hidden
    height : 0
    padding-bottom : 15%
    .icon
      position relative
      overflow : hidden
      float : left
      width : 20%
      height 0
      padding-bottom : 20%
      .order-icon
        position absolute
        top : 0
        left : 0
        right : 0
        bottom : .44rem
        box-sizing border-box
        font-size .5rem
      .icon-desc
        position absolute
        padding-top .5rem
        padding-left .35rem
        height .44rem
        line-height .44rem
        text-align center
        font-size .1rem
        color #333333
        ellipsis()
      .comment
        padding-left .5rem
      .service
        padding-left .2rem
</style>
