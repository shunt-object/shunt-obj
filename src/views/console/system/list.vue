<template>
  <el-menu mode="horizontal">
    <p class="elMenu">系统配置</p>
    <div class="btns">
      <el-button type="primary" @click="goModify">修改</el-button>
      <el-button @click="goSure">恢复默认并运行</el-button>
    </div>
    <el-form ref="formData" :model="formData" label-position="left" label-width="130px" style="padding-left: 10px;">
      <el-form-item label="HOST">
        <el-input v-model="formData.host" disabled></el-input>
      </el-form-item>
      <el-form-item label="管理IP">
        <el-input v-model="formData.adminIP" disabled></el-input>
      </el-form-item>
      <el-form-item label="网关地址">
        <el-input v-model="formData.gateway" disabled></el-input>
      </el-form-item>
      <el-form-item label="端口号">
        <el-input v-model="formData.port" disabled></el-input>
      </el-form-item>
      <el-form-item label="远程访问">
        <el-input v-model="formData.longRange" disabled></el-input>
      </el-form-item>
      <el-form-item label="全局负载均衡">
        <el-input v-model="formData.fzjx" disabled></el-input>
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
      //临时存一个缓存数据
      this.setHc()
      this.getSystemList()
    },
    methods: {
      //临时存一个缓存数据
      setHc(){
        let data={
            host: 'Device',
            adminIP: '192.169.1.1',
            gateway: '192.168.1.11/27 192.168.1.10',
            port: '8080',
            longRange: 'Telent',
            fzjx: 'SIP'
          }
        if(localStorage.getItem("key")){
          return
        }else{
          localStorage.setItem("key",JSON.stringify(data))
        }
      },
      //获取列表数据
      async getSystemList () {
        try {
          let result = await api.system.getSystemList();
          this.formData=result
        } catch(e) {

        } finally {

        }
      },
      //跳转修改页面
      goModify(){
        this.$router.push({ path: "/system/modify",query:this.formData});
      },
      //恢复默认运行按钮
      goSure(){
        this.$confirm('是否确认恢复默认状态并运行？', '恢复确认', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
        .then(() => {
          //调接口
          this.$message({
            type: 'success',
            message: '已恢复'
          });
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: '已取消恢复'
          })
        });
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