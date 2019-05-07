<template>
   <div>
     <cart-header></cart-header>
     <shopping-cart-city></shopping-cart-city>
     <item-list></item-list>
     <calculate-price></calculate-price>
   </div>
</template>

<script>
import CartHeader from './components/Header'
import ItemList from './components/List'
import CalculatePrice from './components/Calculate'
import ShoppingCartCity from './components/City'
export default {
  name: 'ShoppingCart',
  components: {
    CartHeader,
    ItemList,
    CalculatePrice,
    ShoppingCartCity
  }
}
</script>

<style lang="stylus" scoped>

</style>
