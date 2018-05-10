<template>
<div class="bigcafeTeam total">
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
    <div class="seleconeMain-banners  row bigcafeTeam-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">云集国内数百位云专家</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">打造适合、实战、专业的云课程体系</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="bigcafeTeam-yu">预约大咖</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!--  -->
    <div class="container naver" id="title-small">            
        <div class="" style="width:100%!important">
            <div class="col-md-6 col-xs-6 bigcafeTeam-titles-left"><a href="#bigcafe-team" class="hoover-a"><i class="iconfont icon-mn_gongneng"></i> 大咖团队</a></div>
            <div class="col-md-6 col-xs-6 bigcafeTeam-titles-right"><a href="#bigcafe-desc" class="hoover-a"><i class="iconfont icon-shenpiliucheng"></i> 大咖介绍</a></div>
        </div>
    </div>
    <div class="bigcafeTeam-line"></div>
    <!-- 大咖团队 --> 
    <div class="container bigcafe-team" id="bigcafe-team">
        <div class="bigcafe-team-title">
            <span class="bigcafe-team-title-line"></span>
            <span class="bigcafe-team-title-desc">大咖团队</span>
        </div>
        <div class="bigcafe-team-specialty row ">
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople1.png" alt="">
                </div>
                <div class="bigcafe-specialty-world">大咖</div>
                <div class="bigcafe-specialty-desc">云计算、大数据、人工智能 <br> 和区块链等技术的翘楚</div>
            </div>
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople2.png" alt="">
                </div>
                <div class="bigcafe-specialty-world">资深</div>
                <div class="bigcafe-specialty-desc">相关领域实践工作经验平均超15年</div>
            </div>
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople3.png" alt="">
                </div>
                <div class="bigcafe-specialty-world">品牌</div>
                <div class="bigcafe-specialty-desc">均来自国际国内一流IT厂商</div>
            </div>
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople4.png" alt="">
                </div>
                <div class="bigcafe-specialty-world">VIP </div>
                <div class="bigcafe-specialty-desc">1V1服务，量身定制课程</div>
            </div>
        </div>
    </div>
    <!-- 大咖介绍-->
    <div class="container bigcafe-desc  bigcafe-team" id="bigcafe-desc">
        <div class="bigcafe-team-title">
            <span class="bigcafe-team-title-line"></span>
            <span class="bigcafe-team-title-desc">大咖介绍</span>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="bigcafe-desc-list">
                    <img src="../../../../assets/university/teampeople-desc2.png" alt="">
                    <div class="bigcafe-desc-name">戴剑</div>
                    <div class="bigcafe-desc-jobs">微吼直播优秀讲师</div>
                    <div class="bigcafe-desc-honour">创立《达摩云轩》社群，研究交流黑科技，关注ABC（AI,BlockChain,Cloud），组织沙龙，私董会，讲座，分享汇。</div>
                    <button class="bigcafe-desc-btn">我要预约</button>   
                </div>
            </div>
            <div class="col-md-4">
                <div class="bigcafe-desc-list">
                    <img src="../../../../assets/university/teampeople-desc2.png" alt="">
                    <div class="bigcafe-desc-name">戴剑</div>
                    <div class="bigcafe-desc-jobs">微吼直播优秀讲师</div>
                    <div class="bigcafe-desc-honour">创立《达摩云轩》社群，研究交流黑科技，关注ABC（AI,BlockChain,Cloud），组织沙龙，私董会，讲座，分享汇。</div>
                    <button class="bigcafe-desc-btn">我要预约</button>   
                </div>
            </div>
            <div class="col-md-4">
                <div class="bigcafe-desc-list">
                    <img src="../../../../assets/university/teampeople-desc2.png" alt="">
                    <div class="bigcafe-desc-name">戴剑</div>
                    <div class="bigcafe-desc-jobs">微吼直播优秀讲师</div>
                    <div class="bigcafe-desc-honour">创立《达摩云轩》社群，研究交流黑科技，关注ABC（AI,BlockChain,Cloud），组织沙龙，私董会，讲座，分享汇。</div>
                    <button class="bigcafe-desc-btn">我要预约</button>   
                </div>
            </div>
            <div class="col-md-4">
                <div class="bigcafe-desc-list">
                    <img src="../../../../assets/university/teampeople-desc2.png" alt="">
                    <div class="bigcafe-desc-name">戴剑</div>
                    <div class="bigcafe-desc-jobs">微吼直播优秀讲师</div>
                    <div class="bigcafe-desc-honour">创立《达摩云轩》社群，研究交流黑科技，关注ABC（AI,BlockChain,Cloud），组织沙龙，私董会，讲座，分享汇。</div>
                    <button class="bigcafe-desc-btn">我要预约</button>   
                </div>
            </div>
            <div class="col-md-4">
                <div class="bigcafe-desc-list">
                    <img src="../../../../assets/university/teampeople-desc2.png" alt="">
                    <div class="bigcafe-desc-name">戴剑</div>
                    <div class="bigcafe-desc-jobs">微吼直播优秀讲师</div>
                    <div class="bigcafe-desc-honour">创立《达摩云轩》社群，研究交流黑科技，关注ABC（AI,BlockChain,Cloud），组织沙龙，私董会，讲座，分享汇。</div>
                    <button class="bigcafe-desc-btn">我要预约</button>   
                </div>
            </div>
            <div class="col-md-4">
                <div class="bigcafe-desc-list">
                    <img src="../../../../assets/university/teampeople-desc2.png" alt="">
                    <div class="bigcafe-desc-name">戴剑</div>
                    <div class="bigcafe-desc-jobs">微吼直播优秀讲师</div>
                    <div class="bigcafe-desc-honour">创立《达摩云轩》社群，研究交流黑科技，关注ABC（AI,BlockChain,Cloud），组织沙龙，私董会，讲座，分享汇。</div>
                    <button class="bigcafe-desc-btn">我要预约</button>   
                </div>
            </div>
        </div>
    </div>
    <div style="background:#ededed;;width:100%;height:auto;">
        <div class="seleconeMain-footer row">
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
import '../bigcafeTeam/bigcafeTeam.css';
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
export default {
    name:'bigcafeTeam',
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

