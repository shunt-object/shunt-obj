<template>
    <div>
        <div class="fixed-box">
            <ul class="fixed-ul">
                <li id="xiaowei" v-on:click="xiaowei()"> <img src="../../../assets/homePage-online.png" class="fixed-icon" alt="">在线客服</li>
                <li class="phone-li" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
                    <img src="../../../assets/homePage-phone.png" class="fixed-icon" alt="">电话咨询
                    <div v-show="phoneBox" class="phone-box"><img src="../../../assets/alertPhone.png" alt=""  style="width:100%;height:100%"></div>
                </li>
            
            </ul>
            <img src="../../../assets/scroll.png" alt="" class="scrollUp">
        </div>
            <Sec active="4"></Sec>
            <div class="cloundcompare">
                    <div class="cloundbanner">
                        <div class="container">
                            <div class="clound-dvs col-xs-12">
                                <p class="clound-ps">我们每前进一小步，都将竭力为您带来更好的云中服务！</p>
                                <p class="clound-pa">让每一个上云者都在在我们（CSB ²）的帮助下，找到并用好适合自己的云，</p>
                                <p class="clound-pd">我们目标是成为新云管理服务提供商</p>
                                <p class="clound-pg" style="margin-bottom:110px;"><span @click="tiyans">立即体验</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="cloundMains">
                        <div class="container">
                            <div class="cloundMains-main">
                                <p style="margin-bottom:30px">关于我们</p>
                              
                                    <div class="text-left" style="color:#666666;">CloudBroker²，是新一代云管理服务商，简称CSB²，公司致力于为企业提供一站式云服务，规划上云、选云，和云上管理与成本管理。帮助客户真正的选好云、用好云，通过经验的累积和工具的创新，成为您最信任的云中4S店。</div>
                                      <div class="city" style="padding-top:40px;padding-bottom:30px">
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CSB² 的产品和服务包括，上云分析工具、选云分析工具、真机实测工具、价格管理工具、线上购买工具及迁移、运维工具。这一系列的工具协助客户全面管理云的生命周期。</div>
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CSB²是以云为核心，其服务场景横跨了上云咨询、云迁移、云运维等多个阶段，为运维部门、决策部门实现服务的可视、可控和可管。帮助用户清晰明确的看到多云的资源和成本，有效的降低了上云和管云的成本，是用户“省钱” “省力”和“专业”的好伙伴</div>
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CSB² 的总部位于北京、在无锡与杭州均设立了分支结构，团队成员，包括IBM、Microsoft、法电、腾讯、神州数码等全球顶尖IT 企业人员。</div>
                                        <div class="text-left" style="text-indent: 1cm;margin-bottom:10px">CloudBroker²以“云”为核心，应用场景横跨了从上云咨询、云迁移、云运维，为数据中心及运维部门、决策部门实现服务的可视、可控和可管。有效的降低了IT上云和管云成本，帮助用户明明白白的看清楚多云 CSB² 链接客户与云，让每一个上云者都在CSB ²的帮助下，找到并用好适合自己的云。</div>
                                        <div class="text-left" style="text-indent: 1cm">我们目标是成为新一代云管理服务提供商MSP+</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="cloundMains-go">
                        <div class="container">
                            <div class="wer">我们的发展</div>
                            <div class="cccspans">
                                <ul class="col-md-5 col-xs-12 ulsMains" style="padding-top:5px">
                                    <li style="margin-top:13px;"><p><span class="cccspan" style="padding-right:20px;text-align:right">CloudBroker²团队成立</span><span class="yellowSpan">2017.09</span></p></li>
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
                    <div class="belief" style="margin-bottom:40px;">
                                <div class="container">
                                    <div style="font-size:26px;color:#333333;font-weight:100;margin-bottom:40px;">我们的信念</div>
                                        <div style="background:#f8f8f8;height:440px;width:100%;">
                                            <div class="col-md-6 col-xs-12"   >
                                                <div class=" werxin">
                                                    <p>这一路走来，我们经历过坎坷、经历过风雨；</p>
                                                    <p>为此，我们曾经彷徨过、迷茫过、哭过、笑过；</p>
                                                    <p><span style="font-size:22px;color:#f7a72c">但</span>我们从未放弃、倔强而努力；</p>
                                                    <p>我们从未停下脚步，为了明天的朝阳；</p>
                                                    <p>我们有我们的<span style="font-size:22px;color:#f7a72c">理想</span>，因为我们坚信：</p>
                                                    <p>我们每前进小一步，都将为您带来更好的云上体验！</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-xs-12"><img src="../../../assets/tu2.png" alt="" style="height:440px;width:103%;"></div>
                                        </div>
                                </div>
                     </div>
                     <div class="callme">
                        <div class="container">
                            <div class="callme-call">我们在这里</div>
                            <div class="callme-dist" style="margin-bottom:30px"><span v-on:click="beijingHover()" class="moren" id="bjs">北京总部</span><span v-on:click="hangzhouHover" class="mospan" id="hzs">杭州分部</span><span @click="wuxiHover" class="mospan" id="wxs">无锡分部</span></div>
                            <div class="callmain" style="margin-bottom:30px;">
                                <img src="../../../assets/beijing.png" alt="" v-show="Asd">
                                <img src="../../../assets/hangzhou.png" alt="" v-show="Ais">
                                <img src="../../../assets/wuxi.png" alt="" v-show="Sis">
                            </div>
                        </div>
                     
                     </div>
                     <div style="background:#ededed;width:100%;height:auto;">
                        <div class="seleconeMain-footer row" >
                            <div class="container text-left" style="width:60%;">
                                    <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                                    <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                                    <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;margin-left:20px"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                                    <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;"><img src="../../../assets/90fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
                            </div>
                        </div>
                     </div>
             </div>
            <Sex></Sex>
    </div>
</template>
<style>
    @media (min-width: 768px) {
       .ulsMains{
           margin-left:82px;
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
        .werxin{
            padding:106px 0px 0px 110px;font-size:16px;color:#666666;text-align:left;
        }
    }
    @media (max-width: 768px) {
       .ulsMains{
           margin-left:0px;
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
       .werxin{
            padding:106px 0px 0px 0px;font-size:16px;color:#666666;text-align:center;
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
        background:#f7a72c;
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
          margin-top:40px;
         
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
           font-size: 18px;
           color: rgb(248, 248, 248);
   }
   .clound-pd{
           font-weight: 100;
           color: rgb(248, 248, 248);
           font-size: 18px;
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
               Sis:false,
               Asd:true,
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
                var that = this; 
                var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            }
        },
        mounted:function(){
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
        }
    }
</script>