<template>
    <div class="loginWrapper">
      <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon" @click="goHome">&#xe624;</div>
        </div>
      </div>
      <div class="loginFormWrapper">
        <el-form :model="loginForm" :rules="loginRules" class="loginFrom">
          <h2>Logo区</h2>
          <h2>超市登录</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password"  name="password" placeholder="请输入密码" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login" class="loginButton">登录</el-button>
          </el-form-item>
          <el-form-item>
            <router-link to="/register">还没有账号？立即注册</router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
// 允许携带cookie
axios.defaults.withCredentials = true
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          {
            required: true,

            message: '请输入用户名',

            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    goHome () {
      this.$router.push({path: '/'})
    },
    login () {
      console.log(this.loginForm.username)
      axios.post('http://localhost:8080/user/login', qs.stringify({
        username: this.loginForm.username,
        password: this.loginForm.password
      }))
        .then(this.loginResult)
      // fetch('http://localhost:8080/user/login', {
      //   method: 'post',
      //   credentials: 'include',
      //   body: {
      //     username: this.loginForm.username,
      //     password: this.loginForm.password
      //   }
      // })
      //   .then(this.loginResult)
    },
    loginResult (res) {
      console.log(res)
      res = res.data
      if (res.code === 0) {
        this.$router.push({path: '/'})
      } else {
        console.log(res)
        alert(res.data)
      }
    },
    getUserInfoSucc (res) {
      res = res.data
      if (res.code === 0) {
      }
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .loginWrapper
    touch-action pan-y
    .loginFormWrapper
      position center
      .loginFrom
        position center
        margin-top 55%
        .el-input
          width 6rem
        .loginButton
          width 4rem
    @import "~styles/varibles.styl"
    .header
      display : flex
      line-height : .86rem
      background : $bgColor
      /*background : #00bcd4*/
      color : #fff
      .header-left
        width : .64rem
        float : left
        .back-icon
          text-align : center
          font-size : .4rem
</style>
