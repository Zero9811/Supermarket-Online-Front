<template>
  <div class="detail" ref="details">
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl1"/>
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-desc">{{item.description}}</p>
          <div class="item-price-wrapper">
            <div class="item-price">{{item.price}}</div>
            <div class="zhanwei"></div>
            <button class="item-button">购买</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CommodityDetails',
  mounted () {
    this.scroll = new Bscroll(this.$refs.details)
  },
  props: {
    recommend: Array,
    typeId: Number
  },
  watch: {
    typeId () {
      // 在这儿发送ajax请求
      console.log('类型改变了 ' + this.typeId)
    }
  },
  data () {
    return {
      recommendList: [{
        id: 1,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 2,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 3,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 4,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 5,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 6,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 7,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 8,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: 9,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .detail
    overflow hidden
    position absolute
    top 3.5rem
    left 0
    right 0
    bottom 0
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
          .zhanwei
            flex : 1
            height : .44rem
            line-height : .64rem
            margin-top : .12rem
            margin-left : .2rem
            border-radius : .1rem
</style>
