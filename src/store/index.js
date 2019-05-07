import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeId: 0,
    orderStatus: 10
  },
  actions: {
    changeType (ctx, typeId) {
      console.log('vuex接收商品类型 ' + typeId)
      ctx.commit('changeType', typeId)
    },
    changeOrderStatus (ctx, status) {
      console.log('vuex改变订单状态' + status)
      ctx.commit('changeOrderStatus', status)
    }
  },
  mutations: {
    changeType (state, typeId) {
      state.typeId = typeId
    },
    changeOrderStatus (state, status) {
      state.orderStatus = status
    }
  }
})
