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
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="classProcess-yu">预约大咖</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!-- 副导航 -->
    <div class="smallnav" id="title-small" :class="isfixed==true?'titlesfixed':'container'">            
        <div class="" style="width:100%!important">
            <div class="col-md-6 col-xs-6 classProcess-titles-left">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#bigcafe-team')"><i class="iconfont icon-mn_gongneng"></i> 参加培训设备要求</a>
            </div>
            <div class="col-md-6 col-xs-6 classProcess-titles-right">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#bigcafe-desc')"><i class="iconfont icon-shenpiliucheng"></i> 预约流程</a>
            </div>
        </div>
    </div>
    <div class="classProcess-line"></div>
    <!-- 参加培训设备要求 -->
    <div class="classProcess-demand container">
        <div class="classProcess-demand-title">
            <span class="classDemand-title-line"></span>
            <span class="classDemand-title-desc">参加培训设备要求</span>
        </div>
        <div class="row">
            <div class="col-md-3">
                <!-- <img src="" alt=""> -->
            </div>
        </div>
    </div>
    <!--  -->
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
        // let readytop = $(window).scrollTop();
        // let _top = $(".smallnav").offset().top;
        // let that = this;
        // if(readytop>=_top){
        //     this.isfixed = true;
        // }else{
        //     this.isfixed = false;
        // }
        // $(window).scroll(function(){
        //     if($(this).scrollTop()>=_top){
        //         that.isfixed = true;
        //     }else{
        //         that.isfixed = false;
        //     }
        //     //console.log('----',$(this).scrollTop());
        //  })
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

