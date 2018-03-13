<template>
    <div class="total">
        <div class="total-header">
                <span></span>
                总览
                ><p class="comback">云设计</p>
            </div>
            <div class="designHeader">
                <div class="designTop">
                    <h2><i class="iconfont icon-xitongpeizhi" style="color:#da121a;font-size:16px"></i>&nbsp&nbsp云设计详情</h2>
                    <div class="designTab">
                        <p><span v-on:click="yyclick"><a class="designTaba">应用服务</a></span><span v-on:click="sjclick"><a class="designTaba">数据存储服务</a></span><span ><a class="designTaba">网络服务</a></span><span ><a class="designTaba">存储服务</a></span><span ><a class="designTaba">CDN</a></span></p>
                    </div>
                    <div class="designTabj" v-show="digaopeis"><p><span v-on:click="dipei">低配</span><span v-on:click="gaopei">高配</span></p></div>
                    <div v-show="yyshow">
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
                                     <td>{{dat.cpu}}</td>
                                     <td rowspan="6" style="color:#206faf"><span class="hoverspanRouter" v-on:click="routerDesign(dat.appid)"><i class="iconfont icon-chakan"></i>&nbsp查看详情</span></td>
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
                                     <td>{{dat.ram}}</td>
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
                                     <td rowspan="6">1</td>
                                     <td rowspan="6">1</td>

                                     <td>（v）CPU</td>
                                     <td v-if="dati.resServer==null">--</td>
                                     <td v-else>{{dati.resServer.cores}}</td>
                                     <td>{{dati.cpu}}</td>
                                     <td rowspan="6" style="color:#206faf"><span class="hoverspanRouter" v-on:click="routerDesign(dati.appid)"><i class="iconfont icon-chakan"></i>&nbsp查看详情</span><</td>
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
                                     <td>{{dati.ram}}</td>
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
    .hoverspanRouter:hover{
       cursor:pointer; 
    }
    .designHalf-table-public{
        width:95% !important; 
    }
     .designHeader{
        /*min-height:90vh;
        padding-bottom:5%;*/
        padding-bottom:20px;
        margin-top:20px;
    }
     .designTop{
        width:100%;
        background:#fff;
        height:100%;
    }
    .designTop h2{
        text-align:left;
        margin:0px 0 40px 18px;
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
      margin-left:30px;
      font-size:12px;
      color:#c0c0c0;
      padding:5px 20px;
      border:1px solid  #c0c0c0;
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
                }
            },
            methods:{
                routerDesign:function(e){
                        this.$router.push({path:'/design',query:{id:e}});
                },
                yyclick:function(){
                    this.yyshow = true;
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
                                    console.log(this.datis)
                        },(err)=>{
                                console.log("不好意思")    
                        }); 
                   }else if(this.inder == 2){
                       this.$this.get('/broker/design/list/2/18').then((ros)=>{
                                    this.dati = ros.data.data;
                                    this.sjshow=true;
                                    console.log(this.dati)
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
                                    console.log(this.datis)
                        },(err)=>{
                                console.log("不好意思")    
                        }); 
                   }else if(this.inder == 2){
                       this.$this.get('/broker/design/list/2/17').then((ros)=>{
                                    this.dati = ros.data.data;
                                    this.sjshow=true;
                                    console.log(this.dati)
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