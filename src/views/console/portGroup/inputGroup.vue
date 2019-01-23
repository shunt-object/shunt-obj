<template>
  <el-row class="buttns">
    <el-button type="primary">创建输入组</el-button>
    <el-button>批量删除</el-button>
    <el-row>
      <div class="demo-input-suffix">
        属性方式：
        <el-input placeholder="请输入内容" v-model="input21"></el-input>
      </div>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input21: null
    };
  }
}
</script>

<style scoped>
.buttns{
  margin-top: 60px;
  border-top: 10px solid rgb(242,242,242);
  padding: 10px;
}
</style>