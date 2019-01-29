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
                    <li class="liMargin"><router-link to="/accountInformation"><i class="iconfont icon-icon-top-home"></i>首页</router-link></li>
                    <li class="liMargin"><router-link to="/"><i class="iconfont icon-icon-top-login"></i>登录</router-link></li>
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
import '../consolePage/font-awesome/css/font-awesome.css'

export default{
    name:'consolePage',
    data(){
        return {
            pageIndex:1,
            username:'王玉东',
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
        //端口组配置
        go_portGroup:function(){
            this.$router.push({path:"/portGroup/portGroupIndex"});
            $(".oneCurrent").click();
        },
        //系统配置
        go_system:function(){
            this.$router.push({path:"/system/list"});
        },
        go_Ruleconfig:function(){
            this.$router.push({path:"/consolePage/ruleConfig"})
        },
        go_port:function(){
            this.$router.push({path:"/consolePage/port"})
        },
        logout:function(){
            this.$router.push({path:"/"})
        },

        mycomment:function(){
            this.dialogcomment.boolean = true;
        },
        buycar:function(){
            this.$router.push({path:'/orderlist'});
            this.nocopy();
        },
        cart:function(){
            this.$router.push({path:'/shoppingCar'});
            this.nocopy();
        },
        planning:function(){
            this.$router.push({path:'/planList'});
            this.nocopy();
        },
        compare:function(){
            this.$router.push({path:'/compareList'});
            this.nocopy();
        },
        measure:function(){
             this.$router.push({path:'/measured'});
             this.nocopy();
        },
        zhic:function(){
             this.$router.push({path:'/yunzc'});
             this.nocopy();
        },
        designer:function(){
            this.$router.push({path:'/designer'});
            this.nocopy();
        },
        TheirAllies:function(){
           this.$router.push({path:'/TheirAllies'});
           this.nocopy();
        },
        university:function(){
            this.$router.push({path:'/adviserCenter'});
        },
        // responsiveView:function () {
        //     var wSize = $(window).width();
        //     if (wSize <= 768) {
        //         $('#container').addClass('sidebar-close');
        //         $('#sidebar > ul').hide();
        //     }
        //     if (wSize > 768) {
        //         $('#container').removeClass('sidebar-close');
        //         $('#sidebar > ul').show();
        //     }
        // },
        index:function(){
            this.$router.push({path:'/consolePage'});
            this.nocopy();
        },
        smarter:function(){
            this.$router.push({path:'/smarterDecision'});
            this.nocopy();
        },
        sus:function(){
            this.$router.push({path:'/susDecision'});
            this.nocopy();
        },
        ReviewTheData:function(){
            this.$router.push({path:'/ReviewTheData'});
            this.nocopy();
        },
          tongzhiCenter:function(){
             this.$router.push({path:'/notification'});
             this.nocopy();
        },
        roi:function(){
            this.$router.push({path:'/roiDecision'});
            this.nocopy();
        },
        messageCenter:function(){
             this.$router.push({path:'/messageCenter'});
             this.nocopy();
        },
        messageCenters:function(){
             this.$router.push({path:'/vis'});
             this.nocopy();
        },
        homepage:function(){
            this.$router.push({path:'/'});
            this.nocopy();
        },
        nocopy:function(){
            //禁止copy
            document.oncontextmenu=function(){return true};
            document.onselectstart=function(){return true};
        },
        appcenterList:function(){
            this.$router.push({path:'/appcenterList'});
        },
        adviserList:function(){
            this.$router.push({path:'/adviserList'});
        }
        
    }
}
</script>
