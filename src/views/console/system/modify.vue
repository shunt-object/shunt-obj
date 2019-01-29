<template>
  <el-menu mode="horizontal">
    <p class="elMenu">系统配置<span class="goOut" @click="goOut">返回</span></p>
    <div class="btns">
      <el-button @click="goOut">取消</el-button>
      <el-button type="primary" @click="modifySystemList">提交</el-button>
    </div>
    <el-form ref="formData" :model="formData" label-position="left" label-width="130px" style="padding-left: 10px;">
      <el-form-item label="HOST">
        <el-input v-model="formData.host"></el-input>
      </el-form-item>
      <el-form-item label="管理IP">
        <el-input v-model="formData.adminIP"></el-input>
      </el-form-item>
      <el-form-item label="网关地址">
        <el-input v-model="formData.gateway"></el-input>
      </el-form-item>
      <el-form-item label="端口号">
        <el-input v-model="formData.port"></el-input>
      </el-form-item>
      <el-form-item label="远程访问">
        <el-radio-group v-model="formData.longRange">
          <el-radio label="Telent"></el-radio>
          <el-radio label="SSH"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="全局负载均衡">
        <el-radio-group v-model="formData.fzjx">
          <el-radio label="SIP"></el-radio>
          <el-radio label="DIP"></el-radio>
          <el-radio label="SIP+DIP"></el-radio>
          <el-radio label="SIP+DIP+Sport+Dport"></el-radio>
          <el-radio label="SIP+DIP+Sport+Dport+Protocol"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </el-menu>
</template>

<script>
import api from '@/service'

export default {
  data() {
    return {
      formData: {
        host: '',
        adminIP: '',
        gateway: '',
        port: '',
        longRange: '',
        fzjx: ''
      }
    }
  },
  mounted () {
    this.formData=this.$route.query
  },
  methods: {
    //修改列表数据
    async modifySystemList () {
      try {
        let params=this.formData
        let result = await api.system.modifySystemList(params)
        if(result.code==0){
          this.$message({
            type: 'success',
            message: '修改成功',
            function: this.goOut()
          });
        }
      } catch(e) {

      } finally {

      }
    },
    goOut(){
      this.$router.push({ path: "/system/list" });
    }
  }
}
</script>

<style scoped>
  .elMenu{
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    margin: 0;
    position: relative
  }
  .goOut{
    cursor: pointer;
    position: absolute;
    right: 50px;
  }
  .btns{
    padding: 10px;
    border-top: 5px solid rgb(242,242,242);
  }
  .btns>button{
    width: 120px !important;
    height: 35px !important;
    line-height: 35px !important;
  }
</style>