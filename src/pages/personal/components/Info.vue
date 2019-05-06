<template>
    <div class="info-total-wrapper">
      <div class="info-wrapper">
        <div class="info-title">
          我的信息
        </div>
        <div class="info-icons-wrapper">
          <div class="icon-wrapper" v-for="(item,index) of info" :key="index">
            <div class="iconfont icon">{{item.icon}}</div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data () {
    return {
      info: [{
        icon: '\ue670',
        desc: '个人信息'
      }, {
        icon: '\ue614',
        desc: '会员等级'
      }, {
        icon: '\ue639',
        desc: '我的评价'
      }, {
        icon: '\ue600',
        desc: '浏览历史'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.info-total-wrapper
  background #F2F2F2
  height 2rem
  padding-top .7rem
  padding-bottom .1rem
  .info-wrapper
    border-radius .2rem
    background white
    margin-left .2rem
    margin-right .2rem
    .info-title
      text-align left
      padding .1rem .1rem
      border-bottom .01rem solid #ccc
    .info-icons-wrapper
      padding-top .2rem
      overflow : hidden
      height : 0
      padding-bottom : 15%
      .icon-wrapper
        position relative
        overflow : hidden
        float : left
        width : 25%
        height 0
        padding-bottom : 20%
        .icon
          position absolute
          top : 0
          left : 0
          right : 0
          bottom : .44rem
          box-sizing border-box
          font-size .5rem
        .icon-desc
          position absolute
          padding-top .5rem
          padding-left .4rem
          height .44rem
          line-height .44rem
          text-align center
          font-size .1rem
          color #333333
          ellipsis()
</style>
