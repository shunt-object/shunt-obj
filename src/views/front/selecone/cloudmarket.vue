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
            <Sec active="5"></Sec>
            <div class="cloundcompare">
                    <div class="cloundbannerser">
                        <div class="container">
                            <div class="container" >
                                    <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12">
                                        <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">打造全新云服务模式，0元助力企业上云</span></p>
                                        <div class="seclone-dv">
                                            <h3 class="selecone-pfir menospp" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff;">轻松、便捷、快速进入智能云时代</h3>
                                        </div>
                                         <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="spanTy"><a href="#ProductFeatures" style="color:#fff" class="hhs">立即体验</a></span></p>
                                    </div>
                            </div>
                         </div>
                    </div>        
             </div>
             <div>
                     <div class="container">
                        <div class="" style="margin:0 auto!important;width:100%;height:70px;line-height:70px;">
                            <span class="spanshover">上云类工具</span><span class="spanshover" style="margin-left:120px;">迁云类工具</span>
                        </div>
                     </div>
             </div>
             <div class="kong"></div>
             <div id="ProductFeatures" class="go1" >
                <div class="container erfs whyContainer" style="margin-bottom:50px;">
                    <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">上云工具</span>
                    </div>
                    <div class="row text-center" style="padding-left:50px;">
                        <div class="col-md-3 kuao" style="margin-right:15px;margin-bottom:20px;" v-for="lis in list">
                                <div class="kuao-jia">{{lis.app_name}}</div>
                                <div class="kuao-main">{{lis.description}}</div>
                                <div><div class="kuao-borde"><img :src="lis.picture_url" alt=""></div></div>
                                <div><div><i class="iconfont  icon-xingxing" v-for="(ls,index) in 5" :class="lis.star>index?'huang':'yuan'"></i><span class="fens">{{lis.star}}分</span></div></div>
                                <div class="jia-yue"><div class="jiaq">￥{{lis.price}}/月</div></div>
                        </div>
                    </div>
                 </div>
            </div>
            <Sex></Sex>
    </div>
</template>
<style>
.fens{
    font-size:12px;
    color:#f15532;
    margin-left:5px;
}
.hhs:hover{
    color:#da121a !important;
}
.jia-yue{
    width:100%;
    margin-top:20px;
    
}
.jiaq{
    text-align:center;
    font-size:12px;
    color:#da121a;
}
.huang{
   color: rgb(247, 167, 44)
}
.yuan{
    color:#dfdfdf;
}
.spanshover:hover{
    color:#da121a;
    cursor:pointer;
    border-bottom:2px solid #da121a;
}
.kuao-jia{
    font-size:16px;
    margin-top:20px;
    color:#333333;
}
.kuao-main{
    margin-top:16px;
    padding:0 5px; 
    height:92px;
    font-size:12px;
    color:#999999;
    line-height:24px;
}
.kuao{
    background:#ffffff;
    border:1px solid #f0f0f0;
    box-shadow:0 0 1px 2px rgba(236,236,236,0.50);
    border-radius:2px;
    width:295px;
    height:339px;
}
.kuao-borde{
    background:#f9f9f9;
    border-radius:15px;
    width:91px;
    margin:0 auto !important;
    height:90px;
}
.kuao-borde img{
    margin-top:20px;
    width:73px;
    height:46px;
}
.spanshover{
    display:inline-block;
    padding: 0 10px;
    font-size:14px;
    color:#333333;
}
.kong{
    border:1px solid #d6d6d6;
    width:100%;
    height:2px;
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
        .juright{
        text-align:right;
    }
    .juzhong{
        text-align:center;
    }
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
          .juright,.juzhong{
                text-align:left !important;
            }
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
   .cloundbannerser{
       background:url('../../../assets/er-icon/cloudmaster.png') no-repeat;background-size:cover;   
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
               phoneBox:false,
               activeName:"first",
               list:[]
            }
        },
        methods:{
            lister:function(){
                this.$this.get('/broker/market/user/all/list').then((res)=>{  //获取所有的信息内容
                            console.log(res);
                            this.list = res.data;
                    }).catch((error)=>{
                });
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
            this.lister();
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

              
                       
              })
    }
}
</script>