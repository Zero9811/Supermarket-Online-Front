<template>
    <div class="icons">
      <div class="icon" v-for="item of iconList" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl"/>
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '/static/navigationImgs/fruit.png',
        desc: '水果'
      }, {
        id: '0002',
        imgUrl: '/static/navigationImgs/snake.png',
        desc: '零食'
      }, {
        id: '0003',
        imgUrl: '/static/navigationImgs/vegetables.png',
        desc: '蔬菜'
      }, {
        id: '0004',
        imgUrl: '/static/navigationImgs/milk.png',
        desc: '乳制品'
      }, {
        id: '0005',
        imgUrl: '/static/navigationImgs/necessary.png',
        desc: '日用品'
      }, {
        id: '0006',
        imgUrl: '/static/navigationImgs/personal.png',
        desc: '个人护理'
      }, {
        id: '0007',
        imgUrl: '/static/navigationImgs/drink.png',
        desc: '饮料'
      }, {
        id: '0008',
        imgUrl: '/static/navigationImgs/meat.png',
        desc: '肉类'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .icons
    overflow : hidden
    height : 0
    padding-bottom : 50%
    background #FFF5EE
    .icon
      position relative
      overflow : hidden
      float : left
      width : 25%
      height 0
      padding-bottom : 25%
      .icon-img
        position absolute
        top : 0
        left : 0
        right : 0
        bottom : .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color #333333
        ellipsis()
</style>
