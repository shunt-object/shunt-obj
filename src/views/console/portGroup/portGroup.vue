<template>
  <el-menu :default-active="this.$router.path" router mode="horizontal">
    <el-menu-item v-if="i==0" v-for="(item,i) in navList" :key="i" :index="item.name" class="oneCurrent">
    {{ item.navItem }}
    </el-menu-item>
    <el-menu-item v-if="i!=0" v-for="(item,i) in navList" :key="i" :index="item.name">
    {{ item.navItem }}
    </el-menu-item>
    <router-view></router-view>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: 'is-active',
      navList:[
        {name:'/consolePage/portGroup/inputGroup',navItem:'输入组'},
        {name:'/consolePage/portGroup/outGroup',navItem:'用户1输出组'}
      ]
    };
  },
  mounted () {
    $(".oneCurrent").click();
  },
  methods: {
    
  }
}
</script>

<style scoped>
.is-active,.is-active:hover{
  color: #fff !important;
  background-color: #409EFF !important;
  border-color: #409EFF !important;
}
</style>