<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id" @click="handleDetailClick(item.id)">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CommodityCatalog',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false,
        autoplay: false
      },
      iconList: [{
        id: 1,
        imgUrl: '/static/navigationImgs/fruit.png',
        desc: '水果'
      }, {
        id: 2,
        imgUrl: '/static/navigationImgs/drink.png',
        desc: '饮料'
      }, {
        id: 3,
        imgUrl: '/static/navigationImgs/meat.png',
        desc: '肉类'
      }, {
        id: 4,
        imgUrl: '/static/navigationImgs/vegetables.png',
        desc: '蔬菜'
      }, {
        id: 5,
        imgUrl: '/static/navigationImgs/snake.png',
        desc: '零食'
      }, {
        id: 6,
        imgUrl: '/static/navigationImgs/milk.png',
        desc: '乳制品'
      }, {
        id: 7,
        imgUrl: '/static/navigationImgs/necessary.png',
        desc: '日用品'
      }, {
        id: 8,
        imgUrl: '/static/navigationImgs/personal.png',
        desc: '个人护理'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    handleDetailClick (typeId) {
      // 改变vuex中的值
      this.$store.dispatch('changeType', typeId)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .icons
    overflow : hidden
    height : 0
    padding-bottom : 25%
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
