<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/">总览</router-link> > 资源组配置
</div>
<div class="plan-box">
    <div class="plan-container">
        <child index="2" start="0"></child>
            <div class="resourceCroup-list row">
                <div class="resourceCroup-list-head col-md-3">
                    <span class="padding-65">App servers</span><input type="text" v-model="num">
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="number" v-model="cores" >Vcpu</li>
                    <li><input type="text" v-model="ghz">处理器主频</li>
                    <li><input type="text" v-model="ram">内存</li>
                    <li><input type="text" v-model="localDisk">系统盘</li>
                    <li><select name="" id="sele" v-model="os">
                                <option value="Linux">Linux</option>
                                <option value="Window">Window</option>
                                <option value="Unix">Unix</option>
                        </select>操作系统
                        </li>
                        <li><input type="text" v-model="computeMappingFactor">计算机映射因子</li>
                    <li><input type="text" v-model="monthlyUsage">每个月用量</li>
                    <li><input type="text" v-model="dailyUsage">每天用量</li>
                </ul>
            </div>
            <div class="resourceCroup-list row">
                <div class="resourceCroup-list-head col-md-3">
                    <span class="padding-65">App SDB Servers</span><input type="text" v-model="nume">
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="text" v-model="coresq">cpu</li>
                    <li><input type="text" v-model="ghzq">处理器主频</li>
                    <li><input type="text" v-model="ramq">内存</li>
                    <li><input type="text" v-model="localDiskq">系统盘</li>
                    <li><select name="" id="selet" v-model="osq">
                                <option value="Linux">Linux</option>
                                <option value="Window">Window</option>
                                <option value="Unix">Unix</option>
                        </select>
                        </li>
                        <li><input type="text" v-model="computeMappingFactorq">计算机映射因子</li>
                    <li><input type="text" v-model="monthlyUsageq">每个月用量</li>
                    <li><input type="text" v-model="dailyUsageq">每天用量</li>
                </ul>
            </div>
            <div class="resourceCroup-list row">  
                <div class="resourceCroup-list-head col-md-3">  
                    <span class="padding-25">Network</span>
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="text" v-model="bandwidth ">带宽</li>
                    <li><input type="text" v-model="inbound">入站</li>
                    <li><input type="text" v-model="outbound">出站</li>
                </ul>
            </div>
            <div class="resourceCroup-list row">
                <div class="resourceCroup-list-head col-md-3">  
                    <span class="padding-25">Storage</span><input type="text" v-model="nums">
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="text" v-model="sna">共享存储</li>
                    <li><input type="text" v-model="nsa">网络存储</li>
                    <li><input type="text" v-model="cloudStorage">云存储</li>
                </ul>
            </div>
            <router-link to="/planQuestion" class="nex"><button class="btn btn-default resourcebtn" @click="btn()">下一步</button></router-link> 
            <div class="clear" style="margin-bottom:20px;"></div>
    </div>

</div>
</div>
</template>
<style>
    .nex{
        color:#000;
    }
    a:hover{
        color:#000;
    }
</style>
<script>
import child from '../../../../components/steps/steps.vue'
import '../resourceGroup/resourceGroup.css'
export default {
  name: 'ResourceGroup',
  data () {
    return {
    //    appId:"",
       
       cores:"",
       ghz:"",
       ram:"",
       computeMappingFactor:"",
       localDisk:"",
       os:"",
       monthlyUsage:"",
       dailyUsage:"",
       num:"",
       nume:"",
       nums:"",
       coresq:"",
       ghzq:"",
       ramq:"",
       computeMappingFactorq:"", 
       localDiskq:"",
       osq:"",
       monthlyUsageq:"",
       dailyUsageq:"",

       bandwidth:"",
       inbound:"",
       outbound:"",
       
       sna:"",
       nsa:"",
       cloudStorage:"",

       appId:""
    }
  },
  methods:{
      
      btn:function(){
            //console.log(this.os);
            if(this.nsa==""||this.sna==""||this.computeMappingFactor==""||this.cores==""||this.dailyUsage==""||this.ghz==""||this.localDisk==""||this.monthlyUsage==""||this.os==""||this.ram==""||this.computeMappingFactorq==""||this.coresq==""||this.dailyUsageq==""||this.ghzq==""||this.localDiskq==""||this.monthlyUsageq==""||this.osq==""||this.ramq==""||this.bandwidth==""||this.inbound==""||this.outbound==""||this.cloudStorage==""){
               return false
            }else{
            this.appId = sessionStorage.getItem("appId"); 
             
            // let valuely = $("#sele").val();
            // let valueey = $("#selet").val();
            // console.log(this.appId);
            let obj ={
                
                    "appId":this.appId,
                    "appServer": {
                        "computeMappingFactor":this.computeMappingFactor,
                        "cores": this.cores,
                        "dailyUsage": this.dailyUsage,
                        "ghz": this.ghz,
                        "localDisk": this.localDisk,
                        "monthlyUsage":this.monthlyUsage ,
                        "num":this.num,
                        "os": this.os,
                        "ram": this.ram
                    },
                    "dbServer": {
                        "computeMappingFactor": this.computeMappingFactorq,
                        "cores":  this.coresq,
                        "dailyUsage": this.dailyUsageq,
                        "ghz": this.ghzq,
                        "localDisk": this.localDiskq,
                        "monthlyUsage": this.monthlyUsageq,
                        "num":this.nume,
                        "os": this.osq,
                        "ram": this.ramq
                    },
                    "network": {
                        "bandwidth": this.bandwidth,
                        "inbound": this.inbound,
                        "outbound": this.outbound
                    },
                    "storage": {
                        "cloudStorage": this.cloudStorage,
                        "nsa": this.nsa,
                        "num":this.nums,
                        "sna": this.sna
                    }

              };
            
            this.$http.post('/broker/app/resource/group',obj).then((res)=>{
                    console.log(res+"chengg");
                     this.$router.push({path:'/login'});

                     },(err)=>{
                         console.log("不好意思")
                      });
               
            

      }}
  },
    components:{
        child
    }
}
  </script>


