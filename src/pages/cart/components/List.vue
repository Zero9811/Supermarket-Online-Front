<template>
    <div class="outer-layer" ref="list">
      <ul>
        <li class="item border-bottom" v-for="item of cartList" :key="item.id">
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple-dark">
                <div></div>
              </div>
            </el-col>
          </el-row>
          <router-link tag="img" class="item-img" :src="item.imgUrl1" :to="'/commodity/' + item.id"/>
          <div class="item-info">
            <p class="item-title">{{item.name}}</p>
            <p class="item-desc">{{item.description}}</p>
            <div class="item-price-wrapper">
              <div class="item-price">{{item.price}}</div>
              <div class="weight">重量</div>
              <div class="item-button">
                <div class="ii" @click="subOne(item)">-</div>
                <div class="uu" @click="addOne(item)">+</div>
                <div>{{item.nums}}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'ItemList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.list)
  },
  data () {
    return {
      num: 2,
      cartList: [{
        id: 1,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 2,
        type: '零食'
      }, {
        id: 2,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 2,
        type: '零食'
      }, {
        id: 3,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        type: '零食'
      }, {
        id: 4,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        type: '零食'
      }, {
        id: 5,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        type: '零食'
      }, {
        id: 6,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        type: '零食'
      }, {
        id: 7,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        type: '零食'
      }, {
        id: 8,
        imgUrl1: '//img.alicdn.com/bao/uploaded/i4/725677994/TB2Fg3PnwvD8KJjy0FlXXagBFXa_!!725677994.jpg_160x160q90.jpg',
        name: '印尼进口丽芝士',
        description: '好吃好吃好吃好吃好吃好吃好吃好吃好吃',
        price: 3.43,
        nums: 1,
        type: '零食'
      }]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    addOne (item) {
      item.nums++
    },
    subOne (item) {
      if (item.nums > 1) {
        item.nums--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.outer-layer
  overflow hidden
  position absolute
  top 2.3rem
  left 0
  right 0
  bottom 1.4rem
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
          padding 0 .2rem
          border-radius .09rem
          text-align center
          .ii
            float left
          .uu
            float right
        .weight
          flex 1
          height : .44rem
          line-height : .64rem
          margin-left : .2rem
          border-radius : .1rem
          color #BDBDBD

</style>
