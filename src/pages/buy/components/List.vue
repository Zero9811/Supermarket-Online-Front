<template>
  <div class="outer">
    <div class="list-wrapper">
      <ul>
        <li class="item border-bottom" v-for="item of commodityList" :key="item.id">
          <img class="item-img" :src="item.imgUrl1">
          <div class="item-info">
            <p class="item-title">{{item.name}}</p>
            <p class="item-desc">{{item.description}}</p>
            <div class="item-price-wrapper">
              <div class="item-price">{{item.price}}</div>
              <div class="weight">重量</div>
              <button class="item-button">{{item.nums}}件</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyList',
  mounted () {
    // 获取选中商品列表参数
    let list = this.commodityList
    let price = 0
    let weight = 0
    for (let item of list) {
      price += item.price * item.nums
      weight += item.nums * item.weight
    }
    this.totalAmount = price.toFixed(2)
    this.totalWeight = weight.toFixed(2)
    this.$emit('getTotalAmountAndTotalWeight', this.totalAmount, this.totalWeight)
  },
  data () {
    return {
      totalAmount: 0,
      totalWeight: 0,
      commodityList: [{
        id: 1,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 2,
        weight: 2,
        type: '零食'
      }, {
        id: 2,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        weight: 2,
        type: '零食'
      }, {
        id: 3,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        weight: 2,
        type: '零食'
      }, {
        id: 4,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        weight: 2,
        type: '零食'
      }, {
        id: 5,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        weight: 2,
        type: '零食'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  @import "~styles/varibles.styl"
  .outer
    padding-top .1rem
    padding-bottom 1rem
    background #F2F2F2
    overflow hidden
    top 2.3rem
    left 0
    right 0
    bottom 1.4rem
    .list-wrapper
      border-radius .15rem
      background white
      margin-left .2rem
      margin-right .2rem
      margin-bottom .3rem
      .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
          width 1.7rem
          height 1.7rem
        .item-info
          flex 1
          padding .1rem
          min-width 0
          .item-title
            margin-top .1rem
            /*line-height .54rem*/
            font-size .32rem
            ellipsis()
          .item-desc
            line-height .4rem
            color #ccc
          .item-price-wrapper
            display : flex
            .item-price
              margin-top .15rem
              width : .64rem
              float : left
            .item-button
              margin-right .2rem
              margin-top .05rem
              line-height .44rem
              width : 1.24rem
              float : right
              background $bgColor
              padding 0 .2rem
              border-radius .09rem
              color: #fff
              text-align center
            .weight
              flex : 1
              height : .44rem
              line-height : .64rem
              margin-left : .2rem
              border-radius : .1rem
              color #BDBDBD
</style>
