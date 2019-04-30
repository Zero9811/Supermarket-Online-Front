<template>
    <div class="wrapper">
      <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon" @click="goHome">&#xe624;</div>
        </div>
      </div>
      <div class="loginFormWrapper">
        <el-form :model="loginForm" :rules="loginRules" class="registerFrom">
          <h2>Logo区</h2>
          <h2>超市注册</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="loginForm.email" name="email" placeholder="请输入邮箱" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password"  name="password" placeholder="请输入密码" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password1" type="password"  name="password1" placeholder="请重复密码" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="registerButton" @click="registerClick">注册</el-button>
          </el-form-item>
          <el-form-item>
            <router-link to="/login">已有账号？立即登录</router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      loginForm: {
        username: '',
        email: '',
        password: '',
        password1: ''
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
    registerClick () {
      if (this.loginForm.password === this.loginForm.password1) {
        console.log(this.loginForm)
      } else {
        alert('密码不一致')
      }
    },
    goHome () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.wrapper
  touch-action pan-y
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
  .registerFrom
    position center
    margin-top 40%
    .el-input
      width 6rem
    .registerButton
      width 4rem
</style>
