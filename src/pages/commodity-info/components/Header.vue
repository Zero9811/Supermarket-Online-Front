<template>
    <div>
      <div class="header-abs" v-show="showAbs">
        <div class="iconfont header-abs-back" @click="routerBack">&#xe624;</div>
      </div>
      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <div class="back">
          <div class="iconfont back-icon" @click="routerBack">&#xe624;</div>
        </div>
        <div class="title">商品详情</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommodityInfoHeader',
  mounted () {
    console.log('钩子执行')
    window.addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    routerBack () {
      this.$router.back()
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      console.log()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    line-height .8rem
    background  rgba(0,0,0,.8)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height .82rem
    line-height .82rem
    font-size .32rem
    background #F2F2F2
    .back
      width : .64rem
      float : left
      .back-icon
        float left
        text-align : center
        font-size : .4rem
        color #333333
        margin-left .1rem
    .title
      padding-bottom .2rem
</style>
