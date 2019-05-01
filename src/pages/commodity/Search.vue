<template>
    <div class="search">
      <label class="inputWrapper">
        <el-input class="searchInput" type="text" placeholder="请输入搜索内容"/>
      </label>
    </div>
</template>

<script>
export default {
  name: 'CommoditySearch'
}
</script>

<style lang="stylus" scoped>
.search
  height .72rem
  padding-left .1rem
  padding-top .1rem
  padding-right 1rem
  .searchInput
    height .62rem
    line-height .62rem
    width 100%
    text-align center
</style>
