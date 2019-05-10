<template>
    <div>
      <div class="zhanwei"></div>
      <div v-for="item of addressList" :key="item.id">
        <el-row>
          <el-col :span="16" :offset="2">
            <div class="grid-content bg-purple-dark">
              <div>{{item.name}} &nbsp;&nbsp;{{item.phone}}</div>
              <div class="address-content">{{item.province}} {{item.city}} {{item.addressContent}}</div>
            </div>
          </el-col>
          <el-col :span="4" :offset="2"><div class="grid-content bg-purple-dark" @click="editAddressClick">编辑</div></el-col>
        </el-row>
        <br/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddressList',
  data () {
    return {
      addressList: [{
        id: 0,
        name: '张三',
        phone: '17301010101',
        username: '',
        province: '重庆',
        city: '重庆市',
        addressContent: '北碚区天生2路西南大学',
        lat: 0,
        lng: 0
      }, {
        id: 1,
        name: '张三',
        phone: '17301010101',
        username: '',
        province: '重庆',
        city: '重庆市',
        addressContent: '北碚区天生2路西南大学',
        lat: 0,
        lng: 0
      }]
    }
  },
  methods: {
    editAddressClick () {
      this.$router.push('/addressDetail')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .zhanwei
    height .5rem
</style>
