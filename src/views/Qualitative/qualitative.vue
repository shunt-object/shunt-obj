  定性的时候，刚加载组件的时候就运用钩子函数created或者mounted把题目渲染出来 
  判断 一次就出一道题  应该是判断chechbox   循环放在div里面



<template>
      <div></div>



</template>

<script>
export default {
  name: 'qualitative',
  data () {
    return {
     
    }
  },
  mounted:function(){
       this.$ajax({method: 'post',url: '/user',data: {name: 'wise',info: 'wrong'}}).then( (res)=> {
       console.log(res,'成功');
     }).catch( (err)=> {
       console.log(err,'错误');
     })
  },
  methods:{

  }
}
</script>