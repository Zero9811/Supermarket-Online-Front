import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typeId: 0
  },
  actions: {
    changeType (ctx, typeId) {
      console.log('vuex接收商品类型 ' + typeId)
      ctx.commit('changeType', typeId)
    }
  },
  mutations: {
    changeType (state, typeId) {
      state.typeId = typeId
    }
  }
})
