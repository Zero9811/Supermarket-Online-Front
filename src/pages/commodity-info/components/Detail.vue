<template>
    <div class="detail">
      <div class="starb">
        超市推荐
      </div>
      <div class="price">￥{{commodity.price}} </div>
      <div class="name">{{commodity.name}}</div>
      <div class="desc">描述</div>
      <div class="sales">销量</div>
      <div class="point">购买增加积分</div>
      <div class="benefit">优惠</div>
    </div>
</template>

<script>
export default {
  name: 'CommodityDetail',
  data () {
    return {
      commodity: {
        id: 234,
        name: '我是一件有趣的商品',
        price: 345,
        description: '',
        sales_volume: 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.detail
  margin-top .4rem
  margin-bottom 1rem
  .starb
    overflow hidden
    float right
    padding-right 50%
    padding-top .1rem
    color $bgColor
    font-size .25rem
  .price
    text-align left
    padding-left .5rem
    font-size .40rem
    color $bgColor
  .name
    text-align left
    padding-left .5rem
    padding-top .5rem
  .desc
    text-align left
    padding-left .5rem
    padding-top .5rem
  .sales
    text-align left
    padding-left .5rem
    padding-top .5rem
  .benefit
    text-align left
    padding-left .5rem
    padding-top .5rem
  .point
    float right
    padding-right 4rem
    padding-top .52rem
    font-size .24rem
</style>
