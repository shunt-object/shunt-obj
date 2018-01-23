<template>
<div class="total resourceGroup">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">资源组配置</p>
</div>
<sds index="2" start="2" :type="$route.query.type" :id="$route.query.id"></sds>
<div class="reourceContent">        
    <div class="resource">配置信息</div> 
    <div class="resourceCroup-list row" style="margin-bottom:10px !important;">
        <div class="resourceCroup-list-head col-md-2 col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group1.png" alt="">
            <h4>应用服务</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12 col-xs-12" > <input type="number" min="1" v-model="num"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 text-left ulss col-sm-12">
            <li class=" col-sm-12"><input type="number" v-model="cores" min="1">&nbsp&nbspvCPU</li>
            <li class=" col-sm-12"><input type="number" v-model="ghz" min="1">&nbsp&nbsp处理器主频（Ghz）</li>
            <li class=" col-sm-12"><input type="number" v-model="ram" min="1">&nbsp&nbsp内存(GB)</li>
            <li class=" col-sm-12"><input type="number" v-model="localDisk" min="1">&nbsp&nbsp系统盘(GB)</li>
            <li class=" col-sm-12">
                <select name="" id="sele" v-model="os">
                    <option value="Linux">Linux</option>
                    <option value="Window">Window</option>
                    <option value="Unix">Unix</option>
                </select>&nbsp&nbsp操作系统
            </li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="computeMappingFactor">&nbsp&nbsp平均计算合并率</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="monthlyUsage">&nbsp&nbsp每个月用量（天/月）</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="dailyUsage">&nbsp&nbsp每天用量（小时/天）</li>
        </ul>
    </div>
    <div class="resourceCroup-list row" style="margin-bottom:10px !important;">
        <div class="resourceCroup-list-head col-md-2 col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group2.png" alt="">
            <h4>数据库服务</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12" > <input type="number" min="1" v-model="num"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 ulss text-left col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="coresq">&nbsp&nbspvCPU</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ghzq">&nbsp&nbsp处理器主频（Ghz）</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ramq">&nbsp&nbsp内存(GB)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="localDiskq">&nbsp&nbsp本地磁盘 (GB)</li>
            <li class=" col-sm-12">
                <select name="" id="selet" v-model="osq">
                    <option value="Linux">Linux</option>
                    <option value="Window">Window</option>
                    <option value="Unix">Unix</option>
                </select>&nbsp&nbsp操作系统
            </li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="computeMappingFactorq">&nbsp&nbsp平均计算合并率</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="monthlyUsageq">&nbsp&nbsp每个月用量（天/月）</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="dailyUsageq">&nbsp&nbsp每天用量（小时/天）</li>
        </ul>
    </div>
    <div class="resourceCroup-list row" style="margin-bottom:10px !important;">  
        <div class=" col-md-2 head col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group3.png" alt="">
            <h4 style="margin-bottom:50px;">网络</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12" ></div>
        <ul class="resourceCroup-list-ul ulis ulss col-md-7 text-left col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="bandwidth ">&nbsp&nbsp带宽（GB/月）</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="inbound">&nbsp&nbsp入站（GB/月）</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="outbound">&nbsp&nbsp出站（GB/月）</li>
        </ul>
    </div>   

    <div class="resourceCroup-list row" style="margin-bottom:10px !important;">
        <div class="resourceCroup-list-head col-md-2 head col-sm-12 col-xs-12">  
            <img src="../../../../assets/overview/resource-group4.png" alt="">
            <h4 style="margin-bottom:50px;">存储</h4>
        </div>
        <div class="col-md-3 text-left Inp"  > <input type="number" min="1" v-model="num"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 ulss ulis text-left  col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="sna" id="Gx">&nbsp&nbsp共享存储(SAN)(GB)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="nsa" id="Ine">&nbsp&nbsp网络存储(NAS)(GB)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="cloudStorage">&nbsp&nbsp云存储(GB)</li>
        </ul>
    </div>
    <div class="resourcebtn-box" style="margin-top:20px;">
        <button class="jumpBnt" @click="jump()">跳过</button>
        <button class="resourcebtn" @click="btn()">下一步</button>
    </div>    
    <div class="clear" style="margin-bottom:20px;"></div>
    
</div>
</div>
</template>
<style>
*{
    padding:0
}
.write-num{
    color:#999; font-size:12px; margin-left:10px;
}
.reourceContent{
    width:100%; height:100%;background:#f8fafd; padding:12px 25px; border-top:1px solid #e9e9e9;
}
.row{
    width:100%;
    margin: 0 0 10px 0!important;
}
.resourceGroup img{
    width:90px; 
}
/*.nex{
    color:#000;
}*/
a:hover{
    color:#000;
}
.notice-title{
    margin:0px !important;
}
.resource{
    background:#da121a; border-radius:2px;  width:100%; height:30px; font-size:14px; color:#ffffff;text-align:center; line-height:30px; margin-bottom:12px;
}
.resourceCroup-list{
    margin-bottom:10px !important; background:#ffffff; 
}
.resourceCroup-list input{
    padding:0 10px;
}
.resourceCroup-list h4{
    font-size:16px; color:#333333;      
}  
.ulss li{
    margin-bottom:10px; font-size:14px; color:#333333;
}
.ulis{
    margin-top:30px;
}
.ulss li:nth-child(1){
    margin-top:30px;
}
.resourceGroup input,select{
    width:236px; height:30px;
}
.Inp input{
    width:60px; height:27px; padding:0; margin-top:150px; padding:0 10px;
}
.resourceCroup-list-head{
    margin-top:100px; padding-left:60px;
}
.head{
    margin-top:66px; padding-left:60px;
}
.resourcebtn{
    float:right; margin:10px 0; background:#da121a; border-radius:2px; width:94px;  height:35px; border:none; font-size:14px; color:#f0f0f0;
}
.jumpBnt{
    float:right; margin:10px; background:#fff; border-radius:2px; width:94px;  height:35px; border:1px solid #ccc; font-size:14px; color:#555;
}
</style>
<script>
import sds from '../../../../components/steps/steps.vue'
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
      this.appId = this.$route.query.id;
      console.log("="+this.appId) 
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
               
            

      },
      jump:function(){
          this.$router.push({path:'/planQuestion',query:{type:this.queryType,id:this.appId}});
      }
  },
    components:{
        sds
    }
}
  </script>


