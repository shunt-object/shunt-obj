<template>
    <div>
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
            <div class=" fixshow fis container">
                     <div class="col-md-2 col-xs-2"><a href="#ProductFeatures"><i class="iconfont icon-tuandui"></i> 关于我们</a></div>
                    <div class="col-md-2 col-xs-2"><a href="#CoreStrengths"><i class="iconfont icon-shenpiliucheng"></i> 我们的发展</a></div>
                    <div class="col-md-2 col-xs-2"><a href="#QuickStart"><i class="iconfont icon-jibenxinxi"></i> 企业文化</a></div>
                    <div class="col-md-2 col-xs-2"><a href="#qualification"><i class="iconfont icon-shu"></i> 我们的资质</a></div>
                    <div class="col-md-2 col-xs-2"><a href="#ContactUs"><i class="iconfont icon-kefu"></i> 联系我们</a></div>
            </div>
        </div>
            <Sec active="4"></Sec>
            <div class="cloundcompare">
                    <div class="cloundbanner">
                        <div class="container">
                            <div class="clound-dvs col-xs-12">
                                <p class="clound-ps">我们每前进一小步，都将竭力为您带来更好的云中服务！</p>
                                <p class="clound-pa">让每一个上云者都在我们（CSB ²）的帮助下，找到并用好适合自己的云</p>
                                <p class="clound-pd">我们目标是成为新型云管理服务提供商</p>
                                <p class="clound-pg" style="margin-bottom:110px;"><span @click="ctaCloundCsbs">DEMO体验</span></p>
                            </div>
                        </div>
                    </div>
                            <div class="container navers">            
                                <div class="" style="width:100%!important;">
                                    <div class="col-md-2 col-xs-2"><a href="#ProductFeatures" class="hoover-a"><i class="iconfont icon-tuandui"></i> 关于我们</a></div>
                                    <div class="col-md-2 col-xs-2"><a href="#CoreStrengths" class="hoover-a"><i class="iconfont icon-shenpiliucheng"></i> 我们的发展</a></div>
                                    <div class="col-md-2 col-xs-2"><a href="#QuickStart" class="hoover-a"><i class="iconfont icon-jibenxinxi"></i> 企业文化</a></div>
                                    <div class="col-md-2 col-xs-2"><a href="#qualification" class="hoover-a"><i class="iconfont icon-shu"></i> 我们的资质</a></div>
                                    <div class="col-md-2 col-xs-2"><a href="#ContactUs" class="hoover-a"><i class="iconfont icon-kefu"></i> 联系我们</a></div>
                                </div>
                            </div>
                           <div class="nav-bottom-kk"></div>      
                    <div class="cloundMains" id="ProductFeatures">
                        <div class="container">
                            <div class="cloundMains-main">
                               <div class=" text-left redtitle">
                                 <span class="redLine"></span><span class="redlasttitle">关于我们</span>
                               </div>
                              
                                    <div class="text-left" style="color:#666666;text-indent:1cm;">江苏京玉信息技术有限公司是全新一代云服务提供商，全力打造以CloudBroker²（简称：CSB²）为核心的云服务产品家族，致力于为企业提供一站式云服务，规划上云、选云，和云上管理与成本管理。帮助客户真正的选好云、用好云，通过经验的累积和工具的创新，成为您最信任的云中4S店。</div>
                                      <div class="city" style="padding-top:40px;padding-bottom:30px">
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CSB² 的产品和服务包括，上云分析工具、选云分析工具、真机实测工具、价格管理工具、线上购买工具及迁移、运维工具。这一系列的工具协助客户全面管理云的生命周期。</div>
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CSB ²是以“云”为核心，其服务场景横跨了上云咨询、云迁移、云运维等多个阶段，为运维部门、决策部门实现服务的可视、可控和可管。帮助用户清晰明确的看到多云的资源和成本，有效的降低了上云和管云的成本，是用户“省钱” “省力”和“专业”的好伙伴。</div>
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CSB²以“云”为核心，链接客户与云，让每一个上云者都在CSB²的帮助下，找到并用好适合自己的云。</div>
                                        
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CSB² 的总部位于北京、在无锡与杭州均设立了分支结构，团队成员，包括IBM、Microsoft、法电、腾讯、神州数码等全球顶尖IT 企业人员。</div>
                                        <div class="text-left" style="text-indent: 1cm">我们目标是：成为新一代云管理服务提供商MSP+。</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="cloundMains-go" style="margin-top:50px;" id="CoreStrengths">
                        <div class="container">
                            <div class=" text-left redtitle">
                                 <span class="redLine"></span><span class="redlasttitle">我们的发展</span>
                            </div>
                            <div class="cccspans">
                                <ul class="col-md-5 col-xs-12 ulsMains" style="padding-top:5px">
                                    <li style="margin-top:13px;"><p><span class="cccspan" style="padding-right:20px;text-align:right">CSB²团队成立</span><span class="yellowSpan">2017.09</span></p></li>
                                    <li style="margin-top:62px;"><p><span class="cccspan" style="padding-right:20px;text-align:right">CSB²（上云服务）v1.0正式发布</span><span class="yellowSpan">2018.02</span></p></li>
                                </ul>
                                <div class="col-md-1 divimger" style=" margin-bottom:50px;width:10px"><img src="../../../assets/shu.png" alt=""></div>
                                <ul class="col-md-5 col-xs-12">
                                    <li style="margin-top:72px"><p><span class="yellowSpam">2017.10</span><span class="cccspan" style="padding-left:20px;text-align:left;">CSB²（上云服务）v1.0正式研发</span></p></li>
                                    <li style="margin-top:62px"><p><span class="yellowSpam">2018.03</span><span class="cccspan" style="padding-left:20px;text-align:left;">CSB²小程序正式研发</span></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div class="belief" style="margin-bottom:40px;margin-top:30px" id="QuickStart">
                                <div class="container">
                                    <div class=" text-left redtitle">
                                        <span class="redLine"></span><span class="redlasttitle">企业文化</span>
                                    </div>
                                        <div style="background:#f8f8f8;height:440px;width:100%;margin-top:45px;">
                                            <div class="col-md-6 col-xs-12" style="padding:0 !important"><img src="../../../assets/tu2.png" alt="" style="height:440px;width:103%;"></div>
                                            <div class="col-md-6 col-xs-12"   >
                                                <div class=" werxins">
                                                   <div>
                                                        <div class=" Wemls"><i class="iconfont icon-refresh"></i> 我们的使命</div>
                                                        <div class="dsh dhz">对社会：</div>
                                                        <div class="dsh">建立一个有远大抱负，勇于创新，锐意进取，技术专业的云服务品牌</div>
                                                        <div class="dsh dhz">对云客户：</div>
                                                        <div class="dsh">有能力并且不断强化能力为客户提供更省钱、省力和专业的服务。</div>
                                                        <div class="dsh dhz">对合作伙伴：</div>
                                                        <div class="dsh">提供海量、准确、标准、有深度的云中咨讯</div>
                                                   </div>
                                                   <div>
                                                        <div class="Weml"><i class="iconfont icon-quanzi"></i> 我们的愿景</div>
                                                        <div class="wey">“服务的创新者，行业的领导者"</div>
                                                   </div>
                                                  
                                                </div>
                                            </div>
                                            
                                        </div>
                                </div>
                     </div>
                      <div class="cloundzi container"  style="margin-top:50px;" id="qualification">
                        <div class=" text-left redtitle" >
                                 <span class="redLine"></span><span class="redlasttitle">我们的资质</span>
                        </div>
                        <div class="weiduduan clearfix" style="margin-top:80px;">
                            <div id="phoneCarousel">
                                <div class="previous arrow">&nbsp;</div>
                                <div class="next arrow">&nbsp;</div>
                                <div id="stage">
                                    <a><img src="../../../assets/a1.png" alt="iPhone" id="iphone" class="default defaimg"/></a>
                                    <a><img src="../../../assets/a2.png" alt="Nexus One" id="nexus"  class="defaimg"/> </a>
                                    <a><img src="../../../assets/a3.png" alt="Nokia" id="nokia"  class="defaimg"/> </a>
                                    <a><img src="../../../assets/a4.png" alt="BlackBerry" id="blackberry"  class="defaimg"/></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                     <div class="callme" style="margin-top:80px;" id="ContactUs">
                        <div class="container">
                            <div class=" text-left redtitle" style="margin-bottom:60px">
                                 <span class="redLine"></span><span class="redlasttitle">联系我们</span>
                            </div>
                            <div class="callme-dist" style="margin-bottom:30px;"><span @click="wuxiHover" class="moren" id="wxs">无锡办公室</span><span v-on:click="beijingHover()" class="mospan" id="bjs">北京办公室</span><span v-on:click="hangzhouHover" class="mospan" id="hzs">杭州办公室</span></div>
                            <div class="callmain" style="margin-bottom:30px;">
                                <img src="../../../assets/beijing.png" alt="" v-show="Asd">
                                <img src="../../../assets/hangzhou.png" alt="" v-show="Ais">
                                <img src="../../../assets/wuxi.png" alt="" v-show="Sis">
                            </div>
                        </div>
                     
                     </div>
                      <div style="background:#f8f8f8;width:100%;height:auto;">
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
.navers a i{
    font-size:14px;
    color:#A5A5A5;  
}
.navers a:hover{
    cursor:pointer;
    color:#da121a;
    display:inline-block;
    border-bottom:1px solid #da121a;
}

.navers i{
    color:#c2c2c2;
}
.fixshow i{
    color:#c2c2c2;
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

.displayshow{
    display:none;
    position:fixed;
    top:0;
    z-index:999999999;
}
.dv2:hover{
    cursor:pointer;
}
.nav-bottom-kk{
    width:100%;
    height:1px;
    background:#d6d6d6
}
.navers{
    height:70px;
    line-height:70px;
}
.navers a{
    font-size:14px;
    color:#333333;  
}
.navers a i{
    font-size:14px;
    color:#A5A5A5;  
}
.navers a:hover{
    cursor:pointer;
    color:#da121a;
    display:inline-block;
    border-bottom:1px solid #da121a;
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
    .Weml{
        font-size:16px;
        color:#333333;
        margin-top:40px;
    }
    .Weml i{
        color:#da121a;
    }
    .Wemls{
       font-size:16px;
        color:#333333;
        margin-top:50px;
       
    }
    .Wemls i{
        color:#da121a;
    }
    .dsh{
        font-size:14px;
        color:#333333;
        text-indent:1em;
    }
    .dhz{
        margin-bottom:10px;
         margin-top:20px;
    }
    .wey{
        margin-top:20px;
        
    }
    .defaimg{
        width:550px;
        height:400px;
    }
    .liHoversBj:hover{
        background:#EF131D;
    }
    @media (min-width: 768px) {
        .navers div{
            margin-right:30px;
        }
        .fis div{
            margin-right:30px;
        }
       .ulsMains{
           margin-left:82px;
       }
       .color_999{
            line-height:20px !important;
        }
       .imgeys{
            margin-left:20px !important;
        }
        .zizhi{
            margin-bottom:70px;
        }
       .cccspan{
           width:316px;
              display:inline-block;
       }
       .yellowSpan{
            width:85px;
       }
       .yellowSpam{
             width:85px;
       }
       .divimger{
            display:block;
       }
        .callmain img{
            height:auto;
            width:100%;
        }
        .werxins{
            /*padding:106px 0px 0px 110px;*/
            font-size:16px;color:#666666;text-align:left;
            padding-left:20px;
        }
    }
    @media (max-width: 768px) {
            .navers  div{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .fixshow  div{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        .zizhi{
            margin-bottom:40px
        }
       .ulsMains{
           margin-left:0px;
       }
       .imgeys{
            margin-left:0 !important;
        }
        .divSc{
            margin-top:20px !important;
            margin-bottom:20px !important;
        }
        .clound-dvs{
            margin-top:0;
        }
        .cccspan{
            width:150px;
               display:inline;
        }
        .yellowSpan{
            width:78px;
        }
        .yellowSpam{
            width:78px;
        }
       .divimger{
            display:none;
       }
       .callmain img{
            height:auto;
            width:100%;
        }
       .werxins{
            /*padding:106px 0px 0px 0px;*/
            padding-left:0px;
            font-size:16px;color:#666666;text-align:center;
        }

    }
   
    .callme-call{
        font-size:26px;
        color:#333333;
        margin-bottom:40px;
        font-weight:100;
    }
    .callme-dist .mospan{
        padding:10px 40px;
        display:inline-block;
        background:#f7f7f7;
        border-radius:4px;
        font-size:14px;
        color:#333333;
        margin-right:20px;
        margin-left:20px;
    }
    .moren{
        padding:10px 40px;
        display:inline-block;
      
        border-radius:4px;
        font-size:14px;
      
        margin-right:20px;
        margin-left:20px;
        background:#da121a;
        color:#fff;
        
    }
    .callme-dist span:hover{
        cursor:pointer;
    }
    .yellowSpan{
       
       display:inline-block;
        height:41px;
        font-size:14px;
        color:#ffffff;
        line-height:40px;
        background:url('../../../assets/yellowright.png') no-repeat;background-size:cover;
    }
    .yellowSpam{
        display:inline-block;
      
        height:41px;
        line-height:40px;
        font-size:14px;
        color:#ffffff;
        background:url('../../../assets/yellowleft.png') no-repeat;background-size:cover;
    }
    .ulsMains{
      
     
    }
    .cccspan{
        background:#f3f4f5;
        
        
        height:40px;
        font-size:14px;
        color:#666666;
        line-height:40px;
    }
    .cccspans{
          margin-top:60px;
         
    }
    .cloundMains-go .wer{
                margin-top:20px;
             font-size: 26px;
            color: #333333;
            text-align: center;
            font-weight:100;
    }
    .cloundMains-main{
        margin-top:30px;
    }
    .cloundMains-main p{
            font-size: 26px;
            color: #333333;
            text-align: center;
            font-weight:100;
    }
     .cloundMains-main div{
         font-size:14px;
         line-height:25px;
     }
    *{
        margin:0;padding:0;
    }
    .container{
        max-width: 1090px;
   }
   .cloundbanner{
       background:url('../../../assets/compares.jpg') no-repeat;background-size:cover;   
   }
   .clound-dvs{
       margin-top:112px;
   }
   .clound-ps{
            font-weight: 100;
            font-size: 26px;
            color: rgb(248, 248, 248);
            margin-top:20px;
   }
   .clound-pg span:hover{
       cursor:pointer;
       background:#fff;
       color:#e41e2b;
       border:1px solid #fff;   
   }
   .clound-pa{
           font-weight: 100;
           font-size: 16px !important;
           color: rgb(248, 248, 248);
   }
   .clound-pd{
           font-weight: 100;
           color: rgb(248, 248, 248);
           font-size: 16px !important;
   }
   .clound-pg{
       margin-top:30px;
   }
   .clound-pg span{
           border: 1px solid #e41e2b;
            font-size: 12px;
            color: #fff;
            padding: 10px 25px;
            display: inline-block;
            
            text-align: center;
            background: #e41e2b;
   }
   .city{
       background:url("../../../assets/compares.png") no-repeat  center center;background-size:75%;
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
                        
                         if($(".navers").length==1){
                          
                            var topa = $(".navers").offset().top - $(window).scrollTop();
                             if(topa<0){
                                 $(".displayshow").css("display","block") 
                             }else if(topa>0){
                                  $(".displayshow").css("display","none") 
                                  $(".rightBs ul li").css("background","#d8d8d8") 
                             }
                            
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
                                }
                            }
                             if($("#he").height()-($(window).height()+$(this).scrollTop())<50){
                                 $(".rightBs ul li").css("background","#d8d8d8");
                                  $(".nextf").css("background","#da121a")  
                             }
                        }
                    });
            
                    $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                    });


              })
        import '../selecone/bais.css'
        import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
        import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
     export default{
        components:{
            Sec,
            Sex
        },
        data(){
            return {
               Ais:false,
               Sis:true,
               Asd:false,
               phoneBox:false
            }
        },
        methods:{
            beijingHover:function(){
                 this.Asd=true;
                 this.Ais=false;
                 this.Sis=false;
                 $("#bjs").addClass("moren");
                 $("#bjs").removeClass("mospan");
                 $("#hzs").removeClass("moren");
                 $("#hzs").addClass("mospan");
                 $("#wxs").removeClass("moren");
                 $("#wxs").addClass("mospan");

               
            },
            hangzhouHover:function(){
                 $("#hzs").addClass("moren");
                 $("#hzs").removeClass("mospan");
                 $("#bjs").removeClass("moren");
                 $("#wxs").removeClass("moren");
                 $("#wxs").addClass("mospan");
                 $("#bjs").addClass("mospan");
                 this.Asd=false;
                 this.Ais = true;
                 this.Sis=false;
               
            },
            wuxiHover:function(){
                 $("#hzs").addClass("mospan");
                 $("#hzs").removeClass("moren");
                 $("#bjs").removeClass("moren");
                 $("#wxs").removeClass("mospan");
                 $("#wxs").addClass("moren");
                 $("#bjs").addClass("mospan");
                 this.Asd=false;
                  this.Ais = false;
                 this.Sis=true;
               
            },
            tiyans:function(){
                this.$router.push({path: '/login'});
            },
            xiaowei:function(){
                //  var that = this; 
                 //var win = window.open("#/CustomerService");
             var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
              // var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            },
            ctaCloundCsbs:function(){
                    window.open("http://demo.csb-china.com")
             },
        },
        mounted:function(){
              $(document).ready(function(){ 
                     $(window).scroll(function(){
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

                    // 图片轮播
                    if(document.documentElement.clientWidth>=768){
                         var deg=0;
                        var images	= $('#stage img').removeClass('default').addClass('animationReady');
                        var dim		= { width:images.width(),height:images.height()};
                        var cnt = images.length;
                        var centerX = $('#stage').width()/2;
                        var centerY = $('#stage').height()/2 - dim.height/2;
                        function rotate(step,total){
                            deg+=step;
                            var eSin,eCos,newWidth,newHeight,q;
                            for(var i=0;i<cnt;i++){
                                q = ((360/cnt)*i+deg)*Math.PI/180;
                                eSin		= Math.sin(q);
                                eCos		= Math.cos(q);
                                q = (0.6+eSin*0.4);
                                newWidth	= q*dim.width;
                                newHeight	= q*dim.height;
                                images.eq(i).css({
                                    top			: centerY+25*eSin,
                                    left		: centerX+300*eCos,
                                    opacity		: 0.8+eSin*0.2,
                                    marginLeft	: -newWidth/2,
                                    zIndex		: Math.round(80+eSin*20)
                                }).width(newWidth).height(newHeight);
                            }
                            total-=Math.abs(step);
                            if(total<=0) return false;
                            setTimeout(function(){rotate(step,total)},40);
                        }
                        rotate(10,360/cnt);
                        $('#phoneCarousel .previous').click(function(){
                            rotate(-10,360/cnt);
                        });
                        $('#phoneCarousel .next').click(function(){
                            rotate(10,360/cnt);
                        });
                        $('#phoneCarousel .previous,#phoneCarousel .next').hover(function(){
                            clearInterval(timer);
                            },function(){
                            timer=setInterval(function(){rotate(10,360/cnt);},4000);
                            });
                        var timer=null;
                            timer=setInterval(function(){rotate(10,360/cnt);},4000);
                        
                    }else {
                        //$(".cloundzi").css("display","block");
                        $(".defaimg").css({
                            "width":"300px",
                            "height":"200px"
                            
                        })
                        $("#phoneCarousel").css({
                            "width":"100%",
                            "height":"100%"                            
                        })
                        $(".default").css({
                            "left":"0",
                            "margin-right":"auto",
                            "margin-top":"0",
                            "margin-bottom":"0",
                            "margin-left":"auto",
                            "position":"static"
                        })
                        $("previous arrow").css("display","none");
                        $("next arrow").css("display","none");
                         $("#stage img").css({
                            
                            "margin-right":"auto",
                            "margin-top":"0",
                            "margin-bottom":"0",
                            "margin-left":"auto",
                         
                        })
                        $("#stage img").css("display","block")
                        $(".weiduduan").css("width","300px")
                        $("#stage").css({
                            "left":"0",
                            "position":"static",
                            "margin-left":"0px",
                            "width":"100%"
                        })
                    }
                       
              })
    }
}
</script>