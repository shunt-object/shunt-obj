<template>
    <div class="total">
        <div class="total-header">
                <span></span><p class="zong">云设计</p>
            </div>
            <div class="designHeader">
                <div class="designTop">
                    <h2><i class="iconfont icon-sheji main-color" style="color:#da121a;font-size:16px"></i>云设计详情</h2>
                    <div class="designTab">
                        <p>
                            <span v-on:click="yyclick"><a class="designTaba">应用服务</a></span>
                            <span v-on:click="sjclick"><a class="designTaba">数据存储服务</a></span>
                            <span><button disabled class="designTaba notclick" style="color:#B5B5B5;background:#EDEDED;cursor: not-allowed;width: 110px; height: 29px; ">网络服务</button></span>
                            <span><button disabled class="designTaba notclick" style="color:#B5B5B5;background:#EDEDED;cursor: not-allowed;width: 110px; height: 29px; ">存储服务</button></span>
                            <span><button disabled class="designTaba notclick" style="color:#B5B5B5;background:#EDEDED;cursor: not-allowed; width: 110px; height: 29px;">CDN</button></span></p>
                    </div>
                    <div class="designTabj row" v-show="digaopeis">
                        <p class="col-md-12" style="width:300px;margin-left:15px;">
                            <span v-on:click="dipei" class="col-md-4">低配</span>
                            <span v-on:click="gaopei" class="col-md-4" style="margin-left:20px;">高配</span>
                        </p>
                    </div>
                    <div  class="col-md-12">
                        <div id="idexEcharts"></div>
                    </div>
                    <div v-show="yyshow">
                        <div style="margin-bottom:50px;">应用服务月度数量统计分析</div>
                       <table class="designHalf-table-public" id="example" style="margin-left:30px">
                       
                            <thead>
                                <tr>
                                    <td class="designHalf-w-6" rowspan="2">应用名称</td>
                                    <td class="designHalf-w-6" rowspan="2">分析名称</td>
                                    <td class="designHalf-w-31" align="center" valign="middle" colspan="3">配置信息</td>
                                    <td class="designHalf-w-6" rowspan="2">操作</td>
                                </tr>
                                <tr>
                                    <td class="designHalf-public-bg designHalf-w-7">规格</td>
                                    <td class="designHalf-public-bg designHalf-w-7">当前配置</td>
                                    <td class="designHalf-public-bg designHalf-w-7">云配置（推荐）</td>
                                </tr>                
                            </thead>
                            <tbody v-for="dat in datis">
                                <tr>
                                     <td rowspan="6">{{dat.appSimple.appname}}</td>
                                     <td rowspan="6">{{dat.appSimple.proname}}</td>

                                     <td>（v）CPU</td>
                                     <td v-if="dat.resServer==null">--</td>
                                     <td v-else>{{dat.resServer.cores}}</td>
                                     <td>{{Math.round(dat.cpu)}}</td>
                                     <td rowspan="6" style="color:#206faf"><span class="hoverspanRouter" style="font-size:14px;" v-on:click="routerDesign(dat.appid)"><i class="iconfont icon-chakan"></i>&nbsp查看详情</span></td>
                                </tr>
                                <tr style="background:#f7f7f7">
                                    <td>处理器主频（GHZ）</td>
                                     <td v-if="dat.resServer==null">--</td>
                                     <td v-else>{{dat.resServer.ghz}}</td>
                                     <td v-if="dat.ghz==undefined">--</td>
                                </tr>
                                <tr>
                                    <td>内存（GB）</td>
                                     <td v-if="dat.resServer==null">--</td>
                                     <td v-else>{{dat.resServer.ram}}</td>
                                     <td>{{Math.round(dat.ram)}}</td>
                                </tr>
                                <tr style="background:#f7f7f7">
                                    <td>系统盘</td>
                                     <td v-if="dat.resServer==null">--</td>
                                     <td v-else>{{dat.resServer.localDisk}}</td>
                                     <td>{{dat.localDisk}}</td>
                                </tr>
                                <tr>
                                    <td>操作系统</td>
                                      <td v-if="dat.resServer==null">--</td>
                                     <td v-else>{{dat.resServer.osType.name}}</td>
                                     <td>{{dat.osType.name}}</td>
                                </tr>
                               <!-- <tr>
                                    <td>资源平均利用率</td>
                                     <td></td>
                                     <td></td>
                                     <td>{{dat.cmf.name}}</td>
                                </tr>-->
                            </tbody>
                        </table>
                    </div>
                    <div v-show="sjshow">
                    <div style="margin-bottom:50px;">数据库服务月度数量统计分析</div>
                       <table class="designHalf-table-appServer designHalf-table-public" id="example" style="margin-left:30px">
                            <thead>
                                <tr>
                                    <td class="designHalf-w-6" rowspan="2">应用名称</td>
                                    <td class="designHalf-w-6" rowspan="2">分析名称</td>
                                    <td class="designHalf-w-31" align="center" valign="middle" colspan="3">配置信息</td>
                                    <td class="designHalf-w-6" rowspan="2">操作</td>
                                </tr>
                                <tr>
                                    <td class="designHalf-public-bg designHalf-w-7">规格</td>
                                    <td class="designHalf-public-bg designHalf-w-7">当前配置</td>
                                    <td class="designHalf-public-bg designHalf-w-7">云配置（推荐）</td>
                                </tr>                
                            </thead>
                            <tbody v-for="dati in dati">
                                <tr>
                                     <td rowspan="6">{{dati.appSimple.appname}}</td>
                                     <td rowspan="6">{{dati.appSimple.proname}}</td>

                                     <td>（v）CPU</td>
                                     <td v-if="dati.resServer==null">--</td>
                                     <td v-else>{{dati.resServer.cores}}</td>
                                     <td>{{Math.round(dati.cpu)}}</td>
                                     <td rowspan="6" style="color:#206faf"><span class="hoverspanRouter" v-on:click="routerDesign(dati.appid)"><i class="iconfont icon-chakan"></i>&nbsp查看详情</span></td>
                                </tr>
                                <tr style="background:#f7f7f7">
                                    <td>处理器主频（GHZ）</td>
                                     <td v-if="dati.resServer==null">--</td>
                                     <td v-else>{{dati.resServer.ghz}}</td>
                                     <td v-if="dati.ghz==undefined">--</td>
                                </tr>
                                <tr>
                                    <td>内存（GB）</td>
                                     <td v-if="dati.resServer==null">--</td>
                                     <td v-else>{{dati.resServer.ram}}</td>
                                     <td>{{Math.round(dati.ram)}}</td>
                                </tr>
                                <tr style="background:#f7f7f7">
                                    <td>本地磁盘</td>
                                     <td v-if="dati.resServer==null">--</td>
                                     <td v-else>{{dati.resServer.localDisk}}</td>
                                     <td>{{dati.localDisk}}</td>
                                </tr>
                                <tr>
                                    <td>操作系统</td>
                                      <td v-if="dati.resServer==null">--</td>
                                     <td v-else>{{dati.resServer.osType.name}}</td>
                                     <td>{{dati.osType.name}}</td>
                                </tr>
                               <!-- <tr>
                                    <td>资源平均利用率</td>
                                     <td></td>
                                     <td></td>
                                     <td>{{dat.cmf.name}}</td>
                                </tr>-->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
</template>
<style>
.hoverspanRouter:hover{ cursor:pointer;  }
.designHalf-table-public{ width:95% !important;  }
.designHeader{ padding-bottom:20px; margin-top:20px; }
.designTop{
width:100%;
background:#fff;
height:100%;
}
@media (max-width: 768px) {  /* 手机 */
     .designTab p{
        height:40px;
        border-bottom:0px solid #ccc;
        margin-left:30px;
        margin-right:30px;
    }
     #idexEcharts{
      margin:200px auto 0 auto;
      width:270px;
      height:150px
    }
}
@media (min-width: 768px) {  /* pc */
     .designTab p{
        height:40px;
        border-bottom:1px solid #ccc;
        margin-left:30px;
        margin-right:30px;
    }
    #idexEcharts{
      margin:0 auto;
      width:900px;
      height:300px
    }
}
.designTop h2{
        text-align:left;
        /*margin:0px 0 40px 18px;*/
        font-size:14px;
        /*padding-top:20px;*/
        color:#6e6e6e;
    }
   
    .designTab p span:hover{
        cursor:pointer
    }
       .designTab a{
        display:inline-block;
      
        
        border-radius:1px;
        background:#f7f7f7;
        width:110px;
        height:29px;
        text-align:center;
        line-height:29px;
        font-size:14px;
        color:#b9b5b5;        
        margin-bottom:10px;
    }
      .designTab span{
        margin-right:30px;
         display:inline-block;
         float:left;
    }
    .designTabj p span:hover{
         cursor:pointer
    }
    .designTabj p span{
    float:left;
    margin-right:30px;
    font-size: 12px;
    color: #c0c0c0;
    padding: 5px 20px;
    border: 1px solid #c0c0c0;
  }
  .designTabj{
      margin-bottom:50px;
  }
   .designSpanbg{
        border-bottom:1px solid #da121a;
    }
    .designbg{
        background:#da121a !important;
        border-radius:1px !important;
        color:#fff !important;
    }
      .designTabjBj{
      background:#f7a72c;
      border-radius:1px;
      color:#fff !important;
      border:1px solid #f7a72c  !important;
  }
 
</style>
<script>
    import sds from '../../../components/steps/steps'
    import echarts from 'echarts'
      export default{
            name:"designer",
            data(){
                return {
                    digaopeis:true,
                    yyshow:false,
                    inder : 0,
                    datis:[],
                    dati:[],
                    sjshow:false,
                    charters:"",
                    echartsey:[],
                    valuters:[],
                    echartsnum:0,
                    enum:0,
                }
            },
            methods:{
                chartsChange:function(){
                      var myCherts = echarts.init(document.getElementById('idexEcharts'));
                        myCherts.setOption ({
                                color: ['#f7a72c'],
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    },
                                   
                                },
                                 legend: {
                                    data: ['数量'],
                                    x:'87%',
                                    //right:'10px',
                                    y:'10px'
                                },
                                grid: {
                                    left: '8%',
                                    right: '6%',
                                    bottom: '4%',
                                    top:"15%",
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        name:"月份",
                                        type : 'category',
                                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                              yAxis: [{
                                type:'value',
                                name:'数量',
                                axisLabel: {
                                    formatter: '{value}'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#999'
                                    }
                                },
                                nameTextStyle:{
                                    color:'#999'
                                },
                                }
                                ],
                                series : [
                                           
                              
                                    {
                                        name:'数量',
                                        type:'bar',
                                        barWidth: '60%',
                                        data:this.valuters
                                    }
                                ]
                    });
                },
                echartsList:function(e,d){
                    this.echartsey=[];
                    this.valuters = [];
                    //console.log(d)
                     this.$this.get('/broker/design/analysis/month/total/'+e+"/"+d).then((rns)=>{  //取得echarts图表的数据
                                    //this.echartsey = rns.data.data;
                                    for( let u = 0;u<rns.data.data.length;u++){
                                        this.echartsey.push({name:rns.data.data[u].months,value:rns.data.data[u].vmtotal})
                                        this.valuters.push([rns.data.data[u].months,rns.data.data[u].vmtotal])
                                    }
                                    //console.log(this.valuters)
                                    this.chartsChange()
                        },(err)=>{
                                console.log("不好意思")    
                        });
                },
                routerDesign:function(e){
                        this.$router.push({path:'/design',query:{id:e}});
                },
                yyclick:function(){
                    this.yyshow = true;
                     this.sjshow = false;
                     this.digaopei=true;
                     this.inder = 1;
                     $(".designTabj p").find("span").removeClass("designTabjBj");
                     $(".designTabj p").find("span").last().addClass("designTabjBj");
                     this.gaopei();
                },
                sjclick:function(){
                    this.inder = 2;
                     this.digaopei=true;
                     this.sjshow = true;
                     this.yyshow=false;
                      $(".designTabj p").find("span").removeClass("designTabjBj");
                    $(".designTabj p").find("span").last().addClass("designTabjBj");
                   this.gaopei();
                },
                dipei:function(){
                    if(this.inder == 1){
                        this.$this.get('/broker/design/list/1/18').then((ros)=>{
                                    this.datis = ros.data.data;
                                    this.yyshow=true;
                                    //console.log(ros)
                                    this.echartsnum = 1;
                                    this.enum = 18;
                                    this.echartsList(this.echartsnum,this.enum);
                        },(err)=>{
                                console.log("不好意思")    
                        }); 
                   }else if(this.inder == 2){
                       this.$this.get('/broker/design/list/2/18').then((ros)=>{
                                    this.dati = ros.data.data;
                                    this.sjshow=true;
                                     this.echartsnum = 2;
                                     this.enum = 18;
                                    this.echartsList(this.echartsnum,this.enum);
                                  
                                    //console.log(this.dati)
                        },(err)=>{
                                console.log("不好意思")    
                        });
                         
                   }
                },
                gaopei:function(){
                     if(this.inder == 1){
                        this.$this.get('/broker/design/list/1/17').then((ros)=>{
                                    this.datis = ros.data.data;
                                    this.yyshow=true;
                                   // console.log(this.datis);
                                     this.echartsnum = 1;
                                     this.enum = 17;
                                    this.echartsList(this.echartsnum,this.enum);
                        },(err)=>{
                                console.log("不好意思")    
                        }); 
                   }else if(this.inder == 2){
                       this.$this.get('/broker/design/list/2/17').then((ros)=>{
                                    this.dati = ros.data.data;
                                    this.sjshow=true;
                                   // console.log(this.dati);
                                     this.echartsnum = 2;
                                     this.enum = 17;
                                    this.echartsList(this.echartsnum,this.enum);
                        },(err)=>{
                                console.log("不好意思")    
                        }); 
                   }
                }
            },
            mounted:function(){
                $(".designTab p").find("span").first().addClass("designSpanbg");
                 $(".designTab p").find("span").find("a").first().addClass("designbg");
                 $(".designTabj p").find("span").last().addClass("designTabjBj");
                 this.inder = 1;  //1是应用服务
                 this.gaopei();
                
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
                
            }
     }
</script>