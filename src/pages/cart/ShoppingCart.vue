<template>
   <div>
     <cart-header></cart-header>
     <item-list></item-list>
     <calculate-price></calculate-price>
   </div>
</template>

<script>
import CartHeader from './components/Header'
import ItemList from './components/List'
import CalculatePrice from './components/Calculate'
export default {
  name: 'ShoppingCart',
  components: {
    CartHeader,
    ItemList,
    CalculatePrice
  }
}
</script>

<style lang="stylus" scoped>

</style>
