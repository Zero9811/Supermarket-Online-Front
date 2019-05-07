<template>
    <div class="category-wrapper">
      <div class="category-title-wrapper" v-for="item of orderTile" :key="item.status">
        <div class="category-title" @click="getOrderByStatus(item.status)">{{item.name}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OrderCategory',
  data () {
    return {
      orderTile: [{
        status: 10,
        name: '全部'
      }, {
        status: 1,
        name: '待付款'
      }, {
        status: 3,
        name: '待发货'
      }, {
        status: 4,
        name: '待收货'
      }, {
        status: 5,
        name: '待评价'
      }]
    }
  },
  methods: {
    getOrderByStatus (status) {
      console.log(status)
      this.$store.dispatch('changeOrderStatus', status)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.category-wrapper
  padding-top .2rem
  overflow : hidden
  height : 0
  padding-bottom : 15%
  .category-title-wrapper
    position relative
    overflow : hidden
    float : left
    width : 20%
    height 0
    padding-bottom : 20%
    .category-title
      position absolute
      padding-top .5rem
      padding-left .3rem
      height .44rem
      line-height .44rem
      text-align center
      font-size .32rem
      color #333333
      ellipsis()
</style>
