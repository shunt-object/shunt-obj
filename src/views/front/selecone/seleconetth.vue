<!--云规划-->
<template >
<div style="background:#eceef3" id="he">
   
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

    <Sec active="3" class="sectb"></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banners  row rusets">
                 <div class="container" >
                        <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px;">
                            <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">最前沿的云资讯、最新的产品动态、</span></p>
                            <div class="seclone-dv">
                                <h3 class="selecone-pfir menospp" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff;">最实时的头条新闻就在CloudBroker²</h3>
                            </div>
                             <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span></span></p>
                        </div>
                 </div>
            </div>
            <div>
                    <div class="container" style="margin-bottom:140px">
                        <div class="group-money">新闻动态</div>
                        <div style="text-align:left;line-height:30px;margin-bottom:10px;"> CloudBroker²，打造一站式全流程SaaS服务模式，专注帮助上云企业完善上云最后一公里。作为国内团队上云和管云SaaS的创新者，CloudBroker²，致力于为更多公司和团队实现目标，同时也成为一家拥抱变化、持续创新的好公司。 在这里，你可以看到最新的CloudBroker²新闻。我们欢迎各界媒体参与我们的活动，报道我们的产品。 在这里，你可以看到最新的行业新闻。</div>
                        <div  style="margin-top:60px;">
                            <div class="row hying" >
                                <div class="col-md-4 col-xs-12" style="padding:10px 10px;">
                                    <div style=" border: 1px solid #dedede; border-radius: 4px;padding:10px">
                                        <div style="width:250px;height:177px;background:#000;margin: 0 auto;"><img src="../../../assets/newey/qushi.jpg" alt="" ></div>
                                        <div class="fifter text-left">公有云选型：选对云供应商，原来真的可以节省很多费用</div>
                                        <div class="fifters" title="选择云供应商是一个十分关键和具有战略意义的流程。为了确保能够选择满足业务需要的、最好的云服务，CloudBroker²为您提供6大方向，18个场景，近200个指标，助您省时、省钱。">选择云供应商是一个十分关键和具有战略意义的流程。为了确保能够选择满足业务需要的、最好的云服务，CloudBroker²为您提供6大方向，18个场景，近200个指标，助您省时、省钱。</div>
                                    </div>
                                </div>
                                 <div class="col-md-4 col-xs-12" style="padding:10px 10px;">
                                    <div style=" border: 1px solid #dedede; border-radius: 4px;padding:10px">
                                        <div style="width:250px;height:177px;background:#000;margin: 0 auto;"><img src="../../../assets/newey/WX20180428-104002@2x.png" alt="" ></div>
                                        <div class="fifter text-left">Gartner 2018年 MSP魔力象限：没有MSP，管理云很难</div>
                                        <div class="fifters">基于2018年3月份Gartner发布的MSP年度魔力象限，建议充分认识MSP对于公有云的重要性。CloudBroker²一直致力于打造全流程一站式云管服务，助您上真云、真上云和用好云。</div>
                                    </div>
                                </div>
                                 <div class="col-md-4 col-xs-12" style="padding:10px 10px;">
                                    <div style=" border: 1px solid #dedede; border-radius: 4px;padding:10px">
                                        <div style="width:250px;height:177px;background:#000;margin: 0 auto;"><img src="../../../assets/newey/WX20180428-104041@2x.png" alt="" ></div>
                                        <div class="fifter text-left">企业构建多云架构的四个步骤</div>
                                        <div class="fifters">企业可以采取四个步骤来更好地处理他们的多云架构。</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row hying" style="margin-top:0px !important;">
                                 <div class="col-md-4 col-xs-12" style="padding:10px 10px;">
                                    <div style=" border: 1px solid #dedede; border-radius: 4px;padding:10px">
                                        <div style="width:250px;height:177px;margin: 0 auto;border:1px solid #ccc"><img src="../../../assets/newey/WX20180428-104124@2x.png" alt="" ></div>
                                        <div class="fifter text-left">成功进行云计算迁移的八个步骤</div>
                                        <div class="fifters">在调查中，90%的企业表示难以迁移到云中，复杂性是最常被引用的问题。那么如何面对这一问题，CloudBroker²建议采取八步骤上云方案，通过在每个阶段的实施方法，确保顺利实施云迁移。</div>
                                    </div>
                                </div>
                                 <div class="col-md-4 col-xs-12" style="padding:10px 10px;">
                                    <div style=" border: 1px solid #dedede; border-radius: 4px;padding:10px">
                                        <div style="width:250px;height:177px;margin: 0 auto;border:1px solid #ccc"><img src="../../../assets/newey/WX20180428-104325@2x.png" alt="" ></div>
                                        <div class="fifter text-left">公有云选型：8项最有力的调查数据</div>
                                        <div class="fifters">本文汇总了一些有助于帮助企业做2018年公有和混合云研究的数据支撑，并回答了一些相关问题：如云在CIO的优先级列表中的位置如何？它实现了节约成本的承诺吗？转向公有云的工作负载是多少？</div>
                                    </div>
                                </div>
                                 <div class="col-md-4 col-xs-12" style="padding:10px 10px;">
                                    <div style=" border: 1px solid #dedede; border-radius: 4px;padding:10px">
                                        <div style="width:250px;height:177px;background:#000;margin: 0 auto;"><img src="../../../assets/newey/WX20180428-104253@2x.png" alt="" ></div>
                                        <div class="fifter text-left">最新：公有云服务市场预测报告</div>
                                        <div class="fifters">4月20日，Gartner发布了全球公有云服务市场预测报告。根据这份报告，2018年全球公有云服务市场规模为1864亿美元，同比涨幅21.4%；2018年中国公有云市场规模则为224亿人民币，同比增幅为35%。</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        
         
       
       
           
      
            <div style="background:#ededed;;width:100%;height:auto;">
                <div class="seleconeMain-footer row">
                    <div class="container text-left" style="width:60%;padding-left:cd30px;">
                            <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                            <div class="col-md-3 col-xs-12 text-center" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                            <div class="col-md-3 col-xs-12 text-center" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                            <div class="col-md-3 col-xs-12 text-right" style="margin-top:20px;margin-bottom:20px;padding-right:40px !important;"><img src="../../../assets/90fuwu.png" alt="" style="width:22%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
                    </div>
                </div>
            </div>
    </div>
    <Sex></Sex>
</div>


</template>
<style>
.fifter{
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
    margin-top:10px;
    overflow: hidden;
    min-height: 52px;
    color: black;
    padding-left:25px;
}
.hying img{
    width: 250px;
    height: 177px;
}
.fifters{
    font-size: 14px;
    height: 40px;
    overflow: hidden;
    color: #6E6E6E;
    margin-bottom:60px;
    text-align:left;
}
.alifloat{
   display:inline-block;
   margin-left:30px;
   line-height:30px;
   font-size:18px;
   color:#333333;

}
.group-money{
    font-size:24px;
    color:#333333;
    text-align:center;
    margin:40px 0 30px 0;
}
.rusets{
    background:url("../../../assets/er-icon/bannertr.png") no-repeat;
    text-align:center;background-size:100% 100%;
   
}


.welecone span{
    background:#da121a;
    border-radius:4px;
    width:129px;
    height:32px;
    line-height:32px;
    color:#fff;
    text-align:center;
    display:inline-block;
}
.welecone span:hover{
    cursor:pointer;
}

.rightDiv .rightDiv-child{
    padding:20px 30px;
}
.rightDiv-child-S{
     font-size:14px;
    color:#999;
    line-height:30px;
}
.zhaomu{
    font-size:14px;
    color:#333333;
}
.zhaomu1{
    font-size:12px;
    color:#333333;
    line-height:30px;
}
.zhaomu2{
    margin-top:10px;
}
.zhaomu1 span{
    color:#000;
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
.rightBs ul li a{
    width:10px;
    height:10px;
    border-radius:100%;
    display:inline-block;
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
.licheng,.licheng1,.licheng2,.licheng3,.licheng4{
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

.licheng2{
       position:absolute;
        top:45px;
        left:46%;
}

.licheng3{
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
    .menospp{
        line-height:40px;
    }
     .positionSpans{
        font-size:12px;
      }
      .positionSpans1{
          left:3.2% !important;
      }
      .positionSpans2{
          left:33.2% !important;
      }
      .positionSpans3{
        left:58% !important;
      }
      .positionSpans4{
          right:1.6% !important;
      }
      .ljs{
            width:100%;
            display:inline-block;
            margin-bottom:10px;
        }
        .imgets{
            display:none;
        }
        .cla img{
            width:100%;
        }
        .rightDiv{
            margin-top:20px;
            border:1px solid #dedede;
            border-radius:4px;
            width:220px;
            height:220px;   
        }
        .iuols input,.iuols select{
            margin-bottom:20px;
            padding-left:20px;
            border:1px solid #dedede;
            border-radius:4px;
            width:207px;
            height:40px;
        }
}
@media (min-width: 768px) {
    .CsbSao{
        border:1px solid #979797;
        width:545px;
        height:184px;
        padding:20px 10px ;
        
    }
    .color_999{
        line-height:20px !important;
    }
    .menospp{
        line-height:30px;
    }
    .CsbSao img{
        width:150px;
        height:150px;
    }
    .positionSpans{
        font-size:16px;
    }
      .ljs{
            width:16%;
            display:inline-block;
        }
     .imgets{
          display:inline-block;
     }
     .rightDiv{
        border:1px solid #dedede;
        border-radius:4px;
        width:457px;
        height:220px;   
    }
    .iuols input,.iuols select{
        margin-bottom:20px;
        padding-left:20px;
        border:1px solid #dedede;
        border-radius:4px;
        width:407px;
        height:40px;
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
    .lasilasis{
          margin-top:190px;
    }
    .seleconeMain-mainfir{
        margin-bottom:50px;
    }
    .imgeys{
        margin-left:20px !important
    }
}
@media (max-width: 768px) {
    .lasilasis{
        margin-top:10px;
        margin-bottom:20px;
    }
    .imgeys{
        margin-left:0px !important
    }
    .seleconeMain-mainfir{
        margin-bottom:0px;
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
                        // $(".rightBs ul li").find("a").click(function(){
                        //     // $(".rightBs ul li").css("background","#d8d8d8");
                        //     // $(this).css("background","#da121a");
                        //     alert(1)
                        // });
                       $(".fixshow a").hover(function(){
                                $(this).find("i").css("color","#da121a")
                        },function(){
                                $(this).find("i").css("color","#c2c2c2")
                        })
                         $(".naver a").hover(function(){
                                $(this).find("i").css("color","#da121a")
                        },function(){
                                $(this).find("i").css("color","#c2c2c2")
                        })
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
                        // if($(this).scrollTop()>80){
                        //     $(".sectb").css("display","none");
                        // };
                        // if($(this).scrollTop()<80){
                        //     $(".sectb").css("display","block");
                          
                        // };
                     
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
                 var win = window.open("#/CustomerService");
                // var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
               //var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            },
          
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

               
                        //   $(".rightBs ul li").click(function(e){
                        //      var target = e.target;
                        //      var id = $(target).data("to");
                        //      $('html,body').animate({scrollTop:$('.'+id).offset().top}, 800);
                        //      $(".rightBs ul li").css("background","#d8d8d8");
                        //      $(this).next().css("background","#da121a")
                        //     //  if($(this).index()==0){
                        //     //      var a = '<a href="#cg"></a>';
                        //     //      $(this).append(a)
                        //     //       $(this).find("a").trigger("click");
                        //     //  }
                        //  })
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