<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <recommendation :recommendation="recommendation"></recommendation>
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
      recommendation: []
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      axios.get('/api/myUser/user/users')
        .then(this.getUserInfoSucc)
    },
    getUserInfoSucc (res) {
      res = res.data
      if (res.code === 0) {
        this.recommendation = res.data
      }
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
