<!--云规划-->
<template >
<div style="background:#eceef3" id="he">
      <div class="rightBs">
            <ul>
                <li class="nexton" data-to="go1"></li>
                <li class="nextsec" data-to="go2"></li>
                <li class="nextthe" data-to="go3"></li>
                <li class="nextf" data-to="go4"></li>
            </ul>
      </div>
      <div class="fixed-box">
        <ul class="fixed-ul">
            <li class=" liHoversBj" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
               <a href="tel:4008287308" style="color:#fff"><img src="../../../assets/homePage-phone.png" class="fixed-icon" alt=""></a>
                <div v-show="phoneBox" class="phone-box liHoversBj"><img src="../../../assets/alertPhone.png" alt="" style="width:100%;height:100%"></div>
            </li>
            <li id="xiaowei"  class="liHoversBj phone-li" v-on:click="xiaowei"> <img src="../../../assets/homePage-online.png" class="fixed-icon" alt=""></li>
        </ul>
      
        
        <img src="../../../assets/scroll.png" alt="" class="scrollUp" style="width:47px;height:47px;">
    </div>
    <div style="background:#f5f5f5;width:100%;height:70px;line-height:70px;" class="displayshow">
            <div class=" fixshow container">
                    <div class="col-md-3 col-xs-3"><a href="#ProductFeatures"><i class="iconfont icon-mn_gongneng"></i> 产品功能</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#CoreStrengths"><i class="iconfont icon-hexin"></i> 核心优势</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#QuickStart"><i class="iconfont icon-feiji"></i> 快速入门</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#TheTimeline"><i class="iconfont icon-shijianriqi"></i> 时间轴</a></div>
            </div>
    </div>
    <Sec active="1" class="sectb"></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banners selectHelp row ">
                 <div class="container">
                        <div class="seleconeMain-mainfir nfir col-xs-12 col-md-6" style="padding-left:50px">
                            <p class="selecone-pfir" style="font-weight:100;text-align:left;font-size:26px;color:#f8f8f8">有高效购买性价比高的云资源方式吗？</span></p>
                            <div class="seclone-dv">
                                <h3 class="selecone-pfir" style="font-weight:100;text-align:left;font-size:16px;line-height:26px;">借助CloudBroker²提供的多云价格优选器和第三方云评星标准，为您提供最适合的云资源和服务。</h3>
                               
                            </div>
                             <p class="col-xs-12" style="margin-top:20px;margin-bottom:0px;text-align:left;padding:0 !important"><span class="spanTy" @click="lj">立即注册</span><span class="panTy" @click="ctaCloundCsbs()">DEMO体验</span></p>
                        </div>
                        <div class="col-md-6 col-xs-12 text-left lastimgs"><img src="../../../assets/er-icon/ii3@1x (1).png" alt="" style="float: right;width:85%"></div>
                 </div>
            </div>
            <div class="container naver">            
                <div class="row">
                    <div class="col-md-3 col-xs-3"><a href="#ProductFeatures" class="hoover-a"><i class="iconfont icon-mn_gongneng"></i> 产品功能</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#CoreStrengths" class="hoover-a"><i class="iconfont icon-hexin"></i> 核心优势</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#QuickStart" class="hoover-a"><i class="iconfont icon-feiji"></i> 快速入门</a></div>
                    <div class="col-md-3 col-xs-3"><a href="#TheTimeline" class="hoover-a"><i class="iconfont icon-shijianriqi"></i> 时间轴</a></div>
                </div>
            </div>
            <div class="nav-bottom-kk"></div>
            <div id="ProductFeatures" class="go1">
                <div class="container erfs whyContainer" style="margin-bottom:50px;">
                    <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">产品功能</span>
                    </div>
                    <div class="row text-center">
                        <div class="col-xs-12 col-sm-4 blurb-cta">
                            <div class="crounds"><img src="../../../assets/bs.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">意向订单统计分析</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-center"><span class="color_999 text-center" style="font-size:14px;color:#666666;">支持公有云厂商、购买实例规格和数量等</br>多个维度展现意向订单数据。</span></p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 blurb-cta">
                            <div class="crounds"><img src="../../../assets/as.png" alt="" class="Yunimg"></div>
                            <h2 class="h2-18">已支付订单</h2>
                            <div class="bluar-ccc mt">
                                <p class="text-center"><span class="color_999 text-center" style="font-size:14px;color:#666666;">提供已购买的订单列表，    </br>                                 方便用户记录和做综合统计。</br></span></p>
                            </div>
                        </div>
                   
                    </div>
                 </div>
            </div>
            <div style="width:100%;background:#f8f8f8" id="CoreStrengths" class="go2">
            <div class="container  erfs" style="padding-top:20px;padding-bottom:20px">
                <div class=" text-left redtitle">
                    <span class="redLine"></span><span class="redlasttitle">核心优势</span>
                </div>
                <div class="col-xs-12 cla text-left">
                <div class="col-xs-12 col-sm-6 claes " style="padding-left:1px;">
                    <dl>
                        <dt style="float:left;margin-right:20px;margin-left:10px;"><img src="../../../assets/er-icon/44.png" alt="" class="tranImg"></dt>
                        <dd style="diaplay:inline-block;">
                            <div class="mainpa text-left">
                                <p style="padding-top:6px;font-size:18px;color:#333333;">灵活化</pstyle>
                                <p class="mainPds">根据自身需求，企业用户随意修改意向订单实例范围。</p>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="col-xs-12 col-sm-6 claes" style="padding-left:1px;">
                    <dl>
                        <dt style="float:left;margin-right:20px;margin-left:10px;"><img src="../../../assets/er-icon/44444.png" alt="" class="tranImg"></dt>
                        <dd style="diaplay:inline-block">
                            <div class="mainpa text-left">
                                <p style="padding-top:6px;font-size:18px;color:#333333;">图表联动</pstyle>
                                <p class="mainPds">快速的、直观的、交互式的和多维度的展现订单内容。</p>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="col-xs-12 col-sm-6 claes" style="padding-left:1px;">
                    <dl>
                        <dt style="float:left;margin-right:20px;margin-left:10px;"><img src="../../../assets/er-icon/555.png" alt="" class="tranImg"></dt>
                        <dd style="diaplay:inline-block">
                            <div class="mainpa text-left">
                                <p style="padding-top:6px;font-size:18px;color:#333333;">简单化</pstyle>
                                <p class="mainPds">帮助企业用户从复杂的购买云实例和服务的工作中解决出来，                可以更加关注业务与的融合和管控。</p>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="col-xs-12 col-sm-6 claes" style="padding-left:1px;">
                    <dl>
                        <dt style="float:left;margin-right:20px;margin-left:10px;"><img src="../../../assets/er-icon/22.png" alt="" class="tranImg"></dt>
                        <dd style="diaplay:inline-block">
                            <div class="mainpa text-left">
                                <p style="padding-top:6px;font-size:18px;color:#333333;">可视化</pstyle>
                                <p class="mainPds">用户随时随地了解已经选择的意向购买实例，轻松判断是否需要下单购买？</p>
                            </div>
                        </dd>
                    </dl>
                </div>
                
                </div>
            </div>
            </div>
            <div style="width:100%;" id="QuickStart" class="go3">
                <div class="seleconeMain-shrts container erfs " style="padding-top:20px;padding-bottom:20px" >
                    <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">快速入门</span>
                    </div>
                    <div style="text-align:left;">
                        <div class="  ljs lijh" >
                            <div class="bigFang">
                                <div class="dv1">注册／登录</div>
                                <div class="dv2" @click="dls">立即体验 > </div>
                                <div class="dv3">1</div>
                            </div>
                        </div>
                        <div class="imgets imghs"><img src="../../../assets/line-long.png" alt="" class="bigimg1 bigimg"></div>
                        <div class=" ljs">
                            <div class="bigFang">
                                <div class="dv1">云买手／意向订单分析</div>
                                <div class="dv2" @click="dls">立即体验 > </div>
                                <div class="dv3">2</div>
                            </div>
                        </div>
                        <div class="imgets imghs"><img src="../../../assets/line-long.png" alt="" class="bigimg2 bigimg"></div>
                        <div class=" ljs">
                            <div class="bigFang">
                                <div class="dv1">云买手／已支付订单</div>
                                <div class="dv2" @click="dls">立即体验 > </div>
                                <div class="dv3">3</div>
                            </div>
                        </div>
                       
                        <div class="col-md-12 seleconeMain-img" style="margin-top:72px;">
                            <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/er-icon/aqietu.png" alt="" style="width:63%;height:63%;"></div>
                        </div>
                    </div>
                </div>
            </div>
       
             <div style="background:#f8f8f8;width:100%" id="TheTimeline" class="go4">
                <div class="seleconeMain-echarts container broundU erfs">
                     <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">时间轴</span>
                    </div>
                    <div class="col-md-12 seleconeMain-img" >
                       <div class="timezhou">
                            <div class="gh"><div></div></div>
                            <div class="gq"><div></div></div>
                            <div class="gw"><div></div></div>
                            <div class="ge"><div></div></div>
                            <div class="gr"><div></div></div>
                            <div class="gt"><div></div></div>
                            <div class="gy"><div></div></div>
                            <div class="timeli">2017.12</div>
                            <div class="timeli1">2017.12</div>
                            <div class="timeli2">2017.12</div>
                            <div class="timeli3">2018.01</div>
                            <div class="timeli4">2018.04</div>
                            <div class="licheng">云买手V1.0设计开始</div>
                            <div class="licheng1">云买手V1.0真实开发</div>
                            <div class="licheng7">购物车功能上线</div>
                            <div class="l2">云买手图表联动功能上线</div>
                            <div class="licheng4">云买手订单分类功能上线</div>
                       </div>
                    </div>
                  
                </div>
            </div>
      
            <div style="background:#ededed;;width:100%;height:auto;">
                <div class="seleconeMain-footer row">
                    <div class="container text-left" style="width:60%;padding-left:cd30px;">
                            <div class="col-md-3 col-xs-12" style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                            <div class="col-md-3 col-xs-12 text-center" style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                            <div class="col-md-3 col-xs-12 text-center" style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                            <div class="col-md-3 col-xs-12 text-right" style="margin-top:27px;margin-bottom:20px;padding-right:40px !important;"><img src="../../../assets/90fuwu.png" alt="" style="width:22%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
                    </div>
                </div>
            </div>
    </div>
    <Sex></Sex>
</div>


</template>
<style>
.dv2:hover{
    cursor:pointer;
}
.naver i{
    color:#c2c2c2;
}
.fixshow i{
    color:#c2c2c2;
}
/*悬浮框*/
.fixed-box{
 width:55px; position:fixed;right:0;bottom:100px;z-index:10;
}
.fixed-box .scrollUp{
    position:fixed;
    right:12px;
    display:none;
}
.fixed-ul li{
    background:#da121a; box-shadow:0 2px 4px 0 rgba(0,0,0,0.15); width:40px; height:40px; color:#fff;
    padding-top:1px; line-height:2px; cursor:pointer;
    font-size:10px;
}
.phone-li{
    margin-top:7px; position:relative;
}
.phone-box{
    width:185px; height:60px; position:absolute; right:68px; top:0;
}
.fixed-icon{
    display:block; margin:10px auto; width:18px; height:18px;
}
/**/
.rightBs ul li{
    background:#d8d8d8;
    width:10px;
    height:10px;
    border-radius:100%;
   margin-bottom:10px;
}

.rightBs ul{
    position:fixed;
    right:20px;
    top:40%;
}
.timeli,.timeli1,.timeli2,.timeli3,.timeli4{
    font-size:14px;
    color:#e41e2b;
}
.timeli{
     position:absolute;
    top:-45px;
    left:15%;
}
.timeli1{
     position:absolute;
    top:-45px;
    left:32%;
}
.timeli2{
     position:absolute;
    top:-45px;
    left:49%;
}
.timeli3{
     position:absolute;
    top:-45px;
    left:66%;
}
.timeli4{
     position:absolute;
    top:-45px;
    left:83%;
}
.licheng,.licheng1,.licheng2,.licheng3,.l2,.licheng7,.licheng4{
    font-size:14px;
    color:#666666;
}
.licheng{
       position:absolute;
        top:45px;
        left:10%;
}
.licheng1{
       position:absolute;
        top:45px;
        left:27%;
}

.licheng7{
       position:absolute;
        top:45px;
        left:44%;
}

.l2{
       position:absolute;
        top:45px;
        left:61%;
}

.licheng4{
       position:absolute;
        top:45px;
        left:80%;
}
.gh{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    top:-10px;
    left:-2px;
}
.gq{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:17%;
    top:-10px;
}
.gw{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:34%;
    top:-10px;
}
.ge{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:51%;
    top:-10px;
}
.gr{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:68%;
    top:-10px;
}
.gt{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:85%;
    top:-10px;
}
.gy{
    width:20px;height:20px;
    background:#cccccc;
    box-shadow:0 0 1px 0 rgba(182,182,182,0.50);
    border-radius:100px;
    display: table-cell;vertical-align: middle;
    position:absolute;
    left:100%;
    top:-10px;
}
.gh div{
    background:#ffffff;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gq div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gw div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.ge div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gr div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gt div{
    background:#da121a;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
.gy div{
    background:#fff;
    width:10px;
    height:10px;
    border-radius:100%;
    margin:0 auto;
    line-height:10px;
    margin-top:5px;
}
@media (max-width: 768px) {
      .ljs{
            width:100%;
            display:inline-block;
            margin-bottom:10px;
        }
        .imgets{
            display:none;
        }
        .lijh{
            margin-left:0px
        }
        .naver .row div{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .fixshow div{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
}
@media (min-width: 768px) {
      .ljs{
            width:16%;
            display:inline-block;
        }
     .imgets{
          display:inline-block;
         
     }
     .imghs img{
          width:160px !important;
     }
    .lijh{
        margin-left:20px
    }
}
.mainPds{
    line-height:20px;
}
.crounds{
    background:#f5f5f5;
    border-radius:100px;
    width:88px;
    height:85px;
    margin:0 auto;
    line-height:80px;
}
.fixshow a{
    font-size:14px;
    color:#333333;
}
.fixshow a:hover{
    font-size:14px;
    color:#da121a;
    border-bottom:1px solid #da121a;
    padding-bottom:20px;
}
.fixshow i:hover{
    font-size:14px;
    color:#da121a;
    border-bottom:1px solid #da121a;
    padding-bottom:20px;
}
.fixshow a:hover{
    color:#da121a !important;
}
.displayshow{
    display:none;
    position:fixed;
    top:0;
    z-index:999999999;
}
.cround{
    background: #f5f5f5;
    border-radius:100%;
    width:100px;
    height:130px;
    margin:0 auto;
    line-height:130px
}
.erfs{
        max-width: 1020px !important;
}
.redtitle{
    margin:40px 0 40px 0;
}
.redLine{
    display:inline-block;
    background:#da121a;
    width:4px;
    height:16px;
    margin-right:5px;
}
.redlasttitle{
    font-size:20px;
    color:#2b2b2b;
}
.sectb{
    display:block
}
.selecMain{
    background:#fff;
}
.naver{
    height:70px;
    line-height:70px;
}
.naver a{
    font-size:14px;
    color:#333333;  
}
.naver a i{
    font-size:14px;
    color:#A5A5A5;  
}
.naver a:hover{
    cursor:pointer;
    color:#da121a;
    display:inline-block;
    border-bottom:1px solid #da121a;
}
.naver a i:hover{
    cursor:pointer;
    color:#da121a;
    display:inline-block;
    border-bottom:1px solid #da121a;
}
.nav-bottom-kk{
    width:100%;
    height:1px;
    background:#d6d6d6
}
.mt{
    margin-top:20px;
}
.h2-18{
    font-size:18px !important
}
.bigFang{
    display:inline-block;   
    background:#fdfdfd;
    border:1px solid #f0f0f0;
    box-shadow:0 0 1px 2px rgba(236,236,236,0.50);
    border-radius:2px;
    width:100%;
    height:80px;
    font-size:12px;
    text-align:left;
    position:relative;
}
.bigimg{
    display:inline-block;
    line-height:80px;
    width:40px
}
.dv1{
    font-size:14px;
    color:#2b2b2b;
    margin-top:10px;
    margin-left:5px;
}
.dv2{
    font-size:12px;
    color:#d5272c;
    margin-left:5px;
    margin-top:10px;
}
.dv3{
    font-size:48px;
    color:#da121a;
    position:absolute;
    right:10px;bottom:-10px;
}
.liHoversBj:hover{
    background:#EF131D;
}
.timezhou{
    border:2px solid #d2d2d2;
    width:90%;
    margin:0 auto 90px auto;
    height:0px;
    position:relative;
}
@media (min-width: 768px) {
    .lastimgs{
        margin-top:143px;
    }
    .color_999{
        line-height:20px !important;
    }
    .seleconeMain-mainfir{
        margin-bottom:50px;
    }
    .imgeys{
        margin-left:20px !important
    }
}
@media (max-width: 768px) {
    .lastimgs{
        margin-top:10px;
        margin-bottom:20px;
    }
    .imgeys{
        margin-left:0px !important
    }
    .seleconeMain-mainfir{
        margin-bottom:0px;
    }
}
   .container{
     
        max-width: 1090px;

   }
  .seleconeMain-shrts h4{
       font-weight:100;
   }
   .seleconeMain-echarts h4{
       font-weight:100;
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
   .selectHelp{
        background:#222222;text-align:center;background-size:100% 100%;
   }

   .seleconeMain-mainfir{margin-top:160px;}
   .nfir{margin-bottom:48px}
   .seleconeMain-mainfir .selecone-pfir{
        font-size:26px;
        color:#ffffff;
        text-align:center;
   }
   .seleconeMain-mainfir .selecone-pfir span{
       font-weight:100;
       color:#ccc;
   }
  
   .seclone-dv p{
       font-size:14px;
       color:#fff;
       text-align:center;
   }
   .seleconeMain-charts{
       width:100%;
   }
   .seleconeMain-charts H4{
       font-size:26px;
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
       margin-bottom:20px;
   }
   .seleconeMain-echarts .shrts-h4{
       margin-top: 40px;
           font-size: 26px;
    color: #333333;
    text-align: center;
   }
   .seleconeMain-echarts .shrts-h4er{
       margin-top: 10px;
    margin-bottom: 20px;
        font-size: 26px;
    color: rgb(51, 51, 51);
    text-align: center;
    }
   .seleconeMain-charts p{
       font-size:16px;
       color:#777777;
       text-align:center;
   }
   .seleconeMain-img img{
       width:42%;
       height:42%;
       
   }
   .seleconeMain-img{
       margin-top:25px;
       margin-bottom:60px;
   }
   .seleconeMain-shrts h4{
       font-size:26px;
       color:#333333;
       text-align:center;
     
   }
   .seleconeMain-shrts .shrts-h4{
      margin-top:50px;
   }
   .seleconeMain-shrts .shrts-h4er{
       margin-top:10px;
       margin-bottom:20px;
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
        border:1px solid #e41e2b;font-size:12px;color:#fff;padding:10px 25px;display:inline-block;text-align:center;background:#e41e2b;margin-right:10px;
    }
    .panTy{
        border:1px solid #f0f0f0;font-size:12px;color:#f0f0f0;padding:10px 25px;display:inline-block;text-align:center;
    }
    .panTy:hover{
        color:#da121a;
        background:#fff;
        cursor:pointer;
    }
    .spanTy:hover{
        cursor:pointer;
        background:#fff;
        color:#e41e2b;
        border:1px solid #fff;
    }
     .scrollUp:hover{
        cursor:pointer;
    } 
</style>
<script>
    $(document).ready(function(){ 
                        
                     $(window).scroll(function(){
                    // console.log($(this).scrollTop());
                        // console.log("p",$(".naver").offset().top - $(window).scrollTop())
                        // console.log($(window).scrollTop())
                    //当window的scrolltop距离大于1时，go to 
                        if($(this).scrollTop() > 550){
                            $('.scrollUp').css("display","block")
                            }else{
                                    $('.scrollUp').fadeOut();
                            }
                       
                        if($(".naver").length==1){
                          
                            var topa = $(".naver").offset().top - $(window).scrollTop();
                             if(topa<0){
                                 $(".displayshow").css("display","block") 
                             }else if(topa>0){
                                  $(".displayshow").css("display","none") 
                                  $(".rightBs ul li").css("background","#d8d8d8") 
                             }
                             console.log($("#ProductFeatures").offset().top - $(window).scrollTop());
                             if($(window).scrollTop()+70>=$("#ProductFeatures").offset().top){
                                $(".rightBs ul li").css("background","#d8d8d8") 
                                $(".nexton").css("background","#da121a")
                             }
                             if($(window).scrollTop()+70>=$("#CoreStrengths").offset().top){
                                  $(".rightBs ul li").css("background","#d8d8d8") 
                                    $(".nextsec").css("background","#da121a")
                             }
                             if($("#QuickStart").length>0){
                             if($(window).scrollTop()+70>=$("#QuickStart").offset().top){
                                  $(".rightBs ul li").css("background","#d8d8d8") 
                                    $(".nextthe").css("background","#da121a")
                             }}
                             if($("#he").height()-($(window).height()+$(this).scrollTop())<50){
                                 $(".rightBs ul li").css("background","#d8d8d8") 
                                  $(".nextf").css("background","#da121a")  
                             }
                        }
                    });
            
                    $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                    });


              })
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
 import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
    export default{
         name: 'SleconeSecond',
        components:{
            Sec,
            Sex
        },
        data(){
            return{
                 phoneBox:false,
                 
            }
        },
        methods:{
            dls:function(){
                 this.$router.push({path: '/login'});
            },
              ctaCloundCsbs:function(){
                    window.open("http://demo.csb-china.com")
                },
            spanTy:function(){
                this.$router.push({path: '/login'});
            },
            lj:function(){
                this.$router.push({path: '/registerOne'});
            },
             xiaowei:function(){
                // var that = this; 
                 //var win = window.open("#/CustomerService");
                var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
               //var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            }
        },
        mounted:function(){
                          $(".rightBs ul li").click(function(e){
                               //$(".rightBs ul li").css("background","#d8d8d8");
                               var s = $(this).index();
                               console.log(s)
                             $(".rightBs ul li").not($(this)).css("background","#d8d8d8")
                             $(this).css("background","#da121a")
                             var target = e.target;
                             var id = $(target).data("to");
                             $('html,body').animate({scrollTop:$('.'+id).offset().top+90}, 800);
                            
                         
                         })
        }
    //     mounted:function(){
    //         $(document).ready(function(){ 
    //                    $.fn.extend({
    //                     animateCss: function (animationName) {
    //                         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //                         $(this).addClass('animated ' + animationName).one(animationEnd, function() {
    //                         $(this).removeClass('animated ' + animationName);
    //                         });
    //                     }           
    //                 });
    //          var index=0;
    //          var isn = true;
    //          $(window).scroll(function(){
              
    //            if(isn==true){
    //                 if($(this).scrollTop()>300&&$(this).scrollTop()<450){
    //                   $(".seleconeMain-charts").animateCss('bounceInLeft');
    //                 };
    //                 if($(this).scrollTop()>800&&$(this).scrollTop()<850){
    //                     $(".seleconeMain-shrts").animateCss('bounceInLeft');
    //                 };
    //                 if($(this).scrollTop()>1300&&$(this).scrollTop()<1350){
    //                     $(".broundDow").animateCss('bounceInLeft');
    //                 };
    //                 if($(this).scrollTop()>1750&&$(this).scrollTop()<1800){
    //                     $(".broundU").animateCss('bounceInLeft');
    //                     index=1;
    //                 };
    //            }
    //             if(index==1){
    //                isn = false;
    //            }
                  
    //     })
             
               
    //     })
    // }
    }
</script>