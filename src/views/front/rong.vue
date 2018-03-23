<template>
    <div>
         <div id="rys"></div>
     <div style="position:fixed;bottom: 215px;right: 460px;height:470px;width:470px;">
            <div id="rong-header" style="width:100%;height:36px;background:#da121a;line-height:36px;color:#fff;"><img src="../../assets/login-logo.png" alt="" style="width:90px;"><span class="rong-header-go">欢迎使用CloudBroker²吴老师在线咨询服务</span><span><a class="rong-jian" style="margin-left:38px;">－</a><a class="rong-jian" style="margin-left:5px;">×</a></span></div>
            <div style="width:470px;height:319px;background:#fff;overflow:auto">
                <div>
                    <div style="width:88%;margin:0 auto!important;text-align:left;">为了更好的为您服务，请您首先选择咨询分类，随后点击“咨询”按钮开始与在线支持人员进行交谈。</div>
                    <ul style="line-height:30px;width:88%;margin-top:20px;">
                        <li><input type="radio">产品咨询</li>
                        <li><input type="radio">在线询价</li>
                        <li><input type="radio">合作伙伴</li>
                        <li><input type="radio">在线投诉</li>
                        <li><input type="radio">其他问题</li>
                    </ul>
                    <div style=""><span style="width:50px;height:30px;line-height:30px;;color:#fff;display:inline-block;background:#da121a;">咨询</span></div>
                </div>
            </div>
        </div>
    </div>
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


