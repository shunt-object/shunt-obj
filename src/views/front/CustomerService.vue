<template>
    <div>
         <div id="rys"></div>
     <div style="height:100%;width:100%;" v-if="zixunShow==true">
            <div id="rong-header" style="width:100%;height:70px;background:#da121a;line-height:70px;color:#fff;"><img src="../../assets/login-logo.png" alt="" style="width:180px;float:left;margin-top:25px;padding-left:20px"><span class="rong-header-go" style="float:left;margin-left:120px;font-size:20px;font-weight:400;">欢迎使用CloudBroker²吴老师在线咨询服务</span><span style="float:right;margin-right:60px;" v-on:click="Wclose" class="Wclose"><a class="rong-jian" style="margin-left:5px;font-size:32px;color:#fff">×</a></span></div>
            <div style="width:100%;height:auto;background:#fff;overflow:auto">
                <div style="width:100%;margin:0 auto!important;">
                    <div style="text-align:center;font-size:22px;margin-top:20px;">为了更好的为您服务，请您首先选择咨询分类，随后点击“咨询”按钮开始与在线支持人员进行交谈。</div>
                    <ul style="line-height:50px;width:96%;margin-top:50px;font-size:20px;" class="ulinput">
                        <li><input type="radio" name="q" value="0">产品咨询</li>
                        <li><input type="radio" name="q" value="1">在线询价</li>
                        <li><input type="radio" name="q" value="2">合作伙伴</li>
                        <li><input type="radio" name="q" value="3">在线投诉</li>
                        <li><input type="radio" name="q" value="4">其他问题</li>
                    </ul>
                    <div style="" v-on:click="consulting()"><input type="button" style="width:150px;height:50px;line-height:50px;color:#fff;display:inline-block;background:#da121a;font-size:20px;border:none" class="spanlisty" value="咨询" /></div>
                </div>
                <div style="width:100%;border-top:1px solid #cdd7db;margin-top:103px;">
                    <div style="display:block;float:left">
                        <div style="float:left;    overflow: visible;">
                            <i class="ron"><img src="../../assets/bq.png" alt=""></i>
                        </div>
                        <div style="float:left;    overflow: visible;">
                            <i class="ron"><img src="../../assets/pic2.png" alt=""></i>
                        </div>
                    </div>
                </div>
                <div style="margin-top:7%;margin-bottom:7%">
                    <span style="width:60%;margin:0 auto;display:inline-block;text-align:center;height:40px;line-height:40px;border-radius:13px;color:#fff;background:#da121a">请选择您要咨询的内容</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .spanlisty:hover{
       cursor: pointer
    }
    .Wclose:hover{
          cursor: pointer
    }
    .ron img{
     display:inline-block;
      width:25px;
      margin-top:10px;
      margin-left:15px;
    }
    .ulinput li input{
        width:30px;
        
    }
</style>
<script>
 import {rongClouds} from "../../components/rongCloud/rongcloud.js";
    export default {
   
    data() {
      return {
            service:"",
            tokens:"",
            zixunShow:true
      }
    },
    methods:{
        consulting(){
           var adw = document.getElementById("rys")
           var account = sessionStorage.getItem('account');
           var accounts= JSON.parse(account);
           var relname = accounts.realname;
           var username = accounts.username; 
           var obj = {
                    "portraitUri": "",
                    "realName":relname,
                    "userName": username
                }
           this.$this.post('/broker/user/get/token',obj).then((response)=>{
                this.tokens = response.data.data;
                var ra = document.getElementsByName("q");
                for(var i=0;i<ra.length;i++){
                    if(ra[i].checked==true){
                        if(ra[i].value == 0){
                            this.service = "service";
                            rongClouds(adw,this.service,this.tokens)
                            setInterval(this.zixunShows,2000);
                        }else if(ra[i].value == 1){
                            alert(1)
                            this.service = "service2";
                            rongClouds(adw,this.service,this.tokens)
                            setInterval(this.zixunShows,2000);
                        }else if(ra[i].value == 2){
                            this.service = "service3";
                            rongClouds(adw,this.service,this.tokens)
                            setInterval(this.zixunShows,2000);
                        }else if(ra[i].value == 3){
                            this.service = "service4";
                            rongClouds(adw,this.service,this.tokens)
                            setInterval(this.zixunShows,2000);
                        }else{
                            this.service = "service5";
                            rongClouds(adw,this.service,this.tokens)
                            setInterval(this.zixunShows,2000);
                        }
                    }else{
                      
                    }
            }
            }).catch((error)=>{
                console.log("不好意思")
            })
      
         },
         zixunShows:function(){
             this.zixunShow = false;
         },
         Wclose:function(){
             window.open('','_self');
             window.close();
         }
    },
    mounted: function() {
        window.onload = function(){
            // var adw = document.getElementById("rys")
            // rongClouds(adw)
     
        }
    }}
</script>


