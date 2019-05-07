<template>
    <div class="outer">
      <div class="list-wrapper" v-for="item of orderInfoList" :key="item.id">
        <div class="order-id">订单编号：{{item.id}}</div>
        <div class="status">交易状态</div>
        <div class="commodity-list">
          <order-details></order-details>
        </div>
        <div class="operate">
          <el-button type="info" plain size="small" class="cancel">取消订单</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" circle class="delete"></el-button>
          <el-button type="info" plain size="small" class="more">订单详情</el-button>
        </div>
      </div>
    </div>
</template>

<script>
import OrderDetails from './Details'
export default {
  name: 'OrderList',
  components: {
    OrderDetails
  },
  mounted () {
    // 发送ajax请求
    console.log('接收到个人中心的vuex参数 ' + this.$store.state.orderStatus)
  },
  data () {
    return {
      orderTypeId: 0,
      orderInfoList: [{
        id: 11111111111,
        username: '',
        name: '',
        phone: '',
        address: '',
        totalAmount: 222.3,
        createDate: '',
        status: 0
      }]
    }
  },
  watch: {
    '$store.state.orderStatus' () {
      // 这里写ajax请求
      console.log('监听到了vuex中orderStatus的变化 ' + this.$store.state.orderStatus)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.outer
  margin-top .1rem
  padding-top .7rem
  padding-bottom .1rem
  .list-wrapper
    border-radius .15rem
    background white
    margin-left .2rem
    margin-right .2rem
    margin-bottom .3rem
    .status
      text-align right
      padding-top .1rem
      padding-right .25rem
      color red
    .order-id
      float left
      padding-left .25rem
      padding-top .1rem
    .operate
      padding-bottom .1rem
      height .6rem
      .delete
        float right
        margin-right .4rem
      .cancel
        float left
        font-size .28rem
        border-radius .3rem
        margin-left .15rem
      .more
        font-size .28rem
        border-radius .2rem
</style>
