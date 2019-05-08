<template>
    <div class="safety-total-wrapper">
      <div class="safety-wrapper">
        <div class="safety-title">
          账户与安全
        </div>
        <div class="safety-icons-wrapper">
          <div class="safety-icon-wrapper">
            <div class="iconfont icon">&#xe611;</div>
            <p class="icon-desc">修改登录密码</p>
          </div>
          <div class="safety-icon-wrapper">
            <div class="iconfont icon">&#xe667;</div>
            <p class="icon-desc">修改绑定邮箱</p>
          </div>
          <div class="safety-icon-wrapper">
            <div class="iconfont icon">&#xe61e;</div>
            <p class="icon-desc">修改手机号</p>
          </div>
          <div class="safety-icon-wrapper">
            <div class="iconfont icon">&#xe723;</div>
            <p class="icon-desc safety-center">安全中心</p>
          </div>
        </div>
      </div>
      <div class="exit" @click="handleExitClick">退出当前账号</div>
    </div>
</template>

<script>
export default {
  name: 'PersonalSafety',
  methods: {
    handleExitClick () {
      let cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf(' ') === 0) {
          cookies[i] = cookies[i].substring(1)
        }
        if (cookies[i].indexOf('smo_token') === 0) {
          let exp = new Date()
          exp.setTime(exp.getTime() - 60 * 1000)
          document.cookie = cookies[i] + ';expires=' + exp.toUTCString()
          break
        }
      }
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
@import "~styles/varibles.styl"
.safety-total-wrapper
  background #F2F2F2
  padding-top .2rem
  .safety-wrapper
    border-radius .2rem
    background white
    margin-left .2rem
    margin-right .2rem
    .safety-title
      text-align left
      padding .1rem .1rem
      border-bottom .01rem solid #ccc
    .safety-icons-wrapper
      padding-top .2rem
      overflow : hidden
      height : 0
      padding-bottom : 15%
      .safety-icon-wrapper
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
          padding-left .2rem
          height .44rem
          line-height .44rem
          text-align center
          font-size .1rem
          color #333333
          ellipsis()
        .safety-center
          padding-left .4rem
  .exit
    margin-top 1rem
    padding-top .4rem
    height .65rem
    font-size .35rem
    background $bgColor
    color white
</style>
