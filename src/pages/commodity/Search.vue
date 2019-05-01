<template>
  <div>
    <div class="searchWrapper">
      <div class="back">
        <div class="iconfont back-icon" @click="routerBack">&#xe624;</div>
      </div>
      <div class="search">
        <label class="inputWrapper">
          <el-input v-model="searchContent" class="searchInput" type="text" placeholder="请输入搜索内容"/>
        </label>
      </div>
      <div class="searchIconWrapper">
        <div class="search-icon" @click="search">搜索</div>
      </div>
    </div>
    <div class="history">
      <div class="title">搜索历史</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">洗发水</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
      </div>
    </div>
    <div class="guess">
      <div class="title">猜你想找</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
        <div class="button-wrapper">
          <div class="button">零食</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommoditySearch',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    search () {
      alert(this.searchContent)
    },
    routerBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.searchWrapper
  display : flex
  line-height : .86rem
  color #fff
  .back
    width : .64rem
    float : left
    margin-top .1rem
    .back-icon
      text-align : center
      font-size : .4rem
      color #333333
  .search
    padding-left .1rem
    padding-top .1rem
    padding-right 1rem
    height : .64rem
    width 100%
    .searchInput
      height .62rem
      line-height .62rem
      width 100%
      text-align center
  .searchIconWrapper
    width : 1.24rem
    float : right
    text-align : center
    height : .64rem
    line-height : .64rem
    margin-top : .20rem
    margin-left -.9rem
    margin-right .1rem
    .search-icon
      text-align center
      font-size .3rem
      color #333333
.history
  margin-top 2rem
  .title
    text-align left
    line-height .4rem
    /*background #eee*/
    padding-left .2rem
    color #666
  .button-list
    overflow hidden
    padding .1rem
    .button-wrapper
      width 33.33%
      float left
      .button
        text-align center
        margin .1rem
        border .02rem solid #ccc
        padding .1rem 0
        border-radius .1rem
.guess
  margin-top 1rem
  .title
    text-align left
    line-height .4rem
    /*background #eee*/
    padding-left .2rem
    color #666
  .button-list
    overflow hidden
    padding .1rem
    .button-wrapper
      width 33.33%
      float left
      .button
        text-align center
        margin .1rem
        border .02rem solid #ccc
        padding .1rem 0
        border-radius .1rem
</style>
