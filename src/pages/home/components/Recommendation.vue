<template>
    <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <router-link tag="img" class="item-img" :src="item.picture1" :to="'/commodity/' + item.id"/>
          <div class="item-info">
            <p class="item-title">{{item.name}}</p>
            <p class="item-desc">{{item.description}}</p>
            <div class="item-price-wrapper">
              <div class="item-price">￥{{item.price}}</div>
              <div class="zhanwei"></div>
              <button class="item-button" @click="handleBuyClick">购买</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
// 允许携带cookie
axios.defaults.withCredentials = true
export default {
  name: 'Recommendation',
  props: {
    recommend: Array
  },
  mounted () {
    // 这里进行ajax请求，请求首页推荐的商品
    axios.get('/api/myCommodity/commodity/type/5')
      .then(this.axiosResult)
    console.log('推荐组件创建')
  },
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    axiosResult (res) {
      res = res.data
      console.log(res)
      if (res.code === 0) {
        this.recommendList = res.data
      }
    },
    handleBuyClick () {
      if (document.cookie.includes('smo_token')) {
        alert('已添加到购物车')
      } else {
        this.$router.push('/login')
      }
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
