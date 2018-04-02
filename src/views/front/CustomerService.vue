<template>
    <div>
         <div id="rys"></div>
     <div style="height:100%;width:100%;" v-if="zixunShow==true" >
            <div id="rong-header" style="width:100%;height:70px;background:#da121a;color:#fff;">
                <ul class="col-md-3 text-left">
                    <li style="padding:10px 0 10px 30px"><img src="/static/rongCloud/images/logoers.png" alt="" style="width:130px;height:20px;"></li>
                    <li style="padding:0 0 0 30px;"><span>您的专属上云顾问</span></li>
                </ul>
                
                <span style="float:right;margin-right:60px;line-height:70px;" v-on:click="Wclose" class="Wclose"><a class="rong-jian" style="margin-left:5px;font-size:32px;color:#fff">×</a></span>
            </div>
            <div style="width:100%;height:auto;background:#fff;overflow:auto">
                <div style="width:100%;margin:0 auto!important;">
                    <div style="width:300px;height:40px;border:1px solid #ececec;line-height:40px;border-radius:100px;margin:0 auto;margin-top:30px;font-size:12px;color:#6f6f6f;background:#f6f6f6;">欢迎你使用Prof.吴在线支持服务</div>
                    <div style="text-align:center;font-size:12px;margin-top:20px;color:#393b3d;">为了更好的为您服务，请您首先选择咨询分类，随后点击<span style="color:#aed0f4">“咨询”</span>按钮开始与在线支持人员进行交谈。</div>
                    <div class="shipeidiv" style="border:1px solid #ececec;background:#fbfbfb;border-radius:2px;margin:0 auto;margin-top:40px;">
                         <div>
                            <p style="font-size:12px;color:#515151 !important;text-align:center;margin-top:30px;">请选择您要咨询的服务类型</p>
                            <ul style="line-height:40px;padding:0 !important;font-size:14px;color:#222222;text-align:center;" class="ulinput">
                                <li><input type="radio" name="q" value="0" id="male"><label for="male">顾问咨询</label></li>
                                <li><input type="radio" name="q" value="1" id="mela"><label for="mela">在线销售</label></li>
                            <!-- 
                                <li><input type="radio" name="q" value="2">合作伙伴</li>
                                <li><input type="radio" name="q" value="3">在线投诉</li>
                                <li><input type="radio" name="q" value="4">其他问题</li>
                            -->
                            </ul>
                             <div class="spanlisty" v-on:click="consulting()">
                                <span class="zixunbtnHover" style="width:90px;height:32px;line-height:32px;color:#fff;display:inline-block;border-radius:5px;border:1px solid #db101b;font-size:14px;"> 咨询 </span>
                            </div>
                         </div>
                    </div>
                   
                </div>
                <div style="width:100%;border-top:1px solid #cdd7db;margin-top:50px;">
                    <div style="display:block;float:left">
                        <div style="float:left;    overflow: visible;">
                            <i class="ron"><img src="../../assets/bq.png" alt=""></i>
                        </div>
                        <div style="float:left;    overflow: visible;">
                            <i class="ron"><img src="../../assets/pic2.png" alt=""></i>
                        </div>
                    </div>
                </div>
                <div style="margin-top:50px;text-align:left;margin-left:15px;font-size:12px;color:#515151;"><span>请描述您的问题...</span></div>
                <div style="width:100%;position:relative;margin-top:5%;">
                    <span style="width:215px;position:absolute;right:30px;bottom:20px;padding:6px 20px;border:1px solid #db101b;display:inline-block;text-align:center;border-radius:5px;color:#fff;background:#da121a;font-size:14px;">请您选择要咨询的服务类型</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
  
    .zixunbtnHover{
        background:rgb(218, 18, 26);
    }
    .zixunbtnHover:hover{
       cursor: pointer;
        background:#EF131D
    }
    @media (min-width: 768px) {
        .shipeidiv{
            width:660px;height:340px;
        }
    }
    @media (max-width: 768px) {
        .shipeidiv{
            width:250px;height:340px;
        }
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
        width:20px;
        
    }
</style>
<script>
 import {rongClouds} from "../../components/rongCloud/rongcloud.js";
//  import {rongyun} from "../../components/rongCloud/rongyun.js";
    export default {
   
    data() {
      return {
            service:"",
            tokens:"",
            zixunShow:true,
           
      }
    },
    // mounted:function(){
      
    //         var adw = document.getElementById("rys");
    //         var tokening = "H1yote85u6YeS5WN0uRaJH/DWhY7rUdA55SJzMWKIPEYGzGXOBdtBjD8RI2pcvxkkcVs0dY7K/L3RDz7hdlrXewExd/yELe9";
    //         var ser = "service";
    //         rongClouds(adw,ser,tokening);
    //         adw.style.display = "none";
         
        
    // },
    methods:{
        consulting(){
           var adw = document.getElementById("rys")
           var relname = "游客";
           var username = "tourist";
           var accounts = sessionStorage.getItem('account');
           let loading;
           if(accounts !==null){
                accounts= JSON.parse(accounts);
                relname = accounts.realname;
                username = accounts.username; 
           }
          
           var obj = {
                    "portraitUri": "",
                    "realName":relname,
                    "userName": username
                }
            console.log(obj)
           this.$this.post('/broker/rongcloud/user/token',obj).then((response)=>{
                this.tokens = response.data.data;
                var ra = document.getElementsByName("q");
                for(var i=0;i<ra.length;i++){
                    if(ra[i].checked==true){
                        if(ra[i].value == 0){
                            this.service = "service";
                            rongClouds(adw,this.service,this.tokens,relname)
                             setInterval(this.zixunShows,2000)
                        }else if(ra[i].value == 1){
                           
                            this.service = "service2";
                            rongClouds(adw,this.service,this.tokens,relname)
                            setInterval(this.zixunShows,2000);
                        }
                        // else if(ra[i].value == 2){
                        //     this.service = "service3";
                        //     rongClouds(adw,this.service,this.tokens,relname)
                        //     setInterval(this.zixunShows,2000);
                        // }else if(ra[i].value == 3){
                        //     this.service = "service4";
                        //     rongClouds(adw,this.service,this.tokens,relname)
                        //     setInterval(this.zixunShows,2000);
                        // }else{
                        //     this.service = "service5";
                        //     rongClouds(adw,this.service,this.tokens,relname)
                        //     setInterval(this.zixunShows,2000);
                        // }
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
   }
</script>


