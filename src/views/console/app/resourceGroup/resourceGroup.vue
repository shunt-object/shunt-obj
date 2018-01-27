<template>
<div class="total resourceGroup">
<div class="total-header">
    <span></span>
    <router-link class="zong" to="/consolePage">总览</router-link>
    ><p class="comback">资源组配置</p>
</div>
<sds index="2" start="2" :type="$route.query.type" :id="$route.query.id"></sds>
<div class="reourceContent">        
    <div class="resource">当前工作负载配置信息</div> 
    <div class="resourceCroup-list row clsa" style="margin-bottom:10px !important;" v-for="(jl,index) in cores">
    <div class="col-md-1">{{index}}</div>
        <div class="resourceCroup-list-head col-md-1 col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group1.png" alt="">
            <h4>应用服务</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12 col-xs-12" > <input type="number" min="1" v-model="cores[index].num"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 text-left ulss col-sm-12">
            <li class=" col-sm-12"><input type="number" v-model="cores[index].cores" min="1">&nbsp&nbsp(v)CPU</li>
            <li class=" col-sm-12"><input type="number" v-model="cores[index].ghz" min="1">&nbsp&nbsp处理器主频(GHZ)</li>
            <li class=" col-sm-12"><input type="number" v-model="cores[index].ram" min="1">&nbsp&nbsp内存(GB)</li>
            <li class=" col-sm-12"><input type="number" v-model="cores[index].localDisk" min="1">&nbsp&nbsp系统盘(GB)</li>
            <li class=" col-sm-12">
                <select name="" id="sele" v-model="cores[index].os">
                    <option value="Linux">Linux</option>
                    <option value="Window">Window</option>
                    <option value="Unix">Unix</option>
                </select>&nbsp&nbsp操作系统
            </li>
                   
            <li class=" col-sm-12">
                <select v-model="cores[index].computeMappingFactor">
                    <option value="≤30%">≤30%</option>
                    <option value="30%-60%">30%-60%</option>
                    <option value="60%-90%">60%-90%</option>
                    <option value="≥90%">≥90%</option>
                </select>&nbsp&nbsp资源平均利用率
            </li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="cores[index].monthlyUsage">&nbsp&nbsp每个月用量(天/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="cores[index].dailyUsage">&nbsp&nbsp每天用量(小时/天)</li>
            <li class="col-sm-12 creadIng"  ><span v-on:click="creadIng(index)"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp添加应用服务</span><span v-on:click="removeAl(index)"><i class="fa fa-minus" aria-hidden="true"></i>&nbsp删除此应用服务</span></li>
        </ul>
    </div>
    <div class="resourceCroup-list row" style="margin-bottom:10px !important;"  v-for="(ine,index) in ines">
        <div class="resourceCroup-list-head col-md-2 col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group2.png" alt="">
            <h4>数据库服务</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12" > <input type="number" min="1" v-model="ines[index].num"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 ulss text-left col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].coresq">&nbsp&nbsp(v)CPU</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].ghzq">&nbsp&nbsp处理器主频(GHZ)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].ramq">&nbsp&nbsp内存(GB)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].localDiskq">&nbsp&nbsp本地磁盘(GB)</li>
            <li class=" col-sm-12">
                <select name="" id="selet" v-model="ines[index].osq">
                    <option value="Linux">Linux</option>
                    <option value="Window">Window</option>
                    <option value="Unix">Unix</option>
                </select>&nbsp&nbsp操作系统
            </li>
            <li class="col-sm-12">
                <select v-model="ines[index].computeMappingFactorq">
                    <option value="≤30%">≤30%</option>
                    <option value="30%-60%">30%-60%</option>
                    <option value="60%-90%">60%-90%</option>
                    <option value="≥90%">≥90%</option>
                </select>&nbsp&nbsp资源平均利用率
            </li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].monthlyUsageq">&nbsp&nbsp每个月用量(天/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="ines[index].dailyUsageq">&nbsp&nbsp每天用量(小时/天)</li>
            <li class="col-sm-12 creadIng" ><span  v-on:click="creadIn(index)"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp添加数据库服务</span><span @click="removeAe(index)"><i class="fa fa-minus" aria-hidden="true"></i>&nbsp删除数据库服务</span></li>
        </ul>
    </div>
    <div class="resourceCroup-list row" style="margin-bottom:10px !important;">  
        <div class=" col-md-2 head col-sm-12 col-xs-12">
            <img src="../../../../assets/overview/resource-group3.png" alt="">
            <h4 style="margin-bottom:50px;">网络</h4>
        </div>
        <div class="col-md-3 text-left Inp col-sm-12" ></div>
        <ul class="resourceCroup-list-ul ulis ulss col-md-7 text-left col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="bandwidth ">&nbsp&nbsp带宽(Mbps/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="inbound">&nbsp&nbsp入站(Mbps/月)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="outbound">&nbsp&nbsp出站(Mbps/月)</li>
        </ul>
    </div>   

    <div class="resourceCroup-list row" style="margin-bottom:10px !important;"  v-for="(inu,index) in inus">
        <div class="resourceCroup-list-head col-md-2 head col-sm-12 col-xs-12">  
            <img src="../../../../assets/overview/resource-group4.png" alt="">
            <h4 style="margin-bottom:50px;">存储</h4>
        </div>
        <div class="col-md-3 text-left Inp"  > <input type="number" min="1" v-model="inus[index].num" style="margin-top:118px !important"><span class="write-num">请填写数量</span></div>
        <ul class="resourceCroup-list-ul col-md-7 ulss ulis text-left  col-sm-12">
            <li class=" col-sm-12"><input type="number" min="1" v-model="inus[index].sna" id="Gx">&nbsp&nbsp共享存储(SAN)(GB)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="inus[index].nsa" id="Ine">&nbsp&nbsp网络存储(NAS)(GB)</li>
            <li class=" col-sm-12"><input type="number" min="1" v-model="inus[index].cloudStorage">&nbsp&nbsp云存储(GB)</li>
            <li class="col-sm-12 creadIng"><span v-on:click="creadI(index)"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp添加存储</span><span @click="removeAs(index)"><i class="fa fa-minus" aria-hidden="true"></i>&nbsp删除存储</span></li>
        </ul>
    </div>
    <div class="resourcebtn-box" style="margin-top:20px;">
        <button class="jumpBnt" @click="jump()">跳过</button>
        <button class="resourcebtn" @click="btn()">下一步<i class="iconfont icon-xiayibu" style="margin-left:5px; color:#fff;" ></i>
</button>
    </div>    
    <div class="clear" style="margin-bottom:20px;"></div>
    
</div>
</div>
</template>
<style>
*{
    padding:0
}
.creadIng span{
    cursor:pointer;
    padding-right:20px;
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
            cores:[{
                    cores:"",
                    ghz:"",
                    ram:"",
                    computeMappingFactor:"",
                    localDisk:"",
                    os:"",
                    monthlyUsage:"",
                    dailyUsage:"",
                    num:"1",
            }],
       
       ines:[{
        num:"1",    
        coresq:"",
        ghzq:"",
        ramq:"",
        computeMappingFactorq:"", 
        localDiskq:"",
        osq:"",
        monthlyUsageq:"",
        dailyUsageq:""
      }],

       bandwidth:"",
       inbound:"",
       outbound:"",
       
     inus:[ 
         { 
          num:"1",
          sna:"",
          nsa:"",
          cloudStorage:""
        }
    ],

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
      creadIng:function(e){
          this.cores.push(
              {
                    cores:"",
                    ghz:"",
                    ram:"",
                    computeMappingFactor:"",
                    localDisk:"",
                    os:"",
                    monthlyUsage:"",
                    dailyUsage:"",
                    num:"1"
            }
          )
          console.log(this.cores)
            // this.lias.push(
            //     {
            //         cores:cores[index].cores,
            //         ghz:cores[index].ghz,
            //         ram:cores[index].ram,
            //         computeMappingFactor:cores[index].computeMappingFactor,
            //         localDisk:tcores[index]his.localDisk,
            //         os:cores[index].os,
            //         monthlyUsage:cores[index].monthlyUsage,
            //         dailyUsage:cores[index].dailyUsage,
            //         num:cores[index].num
            //     }
            // )
           
      },
      creadIn:function(){
         this.ines.push({
            num:"1",    
            coresq:"",
            ghzq:"",
            ramq:"",
            computeMappingFactorq:"", 
            localDiskq:"",
            osq:"",
            monthlyUsageq:"",
            dailyUsageq:""
        })
      },
      creadI:function(){
         this.inus.push(
             { 
                num:"1",
                sna:"",
                nsa:"",
                cloudStorage:""
            }
         )
      },

    //   -----删除---

    removeAl:function(index){
        if(this.cores.length>1){
            this.cores.splice(index, 1); 
        }else{
             this.$layer.alert("注意：此为最后一个应用服务，不可删除");
        }
    },
    removeAs:function(index){
        if(this.inus.length>1){
            this.inus.splice(index, 1);
        }else{
            this.$layer.alert("注意：此为最后一个存储服务，不可删除");
        }
    },
    removeAe:function(index){
        if(this.ines.length>1){
            this.ines.splice(index, 1); 
        }else{
             this.$layer.alert("注意：此为最后一个数据库服务，不可删除");
        }
    },


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
                    "appId": this.appId,
                    "appServer": this.cores,
                    "dbServer": this.ines,
                    "network": {
                        "bandwidth": this.bandwidth,
                        "inbound": this.inbound,
                        "outbound": this.outbound
                    },
                    "storage":this.inus

                   
              };
            console.log(obj)
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
        //   this.$router.push({path:'/planQuestion',query:{type:this.queryType,id:this.appId}});
         console.log(this.cores)
      }
  },
    components:{
        sds
    }
}
  </script>


