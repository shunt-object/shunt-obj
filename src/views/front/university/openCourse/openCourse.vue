<template>
<div class="openCourse">
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
    <div class="seleconeMain-banners  row openCourse-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">鲸鱼学院</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">为您开始五彩缤纷的云世界</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="openCourse-yu">预约大咖</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!-- 副导航 -->
    <div class="container naver" id="title-small">            
        <div class="" style="width:100%!important">
            <div class="col-md-6 col-xs-6 openCourse-titles-left"><a href="#bigcafe-team" class="hoover-a"><i class="iconfont icon-mn_gongneng"></i> 公开课程大纲</a></div>
            <div class="col-md-6 col-xs-6 openCourse-titles-right"><a href="#bigcafe-desc" class="hoover-a"><i class="iconfont icon-shenpiliucheng"></i> 预约课程</a></div>
        </div>
    </div>
    <div class="openCourse-line"></div>
    <!-- 公开课程大纲  -->
    <div class="container openCourse-outline">
        <div class="openCourse-outline-title">
            <span class="openCourse-outline-title-line"></span>
            <span class="openCourse-outline-title-desc">公开课程大纲</span>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">
                        信息通信产业发展<br>的背景和趋势
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">云计算技术及行业应用</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">企业迁云的方法论</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list" style="margin-bottom:0 !important;">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">雾计算技术及行业应用</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list" style="margin-bottom:0 !important;">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">云计算发展趋势和展望</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 预约课程 -->
    <div class="container openCourse-class">
        <div class="openCourse-outline-title">
            <span class="openCourse-outline-title-line"></span>
            <span class="openCourse-outline-title-desc">预约课程</span>
        </div>
        <div class="openCourse-check">
            <div class="openCourse-check-box">
                <button class="openCourse-check-btn">公开课程</button>
            </div>
            <div class="openCourse-select">
                筛选Level：<select name="" id=""></select>
            </div>
            <div class="clear"></div>
        </div>
        <div class="openCourse-class-list row">
            <div class="col-md-4 openCourse-class-img">
                <img src="../../../../assets/university/openCourse-class.png" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="openCourse-class-name">AI公司商业化的关键</div>
                <div class="openCourse-class-honour">
                    <span><i class="iconfont icon-mn_gongneng"></i>戴剑</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>Level 1,2</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>2018-05-08  16:30   未开始</span>
                </div>
                <div class="openCourse-class-desc">1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验</div>
                <button class="openCourse-class-yu">我要预约</button>
            </div>
        </div>
        <div class="openCourse-class-list row">
            <div class="col-md-4 openCourse-class-img">
                <img src="../../../../assets/university/openCourse-class.png" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="openCourse-class-name">AI公司商业化的关键</div>
                <div class="openCourse-class-honour">
                    <span><i class="iconfont icon-mn_gongneng"></i>戴剑</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>Level 1,2</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>2018-05-08  16:30   未开始</span>
                </div>
                <div class="openCourse-class-desc">1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验</div>
                <button class="openCourse-class-yu">我要预约</button>
            </div>
        </div>
        <div class="openCourse-class-list row">
            <div class="col-md-4 openCourse-class-img">
                <img src="../../../../assets/university/openCourse-class.png" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="openCourse-class-name">AI公司商业化的关键</div>
                <div class="openCourse-class-honour">
                    <span><i class="iconfont icon-mn_gongneng"></i>戴剑</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>Level 1,2</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>2018-05-08  16:30   未开始</span>
                </div>
                <div class="openCourse-class-desc">1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验</div>
                <button class="openCourse-class-yu">我要预约</button>
            </div>
        </div>
        <div class="openCourse-class-list row">
            <div class="col-md-4 openCourse-class-img">
                <img src="../../../../assets/university/openCourse-class.png" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="openCourse-class-name">AI公司商业化的关键</div>
                <div class="openCourse-class-honour">
                    <span><i class="iconfont icon-mn_gongneng"></i>戴剑</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>Level 1,2</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>2018-05-08  16:30   未开始</span>
                </div>
                <div class="openCourse-class-desc">1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验</div>
                <button class="openCourse-class-yu">我要预约</button>
            </div>
        </div>
        <div class="openCourse-class-list row">
            <div class="col-md-4 openCourse-class-img">
                <img src="../../../../assets/university/openCourse-class.png" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="openCourse-class-name">AI公司商业化的关键</div>
                <div class="openCourse-class-honour">
                    <span><i class="iconfont icon-mn_gongneng"></i>戴剑</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>Level 1,2</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>2018-05-08  16:30   未开始</span>
                </div>
                <div class="openCourse-class-desc">1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验1V1顾问支持提供一站化体1V1顾问支持提供一站化体验1V1顾问支持提供一站化体验</div>
                <button class="openCourse-class-yu">我要预约</button>
            </div>
        </div>

    </div>
</div>
</template>
<script>
import '../openCourse/openCourse.css';
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
export default {
    name:'openCourse',
    data(){
        return {
            phoneBox:false
        }
    },
    methods:{
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
