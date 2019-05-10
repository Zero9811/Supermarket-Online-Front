<template>
  <div>
    <br/>
    <br/>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid-content bg-purple-dark">
            <el-input v-model="form.name" size="medium" placeholder="收货人"></el-input>
          </div>
        </el-col>
      </el-row>
      <br/>
      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid-content bg-purple-dark">
            <el-input v-model="form.phone" size="medium" placeholder="手机号码"></el-input>
          </div>
        </el-col>
      </el-row>
      <br/>
      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid-content bg-purple-dark">
            <el-input v-model="form.province" size="medium" placeholder="省份"></el-input>
          </div>
        </el-col>
      </el-row>
      <br/>
      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid-content bg-purple-dark">
            <el-input v-model="form.city" size="medium" placeholder="城市"></el-input>
          </div>
        </el-col>
      </el-row>
      <br/>
      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid-content bg-purple-dark">
            <el-input v-model="form.addressContent" size="medium" placeholder="具体地址"></el-input>
          </div>
        </el-col>
      </el-row>
      <br/>
      <el-form-item label="设为默认地址" label-width="112px">
        <el-switch v-model="form.defaultAddress"></el-switch>
      </el-form-item>
      <el-button plain>保存</el-button>
      <el-input-number v-model="form.id" :min="1" :max="10" size="mini"></el-input-number>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      form: {
        id: 0,
        name: '',
        phone: '',
        province: '',
        city: '',
        addressContent: '',
        defaultAddress: false,
        lat: 0,
        lng: 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
