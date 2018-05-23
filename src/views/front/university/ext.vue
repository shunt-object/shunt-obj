<template>
<div class="openCourse">
    <!-- 悬浮框 -->
    <fixedbox></fixedbox>
    <!-- banner -->
    <div class="seleconeMain-banners  row openCourse-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">智识学院</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">为您开始五彩缤纷的云世界</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="openCourse-yu" v-on:click="yueclasss()">预约课程</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!-- 副导航 -->
    <div class="smallnav" id="title-small" :class="isfixed==true?'titlesfixed':'container'">            
        <div class="" style="width:100%!important">
            <div class="col-md-4 col-xs-4 ">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('.lia')"><i class="iconfont icon-yunjisuan"></i> 云计算技术及行业应用</a>
            </div>
            <div class="col-md-4 col-xs-4 ">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('.lie')"><i class="iconfont icon-rongqi"></i> 容器化简介及运维实践</a>
            </div>
            <div class="col-md-4 col-xs-4 ">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('.liy')"><i class="iconfont icon-devops--"></i> DevOps简介及运维实战</a>
            </div>
        </div>
    </div>
    <div class="openCourse-line"></div>
    <!-- 公开课程大纲  -->
    <div class="container openCourse-outline lia" id="openCourse-outline">
        <div class="openCourse-outline-title">
            <span class="openCourse-outline-title-line"></span>
            <span class="openCourse-outline-title-desc">云计算技术及行业应用</span>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/class-icon/Group 4.png" alt="">
                    <div class="openCourse-outline-desc">
                       信息通信产业发展</br>的背景和趋势
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/university/openCourse-outline2.png" alt="">
                    <div class="openCourse-outline-desc">云计算技术及行业应用</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/university/openCourse-outline3.png" alt="">
                    <div class="openCourse-outline-desc">企业迁云的方法论</div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="container openCourse-outline lie" id="openCourse-outline">
        <div class="openCourse-outline-title">
            <span class="openCourse-outline-title-line"></span>
            <span class="openCourse-outline-title-desc">容器化简介及运维实践</span>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/class-icon/Group 21.png" alt="">
                    <div class="openCourse-outline-desc">
                        Docker简介
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/class-icon/Group 22.png" alt="">
                    <div class="openCourse-outline-desc">Docker相关概念与技术</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/class-icon/Group 23.png" alt="">
                    <div class="openCourse-outline-desc">Docker运维实践</div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="container openCourse-outline liy" id="openCourse-outline">
        <div class="openCourse-outline-title">
            <span class="openCourse-outline-title-line"></span>
            <span class="openCourse-outline-title-desc">DevOps简介及运维实战</span>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/class-icon/Group 24.png" alt="">
                    <div class="openCourse-outline-desc">
                       DevOps平台基础功能
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/class-icon/Group 15.png" alt="">
                    <div class="openCourse-outline-desc">CI和CD流程</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../src/assets/class-icon/Group 25.png" alt="">
                    <div class="openCourse-outline-desc">项目分组和权限管理</div>
                </div>
            </div>
            
        </div>
    </div>
    <div style="background:#ededed;;width:100%;height:auto;">
        <div class="seleconeMain-footer">
            <div class="container text-left" style="width:60%;padding-left:cd30px;">
                    <div class="col-md-3 col-xs-12" style="margin-top:27px;margin-bottom:20px;"><img src="../../../../src/assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                    <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../../src/assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                    <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../../src/assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                    <div class="col-md-3 col-xs-12 juright" style="margin-top:27px;margin-bottom:20px;padding-right:40px !important;"><img src="../../../../src/assets/90fuwu.png" alt="" style="width:22%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
            </div>
        </div>
    </div>
    <finish></finish>
    
   
</div>
</template>
<script>
import '../university/openCourse/openCourse.css';
import start from '../../../../src/components/SecondaryPages/SecondaryPages';
import finish from '../../../../src/components/SecondaryPages/SecondaryFooter.vue';
import fixedbox from '../../../../src/components/SecondaryPages/protalFixed.vue';
export default {
    name:'ext',
    data(){
        return {
            phoneBox:false,
            isfixed:false
            }
        },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        if(JSON.parse(sessionStorage.getItem("account"))){
            this.islogin = true;
        }else{
            this.islogin = false;
        }
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
        }
    },
    components:{
        start,
        finish,
        fixedbox
    },
}
</script>
