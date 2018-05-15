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
          
            <Sec active="5"></Sec>
            <!--<div class="ycs" style="background:#f5f5f5;width:100%;height:70px;line-height:70px;">
                     <div class="container">
                        <div class="" style="margin:0 auto!important;width:100%;height:70px;line-height:70px;">
                            <span class="spanshover spanbot" @click="Upclouds"><i class="iconfont icon-yun1"></i> 上云类工具</span><span class="spanshover spanbos" style="margin-left:120px;" @click="moneyCloud"><i class="iconfont icon-yun"></i> 迁云类工具</span>
                        </div>
                     </div>
             </div>-->
            <div class="cloundcompare">
                    <div class="cloundbannerser">
                        <div class="container">
                            <div class="container" >
                                    <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12 text-left">
                                        <p class="selecone-pfir" style="font-weight:100;text-align:left;font-size:26px;color:#ffffff">打造全新云服务模式，0元助力企业上云</span></p>
                                        <div class="seclone-dv">
                                            <h3 class="selecone-pfir menospp" style="font-weight:100;text-align:left;font-size:26px;color:#ffffff;">轻松、便捷、快速进入智能云时代</h3>
                                        </div>
                                         <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:left;padding:0 !important"><span class="spanTys"><a href="#ProductFeatures" style="color:#fff" class="hhs">立即体验</a></span></p>
                                    </div>
                            </div>
                         </div>
                    </div>        
             </div>
             <div class="lcss">
                     <div class="container">
                        <div class="" style="margin:0 auto!important;width:100%;height:70px;line-height:70px;">
                            <span class="spanshover spanbot" @click="Upclouds"><i class="iconfont icon-yun1"></i> 上云类工具</span><span class="spanshover spanbos" style="margin-left:120px;" @click="moneyCloud"><i class="iconfont icon-yun"></i> 迁云类工具</span>
                        </div>
                     </div>
             </div>
             <div class="kong"></div>
             <div id="ProductFeatures" class="go1" v-show="indexIds">
                <div class="container erfs whyContainer" style="margin-bottom:50px;">
                    <div class=" text-left redtitle">
                       <span class="redLine"></span><span class="redlasttitle">上云工具</span>
                    </div>
                    <div class="row text-center igs">
                        <div class="col-md-3 kuao" style="margin-right:15px;margin-bottom:20px;position:relative" v-for="(lis,index) in list" @click="dianHover(index,lis.id)">
                                <div class="mianfei-div" :class="index==0?'':'dis'"><span class="mianfei">免费体验</span></div>
                                <div class="kuao-jia">{{lis.app_name}}</div>
                                <div class="kuao-main text-center">{{lis.description}}</div>
                                <div><div class="kuao-borde"><img :src="lis.picture_url" alt="" class="imganimate"></div></div>
                                <div><div><i class="iconfont  icon-xingxing" v-for="(ls,index) in 5" :class="lis.star>index?'huang':'yuan'"></i><span class="fens">{{lis.star}}分</span></div></div>
                                <div class="jia-yue"><div class="jiaq">￥{{lis.price}}/月</div></div>
                        </div>
                    </div>
                 </div>
            </div>
            <div v-show="indesIds">
                <div>
                        <div class="cloimg"><img src="../../../assets/paying-bg.png" alt=""></div>
                        <div class="clofont"><span>迁云类工具正在开发中，敬请您的期待...</span></div>
                </div>
            </div>

            <!--弹出框-->
            <el-dialog title="云价格计算器"  :visible.sync="dialogVisible" class="cloudmarket-dialog">
                 <div class="appcenterPrice">
                        <div class="appcplan-list"> 
                            <el-form :model="matchBo" :rules="rules" ref="matchBo" label-width="80px">
                                <el-form-item label="CPU" prop="cores" class="appcplan-from-item">
                                    <el-input class="appcplan-input" type="number" min="1" placeholder="请输入CPU" v-model="matchBo.cores" v-on:blur="onblur('cores')"></el-input>
                                </el-form-item>
                                <el-form-item label="内存" prop="ram" class="appcplan-from-item">
                                    <el-input class="appcplan-input" type="number" min="1" placeholder="请输入内存" v-model="matchBo.ram" v-on:blur="onblur('ram')"></el-input>
                                </el-form-item>
                                <el-form-item label="云厂商" prop="firm" class="appcenter-from-select">
                                    <el-select v-model="matchBo.firm" placeholder="请选择云厂商">
                                        <el-option v-for="item in clouldcompany" :label="item.name" :value="item.id" :key="JSON.stringify(item.id)"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="购买周期" prop="months" class="appcenter-from-select">
                                    <el-select v-model="matchBo.months" placeholder="请选择购买周期">
                                        <el-option v-for="item in month" :label="item.name" :value="item.months" :key="JSON.stringify(item.months)"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="区域" prop="region" class="appcenter-from-select">
                                    <el-select v-model="matchBo.region" placeholder="请选择区域">
                                        <el-option v-for="item in region" :label="item.region" :value="item.code" :key="JSON.stringify(item.code)"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item class="appcplan-btn">
                                    <el-button type="button" class="appcplan-button" v-on:click="submit('matchBo')">查询</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div v-if="pricelist.length>0" class="appcheck-canvastitle"><span></span>云实例匹配结果列表</div>
                        <div class="appcenterPrice-table" v-if="pricelist.length>0">
                            <table>
                                <thead>
                                    <tr>
                                        <th>云厂商</th>
                                        <th>产品名称</th>
                                        <th>区域</th>
                                        <th>费用参考</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="it in pricelist">
                                        <td>{{it.sname}}</td>
                                        <td>{{it.pname}}</td>
                                        <td>{{it.region}}</td>
                                        <td v-if="it.cloudPrice==0">￥原厂在线暂不支持</td>
                                        <td v-else>¥{{it.cloudPrice}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false" class="enterDing ResourceGroup-lay-btn ResourceGroup-lay-yes">确定</el-button> 
                    <el-button type="primary" @click="dialogVisible = false" class="ResourceGroup-lay-btn ResourceGroup-lay-del">取消</el-button>   
                </span>
            </el-dialog>
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
            <Sex></Sex>
    </div>
</template>
<style>
.ycs{
    position:fixed;
    top:0;
    display:none;
    z-index:999999999;
}


.el-message-box__title span{
    color:#000 !important;
}
.el-message-box__headerbtn .el-message-box__close{
    color:#da121a !important;
}
.el-message-box__headerbtn{
    top:8 !important
}
.cloimg{
    margin-top:100px;   
}
.cloimg img{
    width:13%;
}
.clofont{
    margin-bottom:100px;
    margin-top:20px;
}
.clofont span{
    font-size:14px;
    color:#999999;
    padding-left:10px;
}
.el-dialog{
    
    text-align:left;
    border-radius:4px;
}
.ResourceGroup-lay-del{
    background: #fff !important;
    border: 1px solid #dcdfe6 !important;
    color: #606266 !important;
}
.ResourceGroup-lay-del:hover{
    background:#F5F7FA !important;
}
.ResourceGroup-lay-yes:hover{
    background:#EF131D !important;
}
.ResourceGroup-lay-btn{
    padding: 9px 15px !important;
}
.enterDing{
    background:#da121a !important;
    color:#fff !important;
    border:none;
}
.kuao:hover{
    cursor:pointer;
   box-shadow:5px 5px 15px 2px #EAEAEA;
   background:#f4f4f4;
}
.dis{
    display:none;
}
.mianfei-div{
    position:absolute;
    right:25px;
    top:10px;
}
.mianfei{
    display:inline-block;
    background:url("../../../assets/er-icon/mianfei.png") no-repeat;
    width:67px;
    height:20px;
    line-height:20px;
    text-align:center;
    color:#fff;
    border-radius:4px;
    padding-left:5px;
    font-size:12px;
    border-radius:2px 2px 2px 2px 0 0 0;
}
.fens{
    font-size:12px;
    color:#f15532;
    margin-left:5px;
}
.hhs{
        border: 1px solid #e41e2b;
    font-size: 12px;
    color: #fff;
    padding: 10px 25px;
    display: inline-block;
    text-align: center;
    background: #e41e2b;
}
.hhs:hover{
    color:#da121a !important;
    background: #fff;
      border: 1px solid #fff;
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
    height:80px;
    font-size:12px;
    color:#999999;
    line-height:24px;
}
.kuao{
    background:#ffffff;
    border:1px solid #f0f0f0;
    box-shadow:0 0 1px 2px rgba(236,236,236,0.50);
    border-radius:2px;
    width:273px !important;
    height:315px;
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
        .cloudmarket-dialog .el-dialog{
            width:30% !important;
        }
        .juright{
            text-align:right;
        }
        .igs{
            padding-left:80px;
        }
        .spanshover{
            display:inline-block;
            padding: 0 10px;
            font-size:14px;
            color:#333333;
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
        .cloudmarket-dialog .el-dialog{
            width:96% !important;
        } 
        .spanshover{
            display:inline-block;
            font-size:14px;
            color:#333333;

        }
        .spanbot{
            float:left;
        }
        .spanbos{
            float:right;
            margin-left:0 !important;
        }
        .el-message-box{
            width:280px !important;
        }
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
                    });
            
                    $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                    });


              })
        import '../selecone/bais.css'
        import '../../console/app/resourceGroup/resourceGroup.css'
        import '../../console/appCenter/appcenterPrice/appcenterPrice.css'
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
               list:[],
               dialogVisible: false,
                matchBo:{
                    cores:'',
                    ram:'',
                    firm:'',
                    region:'',
                    months:''
                },
                indexIds:true,
                indesIds:false,
            match:{
                "appMatchBo": {
                    "cores": '',
                    "ram": ''
                },
                "priceParamBo": {
                    "buyType": 1,//包年包月
                    "month": '',//购买周期
                    "paymentType": 1,//预付费
                    "regions": [],//区域
                    "serverId": ''//云厂商
                }
            },
            month:[
                {name:'1年',months:'12'},
                {name:'2年',months:'24'},
                {name:'3年',months:'36'},
                {name:'4年',months:'48'},
                {name:'5年',months:'60'},
            ],
            rules:{
                ram: [
                    { required: true, message: '请输入内存容量', trigger: 'blur,change' },
                ],
                cores: [
                    { required: true, message: '请输入CPU核数', trigger: 'blur,change' },
                ],
                firm:[
                    { required: true, message: '请选择云厂商', trigger: 'blur,change' },
                ],
                region:[
                    { required: true, message: '请选择区域', trigger: 'blur,change' },
                ],
                months:[
                    { required: true, message: '请选择购买周期', trigger: 'blur,change' },
                ]
            },
            clouldcompany:[],
            region:[],
            pricelist:[]
            }
        },
        methods:{
            Upclouds:function(){
                this.indexIds = true;
                this.indesIds = false;
                $(".spanbos").css({"borderBottom":"none","color":"#333333"});
                $(".spanbot").css({"borderBottom":"2px solid #da121a","color":"#da121a"});
            },
            moneyCloud:function(){
                this.indesIds = true;
                this.indexIds = false;
                $(".spanbot").css({"borderBottom":"none","color":"#333333"});
                $(".spanbos").css({"borderBottom":"2px solid #da121a","color":"#da121a"});
            },
            onblur:function(dom){
                if(dom=='cores'){
                    this.matchBo.cores<0?this.matchBo.cores=1:this.matchBo.cores=this.matchBo.cores;
                }else if(dom=='ram'){
                    this.matchBo.ram<0?this.matchBo.ram=1:this.matchBo.ram=this.matchBo.ram;
                }
            },
            getCloudlist:function(){
                this.$this.get('/broker/price/suppliers/list').then((res)=>{
                // console.log(res.data.data);
                    for(let i=0;i<res.data.data.length;i++){                    
                        for(let n in res.data.data[i]){
                            this.clouldcompany.push({id:n,name:res.data.data[i][n]})
                        }
                    }
                }).catch((error)=>{})
            },
            getRegion:function(id){
                this.$http.get('/broker/price/region/'+id).then((response)=>{
                    //console.log('----',response.data.data);
                    if(id==-1){
                        this.getRegion(response.data.data[0].id);
                    }else{
                        this.region = response.data.data;
                    }                
                }).catch((error)=>{
                })
            },
            submit:function(value){
                this.$refs[value].validate((valid) => {
                    if (valid) {
                        this.match.appMatchBo.cores = this.matchBo.cores;
                        this.match.appMatchBo.ram = this.matchBo.ram;
                        this.match.priceParamBo.month = this.matchBo.months;
                        this.match.priceParamBo.regions.push(this.matchBo.region);
                        this.match.priceParamBo.serverId = this.matchBo.firm;
                        this.$this.post('/broker/app/math/calc/price',JSON.stringify(this.match)).then((response)=>{
                            //console.log('---',response.data);
                            this.pricelist = response.data.data;
                        }).catch((error)=>{})
                    } else {
                        return false;
                    }
                });
            },
            dianHover:function(e,a){
              
              var sess =  sessionStorage.getItem("account");
              if(e==0){
                    
                    this.dialogVisible = true;
                  
              }else{
                  if(sess){
                        this.$this.post('/broker/market/user/save/'+a).then((res)=>{ //保存用户行为
                            this.$confirm('您已成功添加到控制台中的应用市场。', '温馨提示', {
                                confirmButtonText: '立即体验',
                                cancelButtonText: '继续添加',
                                confirmButtonClass:'lay-btn-red',
                                cancelButtonClass:'lay-cancel-btn',
                                type: 0,
                                }).then(() => {
                                    this.$router.push({path:'/appcenterList'});
                                }).catch(() => {
                                    
                                });
                        }).catch((error)=>{
                        });

                  }else{
                       this.$router.push({path:'/login',query:{univeristy:'cloudmarket'}});

                  }
              }



             
            },
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
            this.getCloudlist();
            this.getRegion(-1);
            this.lister();
              $(document).ready(function(){ 
                     $(".spanbot").css({"borderBottom":"2px solid #da121a","color":"#da121a"});
                     $(window).scroll(function(){
                        if($(this).scrollTop() > 550){
                            $('.scrollUp').css("display","block")
                        }else{
                            $('.scrollUp').fadeOut();
                        }
                          
                        //  if($(".lcs").length==1){
                        //     if($(".lcs").offset().top - $(window).scrollTop() < 0){
                        //         $('.ycs').css("display","block")
                        //         $('.navbar').css("background","none")
                        //         $('.navbar').css("display","none")
                        //     }else{
                        //         $('.ycs').css("display","none")
                        //         $('.navbar').css("background","#1D1E20")
                        //         $('.navbar').css("display","block")
                        //     }
                        // }
                     });
                     $(".scrollUp").click(function(){
                        $('html ,body').animate({scrollTop: 0}, 300);
                        return false;
                     });

                    $.fn.extend({  //封装animate方法
                        animateCss: function (animationName) {
                            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                            $(this).removeClass('animated ' + animationName);
                            });
                        }           
                    }); 
                       
                    $('.kuao').hover(function(){
                           $(this).children().find("img").animateCss('flip');
                        },function(){
                            $(this).children().find("img").removeClass("flip")

                    });
              })
    }
}
</script>