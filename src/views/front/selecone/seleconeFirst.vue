<!--云选型-->

<template>   
<div style="background:#eceef3">
        <div class="fixed-box">
            <ul class="fixed-ul">
                <li id="xiaowei" v-on:click="xiaowei()" class="liHoversBj"> <img src="../../../assets/homePage-online.png" class="fixed-icon" alt="">在线客服</li>
                <li class="phone-li liHoversBj" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
                    <a href="tel:4008287308" style="color:#fff"><img src="../../../assets/homePage-phone.png" class="fixed-icon" alt="">电话咨询</a>
                    <div v-show="phoneBox" class="phone-box"><img src="../../../assets/alertPhone.png" alt=""  style="width:100%;height:100%"></div>
                </li>
            
            </ul>
            <img src="../../../assets/scroll.png" alt="" class="scrollUp">
        </div>
    <Sec active="2"></Sec>
    <div class="selecMain ">
           
                <!--<div class="seleconeMain-mainfir col-xs-12">
                    <p class="selecone-pfir" style="font-weight:100;">我们应该上哪家云呢？</span></p>
                    <div class="seclone-dv">
                        <h3 style="font-size:26px;font-weight:100">六大场景和近二百个标准</h3>
                        <p style="font-weight:100;">有没有一个客观的选型，可以专业的告诉我结果呢？</p>
                    </div>
                      <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;"><span class="spanTy" @click="spanTy()">立即体验</span></p>
                </div>-->
           
            <div class="seleconeMain-banner row " style="margin:0!important">
                 <div class="container">
                        <div class="seleconeMain-mainfir col-xs-12 col-md-6" style="padding-left:50px">
                            <p class="selecone-pfir" style="font-weight:100;text-align:left;font-size:18px">我们应该上哪家云呢？</span></p>
                            <div class="seclone-dv">
                                <h3 class="selecone-pfir" style="font-weight:100;text-align:left;font-size:26px">六大场景和近二百个标准</h3>
                                <p style="font-weight:100;text-align:left;font-size:18px">有没有一个客观的选型，可以专业的告诉我结果呢？</p>
                            </div>
                             <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:left;padding:0 !important"><span class="spanTy" @click="ctaCloundCsbs()">DEMO体验</span></p>
                        </div>
                        <div class="col-md-6 col-xs-12 text-left" style="margin-top:105px;padding:0 !important;"><img src="../../../assets/compare.png" alt="" style="float:right;width: 80%;"></div>
                 </div>
            </div>
            <div style="background:#fff;width:100%">
                <div class="seleconeMain-charts container">
                    <h4 style="font-weight:100">当前企业上云情况</h4>
                    <P style="margin-top:10px;font-size:16px;color:#777777;">上云成为常态、多云变为主流</P>
                    <span style="float:right;color: rgb(119, 119, 119);">注：引用RightScale2018年上云趋势报告</span>
                    <div class="col-md-12 seleconeMain-img" style="margin:0px;">
                        <div class="col-md-4 col-xs-12 text-center">
                            <div id="mains"></div>
                        </div>
                        <div class="col-md-8 text-center col-xs-12" style="padding-top:48px;" id="charts-right">
                            <ul>
                                <li class="liwen"><span class="li-spa">48%</span><span class="li-spm">混合云</span></li>
                                <li class="bigLi bigLione"></li>
                                <li class="liwen"><span class="li-spa">15%</span><span class="li-spm">多公有云</span></li>
                                <li class="bigLi bigLitwo"></li>
                                <li class="liwen"><span class="li-spa">11%</span><span class="li-spm">多私有云</span></li>
                                <li class="bigLi bigLithree"></li>
                            </ul>
                        </div>
                    </div>
                    <!--<div class="seleconefirst-source">RightScale2017年上云趋势报告</div>-->
                </div>
            </div>
            <div style="background:#f9fafb;width:100%;" class="broundRi">
                <div class="seleconeMain-shrts container" >
                    <h4 style="font-weight:100">看清自身需求业务需求</h4>
                    <P style="margin-top:10px;">不同维度细化需求颗粒，看清所想与所需</P>
                    <div class="col-md-12 seleconeMain-simg">
                        <div class="col-md-9 col-xs-12 text-right seleconeMain"><img src="../../../assets/126.png" alt=""></div>
                        <div class="col-md-3 col-xs-12 text-left">
                            <ul>
                                <li><span class="sp1" style="margin-right:10px;">1</span><span class="sp4">政府扶持</span></li>
                                <li><span class="sp3" style="margin-right:10px;">2</span><span class="sp4">战略选型</span></li>
                                <li><span class="sp2" style="margin-right:10px;">3</span><span class="sp4">财务决策</span></li>
                                <li><span class="sp1" style="margin-right:10px;">4</span><span class="sp4">技术选型</span></li>
                                <li><span class="sp3" style="margin-right:10px;">5</span><span class="sp4">安全合规</span></li>
                                <li><span class="sp1" style="margin-right:10px;">6</span><span class="sp4">运维支撑能力</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style="background:#ffffff;width:100%" >
                <div class="seleconeMain-echarts broundDow container">
                    <h4 class="child-p text-center" style="font-weight:100">多维报表分析</h4>
                    <h4 class="child-ps text-center" style="font-weight:100">提供可视化数据展现</h4>
                    <P class="child-pl text-center" style="margin-top:10px;color:#777777">海量数据、分析报告</P>
                    <div class="col-md-12 seleconeMain-img">
                        <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/84.png" alt="" style="width:63%;height:63%;"></div>
                    </div>
                </div>
            </div>
             <div style="background:#f6f7f8;width:100%">
                <div class="seleconeMain-echarts broundU container">
                    <p class="child-p text-center col-xs-12" style="font-weight:100">提供一站式全流程用户体验</p>
                    <div class="col-md-12 seleconeMain-img" style="margin-bottom:60px;">
                        <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/zhenshi-new.png" alt="" style="width:55%;height:55%;"></div>
                    </div>
                   
                </div>
            </div>
            <div style="background:#ededed;width:100%;height:auto;">
                <div class="seleconeMain-footer row">
                    <div class="container text-left" style="width:60%;padding-left:cd30px;">
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                            <div class="col-md-3 col-xs-12 " style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/90fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
                    </div>
                </div>
            </div>
    </div>
    <Sex></Sex>
</div>


</template>
<style>
.liHoversBj:hover{
    background:#EF131D;
}
.bigLi{
    height:20px;
    background:#f35825;
    margin:8px 0 18px 0 ;
    cursor:pointer;
}
.bigLi:hover{
    height:20px;
    background:#da121a !important;
    margin:8px 0 18px 0 ;
}
@media (min-width: 768px) {
    #mains{
        width:500px;
        height:300px;
    }
    .imgeys{
        margin-left:20px !important;
    }
    .bigLione{
        width:388px;
    }
    #charts-right{
        padding-left:200px;
    }
    .bigLitwo{
        /*width:282px;*/
        width:180px;
    }
    .bigLithree{
        /*width:214px;*/
        width:155px;
    }
}

@media (max-width: 767px) {
    #mains{
        width:200px;
        height:150px;
    }
   .imgeys{
       margin-left:0 !important;
   }
   .divSc{
            margin-top:20px !important;
            margin-bottom:20px !important;
        }
    #charts-right{
        padding-left:0;
    }
    .bigLione{
        width:200px;
    }
    .bigLitwo{
        width:70px
    }
    .bigLithree{
        width:50px;
    }
}
.liwen{
    text-align:left;
}
.liwen span{
    margin-left:10px;
}
.li-spm{
    font-size:14px;
    color:#333333;
}



.li-spa{
    font-size:14px;
    color:#333333;
}
.seleconeMain-banner{
   animation-duration:2s;
}
.seleconeMain-shrts{
    animation-duration:2s;
}
.seleconeMain-charts{
     animation-duration:2s;
}
.broundU{
    animation-duration:2s;
}
.broundDow{
    animation-duration:2s; 
}
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
   .seleconeMain-banner{background:#222222;text-align:center;background-size:100% 100%;}
   .seleconeMain-mainfir{margin-top:160px;}
   .seleconeMain-mainfir .selecone-pfir{
        font-size:26px;
        color:#ffffff;
        text-align:center;
   }
   .seleconeMain-mainfir .selecone-pfir span{
       font-weight:100;
       color:#ccc;
   }
   .selecone-psec{

   }
   .seclone-dv h3{
       font-size:32px;
       color:#ffffff;
       text-align:center;
   }
   .seclone-dv p{
       font-size:14px;
       color:#fff;
       text-align:center;
   }
   .seleconeMain-charts{
       width:100%;
       animation-duration:2s;
   }
   .seleconeMain-charts H4{
       font-size:26px;
       color:#333333;
       text-align:center;
       margin-top:50px;
   }
   .seleconeMain-charts p{
       font-size:28px;
       color:#333333;
       text-align:center;
   }
   .seleconeMain-img img{
       width:80%;
       height:80%;
   }
   .seleconeMain-img{
       margin-top:25px;
       margin-bottom:60px;
   }
   .seleconeMain-shrts h4{
       font-size:26px;
       color:#333333;
       text-align:center;
       margin-top:50px;
   }
   .seleconeMain-shrts p{
       font-size:16px;
       color:#777777;
       text-align:center;  
   }
   .seleconeMain-simg{
        margin-top:25px;
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
        font-size:26px;
       color:#333333;
       text-align:center;
       margin-top:50px; 
    }
    .seleconeMain-echarts .child-ps{
        font-size:26px;
       color:#333333;
       text-align:center;
    }
    .seleconeMain-echarts .child-pl{
           font-size:16px;
       color:#333333;
       text-align:center;
    }
    .spanTy{
        border:1px solid #e41e2b;font-size:12px;color:#fff;padding:10px 25px;display:inline-block;text-align:center;background:#e41e2b
    }
    .spanTy:hover{
        cursor:pointer;
        background:#fff;
        color:#e41e2b;
        border:none;
    }
     .scrollUp:hover{
        cursor:pointer;
    } 
</style>
<script>
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
 import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
 import echarts from 'echarts'




    export default{
        components:{
            Sec,
            Sex
        },
        data(){
            return{
                arrs:true,
                charts:"",
                 phoneBox:false
            }
        },
        mounted() {
            $(document).ready(function(){ 
                     $(window).scroll(function(){
                    // console.log($(this).scrollTop());
        
                    //当window的scrolltop距离大于1时，go to 
                        if($(this).scrollTop() > 550){
                            $('.scrollUp').css("display","block")
                            }else{
                                    $('.scrollUp').fadeOut();
                                }
                    });
            
                    $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                    });


              })
 /*ECharts图表*/
            var myChart = echarts.init(document.getElementById('mains'));
            myChart.setOption({
                 title : {  
                    text: '74%',  
                    subtext:"多公有云",
                    x:'center',
                    top:"45%"
                },  
                  
                series : [
                    {
                        type: 'pie',
                         legendHoverLink:false,
                        hoverAnimation:false,
                        radius : ['65%','70'],
                        label:{            //饼图图形上的文本标签
                            normal:{
                                show:true,
                                textStyle: {
                                    color: '#333333',
                                    fontSize:14,
                                },
                                 rich: {
                                        a: {
                                            color: '#333',
                                            fontSize: 12,
                                            lineHeight: 20
                                        },
                                        b: {
                                            fontSize: 12,
                                            lineHeight: 20,
                                            color: '#333'
                                        }
                                    }
                                }
                            },
                        labelLine: {
                        normal: {
                            length: 10,
                            length2: 40,
                            lineStyle: {
                                color: '#fff'
                            }
                        }

                    },
                     
                        data:[
                        {
                            value:18, 
                            name:"单一公有云 13%",
                            itemStyle:{
                                normal:{
                                    color:'#c4c2c2'
                                }
                            }
                        },
                        {
                            value:9, 
                            name:"未规划 4%",
                            itemStyle:{
                                normal:{
                                    color:'#e3e3e3'
                                }
                            }
                        },
                        {
                            value:14, 
                            name:"单一私有云 9%",
                            itemStyle:{
                                normal:{
                                    color:'#d6d6d6'
                                }
                            }
                        },
                        {
                            value:55, 
                           
                            itemStyle:{
                                normal:{
                                    color:'#e41e2b'
                                }
                            }
                        },
                        ]
                    }
                ]
            })
 },
        methods:{
              ctaCloundCsbs:function(){
                    window.open("http://demo.csb-china.com")
                },
            spanTy:function(){
                this.$router.push({path: '/login'});
            },
            xiaowei:function(){
                //  var that = this; 
                 var win = window.open("#/CustomerService");
                //  var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
               //var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            }
        }
        
    }
</script>