<template>
    <div class="total">
            <div class="total-header">
                <span></span>
                云设计
            </div>
            <sds index="5" start="4" :type="$route.query.type" :id="$route.query.id"></sds>
            <div class="designHeader">
                <div class="designTop">
                    <h2><i></i>推荐配置</h2>
                    <div class="designTab">
                        <p><span v-on:click="yyClick"><a class="designTaba">应用服务</a></span><span v-on:click="sjClick"><a class="designTaba">数据库服务</a></span><span v-on:click="wlClick"><a class="designTaba">网络服务</a></span><span v-on:click="ccClick"><a class="designTaba">存储服务</a></span><span v-on:click="cdnClick"><a class="designTaba">CDN</a></span></p>
                    </div>
                    <div class="designTabj" v-show="digaopei"><p><span v-on:click="dipeis">低配</span><span v-on:click="gaopeis">高配</span></p></div>
                    <div class="designConfig" v-show="yyshow" v-for="dat in dats">
                        <div style="margin:0 30px 0 30px;" >
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">应用服务</td>
                                        <td class="ds" style="line-height:110px">{{dat.num}}</td>
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px"><span class="col-md-3 ys">{{dat.cpu}}</span><span class="col-md-3 ys">{{dat.ram}}</span><span class="col-md-3 ys">{{dat.localDisk}}</span><span class="col-md-3 ys">{{dat.osType.name}}</span></li>
                                                <li><span class="col-md-3 ds">( v ) CPU</span><span class="col-md-3 ds">内存</br> ( GB )</span><span class="col-md-3 ds">系统盘（GB）</span><span class="col-md-3 ds">操作系统</span></li>
                                            </ul>
                                        </td>
                                        <td class="ds" style="line-height:120px"><span><i class="iconfont icon-bianji"></i>&nbsp修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="sjshow" v-for="dati in datis">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">数据库服务</td>
                                        <td class="ds" style="line-height:110px">{{dati.num}}</td>
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:20px"><span class="col-md-6 ys">{{dati.cpu}}</span><span class="col-md-6 ys">{{dati.ram}}</span></li>
                                                <li><span class="col-md-6 ds">( v ) CPU</span><span class="col-md-6 ds">内存</br> ( GB )</span></li>
                                                <li><span class="col-md-4 ys">{{dati.localDisk}}</span><span class="col-md-4 ys">{{dati.osType.name}}</span><span class="col-md-4 ys">{{}}</span></li>
                                                <li><span class="col-md-4 ds">本地磁盘（GB）</span><span class="col-md-4 ds">操作系统</span><span class="col-md-4 ds">数据库示例</span></li>
                                            </ul>
                                        </td>
                                        <td class="ds" style="line-height:120px"><span><i class="iconfont icon-bianji"></i>&nbsp修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="wlshow">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <!--<th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>-->
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">网络服务</td>
                                        <!--<td class="ds" style="line-height:110px">2</td>-->
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px"><span class="col-md-4 ys">{{this.zong}}</span><span class="col-md-4 ys">{{this.jin}}</span><span class="col-md-4 ys">{{this.chu}}</span></li>
                                                <li><span class="col-md-4 ds">总量（Mbps/月）</span><span class="col-md-4 ds">入站（Mbsp/月）</span><span class="col-md-4 ds">出站（Mbsp/月）</span></li>
                                            </ul>
                                        </td>
                                        <td style="line-height:120px;color:#da121a;font-size:14px"><span><i></i>暂不可以修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="ccshow" v-for=" sto in data.storage">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">存储服务</td>
                                        <td class="ds" style="line-height:110px">{{sto.num}}</td>
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px">
                                                    <span class="col-md-4 ys" v-if="sto.sna==undefined||sto.sna==''">--</span><span class="col-md-4 ys" v-else>{{sto.sna}}</span>
                                                    <span class="col-md-4 ys" v-if="sto.nsa==undefined||sto.nsa==''">--</span><span class="col-md-4 ys" v-else>{{sto.nsa}}</span>
                                                    <span class="col-md-4 ys" v-if="sto.cloudStorage==undefined||sto.cloudStorage==''">--</span><span class="col-md-4 ys" v-else>{{sto.cloudStorage}}</span>
                                                </li>
                                                <li><span class="col-md-4 ds">共享存储（SAN）（GB）</span><span class="col-md-4 ds">网络存储（SAN）（GB）</span><span class="col-md-4 ds">（<span v-if="sto.cse==undefined||sto.cse==''">--</span><span class="ys" v-else>{{sto.cse.name}}</span>）云存储</br>( GB )</span></li>
                                            </ul>
                                        </td>
                                        <td style="line-height:120px;color:#da121a;font-size:14px"><span><i></i>暂不可以修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="designConfig" v-show="cdnshow" v-for=" stos in data.cdns">
                        <div style="margin:0 30px 0 30px;">
                            <table class="table table-bordered">
                                <thead class="row">
                                    <tr>
                                        <th class="text-center col-md-1 trds" style="height:50px;line-height:50px;background:#ebebeb">角色</th>
                                        <!--<th class="text-center col-md-2 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">数量</th>-->
                                        <th class="text-center col-md-6 trds" style="padding:0px !important;border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">配置信息</th>
                                        <th class="text-center col-md-3 trds" style="border-top:1px solid #ddd;height:50px;line-height:50px;background:#ebebeb">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height:110px">
                                        <td class="ds" style="line-height:110px">CDN</td>
                                        <!--<td class="ds" style="line-height:110px">2</td>-->
                                        <td>
                                            <ul class="row" >
                                                <li style="margin-top:40px">
                                                    <span class="col-md-4 ys">{{stos.bandwidth}}</span><span class="col-md-4 ys">{{stos.cse.name}}</span>
                                                    <span class="col-md-4 ys" v-if=""></span><span class="col-md-4 ys">1</span></li>
                                                <li><span class="col-md-4 ds">流量（GB）</span><span class="col-md-4 ds">云厂商</span><span class="col-md-4 ds">购买起止时间</span></li>
                                            </ul>
                                        </td>
                                        <td style="line-height:120px;color:#cac9c9;font-size:14px"><span><i></i>暂不可以修正</span></td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <designHalf :type="$route.query.type" :id="$route.query.id"></designHalf>
    </div>
</template>
<style>
    .designHeader{
        /*min-height:90vh;
        padding-bottom:5%;*/
        padding-bottom:20px;
    }
    .designTop{
        width:100%;
        background:#fff;
        height:100%;
    }
    .designTop h2{
        text-align:left;
        margin:0px 0 40px 40px;
        font-size:14px;
        padding-top:20px;
        color:#6e6e6e;
    }
    .designTab p{
        height:40px;
        border-bottom:1px solid #ccc;
        margin-left:30px;
        margin-right:30px;
    }
    .designTab p span:hover{
        cursor:pointer
    }
    .designTabj p span:hover{
         cursor:pointer
    }
     .designTab a{
        display:inline-block;
      
        
        border-radius:1px;
        background:#f7f7f7;
        padding:5px 20px;
        font-size:14px;
        color:#b9b5b5;
        text-align:left;
        
        margin-bottom:10px;
    }
    .designbg{
        background:#da121a !important;
        border-radius:1px !important;
        color:#fff !important;
    }
    .designSpanbg{
        border-bottom:1px solid #da121a;
    }
    .designTab span{
        
        margin-right:30px;
         display:inline-block;
         float:left;
    }
   .designConfig{
       width:100%;
   }
   .designdesignConfiguration{
        margin-left:30px;
        margin-right:30px;
   }
   .designConfigLi span{
       height:50px;
       background:#ebebeb;
       line-height:50px;
   }
   .designConfigLis .spansli{
      height:150px;
      line-height:150px;

   }
   .designConfigLis .spanslis{
      height:150px;
   }
  .designTabj p span{
      float:left;
      margin-left:30px;
      font-size:12px;
      color:#c0c0c0;
      padding:5px 20px;
      border:1px solid  #c0c0c0;
  }
  .designTabj{
      margin-bottom:50px;
  }
  .ys{
      color:#da121a;
      font-size:12px;
  }
  .ds{
      font-size:12px;
        color:#969696;
  }
  .trds{
      font-size:14px;
      color:#777777;
  }
  .designTabjBj{
      background:#f7a72c;
      border-radius:1px;
      color:#fff !important;
      border:none !important;
  }
</style>
<script>
   
import sds from '../../../components/steps/steps'
import designHalf from '../design/designHalf/designHalf'
      export default{
            name:"design",
            data(){
                return {
                    yyshow:true,
                    sjshow:false,
                    wlshow:false,
                    ccshow:false,
                    cdnshow:false,
                    dipei:false,
                    gaopei:false,
                    appId:"",
                    digaopei:true,
                    index:0,
                    dats:[],
                    datis:[],
                    data:[],
                    zong:"",
                    jin:"",
                    chu:""
                }
            },
            methods:{
               yyClick:function(){
                   this.sjshow=false;
                   this.wlshow=false;
                   this.cdnshow=false;
                   this.ccshow=false;
                   this.digaopei=true;
                   this.index = 1;
                         $(".designTabj p").find("span").removeClass("designTabjBj")  
               },
               sjClick:function(){
                  
                   this.yyshow=false;
                   this.wlshow=false;
                   this.cdnshow=false; 
                   this.ccshow=false;
                   this.digaopei=true;
                   this.index = 2;
                   $(".designTabj p").find("span").removeClass("designTabjBj")
               },
               wlClick:function(){
                   
                    if(this.data.network==null){
                        this.wlshow=false
                    }else if(this.data.network!==null){
                        this.wlshow=true;
                    }
                    this.sjshow=false;
                   this.yyshow=false;
                   this.cdnshow=false;
                   this.ccshow=false;
                   this.digaopei=false;
                     
               },
               ccClick:function(){
                    this.ccshow=true;
                    this.sjshow=false;
                   this.wlshow=false;
                   this.cdnshow=false;
                   this.yyshow=false;
                   this.digaopei=false;
               },
               cdnClick:function(){
                    this.cdnshow=true;
                     this.sjshow=false;
                   this.wlshow=false;
                   this.yyshow=false;
                   this.ccshow=false;
                   this.digaopei=false;
               },
               dipeis:function(){
                   
                    this.gaopei = false;
                    this.dipei = true;
                    
                    if(this.index == 1){
                          this.$this.get('/broker/design/list/'+this.appId+'/1/18').then((ris)=>{
                                  this.dats = ris.data.data;
                                  this.yyshow=true;
                          },(err)=>{
                              console.log("不好意思")    
                          });  
                   }else if(this.index == 2){
                       this.$this.get('/broker/design/list/'+this.appId+'/2/18').then((ros)=>{
                                  this.datis = ros.data.data;
                                  this.sjshow=true;
                                  console.log(this.datis)
                          },(err)=>{
                              console.log("不好意思")    
                          });  
                          
                   }
               },
             
               gaopeis:function(){
                   this.gaopei = true;
                   this.dipei = false;
                   if(this.index == 1){
                       this.$this.get('/broker/design/list/'+this.appId+'/1/17').then((ris)=>{
                              this.dats = ris.data.data;
                              this.yyshow=true;
                              console.log(this.dats)
                    },(err)=>{
                              console.log("不好意思")    
                      });  
                   }else if(this.index == 2){
                       this.$this.get('/broker/design/list/'+this.appId+'/2/17').then((ros)=>{
                                  this.datis = ros.data.data;
                                  this.sjshow=true;
                                  console.log(this.datis)
                       },(err)=>{
                              console.log("不好意思")    
                       });  
                          
                   }
               }
            },
            mounted:function(){
                this.appId = this.$route.query.id;
                 $(".designTab p").find("span").first().addClass("designSpanbg");
                 $(".designTab p").find("span").find("a").first().addClass("designbg");
                 $(".designTabj p").find("span").first().addClass("designTabjBj");
                this.index = 1;
                this.dipeis();
                 $(document).ready(function(){ 
                    $(".designTab p").find("span").click(function(){
                        $(".designTab p").find("span").removeClass("designSpanbg")
                        $(this).addClass("designSpanbg")
                        $(".designTab p span").find("a").removeClass("designbg");
                        $(this).find("a").addClass("designbg");
                    })
                    $(".designTabj p").find("span").click(function(){
                        $(".designTabj p").find("span").removeClass("designTabjBj")
                        $(this).addClass("designTabjBj")
                    })
                }); 
                 this.$this.get('broker/app/resource/group/'+this.appId).then((rvs)=>{
                                  this.data = rvs.data.data;
                                  if(this.data.network!==null){
                                      this.jin = this.data.network.inbound;
                                      this.chu =  this.data.network.outbound; 
                                      this.zong=this.jin+this.chu;
                                  }
                                  console.log(this.data)
                                  if(this.data.storage == []){
                                      return false;
                                  }
                  },(err)=>{
                              console.log("不好意思")    
                  });
            },
            components:{
                sds,
                designHalf
            }


    }
</script>