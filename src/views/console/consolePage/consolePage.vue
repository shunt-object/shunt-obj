<template>
<div class="consolePage" id="container">
    <header class="header white-bg">
        <div class="sidebar-toggle-box">
            <div data-original-title="Toggle Navigation" data-placement="right" class="icon-reorder tooltips"></div>
        </div>
        <!--logo start-->
        <a href="#" class="logo">CSB<span></span></a>
        <!--头部icon-->
        <div class="nav notify-row" id="top_menu">
            <ul class="nav top-menu">
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <i class="icon-tasks"></i>
                    </a>
                </li>
                <li id="header_inbox_bar" class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <i class="icon-envelope-alt"></i>
                    </a>
                </li>
                <li id="header_notification_bar" class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <i class="icon-bell-alt"></i>
                    </a>
                </li>
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
    </header>
    <!--侧导航-->
    <aside>
        <div id="sidebar"  class="nav-collapse ">
            <!-- sidebar menu start-->
            <ul class="sidebar-menu">
                <li class="active">
                    <a class="" href="#">
                        <i class="icon-dashboard"></i>
                        <span><router-link to="/consolePage">总览</router-link></span>
                    </a>
                </li>
                <li class="sub-menu">
                    <a href="javascript:;" class="">
                        <i class="icon-book"></i>
                        <span>云分析</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub">
                        <li v-on:click="planning()"><a href="javascript:;">云规划</a></li>
                        <li v-on:click="compare()"><a href="javascript:;">云选型</a></li>
                    </ul>
                </li>
            </ul>
            <!-- sidebar menu end-->
        </div>
    </aside>
    <section id="main-content" style="background:#f0f0f0;">
        <section class="wrapper">
            <router-view></router-view>
        </section>
    </section>
</div>
</template>
<script>
import '../consolePage/consoleFrame.css'
import '../consolePage/style-responsive.css'
import '../consolePage/font-awesome/css/font-awesome.css'

export default{
    name:'consolePage',
    data(){
        return {
            username:''
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
       // console.log(JSON.parse(sessionStorage.getItem("account")));
    },
    methods:{
        planning:function(){
            this.$router.push({path:'/planList'});
        },
        compare:function(){
            this.$router.push({path:'/resetviewList'});
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
        }
    }
}
</script>