<template>
    <div>
      <div class="back">
        <div class="iconfont back-icon" @click="routerBack">&#xe624;</div>
      </div>
      <div class="title">个人中心</div>
    </div>
</template>

<script>
export default {
  name: 'PersonalHeader',
  methods: {
    routerBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.back
  width : .64rem
  float : left
  margin-top .1rem
  .back-icon
    float left
    text-align : center
    font-size : .4rem
    color #333333
.title
  margin-top .1rem
  padding-top .15rem
  padding-bottom .2rem
</style>
