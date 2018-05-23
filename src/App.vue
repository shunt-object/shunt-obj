<template>
  <div id="app">
    
    <!--<transition  enter-active-class="fadeIn" leave-active-class="fadeIn">
        <router-view class="animated"></router-view>
    </transition>-->
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?af5eea82b000f1c80bb80e3250737cb7";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
           
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration:none !important;
}

</style>
