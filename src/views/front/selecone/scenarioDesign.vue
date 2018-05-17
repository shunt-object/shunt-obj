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

    <Sec active="0" class="sectb"></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banners  row rusetb">
                 <div class="container" >
                        <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px;">
                            <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">场景化方案设计</span></p>
                            <div class="seclone-dv">
                                <h3 class="selecone-pfir menospp" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff;">S级一站式服务平台，助力企业数字化转型，降低企业信息系统构建成本</h3>
                            </div>
                             <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span></span></p>
                        </div>
                 </div>
            </div>
            <div>
                <div class="jia-main">场景化定制设计</div>
                <div class="jia-h">精准匹配您的需求，助力信息化水平提高</div>
            </div>
             <div class="lcss">
                     <div class="container">
                        <div class="" style="margin:0 auto!important;width:100%;height:70px;line-height:70px;">
                            <span class="spanshover spanbot" @click="Upclouds"><i class="iconfont icon-iconqyxx"></i> 中小企业</span><span class="spanshover spanbos" style="margin-left:120px;" @click="moneyCloud"><i class="iconfont icon-dailishang"></i> 云代商和集成商</span>
                        </div>
                     </div>
             </div>
             <div class="kong"></div>
             <div id="ProductFeatures" class="go1" v-show="ids">
                <div class="container erfs whyContainer" style="margin-bottom:50px;">
                    <div class=" text-left redtitles">
                       <span class="redLine"></span><span class="redlasttitle">核心优势</span>
                    </div>
                    <div class="row text-left bjia">
                        <div style="text-indent:1em">CloudBroker²依托国内外咨询和实施的经验积累，集合国内用户使用习惯，为用户提供从规划、选型、设计、购买、迁移和运维的全流程一站式云服务；着</div>
                        <div style="text-indent:1em">力为中小企业客户破解上云难题，降低企业客户上云、选云和管云成本，让企业聚焦于业务创新和创造；切实帮助中小企业用户易上云、选好云和用好云。</div>
                    </div>
                 </div>
                 <div class="container erfs whyContainer" style="margin-bottom:70px;">
                    <div class=" text-left redtitles">
                       <span class="redLine"></span><span class="redlasttitle">特色功能</span>
                    </div>
                    <div class="row text-center bjia">
                        <div>
                            <div class="col-md-4">
                                <div class="bjia-poai">
                                    <div class="text-right bjia-title">深度定制解决方案</div>
                                    <ul class="text-right bjia-uls">
                                        <li>全方位的技术托管服务</li>
                                        <li>架构优化与云化解决方案咨询服务</li>
                                        <li>网站与系统安全规划</li>
                                        <li>云主机数据备份与恢复</li>
                                        <li>网站数据库服务</li>
                                    </ul>
                                    <img src="../../../assets/er-icon/banner1.png" alt="">
                                </div>
                                <div class="bjia-poai poai">
                                    <div class="text-right bjia-title">云运维</div>
                                    <ul class="text-right bjia-uls">
                                        <li>VIP专家服务+云管平台，专业、安全和可靠</li>
                                        <li>完善的云运维体系，7*24*4的运维保障服务 </li>
                                        <li>从硬件到操作系统到中间件到应用的立体监控</li>
                                        <li>覆盖故障排查、云主机备份/恢复等多种服务</li>
                                        <li>基于ITIL的3级服务保障体系</li>
                                    </ul>
                                    <img src="../../../assets/er-icon/banner1111.png" alt="">
                                </div>
                            </div>
                            <div class="col-md-4 img-position">
                                <img src="../../../assets/er-icon/zheng.png" alt="" class="jia-img">
                                <div class="sji">
                                    <ol class="text-center">
                                        <li class="ol-lis">S级</li>
                                        <li  class="ol-lit">一站式解决方案</li>
                                    </ol>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="bjia-posi">
                                    <div class="text-left bjia-title">咨询顾问</div>
                                    <ul class="text-left bjia-ules">
                                        <li>1V1上云咨询，专家助力上云</li>
                                        <li>S级平台功能，20分钟内完成规划、选型和设</li>
                                        <li>线上咨询和线下服务相结合，省时、省钱和专业</li>
                                        <li>提供完整和专业的上云综合分析报告</li>
                                        <li class="bjia-kong">&nbsp</li>
                                    </ul>
                                    <img src="../../../assets/er-icon/banner11.png" alt="">
                                </div>
                                <div class="bjia-posi posi">
                                    <div class="text-left bjia-title">迁移</div>
                                    <ul class="text-left bjia-ules">
                                        <li>1V1上云咨询，专家助力上云</li>
                                        <li>S级平台功能，20分钟内完成规划、选型和设计</li>
                                        <li>线上咨询和线下服务相结合，省时、省钱和专业</li>
                                        <li>提供完整和专业的上云综合分析报告</li>
                                        <li class="bjia-kong">&nbsp</li>
                                    </ul>
                                    <img src="../../../assets/er-icon/banner1111111.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div v-show="iders">
                <div class="container erfs whyContainer" style="margin-bottom:50px;">
                    <div class=" text-left redtitles">
                       <span class="redLine"></span><span class="redlasttitle">核心优势</span>
                    </div>
                    <div class="row text-left bjia">
                        <div style="text-indent:1em">基于运营商云业务特点，CloudBroker²打造了“平台+顾问”的全新服务模式，将有效降低运营商云销售难度，协助运营商为其用户提供1V1上云咨询、迁移</div>
                        <div style="text-indent:1em">和优化方案；通过对企业应用进行画像、与竞争对手的优劣势分析，上云、迁云和管云的数据横向打通，从而构建了从咨询与设计、迁移与实施到运维与管理</div>
                        <div style="text-indent:1em">的一个完整闭环云技术服务保障体系。</div>
                    </div>
                 </div>
                 <div class="container erfs whyContainer" style="margin-bottom:70px;">
                    <div class=" text-left redtitles">
                       <span class="redLine"></span><span class="redlasttitle">特色功能</span>
                    </div>
                    <div class="row text-center bjia">
                        <div>
                            <div class="col-md-4">
                                <div class="bjia-poai">
                                    <div class="text-right bjia-title">运维与管理</div>
                                    <ul class="text-right bjia-uls">
                                        <li>顾问全程参与，优化决策化</li>
                                        <li>挖掘行业和区域上云数据</li>
                                        <li>看清自身及其客户的云化成本</li>
                                        <li>助力云业务精细化和科学化管理</li>
                                        <li>持续优化规范提供辅助决策支撑</li>
                                        <li>平台对服务过程全程安全监监管</li>
                                    </ul>
                                    <img src="../../../assets/er-icon/banner12.png" alt="">
                                </div>
                            </div>
                            <div class="col-md-4 img-position">
                                <img src="../../../assets/er-icon/yuan.png" alt="" class="jia-img">
                                <div class="sjis sji-a">
                                    <ol class="text-center">
                                        <li class="text-left">运维与</li>
                                        <li  class="text-left">管理</li>
                                    </ol>
                                </div>
                                <div class="sjis sji-d">
                                    <ol class="text-center">
                                        <li class="text-center">为云代理和集成商提升</li>
                                        <li  class="text-center">销售和技术支撑能力</li>
                                    </ol>
                                </div>
                                <div class="sjis sji-b">
                                    <ol class="text-center">
                                        <li class="text-left">销售与</li>
                                        <li  class="text-left">咨询</li>
                                    </ol>
                                </div>
                                <div class="sjis sji-c">
                                    <ol class="text-center">
                                        <li class="">迁移与实施</li>
                                    </ol>
                                </div>
                                <div class="bjia-pon">
                                    <img src="../../../assets/er-icon/banner1122.png" alt="">
                                    <div class="text-center bjia-title">迁移与实施</div>
                                    <ul class="text-left bjia-ules uhas">
                                        <li>提供平台+顾问的技术服务模式</li>
                                        <li>基于客户场景深度定制上云方案</li>
                                        <li>依托上云最佳实践和场景化设计</li>
                                        <li>开发多个辅助工具，降低工作量</li>
                                        <li>减少客户上云迁移成本和面临风险</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="bjia-posi">
                                    <div class="text-left bjia-title">销售与咨询</div>
                                    <ul class="text-left bjia-ules">
                                        <li>1V1顾问咨询，分析上云可行性</li>
                                        <li>采集应用信息，提供精准画像</li>
                                        <li>助清晰了解企业用户购买意愿</li>
                                        <li>精准分析与竞争对手差异</li>
                                        <li>已定制多个工具，无需安装，用完即走</li>
                                        <li>提供完整和专业的上云分析报告</li>
                                    </ul>
                                    <img src="../../../assets/er-icon/banner11.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div style="background:#ededed;;width:100%;height:auto;">
                <div class="seleconeMain-footer">
                    <div class="container text-left" style="width:60%;padding-left:cd30px;">
                            <div class="col-md-3 col-xs-12" style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                            <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                            <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                            <div class="col-md-3 col-xs-12 juright" style="margin-top:27px;margin-bottom:20px;padding-right:40px !important;"><img src="../../../assets/90fuwu.png" alt="" style="width:22%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
                    </div>
                </div>
            </div>
    </div>
    <Sex></Sex>
</div>


</template>
<style>
.sjis{
    font-size:14px;
    color:#333333;
    line-height:27px !important;
}
ol li{
    list-style:none;
}
.ol-lis{
    color:#da121a;
    font-size:14px;
    font-weight:900;
}
.ol-lit{
    font-size:14px;
    color:#000;
    line-height:20px;
    font-weight:900;
}
.img-position{
    position:relative;
}

.jia-main{
    font-size:26px;
    color:#333333;
    text-align:center;
    margin-top:30px;
}
.jia-h{
    font-size:16px;
    color:#999999;
    text-align:center;
    margin-top:10px;
    margin-bottom:30px;
}
.posi,.poai{
    margin-top:25px !important;
}
.bjia-poai{
    position:relative;
    padding-right:30px;
}
.bjia-posi{
     position:relative;
     padding-left:30px;
}
.bjia-pon{
       position:relative;
        padding-left:30px;
        margin-top:10px;
}
.bjia-pon img{
     width:40px;
    height:40px;
    margin-top:25px;
}
.bjia-poai img{
    width:40px;
    height:40px;
    position:absolute;
    right:-20px;
    top:0
}
.bjia-posi img{
    width:40px;
    height:40px;
    position:absolute;  
    left:-20px;
    top:0
}
.bjia-title{
    font-size:18px;
    color:#333333;
}
.bjia-uls li{
    background:url("../../../assets/er-icon/dianRed.png") no-repeat right center;
    padding-right:16px;
    font-size:12px;
    color:#666666;
    line-height:24px !important
}
.bjia-ules li{
    background:url("../../../assets/er-icon/dianRed.png") no-repeat left center;
    padding-left:16px;
    font-size:12px;
    color:#666666;
    line-height:24px !important
}
.bjia-kong{
    background:none !important
}
.bjia{
    font-size:14px;
    color:#666666;
    line-height:30px;
}
.kong{
    border:1px solid #d6d6d6;
    width:100%;
    height:2px;
}
.dv2:hover{
    cursor:pointer;
}
.fifter{
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 16px;
    margin-top:10px;
    overflow: hidden;
    min-height: 52px;
    color: black;
    padding-left:25px;
}
.fifters{
    font-size: 14px;
    height: 40px;
    overflow: hidden;
    color: #6E6E6E;
    margin-bottom:60px;
}
.alifloat{
   display:inline-block;
   margin-left:30px;
   line-height:30px;
   font-size:18px;
   color:#333333;

}
.hynews img{
    width: 250px;
    height: 177px;
}
.group-money{
    font-size:24px;
    color:#333333;
    text-align:center;
    margin:40px 0 30px 0;
}
.rusetb{
    background:url("../../../assets/er-icon/bg9.png") no-repeat;
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
    .sjis{
        display:none;
    }
    .sji{
        display:none;
    }
        .spanbot {
            float: left;
        }
        .spanbos{
            float:right;
            margin-left:0 !important;
        }   
      .spanshover{
            display:inline-block;
            font-size:14px;
            color:#333333;
        }
      .juright,.juzhong{
          text-align:left !important;
      }
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
    .sji-a{
        position:absolute;
        left:28px;
        top:100px;
    }
    .sji-b{
        position:absolute;
        right:28px;
        top:100px;
    }
    .sji-c{
        position:absolute;
        bottom:44%;
        left:140px;
    }
 .sji-d{
        position:absolute;
        top:130px;
        left:95px;
    }
    .sji{
        position:absolute;
        left:115px;
        top:120px;
    }
    .uhas{
        padding-left:34px;
    }
    .jia-img{
        width:300px;
        height:300px;
    }
    .spanshover{
            display:inline-block;
            padding: 0 10px;
            font-size:14px;
            color:#333333;
    }
    .juright{
        text-align:right;
    }
    .juzhong{
        text-align:center;
    }
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
.redtitles{
    margin:40px 0 30px 0;
}
.redLine{
    background: #da121a;
    width: 3px;
    height: 25px;
    float: left;
    margin-right: 10px;
    margin-top: 2px;
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
     .jia-img{
        width:200px;
        height:200px;
    }
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
    .spanshover:hover{
    color:#da121a;
    cursor:pointer;
    border-bottom:2px solid #da121a;
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
            
                   


              })
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
 import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
    export default{
         name: 'scenarioDesign',
        components:{
            Sec,
            Sex
        },
        data(){
            return{
                 phoneBox:false,
                 ids:true,
                 iders:false
            }
        },
        methods:{
            Upclouds:function(){
                this.ids = true;
                this.iders = false;
                $(".spanbos").css({"borderBottom":"none","color":"#333333"});
                $(".spanbot").css({"borderBottom":"2px solid #da121a","color":"#da121a"});
            },
             moneyCloud:function(){
                this.iders = true;
                this.ids = false;
                $(".spanbot").css({"borderBottom":"none","color":"#333333"});
                $(".spanbos").css({"borderBottom":"2px solid #da121a","color":"#da121a"});
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
                // var win = window.open("#/CustomerService");
                 var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
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
               $(".spanbot").css({"borderBottom":"2px solid #da121a","color":"#da121a"});
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
                 $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                    });

               
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