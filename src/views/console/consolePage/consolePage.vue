<template>
<div class="consolePage" id="container">
    <header class="header white-bg">
        <div class="header-logo">
            <div class="sidebar-toggle-box">
                <div data-original-title="Toggle Navigation" data-placement="right" class="icon-reorder tooltips" style="color:#fff;"></div>
            </div>
            <!--logo start-->
            <a href="javascript:;" class="logo"><router-link to="/"><img src="../../../assets/logo1.png" alt=""></router-link></a>
        </div>
        <!-- 公告信息 -->
        <div class="notice">
            <p class="notice-img"><i class="iconfont icon-gonggao2"></i>公告信息：</p>
            <ul class="notice-list"><!-- style="letter-spacing: 0.1em;"-->
                <li><marquee direction="left">CSB²计划在春节前推出云实测服务<span class="notice-time"></span></marquee></li>
            </ul>
        </div>
         <!--用户信息-->
        <div class="top-nav ">
            <ul class="nav pull-right top-menu">
                <!--搜索框
                <li>
                    <input type="text" class="form-control search" placeholder="Search">
                </li>-->
                <!--用户账号及退出-->
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle user-hover" href="#">
                        <!--<img src="../../../assets/login-user.png" class="login-user" style="width:18px;" alt="">-->
                        <i class="iconfont icon-yonghu1"></i>
                        <!--<span class="username">-->{{username}}<!--</span>-->
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu extended logout">
                        <div class="log-arrow-up"></div>
                        <li><router-link to="/accountInformation"><i class="iconfont icon-zhanghaoguanli1"></i>账号信息</router-link></li>
                        <li><router-link to="/safeSetting"><i class="iconfont icon-17"></i>安全设置</router-link></li>
                        <li v-on:click="logout()"><a href="javascript:;"><i class="iconfont icon-tuichu1"></i>退出</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!--头部icon-->
        <div class="nav notify-row" id="top_menu" style="float:right;">
            <ul class="nav top-menu">
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle navli user-hover" id="xiaowei">
                        <i class="iconfont icon-kefu"></i>帮助台
                    </a>                    
                </li>
                <li id="header_inbox_bar" class="dropdown">
                    <el-popover
                    ref="popover2"
                    placement="bottom"
                    trigger="click" popper-class="notification_hover">
                        <div style="padding:60px 100px;">
                            <i class="iconfont icon-xinxi" style="color:#999;font-size:18px !important;"></i>
                            <div style="font-size:14px !important;color:#999;margin-top:5px;">暂无消息</div>
                        </div>                        
                    </el-popover>
                    <a data-toggle="dropdown" v-popover:popover2 class="dropdown-toggle navli user-hover" href="#">
                        <i class="iconfont icon-icon--" style="font-size:18px !important;"></i>通知中心
                    </a>                    
                </li>
                <!--<li id="header_notification_bar" class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <i class="icon-bell-alt"></i>在线咨询
                    </a>                    
                </li>-->
            </ul>
        </div>
       
    </header>
    <!--侧导航-->
    <aside>
        <div id="sidebar"  class="nav-collapse ">
            <!-- sidebar menu start-->
            <ul class="sidebar-menu">
                <li class="active" v-on:click="index()" style="border-bottom:none !important;">
                    <a class="" href="javascript:;">
                        <!--<i class="icon-dashboard"></i>-->
                        <img src="../../../assets/zong.png" alt="">
                        <span>总览</span>
                    </a>
                </li>
                <li class="sub-menu" v-if="utype!=3&&utype!=4">
                    <a href="javascript:;" class="">
                        <!--<i class="icon-book"></i>-->
                        <img src="../../../assets/fenxi.png" alt="">
                        <span>上云分析</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub">
                        <li v-on:click="planning()"><a href="javascript:;">云规划</a></li>
                        <li v-on:click="compare()"><a href="javascript:;">云选型</a></li>
                        <li v-on:click="measure()"><a href="javascript:;">云实测</a></li>
                    </ul>
                </li>
                <li class="sub-menu" v-on:click="datadcis()" v-if="utype!=3&&utype!=4">
                    <a href="javascript:;" class="">
                        <!--<i class="icon-book"></i>-->
                        <img src="../../../assets/shuju.png" alt="">
                        <span>数据分析</span>
                    </a>
                </li>
            </ul>
            <!-- sidebar menu end-->
        </div>
    </aside>
    <section id="main-content" style="min-height:100vh;background:#f3f3f3;">
        <section class="wrapper">
            <router-view></router-view>
        </section>
    </section>
</div>
</template>
<style>
    #xiaowei:hover{
        cursor:pointer
    }
</style>
<script>
import '../consolePage/consoleFrame.css'
import '../consolePage/style-responsive.css'
import '../consolePage/font-awesome/css/font-awesome.css'




export default{
    name:'consolePage',
    data(){
        return {
            username:'',
            utype:''
        }
    },
    mounted:function(){

        $("#xiaowei").click(function(){
            var that = this; 
                   
            var win = window.open("http://csb.cloude2u.com/#/wei","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
        });
        

        $('#sidebar .sub-menu > a').click(function () {
            var last = $('.sub-menu.open', $('#sidebar'));
            last.removeClass("open");
            $('.arrow', last).removeClass("open");
            $('.sub', last).slideUp(200);
            var sub = $(this).next();
            if (sub.is(":visible")) {
                $('.arrow', $(this)).removeClass("open");
                $(this).parent().removeClass("open");
                sub.slideUp(200);
            } else {
                $('.arrow', $(this)).addClass("open");
                $(this).parent().addClass("open");
                sub.slideDown(200);
            }
        });
        
        this.responsiveView();
        $(window).on('load', this.responsiveView());
        $(window).on('resize', this.responsiveView());
        $('.icon-reorder').click(function () {
            if ($('#sidebar > ul').is(":visible") === true) {
                $('#main-content').css({
                    'margin-left': '0px'
                });
                $('#sidebar').css({
                    'margin-left': '-180px'
                });
                $('#sidebar > ul').hide();
                $("#container").addClass("sidebar-closed");
            } else {
                $('#main-content').css({
                    'margin-left': '180px'
                });
                $('#sidebar > ul').show();
                $('#sidebar').css({
                    'margin-left': '0'
                });
                $("#container").removeClass("sidebar-closed");
            }
        });
        this.username = JSON.parse(sessionStorage.getItem("account")).realname;
        this.utype = sessionStorage.getItem("utype");
       // console.log(JSON.parse(sessionStorage.getItem("account")));
    },
    methods:{
        planning:function(){
            this.$router.push({path:'/planList'});
        },
        compare:function(){
            this.$router.push({path:'/compareList'});
        },
        measure:function(){
             this.$router.push({path:'/measured'});
        },
        responsiveView:function () {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }
            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        },
        index:function(){
            this.$router.push({path:'/consolePage'});
        },
        datadcis:function(){
            this.$router.push({path:'/dataDcision'});
        }
    }
}
</script>