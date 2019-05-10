<template>
  <div>
    <div class="back">
      <div class="iconfont back-icon" @click="routerBack">&#xe624;</div>
    </div>
    <div class="new" @click="handleNewAddressClick">新增收货地址</div>
    <div class="title">我的收货地址</div>
  </div>
</template>

<script>
export default {
  name: 'AddressHeader',
  methods: {
    routerBack () {
      this.$router.back()
    },
    handleNewAddressClick () {
      this.$router.push('/addressDetail')
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
  .new
    float right
    margin-top .15rem
    padding-right .2rem
</style>
