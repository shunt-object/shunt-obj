<template>
  <el-menu :default-active="this.$router.path" router mode="horizontal">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
    {{ item.navItem }}
    </el-menu-item>
    <router-view></router-view>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      navList:[
        {name:'/consolePage/portGroup/inputGroup',navItem:'输入组'},
        {name:'/consolePage/portGroup',navItem:'用户1输出组'}
      ]
    };
  }
}
</script>

<style scoped>

</style>