<!--云规划-->
<template>
<div style="background:#eceef3">
    <Sec></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banner row animated bounceInLeft">
                <div class="seleconeMain-mainfir col-xs-12">
                    <p class="selecone-pfir" style="font-weight:100;">我可以上云吗？上哪种类型的云？</span></p>
                    <div class="seclone-dv">
                        <h3 class="selecone-pfir" style="font-weight:100;">三步让您科学上云</h3>
                        <p style="font-weight:100;">有没有一个简单的应用，可以科学的告诉我结果呢？</p>
                    </div>
                     <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;"><span class="spanTy" @click="spanTy()">立即体验</span></p>
                </div>
            </div>
             <div style="background:#ffffff;width:100%">
                <div class="seleconeMain-charts container">
                    <h4 class="h4Fir">当前云计算已广泛深入人心</h4>
                    <h4 class="h4Firer">众多用户纷纷选择上云</h4>
                    <P style="font-size:16px">企业关注的也不再是上不上云，而是我的工作负载适合上云吗？适合上哪种类型的云？</P>
                    <div class="col-md-12 seleconeMain-img">
                        <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/Group 16.png" alt=""></div>
                    </div>
                </div>
            </div>
            <div style="background:#f9fafb;width:100%;">
                <div class="seleconeMain-shrts container" >
                    <h4 class="shrts-h4">集结上百位专家心血</h4>
                    <h4 class="shrts-h4er">为您提供科学规划和上云</h4>
                    <P>解决工作负载是否适合上云？适合上哪种类型的云？</P>
                    <div class="col-md-12 seleconeMain-simg">
                        <div class="col-md-7 col-xs-12 text-right seleconeMain-"><img src="../../../assets/126.png" alt=""></div>
                        <div class="col-md-5 col-xs-12 text-left">
                            <ul class="Main-ul">
                                <li>只需三步，即刻测试查看</li>
                                <li class="Main-li"><img src="../../../assets/Group 81.png" alt="" class="iconer-img"><span class="sp4">云定性</span></li>
                                <li><img src="../../../assets/Group 82.png" alt="" class="iconer-img"><span class="sp4 ">云收益度</span></li>
                                <li><img src="../../../assets/83.png" alt="" class="iconer-img"><span class="sp4 ">云亲和度</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background:#ffffff;width:100%">
                <div class="seleconeMain-echarts container broundDow">
                    <h4 class="shrts-h4">多维报表分析</h4>
                    <h4 class="shrts-h4er">提供可视化数据展现</h4>
                    <P>海量数据、分析报告</P>
                    <div class="col-md-12 seleconeMain-img">
                        <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/84.png" alt="" style="width:63%;height:63%;"></div>
                    </div>
                </div>
            </div>
             <div style="background:#f6f7f8;width:100%">
                <div class="seleconeMain-echarts container broundU">
                    <p class="child-p text-center col-xs-12">提供一站式全流程用户体验</p>
                    <div class="col-md-12 seleconeMain-img" style="margin-bottom:100px;">
                        <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/85.png" alt="" style="width:55%;height:55%;"></div>
                    </div>
                  
                </div>
            </div>
            <div style="background:#ededed;width:100%;height:auto;">
                <div class="seleconeMain-footer row">
                    <div class="container" style="width:60%;">
                        <div class="col-md-4 col-xs-12 footer-laster" >
                            <dl>
                                <dt class="dts"><img src="../../../assets/88.png" alt=""></dt>
                                <dd class="dds">
                                    <ul>
                                        <li class="dds-li">保姆化</li>
                                        <li class="dds-lis">1V1顾问支持</li>
                                        <li class="dds-lis">提供一站化体验</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div class="col-md-4 col-xs-12  footer-laster" style="padding-left:6%;">
                              <dl>
                                <dt class="dts"><img src="../../../assets/87.png" alt=""></dt>
                                <dd class="dds">
                                    <ul>
                                        <li class="dds-li">权威化</li>
                                        <li class="dds-lis">云集百位专家</li>
                                        <li class="dds-lis">提供科学化上云规划</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div class="col-md-4 col-xs-12 footer-laster" style="padding-left:8%;">
                              <dl>
                                <dt class="dts"><img src="../../../assets/86.png" alt=""></dt>
                                <dd class="dds">
                                    <ul>
                                        <li class="dds-li">可视化</li>
                                        <li class="dds-lis">多维报表分析</li>
                                        <li class="dds-lis">提供可视化数据展现</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Sex></Sex>
</div>


</template>
<style>
   .container{
     
        max-width: 1090px;

   }
   .footer-laster{
       
       margin-top:20px;
   }
   dl .dts{
        float:left;
        margin-top:10px;
        margin-right:10px;
   }
   dl .dds{
       text-align:left;
   }
   .dds-li{
       font-size:14px;
       color:#333333;
   }
   .dds-lis{
       font-size:12px;
       color:#666666;
       margin-top:5px;
   }
   *{margin:0px;padding:0px;}
   .seleconeMain-banner{background:url("../../../assets/seclecone-one.png") no-repeat;height:450px;text-align:center}
   .seleconeMain-mainfir{margin-top:160px;}
   .seleconeMain-mainfir .selecone-pfir{
        font-size:24px;
        color:#ffffff;
        text-align:center;
   }
   .seleconeMain-mainfir .selecone-pfir span{
       font-weight:100;
       color:#ccc;
   }
   .seclone-dv h3{
       font-size:32px;
       color:#ffffff;
       text-align:center;
   }
   .seclone-dv p{
       font-size:20px;
       color:#fff;
       text-align:center;
   }
   .seleconeMain-charts{
       width:100%;
   }
   .seleconeMain-charts H4{
       font-size:28px;
       color:#333333;
       text-align:center;
   }
   .seleconeMain-charts .h4Fir{
         margin-top:50px;
   }
   .Main-ul li img{
       width:47px;
       height:47px;
   }
   .seleconeMain-charts .h4Firer{
       margin-top:10px;
       margin-bottom:30px;
   }
   .seleconeMain-echarts .shrts-h4{
       margin-top: 50px;
           font-size: 28px;
    color: #333333;
    text-align: center;
   }
   .seleconeMain-echarts .shrts-h4er{
       margin-top: 10px;
    margin-bottom: 30px;
        font-size: 28px;
    color: rgb(51, 51, 51);
    text-align: center;
    }
   .seleconeMain-charts p{
       font-size:16px;
       color:#777777;
       text-align:center;
   }
   .seleconeMain-img img{
       width:50%;
       height:50%;
       
   }
   .seleconeMain-img{
       margin-top:60px;
       margin-bottom:100px;
   }
   .seleconeMain-shrts h4{
       font-size:28px;
       color:#333333;
       text-align:center;
     
   }
   .seleconeMain-shrts .shrts-h4{
      margin-top:50px;
   }
   .seleconeMain-shrts .shrts-h4er{
       margin-top:10px;
       margin-bottom:30px;
   }
   .seleconeMain-shrts p{
       font-size:16px;
       color:#777777;
       text-align:center;  
   }
   .seleconeMain-simg{
        margin-top:60px;
       margin-bottom:100px;
   }
   .seleconeMain-simg img{
       width:80%;
       height:80%;
   }
   .Main-ul{
       padding-left:20px;
   }
   .Main-li{
       margin-top:20px;
   }
   .iconer-img{
       margin-right:15px;
   }
   .seleconeMain-simg ul li .sp4{
       font-size:14px;
       color:#666666;
       text-align:center;
   }
   .seleconeMain-simg ul li .sp1{
      background:#e41e2b;
      width:20px;font-size:16px;
      height:20px;
      text-align:center;
      display:inline-block;
      border-radius:100%;
      color:#fff;
   }
   .seleconeMain-simg ul li .sp2{
     background:#e15f2d;
      width:20px;font-size:16px;
      height:20px;
      text-align:center;
      display:inline-block;
      border-radius:100%;
      color:#fff;
   }
   .seleconeMain-simg ul li .sp3{
     background:#f7a72c;
      width:20px;font-size:16px;
      height:20px;
      text-align:center;
      display:inline-block;
      border-radius:100%;
      color:#fff;
   }
    .seleconeMain-simg ul{
        margin-top:20px;
    }
     .seleconeMain-simg ul li span{
         margin-right:5px;
     }
    .seleconeMain-simg ul li{
        margin-bottom:10px;
    }
    .seleconeMain-echarts p{
    font-size: 16px;
    color: rgb(119, 119, 119);
    text-align: center;
    }
    .seleconeMain-echarts .child-p{
        font-size:28px;
       color:#333333;
       text-align:center;
       margin-top:50px; 
    }
    .seleconeMain-echarts .child-ps{
           font-size:28px;
       color:#333333;
       text-align:center;
    }
    .seleconeMain-echarts .child-pl{
           font-size:16px;
       color:#333333;
       text-align:center;
    }
    .spanTy{
        border:1px solid #e41e2b;font-size:14px;color:#fff;padding:10px 50px;display:inline-block;text-align:center;background:#e41e2b;
    }
    .spanTy:hover{
        cursor:pointer;
        background:#fff;
        color:#e41e2b;
        border:none;
    }
</style>
<script>
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
 import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
    export default{
        components:{
            Sec,
            Sex
        },
        methods:{
            spanTy:function(){
                this.$router.push({path: '/login'});
            }
        },
        mounted:function(){
            $(document).ready(function(){ 
                       $.fn.extend({
                        animateCss: function (animationName) {
                            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                            $(this).removeClass('animated ' + animationName);
                            });
                        }           
                    });
             var index=0;
             var isn = true;
             $(window).scroll(function(){
              
               if(isn==true){
                    if($(this).scrollTop()>300&&$(this).scrollTop()<450){
                      $(".seleconeMain-charts").animateCss('bounceInLeft');
                    };
                    if($(this).scrollTop()>800&&$(this).scrollTop()<850){
                        $(".seleconeMain-shrts").animateCss('bounceInLeft');
                    };
                    if($(this).scrollTop()>1300&&$(this).scrollTop()<1350){
                        $(".broundDow").animateCss('bounceInLeft');
                    };
                    if($(this).scrollTop()>1750&&$(this).scrollTop()<1800){
                        $(".broundU").animateCss('bounceInLeft');
                        index=1;
                    };
               }
                if(index==1){
                   isn = false;
               }
                  
        })
             
               
        })
    }
    }
</script>