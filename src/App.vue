<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1273069341'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1273069341%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
//  var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
//       document.write(unescape("%3Cspan id='cnzz_stat_icon_1273069341'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1273069341%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
export default {
  name: 'app',
    mounted () {  
    const script = document.createElement('script')  
    script.src = 'https://s95.cnzz.com/z_stat.php?id=1111111111&web_id=1111111111' 
    script.language = 'JavaScript' 
    document.body.appendChild(script)  
  },  
  watch: {  
    '$route' () {  
      if (window._czc) {  
        let location = window.location  
        let contentUrl = location.pathname + location.hash  
        let refererUrl = '/' 
        window._czc.push(['_trackPageview', contentUrl, refererUrl])  
      }  
    }  
  } 
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
