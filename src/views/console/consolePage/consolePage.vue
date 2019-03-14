<template>
<div class="consolePage" id="container">
   <div id="mian" style="background:#f1f1f1;width:100%;min-height:100vh">
        <header class="header white-bg not-print">
            <div class="header-logo">
                <!--logo start-->
                <a href="javascript:;" class="logo"><img src="../../../assets/logo1.png" alt="" v-on:click="homepage()"></a>
            </div>
            
            <!--用户信息-->
            <div class="top-nav ">
                <ul class="nav pull-right top-menu">
                    <!--用户账号及退出-->
                    <li class="liMargin"><router-link to="/"><i class="iconfont icon-icon-top-home"></i>首页</router-link></li>
                    <li class="liMargin"><router-link to="/"><i class="iconfont icon-icon-top-login"></i>{{username}}</router-link></li>
                    <li v-on:click="logout()"><a href="javascript:;" style="padding:0!important"><i class="iconfont icon-icon-top-close"></i>关闭</a></li>
                </ul>
            </div>
        </header>
    <!--侧导航-->
        <aside>
            <div id="sidebar"  class="nav-collapse not-print">
                <!-- sidebar menu start-->
                    <ul class="sidebar-menu">
                        <li class="left_back" style="border-bottom:none !important;">
                            <a  href="javascript:;" style="text-align:right;margin-right:20px">
                                <i style="width:20px;display:inline-block;float:none!important" class="iconfont icon-icon-left-back"></i>
                                <!--<img src="../../../assets/zong.png" alt="">-->
                            </a>
                        </li>
                        <li class="sub-menu"  style="border-bottom:none !important;">
                            <a class="outhover" :class="pageIndex==1?'actives':''" href="javascript:;">
                                <i class="iconfont icon-icon-home"></i>
                                <span>首页</span>
                            </a>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;" :class="pageIndex==2?'actives':''"  class="outhover">
                                <i class="iconfont icon-icon-shebeixinxi"></i>
                                <span>设备信息</span>
                            </a>
                        </li>
                        <li class="sub-menu" @click="go_system()">
                            <a href="javascript:;" class="outhover" :class="pageIndex==3?'actives':''" >
                                <i class="iconfont icon-icon-xitongpeizhi"></i>
                                <span>系统配置</span>
                            </a>
                        </li>
                        <li class="sub-menu" @click="go_port()">
                            <a class="outhover" href="javascript:;" :class="pageIndex==4?'actives':''" >
                                <i class="iconfont icon-icon-duankoupeizhi"></i>
                                <span>端口配置</span>
                            </a>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;" @click="go_portGroup()" class="outhover" :class="pageIndex==5?'actives':''" >
                                 <i class="iconfont icon-icon-duankouzupeizhi"></i>
                                <span>端口组配置</span>
                            </a>
                        </li>
                        <li class="sub-menu" @click="go_Ruleconfig()">
                            <a href="javascript:;" class="outhover" :class="pageIndex==6?'actives':''" >
                                 <i class="iconfont icon-icon-guizepeizhi"></i>
                                <span>规则配置</span>
                            </a>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;" class="outhover" :class="pageIndex==7?'actives':''" >
                                <i class="iconfont icon-icon-yonghuguanli"></i>
                                <span>用户管理</span>
                            </a>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;" class="outhover" :class="pageIndex==8?'actives':''" >
                                 <i class="iconfont icon-icon-ruanjianshengji"></i>
                                <span>软件升级</span>
                            </a>
                        </li>
                        <li class="sub-menu">
                            <a href="javascript:;" class="outhover" :class="pageIndex==9?'actives':''" >
                                 <i class="iconfont icon-icon-caozuozhinan"></i>
                                <span>操作指南</span>
                            </a>
                        </li>
                    </ul> 
                <!-- sidebar menu end-->
            </div>
        </aside>
        <div style="height:68px;width:100%;background:#f1f1f1"></div>
        <section id="main-content">
            <section class="wrapper">
                    <router-view></router-view>
                </section>
        </section>
   </div>
  
</div>
</template>
<script>
import '../consolePage/consoleFrame.css'
import '../consolePage/style-responsive.css'
// import '../consolePage/font-awesome/css/font-awesome.css'

export default{
    name:'consolePage',
    data(){
        return {
            pageIndex:1,
            username:'',
            utype:'',

            istrue:false,
            dialogcomment:{
                boolean:false
            },
            noMsg:false,
            haveMsg:true,
            dates:[],
            redreg:false
            // hoverlist:[
            //     {name:'总览',boolean:true},
            //     {name:'云规划',boolean:true},
            //     {name:'云选型',boolean:true},
            //     {name:'云设计',boolean:true},
            //     {name:'云买手',boolean:true},
            //     {name:'云实测',boolean:true},
            //     {name:'数据分析',boolean:true},
            //     {name:'数据分析',boolean:true},
            //     {name:'数据分析',boolean:true},
            // ]

        }
    },
    mounted:function(){
        this.username = JSON.parse(sessionStorage.getItem("nxgx")).userName;  //获取用户名
         switch(this.$route.name){
              case "port":
                 this.pageIndex = 4   
              break;
              case "portInto":
              this.pageIndex = 4;
              break;
              case "ruleConfig":
                 this.pageIndex = 6   
              break;
          }
        
        console.log(this.$route.name)
        $('#sidebar .sub-menu > a').click(function () {
            // var last = $('.sub-menu.open', $('#sidebar'));
            // last.removeClass("open");
            // $('.arrow', last).removeClass("open");
            // $('.sub', last).slideUp(200);
            // var sub = $(this).next();
            // if (sub.is(":visible")) {
            //     $('.arrow', $(this)).removeClass("open");
            //     $(this).parent().removeClass("open");
            //     sub.slideUp(200);
            // } else {
            //     $('.arrow', $(this)).addClass("open");
            //     $(this).parent().addClass("open");
            //     sub.slideDown(200);
            // }
            $('#sidebar .sub-menu > a').removeClass("actives");
            $(this).addClass("actives");
        });
        // this.responsiveView();
        // $(window).on('load', this.responsiveView());
        // $(window).on('resize', this.responsiveView());
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
        var backIndex = 0;
        $(".left_back a>i").click(function(){
          if(backIndex!=0){
              $('.sub-menu a>span').show();
              $("#sidebar").css("width","180px");
              backIndex = 0;
              $(this).removeClass("icon-icon-left-open");
              $(this).addClass('icon-icon-left-back');
             $('#main-content').css({
                    'margin-left': '200px'
             });
             $(".outhover").css("padding-bottom",'15px')
          }else{
              $('.sub-menu a>span').hide();
              $("#sidebar").css("width","55px")
              $('#main-content').css({
                    'margin-left': '75px'
             });
             $(".outhover").css("padding-bottom",'35px')
              backIndex = 1;
              $(this).removeClass("icon-icon-left-back");
              $(this).addClass('icon-icon-left-open');
         }
        })

    },
    created:function(){

    },

    methods:{
        // prevStop:function(e){
        //     if (e && e.preventDefault){
        //          e.preventDefault();
        //     }else{
        //         window.event.returnValue = false; //兼容IE
        //     }
        // },
        // leftBack:function(e){
        //      prevStop(e);   
        // },
<<<<<<< HEAD

        //关闭
        logout:function(){
            this.closeOrexit();
=======
        //端口组配置
        go_portGroup:function(){
            this.$router.push({path:"/portGroup/portGroupIndex"});
            $(".oneCurrent").click();
        },
        //系统配置
        go_system:function(){
            this.$router.push({path:"/system/list"});
>>>>>>> 51065608a9fd12670a7077f66f3d032a5a803bf9
        },
        go_Ruleconfig:function(){
            this.$router.push({path:"/consolePage/ruleConfig"})
        },
        go_port:function(){
            this.$router.push({path:"/consolePage/port"})
        },
        nocopy:function(){
            //禁止copy
            document.oncontextmenu=function(){return true};
            document.onselectstart=function(){return true};
        },
    }
}
</script>
