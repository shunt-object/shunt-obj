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
            <p class="notice-img"><img src="../../../assets/notice.png" alt="">公告信息：</p>
            <ul class="notice-list">
                <li> CSB²再出重磅服务:“智能机器人小易”<span class="notice-time"></span></li>
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
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="username">{{username}}</span>
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu extended logout">
                        <div class="log-arrow-up"></div>
                        <li v-on:click="logout()"><a href="javascript:;"><i class="icon-key"></i>退出</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!--头部icon-->
        <div class="nav notify-row" id="top_menu" style="float:right;">
            <ul class="nav top-menu">
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" id="xiaowei">
                        <i class="icon-tasks"></i>帮助中心
                    </a>                    
                </li>
                <li id="header_inbox_bar" class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <i class="icon-envelope-alt"></i>通知中心
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
                <li class="active" v-on:click="index()">
                    <a class="" href="javascript:;">
                        <!--<i class="icon-dashboard"></i>-->
                        <img src="../../../assets/zong.png" alt="">
                        <span>总览</span>
                    </a>
                </li>
                <li class="sub-menu" v-if="utype!=3||utype!=4">
                    <a href="javascript:;" class="">
                        <!--<i class="icon-book"></i>-->
                        <img src="../../../assets/fenxi.png" alt="">
                        <span>上云分析</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub">
                        <li v-on:click="planning()"><a href="javascript:;">云规划</a></li>
                        <li v-on:click="compare()"><a href="javascript:;">云选型</a></li>
                        <li><a href="javascript:;">云实测</a></li>
                    </ul>
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

$(document).ready(function(){ 
        $("#xiaowei").click(function(){
            window.open("http://xiaowei.io/chat/pc/index.html?appid=3311");
        });
        
}); 


export default{
    name:'consolePage',
    data(){
        return {
            username:'',
            utype:''
        }
    },
    mounted:function(){
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
        }
    }
}
</script>