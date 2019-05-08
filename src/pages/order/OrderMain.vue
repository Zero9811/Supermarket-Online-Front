<template>
    <div class="order-main">
      <div class="wrapper">
        <order-header></order-header>
        <order-category></order-category>
      </div>
      <order-list></order-list>
      <div class="zhanwei"></div>
    </div>
</template>

<script>
import OrderHeader from './components/Header'
import OrderCategory from './components/Category'
import OrderList from './components/List'
export default {
  name: 'OrderMain',
  components: {
    OrderHeader,
    OrderCategory,
    OrderList
  }
}
</script>

<style lang="stylus" scoped>
.order-main
  background #F2F2F2
  .zhanwei
    background #F2F2F2
    height 3.6rem
</style>
