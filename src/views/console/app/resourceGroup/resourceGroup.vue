<template>
<div class="total">
<div class="total-header">
    <span></span>
    <router-link to="/consolePage">总览</router-link> > 资源组配置
</div>
<div class="plan-box">
    <div class="plan-container">
        <sds index="2" start="0" :type="queryType"></sds>
            <div class="resourceCroup-list row">
                <div class="resourceCroup-list-head col-md-3">
                    <span class="padding-65">App Server(s)</span><input type="text" v-model="num">
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="number" v-model="cores" >vCPU</li>
                    <li><input type="text" v-model="ghz">处理器主频（Ghz）</li>
                    <li><input type="text" v-model="ram">内存(GB)</li>
                    <li><input type="text" v-model="localDisk">系统盘(GB)</li>
                    <li><select name="" id="sele" v-model="os">
                                <option value="Linux">Linux</option>
                                <option value="Window">Window</option>
                                <option value="Unix">Unix</option>
                        </select>操作系统
                        </li>
                        <li><input type="text" v-model="computeMappingFactor">计算机云主机平均合并率</li>
                    <li><input type="text" v-model="monthlyUsage">每个月用量（天/月）</li>
                    <li><input type="text" v-model="dailyUsage">每天用量（小时/天）</li>
                </ul>
            </div>
            <div class="resourceCroup-list row">
                <div class="resourceCroup-list-head col-md-3">
                    <span class="padding-65">App SDB Server(s)</span><input type="text" v-model="nume">
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="text" v-model="coresq">vCPU</li>
                    <li><input type="text" v-model="ghzq">处理器主频（Ghz）</li>
                    <li><input type="text" v-model="ramq">内存(GB)</li>
                    <li><input type="text" v-model="localDiskq">本地磁盘 (GB)</li>
                    <li><select name="" id="selet" v-model="osq">
                                <option value="Linux">Linux</option>
                                <option value="Window">Window</option>
                                <option value="Unix">Unix</option>
                        </select>操作系统
                        </li>
                        <li><input type="text" v-model="computeMappingFactorq">计算机云主机平均合并率</li>
                    <li><input type="text" v-model="monthlyUsageq">每个月用量（天/月）</li>
                    <li><input type="text" v-model="dailyUsageq">每天用量（小时/天）</li>
                </ul>
            </div>
            <div class="resourceCroup-list row">  
                <div class="resourceCroup-list-head col-md-3">  
                    <span class="padding-25">Network</span>
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="text" v-model="bandwidth ">带宽（GB/月）</li>
                    <li><input type="text" v-model="inbound">入站（GB/月）</li>
                    <li><input type="text" v-model="outbound">出站（GB/月）</li>
                </ul>
            </div>
            <div class="resourceCroup-list row">
                <div class="resourceCroup-list-head col-md-3">  
                    <span class="padding-25">Storage</span><input type="text" v-model="nums">
                </div>
                <ul class="resourceCroup-list-ul col-md-9">
                    <li><input type="text" v-model="sna" id="Gx">共享存储(SAN)(GB)</li>
                    <li><input type="text" v-model="nsa" id="Ine">网络存储(NAS)(GB)</li>
                    <li><input type="text" v-model="cloudStorage">云存储(GB)</li>
                </ul>
            </div>
            <router-link to="" class="nex"><button class="btn btn-default resourcebtn" @click="btn()">下一步</button></router-link> 
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
    .notice-title{
    margin:0px !important;
}
</style>
<script>
import sds from '../../../../components/steps/steps.vue'
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
       num:"1",
       nume:"1",
       nums:"1",
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

       appId:"",
       queryType:''
    }
  },
  mounted:function(){
      this.queryType = this.$route.query.type;
      //this.$layer.msg("注意：以下全为必填项");
      //this.appId = this.$route.query.id;
      //console.log("="+this.appId) 
  },
  methods:{
      
      btn:function(){
           //console.log(this.os);
            // if(){

            //    this.$layer.alert("注意：您有未填写的项目，请填写完整");
            // }else{
            //this.appId = sessionStorage.getItem("appId"); 

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
            
            this.$this.post('/broker/app/resource/group',obj).then((res)=>{
                    console.log(res+"chengg");
                     //this.$router.push({path:'/login'});/planQuestion
                     if(this.queryType=='compare'){
                        this.$router.push({path:'/compareQuestion',query:{type:this.queryType,id:this.appId}});
                     }else{
                        this.$router.push({path:'/planQuestion',query:{type:this.queryType,id:this.appId}});
                     }
                     
                     },(err)=>{
                         console.log("不好意思")
                      });
               
            

      }
  },
    components:{
        sds
    }
}
  </script>


