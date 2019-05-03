<template>
    <div>
      <div class="recommend-title">热销推荐</div>
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
export default {
  name: 'Recommendation',
  props: {
    recommend: Array
  },
  mounted () {
    // 这里进行ajax请求，请求首页推荐的商品
    console.log('推荐组件创建')
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0002',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0003',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0004',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0005',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0006',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0007',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0008',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '0009',
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        type: '零食'
      }, {
        id: '00010',
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
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
    text-align left
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
