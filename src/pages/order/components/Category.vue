<template>
  <el-tabs v-model="activeName" class="category-wrapper" @tab-click="handleClick">
    <el-tab-pane v-for="item of orderTile" :key="item.status" :label="item.name" :name="item.status + ''"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'OrderCategory',
  data () {
    return {
      activeName: this.$store.state.orderStatus + '',
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
    handleClick () {
      this.$store.dispatch('changeOrderStatus', parseInt(this.activeName))
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.category-wrapper
  padding-top .2rem
  margin-left .2rem
  overflow : hidden
  height : 0
  padding-bottom : 11%
</style>
