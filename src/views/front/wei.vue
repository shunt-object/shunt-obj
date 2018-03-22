<template>
     <div id="rys"></div>
</template>

<script>
 import {rongClouds} from "../../components/rongCloud/rongcloud.js";
    export default {
   
    data() {
      return {
       
      }
    },
    mounted: function() {
        window.onload = function(){
            var adw = document.getElementById("rys")
            rongClouds(adw)
     
        }
    }}
</script>


