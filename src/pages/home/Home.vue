<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <recommendation :recommend="recommend"></recommendation>
    <div>home</div>
    <router-link to="./login">登录页面</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommendation from './components/Recommendation'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommendation
  },
  data () {
    return {
      recommend: []
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      axios.get('/api/user/users')
        .then(this.getUserInfoSucc)
    },
    getUserInfoSucc (res) {
      res = res.data
      if (res.code === 0) {
        this.recommend = res.data
      }
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>
