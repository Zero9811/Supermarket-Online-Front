<template>
    <div class="search">
<!--      此处placeholder里的内容可优化动态展示-->
    <router-link to="/commodity/search">
      <div class="search-input">
          <span class="iconfont">&#xe632;</span>
          搜索商品
      </div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'SearchIcon'
}
</script>

<style lang="stylus" scoped>
.search
  background #FFF5EE
  .search-input
    margin-left .2rem
    margin-right .2rem
    flex : 1
    height : .64rem
    line-height : .64rem
    margin-top : .12rem
    margin-left : .2rem
    /*padding-left : .2rem*/
    background : #ffffff
    border-radius : .15rem
    border-style solid
    border-color #CD3700
    border-width .01rem
    color : #ccc
</style>
