<template>
<div class="classProcess">
    <!-- 悬浮框 -->
    <div class="fixed-box">
        <ul class="fixed-ul">
            <li class=" liHoversBj" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
               <a href="tel:4008287308" style="color:#fff"><img src="../../../../assets/homePage-phone.png" class="fixed-icon" alt=""></a>
                <div v-show="phoneBox" class="phone-box liHoversBj"><img src="../../../../assets/alertPhone.png" alt="" style="width:100%;height:100%"></div>
            </li>
            <li id="xiaowei"  class="liHoversBj phone-li" v-on:click="xiaowei"> <img src="../../../../assets/homePage-online.png" class="fixed-icon" alt=""></li>
        </ul>
        <img src="../../../../assets/scroll.png" alt="" class="scrollUp" style="width:47px;height:47px;">
    </div>
    <!-- banner -->
    <div class="seleconeMain-banners  row classProcess-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">云集国内数百位云专家</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">打造适合、实战、专业的云课程体系</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><!--<span class="classProcess-yu">预约大咖</span>--></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!-- 副导航 -->
    <div class="smallnav" id="title-small" :class="isfixed==true?'titlesfixed':'container'">            
        <div class="" style="width:100%!important">
            <div class="col-md-6 col-xs-6 classProcess-titles-left">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#shebei')"><i class="iconfont icon-shebei"></i> 参加培训设备要求</a>
            </div>
            <div class="col-md-6 col-xs-6 classProcess-titles-right">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#classProcess-lc')"><i class="iconfont icon-shenpiliucheng"></i> 预约流程</a>
            </div>
        </div>
    </div>
    <div class="classProcess-line"></div>
    <!-- 参加培训设备要求 -->
    <div class="classProcess-demand container" id="shebei">
        <div class="classProcess-demand-title">
            <span class="classDemand-title-line"></span>
            <span class="classDemand-title-desc">参加培训设备要求</span>
        </div>
        <div class="row classProcess-list">
            <div class="col-md-3">
                <div class="classProcess-img">
                    <img src="../../../../assets/university/classProcess-yq1.png" alt="">
                </div>
                <div class="classProcess-desc">台式电脑+摄像头+头戴耳麦</div>
            </div>
            <div class="col-md-3 classProcess-bor">
                <div class="classProcess-img">
                    <img src="../../../../assets/university/classProcess-yq2.png" alt="">
                </div>
                <div class="classProcess-desc">笔记本电脑+头戴耳麦</div>
            </div>
            <div class="col-md-3">
                <div class="classProcess-img">
                    <img src="../../../../assets/university/classProcess-yq3.png" alt="">
                </div>
                <div class="classProcess-desc">苹果台式电脑或笔记本电脑</div>
            </div>
            <div class="col-md-3">
                <div class="classProcess-img">
                    <img src="../../../../assets/university/classProcess-yq4.png" alt="">
                </div>
                <div class="classProcess-desc">手机</div>
            </div>
        </div>
    </div>
    <!-- 预约流程 -->
    <div class="classProcess-demand container" id="classProcess-lc">
        <div class="classProcess-demand-title">
            <span class="classDemand-title-line"></span>
            <span class="classDemand-title-desc">预约流程</span>
        </div>
        <div class="classProcess-yue">
            <div class="classProcess-yue-line"></div>
            <div class="classProcess-yue-title">
                <span class="classProcess-yue-yuan">1</span>
                <div class="classProcess-yue-tit">CloudBroker²平台注册，关注微信公众号</div>
            </div>
            <div class="classProcess-erweima">
                <img src="../../../../assets/university/erweima.png" alt="">
                <div class="classProcess-erweima-desc">扫描二维码关注</div>
            </div>
        </div>
        <div class="classProcess-yue">
            <div class="classProcess-yue-line" style="top:20% !important;height:80%;"></div>
            <div class="classProcess-yue-title">
                <span class="classProcess-yue-yuan">2</span>
                <div class="classProcess-yue-tit" style="line-height:31px;">
                    为您安排预约
                    <div class="classProcess-yue-tits">您的专职客服会及时与您联系，将为您提供量身定制的撮合服务</div>
                </div>
            </div>
            <div class="classProcess-yue-list">
                <div class="classProcess-yue-listname">预约顾问流程：</div>
                <div class="classProcess-yue-lc">
                    <img src="../../../../assets/university/classProcess-lc1.png" alt="">
                    <span class="classProcess-yue-lc1">预约选择顾问</span>
                    <span class="classProcess-yue-lc2">预约选择课程</span>
                    <span class="classProcess-yue-lc3">确认上课时间</span>
                    <span class="classProcess-yue-lc4">确认观看课程方式</span>
                </div>
            </div> 
            <div class="classProcess-yue-list">
                <div class="classProcess-yue-listname">预约课程流程：</div>
                <div class="classProcess-yue-lc">
                    <img src="../../../../assets/university/classProcess-lc2.png" alt="">
                    <span class="classProcess-yue-lc1">预约选择课程</span>
                    <span class="classProcess-yue-lc2">确认上课时间</span>
                    <span class="classProcess-yue-lc3">确认讲课顾问</span>
                    <span class="classProcess-yue-lc4">确认观看课程方式</span>
                </div>
            </div>    
        </div>
        <div class="classProcess-yue">
            <div class="classProcess-yue-title">
                <span class="classProcess-yue-yuan">3</span>
                <div class="row">
                    <div class="col-md-5">
                        <div class="classProcess-yue-tit" style="line-height:31px;">
                            进入在线直播空间开始上课
                            <div class="classProcess-yue-tits">为您带来最新的、最专业的和最实用的课程培训</div>
                        </div>
                        <ul class="classProcess-sp-ul">
                            <li>1.	专业技术支持您顺利进入在线直播空间；</li>
                            <li>2.	您可以开启培训课程；</li>
                            <li>3.	问卷调查收集您的反馈，帮助我们改进服务质量。</li>
                        </ul>
                    </div>
                    <div class="col-md-4 phoneshipin-img">
                        <img src="../../../../assets/university/shipin.png" alt="" class="phone-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <div style="background:#ededed;;width:100%;height:auto;">
        <div class="seleconeMain-footer">
            <div class="container text-left" style="width:60%;padding-left:cd30px;">
                    <div class="col-md-3 col-xs-12" style="margin-top:27px;margin-bottom:20px;"><img src="../../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                    <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                    <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                    <div class="col-md-3 col-xs-12 juright" style="margin-top:27px;margin-bottom:20px;padding-right:40px !important;"><img src="../../../../assets/90fuwu.png" alt="" style="width:22%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
            </div>
        </div>
    </div>
    <finish></finish>
</div>
</template>
<script>
import '../classProcess/classProcess.css';
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
export default {
    name:'classProcess',
    data(){
        return {
            phoneBox:false,
            isfixed:false
        }
    },
    mounted:function(){
        let readytop = $(window).scrollTop();
        let _top = $(".smallnav").offset().top;
        let that = this;
        if(readytop>=_top){
            this.isfixed = true;
        }else{
            this.isfixed = false;
        }
        $(window).scroll(function(){
            if($(this).scrollTop()>=_top){
                that.isfixed = true;
            }else{
                that.isfixed = false;
            }
            //console.log('----',$(this).scrollTop());
         })
    },
    methods:{
        jump:function(dom){
            $('html,body').animate({scrollTop:$(dom).offset().top-100}, 800);
        },
        teamdetail:function(){
            this.$router.push({path:'/teamDetail'});
        },
        phoneEnter:function(){
            this.phoneBox = true;
        },
        phoneleave:function(){
                this.phoneBox = false;
        },
        xiaowei:function(){
            var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
        },
    },
    components:{
        start,
        finish
    },
}
</script>

