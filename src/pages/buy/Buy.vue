<template>
    <div>
      <buy-header></buy-header>
      <delivery-address></delivery-address>
      <buy-list @getTotalAmountAndTotalWeight="changeTotalAmountAndWeight"></buy-list>
      <buy-bottom :totalAmount = 'totalAmount' :totalWeight = 'totalWeight'></buy-bottom>
    </div>
</template>

<script>
import BuyHeader from './components/Header'
import DeliveryAddress from './components/Address'
import BuyList from './components/List'
import BuyBottom from './components/Bottom'
export default {
  name: 'Buy',
  components: {
    BuyHeader,
    DeliveryAddress,
    BuyList,
    BuyBottom
  },
  data () {
    return {
      totalAmount: 0,
      totalWeight: 0
    }
  },
  methods: {
    changeTotalAmountAndWeight (amount, weight) {
      this.totalAmount = amount
      this.totalWeight = weight
    }
  }
}
</script>

<style lang="stylus" scoped>
  .scroll
    overflow hidden
    position absolute
    top 2.3rem
    left 0
    right 0
    bottom 1.4rem
</style>
