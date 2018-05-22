<!--云规划-->
<template >
<div style="background:#eceef3" id="he">
    <!-- 悬浮框 -->
    <fixedbox></fixedbox> 
    <Sec active="3" class="sectb"></Sec>
    <div class="selecMain ">
            <div class="seleconeMain-banners  row rusetse">
                 <div class="container" >
                        <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px;">
                            <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">我们正在倾听……</span></p>
                            <div class="seclone-dv">
                                <h3 class="selecone-pfir menospp" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff;">CloudBroker²不是完美的，非常渴望您的反馈，这将帮助我们更好的改善产品与技术服务。</h3>
                            </div>
                             <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="" ></span></p>
                        </div>
                 </div>
            </div>
            <div>
                    <div class="containerus" style="margin-bottom:140px">
                            <div class="pafen">
                                    <div class="row">
                                        <div class="pf col-md-2">我的评分：</div>
                                        <div class=" clags col-md-10">
                                            <el-rate v-model="value1" allow-half ></el-rate>
                                        </div>
                                    </div>
                                    
                                    <div style="margin-bottom:30px;margin-top:30px;">
                                        <div style="display:inline-block" class="col-md-2 p-l">意见类型：</div>
                                        <div style="display:inline-block;padding:0!important" class="col-md-10">
                                            <button class="btnsg" :class="item.boolean==false?'comment-default':'comment-active'" v-for="(item,index) in commentlist" v-on:click="selectcomment(index,item.data.id)" >{{item.data.name}}</button>
                                        </div>
                                    </div>

                                    <div style="margin-bottom:30px;margin-top:30px;" class="row">
                                        <div class="col-md-2" style="margin-top:30px;">意见内容：</div>
                                        <div class="col-md-9" style="padding:0!important;margin-top:30px;">
                                            <textarea class="areate" placeholder="欢迎将使用中所遇到的问题反馈给我们" v-model="texteares"></textarea>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="pf col-md-2 shang ">上传图片：</div>
                                        <div class=" clags col-md-10 chuan">
                                          <el-upload
                                            class="upload-demo"
                                            :on-success="upDatas"
                                            action="broker/object/stroage/upload/feedback"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :before-remove="beforeRemove"
                                            multiple
                                            :limit="10"
                                            :on-exceed="handleExceed"
                                            :file-list="fileList"
                                            list-type="picture">
                                            <el-button size="small" type="primary" class="shangbtn">点击上传</el-button>
                                            <div slot="tip" class="el-upload__tip">温馨提示：当前只支持jpg和png格式文件，且不超过500kb</div>
                                          </el-upload>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="pf col-md-2 shang">是否匿名：</div>
                                        <div class=" clags col-md-10 shang">
                                            <button class="btnsg bfff" :class="ni==true?'niTrue':'nifalse'" @click="nis()">匿名</button><button class="btnsg bfff" :class="fni==true?'niTrue':'nifalse'" @click="fnis()">非匿名</button>
                                        </div>
                                    </div>

                                    <div class="row" v-if="fni==true">
                                        <div class="pf col-md-2 shang"><span style="color:#da121a">*</span>电话号码：</div>
                                        <div class=" clags col-md-10 shang">
                                            <input type="text" class="phtext" placeholder="请输入手机号或电话号码" v-model="phtext">
                                            <div v-show="Reg" style="margin-top:10px;color:#da121a;font-size:12px">请输入正确的手机号或电话号</div>
                                            <div style="margin-top:10px;color:#da121a;font-size:12px">留下的您的联系方式，我们会根据反馈内容提供一定奖励。</div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="comment-notice shang">
                                            <p>温馨提示：</p>
                                            1、反馈会在1-3个工作日与您联系(工作时间：周一至周五，9:00-18:00)。<br>
                                            2、产品使用中遇到的问题您可以联系<span>Prof. 吴</span> 。<br>
                                            3、紧急问题建议您拨打<span> 400-828-7308 </span>或发邮件到<span> Help@csb-china.com </span>。
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="text-center shang sdubs" @click="submit()">立即提交</div>
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
.el-upload-list__item.is-success .el-upload-list__item-name:focus, .el-upload-list__item.is-success .el-upload-list__item-name:hover{
    color:#da121a !important;
}
.el-upload-list--picture .el-upload-list__item-status-label{
    background:#da121a !important;
}
.el-upload__tip{
    color:#da121a !important;
}
.sdubs{
    background:#da121a;
    width:100%;
    height:36px;
    line-height:36px;
    color:#fff;
}
.sdubs:hover{
    background:#EF131D;
}
.sdubs:hover{
    cursor:pointer;
}

@media (min-width: 768px) {
    .phtext{
        border:1px solid #d1d2d3;
        border-radius:2px;
        width:500px !important;
        height:28px;
        text-indent:1em;
    }
    .areate{
        width:516px;
        height:155px;
        overflow-x:hidden;
        overflow-y:hidden;
        resize: none;
        border:1px solid #d1d2d3;
        border-radius:2px;
        padding:10px;
        line-height:10px;
        text-indent:1em;
    }
    .containerus{
            max-width:818px;
            text-align:left;
            margin:0 auto;
            padding-left:90px;
    }
}
@media (max-width: 768px) {
    .phtext{
        border:1px solid #d1d2d3;
        border-radius:2px;
        width:280px !important;
        height:28px;
        text-indent:1em;
    }
    .containerus{
            max-width:600px;
            text-align:left;
            margin:0 auto;
            padding-left:20px;
    }
    .areate{
        width:280px;
        height:155px;
        overflow-x:hidden;
        overflow-y:hidden;
        resize: none;
        border:1px solid #d1d2d3;
        border-radius:2px;
        padding:10px;
        line-height:20px;
        text-indent:1em;
    }
}
.niTrue{
    background:#f7a72c !important;
    color:#fff;
}
.nifalse{
    background:#fff !important;
    color:#000;
}   
.bfff{
    background:#fff;
}
.chuan{
    margin-top:30px;
}
.shang{
    margin-top:38px;
}
.shangbtn{
    color:#000 !important;
    width:119px;
    height:35px;
    border:1px solid #d1d2d3 !important;
    border-radius:2px !important;
    background:#fff !important;
}

 .areate::-webkit-input-placeholder{
     line-height: 10px
 }    /* 使用webkit内核的浏览器 */
.areate:-moz-placeholder{
      line-height: 10px
    }                  /* Firefox版本4-18 */
.areate::-moz-placeholder{
     line-height: 10px
    }                  /* Firefox版本19+ */
.areate:-ms-input-placeholder{
     line-height: 10px
    }
.btnsg{
   width:70px;
   height:30px;
   line-height:30px;
    border:1px solid #ccc;
    margin-right:10px;
    margin-bottom:10px;
    border-radius:2px !important
}


.pafen{
    font-size:14px;
    color:#333333;
    padding-top:40px;
}
.pf{
    display:inline-block;
    height:20px;
    line-height:20px;
    
}
.clags{
    display:inline-block;
   
}
.dv2:hover{
    cursor:pointer;
}
.alifloat{
   display:inline-block;
   margin-left:-66px;
   line-height:30px;
   margin-top:40px;
   font-size:18px;
   color:#333333;

}
.group-money{
    font-size:24px;
    color:#333333;
    text-align:center;
    margin:40px 0 30px 0;
}

.rusetse{
    background:url("../../../assets/er-icon/disl.png") no-repeat;
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
/**/
.rightBs ul li{
    background:#d8d8d8;
    width:10px;
    height:10px;
    border-radius:100%;
   margin-bottom:10px;
}
@media (max-width: 768px) {
      .juright,.juzhong{
          text-align:left !important;
      }
    .menospp{
        line-height:40px;
    }
    .tuoguan{
        padding-left:0px;
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
    .tuoguan{
        padding-left:100px;
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
    .el-upload__input{
        display:none !important;
    }
</style>
<script>
    $(document).ready(function(){ 
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


              })
 import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
 import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
 import fixedbox from '../../../components/SecondaryPages/protalFixed.vue';
    export default{
         name: 'cloudplanning',
        components:{
            Sec,
            Sex,
            fixedbox
        },
        data(){
            return{
                 phoneBox:false,
                 value1:null,
                 commentlist:[],
                 fktype:38,
                 fileList:[],
                 ni:false,
                 fni:true,
                 picList:[],
                 phtext:"",
                 texteares:"",
                 Reg:false,
                 tys:0
            }
        },
        methods:{
               nis:function(){
                    this.ni = true;
                    this.fni = false;
                    this.tys = 1;
               },
               fnis:function(){
                    this.ni = false;
                    this.fni = true;
                    this.tys = 0;
               },
               handleRemove(file, fileList) {
                    console.log(file, fileList);
                },
                handlePreview(file) {
                    console.log(file);
                },
                handleExceed(files, fileList) {
                    this.$message.warning(`当前限制选择 10 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
                },
                beforeRemove(file, fileList) {
                    return this.$confirm(`确定移除 ${ file.name }？`);
                },
                upDatas:function(res){
                        this.picList.push(res.id)
                },
                
                selectcomment:function(index,lisid){
                    for(let i=0;i<this.commentlist.length;i++){
                        this.commentlist[i].boolean = false;
                    }
                    this.commentlist[index].boolean = true;
                    this.fktype = lisid;
                    console.log( this.fktype)
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
             getcomment:function(){            
                this.$this.get('/broker/prop/typedata/fb/-1').then((response)=>{
                    //console.log('----',response);
                    for(let i=0;i<response.data.data.length;i++){
                        this.commentlist.push({data:response.data.data[i],boolean:false});
                         this.commentlist[0].boolean = true;
                    }
                }).catch((error)=>{
                })
             },
             submit:function(){
                 if(this.fni!=false){
                        if(this.phtext!=""){
                            let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
                            let telReg=/^(\d3,4\d3,4|\d{3,4}-)?\d{7,8}$/;    
                            if(phoneReg.test(this.phtext)==true||telReg.test(this.phtext)==true){
                                this.Reg = false;
                                 $(".phtext").css("borderColor","#d1d2d3")
                                 this.subnus();
                            }else{
                                this.Reg = true;
                                $(".phtext").css("borderColor","#da121a")
                            }
                        }else{
                            this.$message.warning(`非匿名提交需要留下您的联系方式，我们会根据反馈内容提供一定奖励。`);
                        }
                 }else{
                   this.subnus();
                 }
             },
             subnus:function(){
                     var obj={
                            content:this.texteares, //反饋内容
                            grade:this.value1,     //評星數量
                            type:this.fktype,    //反饋類型
                            phone:this.phtext,    //联系方式
                            isAnonymous:this.tys,//是否匿名   0不匿名 1匿名
                            pictureList:this.picList //照片列表    传url 装在数组里
                        }
                            this.$this.post('/broker/feedback/protal/add',obj).then((response)=>{
                            this.$message({
                                message: '您已提交成功。',
                                //type: 'success',
                                customClass:'lay-msg',
                                iconClass:'el-icon-success'
                            });
                            this.value1 = null;
                            this.fktype = 38;
                            this.phtext = "";
                            this.tys = 0;
                            this.ni = false;
                            for(let i=0;i<this.commentlist.length;i++){
                                this.commentlist[i].boolean = false;
                                    this.commentlist[0].boolean = true;
                            }
                            this.fni = true;
                            this.fileList = [];
                            this.texteares = "";
                        }).catch((error)=>{
                        })
             }
        },
        mounted:function(){
             
               $(".rightBs ul li").click(function(e){
                               //$(".rightBs ul li").css("background","#d8d8d8");
                               var s = $(this).index();
                               //console.log(s)
                             $(".rightBs ul li").not($(this)).css("background","#d8d8d8")
                             $(this).css("background","#da121a")
                             var target = e.target;
                             var id = $(target).data("to");
                             $('html,body').animate({scrollTop:$('.'+id).offset().top+90}, 800);
                            
                         
                })
                this.getcomment()
        }
 

    }
</script>