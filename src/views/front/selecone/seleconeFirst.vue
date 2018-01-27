<template>
<div style="background:#eceef3">
    <Sec></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banner row">
                <div class="seleconeMain-mainfir col-xs-12">
                    <p class="selecone-pfir">云实测<span>——我们应该上哪家云呢?</span></p>
                    <div class="seclone-dv">
                        <h3>六大场景 近二百多个标准</h3>
                        <p>有没有一个简单的应用，可以科学的告诉我结果呢?</p>
                    </div>
                </div>
            </div>
            <div class="seleconeMain-charts container">
                <h4>现实中真实的困惑</h4>
                <P>面对诸多的云厂商，不知如何选择？</P>
                <div class="col-md-12 seleconeMain-img">
                    <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/charts.png" alt=""></div>
                 </div>
            </div>
            <div style="background:#f9fafb;width:100%;">
                <div class="seleconeMain-shrts container" >
                    <h4>上百个标准，六大场景选择</h4>
                    <P>为您提供科学选择最佳的云厂商</P>
                    <div class="col-md-12 seleconeMain-simg">
                        <div class="col-md-7 col-xs-12 text-right seleconeMain-"><img src="../../../assets/126.png" alt=""></div>
                        <div class="col-md-5 col-xs-12 text-left">
                            <ul>
                                <li><span class="sp1">1</span><span class="sp4">政府扶持</span></li>
                                <li><span class="sp3">2</span><span class="sp4">战略选型</span></li>
                                <li><span class="sp2">3</span><span class="sp4">财务决策</span></li>
                                <li><span class="sp1">4</span><span class="sp4">技术选型</span></li>
                                <li><span class="sp3">5</span><span class="sp4">安全合规</span></li>
                                <li><span class="sp1">6</span><span class="sp4">运维支撑能力</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background:#ffffff;width:100%">
                <div class="seleconeMain-echarts container">
                    <p class="child-p text-center">多维报表分析</p>
                    <p class="child-ps text-center">提供可视化数据展现</p>
                    <P class="child-pl text-center">海量数据 分析报告</P>
                    <div class="col-md-12 seleconeMain-img">
                        <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/84.png" alt="" style="width:70%;height:70%;"></div>
                    </div>
                </div>
            </div>
             <div style="background:#f6f7f8;width:100%">
                <div class="seleconeMain-echarts container">
                    <p class="child-p text-center col-xs-12">提供一站式全流程用户体验</p>
                    <div class="col-md-12 seleconeMain-img" style="margin-bottom:0;">
                        <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/85.png" alt="" style="width:70%;height:70%;"></div>
                    </div>
                    <p class="col-xs-12" style="margin-top:40px;margin-bottom:40px;"><span style="width:120px;height:31px;border:1px solid #e41e2b;font-size:14px;color:#e41e2b;padding:5px 10px;display:inline-block;text-align:center;">立即体验</span></p>
                </div>
            </div>
            <div style="background:#ededed;width:100%;height:96px;">
                <div class="seleconeMain-footer row">
                        <div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div></div>
                        <div></div>
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
       margin-top:50px;
   }
   .seleconeMain-charts p{
       font-size:16px;
       color:#333333;
       text-align:center;
   }
   .seleconeMain-img img{
       width:80%;
       height:80%;
   }
   .seleconeMain-img{
       margin-top:60px;
       margin-bottom:160px;
   }
   .seleconeMain-shrts h4{
       font-size:28px;
       color:#333333;
       text-align:center;
       margin-top:50px;
   }
   .seleconeMain-shrts p{
       font-size:16px;
       color:#333333;
       text-align:center;  
   }
   .seleconeMain-simg{
        margin-top:60px;
       margin-bottom:60px;
   }
   .seleconeMain-simg img{
       width:80%;
       height:80%;
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
</style>
<script>
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
 import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
    export default{
        components:{
            Sec,
            Sex
        }
    }
</script>