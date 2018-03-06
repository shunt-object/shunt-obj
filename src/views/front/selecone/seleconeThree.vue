<template>
<div>
    <!-- 侧边悬浮 -->
    <div class="fixed-box">
        <ul class="fixed-ul">
            <li id="xiaowei" v-on:click="xiaowei()" class="liHoversBj"> <img src="../../../assets/homePage-online.png" class="fixed-icon" alt="">在线客服</li>
            <li class="phone-li liHoversBj" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
                <img src="../../../assets/homePage-phone.png" class="fixed-icon" alt="">电话咨询
                <div v-show="phoneBox" class="phone-box"><img src="../../../assets/alertPhone.png" alt=""  style="width:100%;height:100%"></div>
            </li>
        
        </ul>
        <img src="../../../assets/scroll.png" alt="" class="scrollUp">
    </div>
    <!-- 导航 -->
    <Sec active="3"></Sec>
    <!--<Seb></Seb>-->
    <!-- 中间内容 -->
    <div class="measurement-level">
        <!-- 导航 -->
        <div class="seleconeMains-banner row ">
            <div class="container">
                <div class="seleconeMain-mainfir  col-xs-12 col-md-6 " style="padding-left:50px">
                    <p class="selecone-pfir" style="font-weight:100;text-align:left;font-size:18px">云实测——进一步科学验证</span></p>
                    <div class="seclone-dv">
                        <h3 class="selecone-pfir" style="font-weight:100;text-align:left;font-size:26px">1：1还原真实业务场景</h3>
                        <p style="font-weight:100;text-align:left;font-size:18px">有没有一个一站式平台，专业验证规划和选型结果呢？</p>
                    </div>
                    <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:left;padding:0 !important"><span class="spanTy" @click="tingyun()">立即体验</span></p>
                </div>
                <div class="col-md-6 col-xs-12 text-left" style="margin-top:105px;padding:0 !important;"><img src="../../../assets/xindian.png" alt="" style="float:right;width: 80%;"></div>

            </div>
        </div>
        <div style="background:#f6f7f8;width:100%">
            <div class="clould-testing-block container">
                <h4 style="font-weight:100">在完成云规划和云选型后</h4>
                <h4 style="font-size: 16px; color: #777;text-align: center;margin-top:10px;font-weight:normal;">为什么还需要进行云实测</h4>
                <div class="col-md-12" style="margin:0px;">
                    <div class="col-md-6 col-xs-12">
                        <div class="clould-testing-desc">
                            <p class="clould-testing-p">原因很简单，因为他重要；为什么重要？</p>
                            <p class="clould-testing-p">众所周知，系统性能是用户体验的核心指标之一。</p>
                            <p class="clould-testing-p">一个好的云平台性能，可以带来更快的云平台访问速度，</p>
                            <p class="clould-testing-p">更快的页面响应速度，更快的数据计算，从而获得更好的用户体验；</p>
                            <p class="clould-testing-p">一个好的云平台性能，确保了云迁移是否满足用户的功能需求，</p>
                            <p class="clould-testing-p">是否实现上云的目的？</p>
                            <p class="clould-testing-p">反之，一个低性能的云平台，将直接影响您的用户体验；</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12" style="margin-bottom:50px;">
                        <img class="clould-testing-img" src="../../../assets/measured/measured-computer.png" alt="" style="width:85%">
                    </div>
                </div>
            </div>
        </div>
        <div style="background:#fff;width:100%;padding-bottom:80px;">
            <div class="clould-testing-block container">
                
                <h4 style="font-weight:100;margin-top:50px;">在云实测环境下，为您提供</h4>
                <h4 style="font-size: 16px; color: #777;text-align: center;margin-top:10px;font-weight:normal;margin-bottom: 40px;">1：1仿真环境和还原真实业务场景</h4>
                <div class="row" style="margin:0px;">
                    <div class="col-md-8" style="padding:0 !important;">
                        <img src="../../../assets/measured/measured-computer-content.png" style="width:100%;" alt="">
                    </div>
                    <div class="col-md-4" style="padding:0 !importnt;">
                        <div class="" style="width:80%">
                            <p class="clould-testing-sight">全面的覆盖了前后端多维度测试环节，将协助您全面提升用户体验</p>
                            <ul class="clould-testing-ul" style="padding: 0;">
                                <li><span class="clould-testing-li-num clould-testing-color1">1</span>基于大数据</li>
                                <li><span class="clould-testing-li-num clould-testing-color2">2</span>网络和应用性能监控分析</li>
                                <li><span class="clould-testing-li-num clould-testing-color3">3</span>业务可视化</li>
                                <li><span class="clould-testing-li-num clould-testing-color1">4</span>业务访问路径梳理</li>
                                <li><span class="clould-testing-li-num clould-testing-color2">5</span>端到端网络和应用性能监控</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background:#f6f7f8;width:100%">
            <div class="seleconeMain-echarts broundU container">
                <h4 style="font-weight:100;font-size:26px;margin-top: 50px;">提供一站式全流程用户体验</h4>
                <!--<p class="child-p text-center col-xs-12" style="font-weight:100">提供一站式全流程用户体验</p>-->
                <div class="col-md-12 seleconeMain-img" style="margin-bottom:60px;">
                    <div class="col-md-12 col-xs-12 text-center"><img src="../../../assets/zhenshi-new.png" alt="" style="width:55%;height:55%;"></div>
                </div>
            </div>
        </div>


    </div>

    <!-- 底部 -->
    <div style="background:#ededed;width:100%;height:auto;">
        <div class="seleconeMain-footer row">
            <div class="container text-left" style="width:60%;padding-left:cd30px;">
                <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;">
                    <img src="../../../assets/qian.png" alt="" style="width:18%;margin-right:10px">
                    <span style="font-size:14px;color:#333333">5天无理由退款</span>
                </div>
                <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;">
                    <img src="../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px">
                    <span style="font-size:14px;color:#333333">7×24小时顾问支持</span>
                </div>
                <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;">
                    <img src="../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;margin-left:20px;">
                    <span style="font-size:14px;color:#333333">1V1专家服务</span>
                </div>
                <div class="col-md-3 col-xs-12" style="margin-top:20px;margin-bottom:20px;">
                    <img src="../../../assets/90fuwu.png" alt="" style="width:18%;margin-right:10px">
                    <span style="font-size:14px;color:#333333">90秒极速响应</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 引入页尾 -->
    <Sex></Sex>
</div>
</template>
<style>
.liHoversBj:hover{
    background:#EF131D;
}
.scrollUp:hover{
    cursor:pointer;
}  
.seleconeMains-banner{
   animation-duration:2s;
}
.seleconeMains-banner{background:#222222;background-size:100% 100%; }
.seleconeMain-mainfir{margin-top:150px}
.seleconeMain-mainfir .selecone-pfir{
    font-size:26px;
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
    font-size:14px;
    color:#fff;
    text-align:center;
}
.spanTy{
    border:1px solid #e41e2b;font-size:12px;color:#fff;padding:10px 25px;display:inline-block;text-align:center;background:#e41e2b
}
.spanTy:hover{
    cursor:pointer;
    background:#fff;
    color:#e41e2b;
    border:1px solid #fff;
}


.clould-testing-block{
    width:100%; animation-duration:2s;
}
.clould-testing-block H4{
    font-size:26px;
    color:#333333;
    text-align:center;
    margin-top:50px;
}
.clould-testing-desc{
    padding-top:118px;
}
.clould-testing-p{
    font-size:14px;
    text-align:left;
    color:#333333;
    margin:0 !important;
    line-height:28px;
}
.clould-testing-img{
    width:80%;
    margin-top:30px;
}
.clould-testing-sight{
    font-size:14px;
    color:#333333;
    text-align:left;
    line-height:24px;
    margin-top:30px;
}
.clould-testing-ul{
    margin-top:30px;
}
.clould-testing-ul li{
    list-style:none;
    text-align:left;
    font-size:14px;
    margin:15px 0;
    color:#666666;
}
.clould-testing-ul li span{
    display:inline-block;
    width:20px;
    height:20px;
    border-radius:50%;
    text-align:center;
    margin-right:10px;
    color:#fff;
}
.clould-testing-color1{
    background:#e41e2b;
}
.clould-testing-color2{
    background:#f7a72c;
}
.clould-testing-color3{
    background:#e15f2d;
}
.message-btn-cel{
    float:right;
    margin-left:10px;
}
.message-btn-cel:hover{
    border: 1px solid #dcdfe6 !important;
    color: #606266 !important;
    background:#fff !important;
}
</style>
<script>
    import Sec from "../../../components/SecondaryPages/SecondaryPages.vue"
    import Sex from "../../../components/SecondaryPages/SecondaryFooter.vue"
    import Seb from "../../console/measured/measured.vue"
    export default{
        components:{
            Sec,
            Sex,
            Seb
        },
        data(){
            return{
                 phoneBox:false
            }
        },
        methods:{
            xiaowei:function(){
                var that = this; 
                var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
            },
            phoneEnter:function(){
                this.phoneBox = true;
            },
            phoneleave:function(){
                    this.phoneBox = false;
            },
            tingyun:function(){
                let that = this;
                this.$router.push({path: '/consolePage'});
                this.$http.get('/broker/action/click/19').then((response)=>{
                    //console.log('----',response);
                }).catch((error)=>{
                })
            //    this.$msgbox({
            //         title: '温馨提示',
            //         message:'当前，我们正在与听云联合研发，敬请您的期待！如您当前急需进行，请您直接访问听云官网。',
            //         showCancelButton: true,
            //         cancelButtonText: '取消',
            //         confirmButtonText: '立即访问',
            //         confirmButtonClass:'lay-btn-red',
            //         cancelButtonClass:'message-btn-cel',
            //         type: 'warning',
            //         callback:function(action, instance){
            //             if(action=='confirm'){
            //                 //window.open('http://www.tingyun.com/?userFrom=sem1&source=bd&plan=sem-chn-ty-j&unit=ty&keyword=ty&e_adposition=cl1');
            //                 that.$router.push({path: '/consolePage'});
            //                 that.$http.get('/broker/action/click/19').then((response)=>{
            //                     //console.log('----',response);
            //                 }).catch((error)=>{
            //                 })
            //             }
            //         }
            //    })
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
