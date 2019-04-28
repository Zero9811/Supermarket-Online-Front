<template>
  <div>
    <home-header></home-header>
    <div>home</div>
    <router-link to="./login">登录页面</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
