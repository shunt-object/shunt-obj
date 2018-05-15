<template>
<div class="consolePage" id="container">
    <header class="header white-bg not-print">
        <div class="header-logo">
            <div class="sidebar-toggle-box">
                <div data-original-title="Toggle Navigation" data-placement="right" class="icon-reorder tooltips" style="color:#fff;"></div>
            </div>
            <!--logo start-->
            <a href="javascript:;" class="logo"><img src="../../../assets/logo1.png" alt="" v-on:click="homepage()"></a>
        </div>
        <!-- 公告信息 -->
       <!-- <div class="notice">
            <p class="notice-img"><i class="iconfont icon-gonggao2"></i>公告信息：</p>
            <ul class="notice-list"><!-- style="letter-spacing: 0.1em;"
                <li><marquee direction="left">CSB²正式推出价格优选功能<span class="notice-time"></span></marquee></li>
            </ul>
        </div>-->
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
                        <li><router-link to="/safeSetting"><i class="iconfont icon-anquan"></i>安全设置</router-link></li>
                        <li v-on:click="logout()"><a href="javascript:;"><i class="iconfont icon-tuichu1"></i>退出</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!--头部icon-->
        <div class="nav notify-row" id="top_menu" style="float:right;">
            <ul class="nav top-menu">
                <li class="dropdown" v-on:click="university()">
                    <a data-toggle="dropdown" class="dropdown-toggle navli user-hover">
                        <i class="iconfont icon-daka1"></i>智识学院
                    </a>
                </li>
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle navli user-hover" id="xiaowei">
                        <i class="iconfont icon-kefu"></i><!--小微-->Prof. 吴
                    </a>
                </li>
                <li id="header_inbox_bar" class="dropdown idicon">
                   <el-popover
                    ref="popover2"
                    placement="bottom"
                    trigger="hover" popper-class="notification_hover">
                        <div v-show="noMsg" style="padding:120px 200px;">
                            <i class="iconfont icon-xinxi" style="color:#999;font-size:18px !important;"></i>
                            <div style="font-size:14px !important;color:#999;margin-top:5px;">暂无消息</div>
                        </div>
                        <div style="padding:20px 20px;" v-show="haveMsg">
                            <div>
                                <div class="lilister" v-for="date in dates">
                                    <p class="psp"><span class="listspan"><i class="iconfont icon-tishi" style="color:#f7a72c;font-size:14px"></i>【{{date.typeName}}】</span><span class="listspan2">{{date.update_time}}</span></p>
                                    <p class="plp">{{date.content}}</p>
                                </div>
                            </div>
                            <div class="kongMsg"></div>
                            <div class="lookmangMsg" v-on:click="tongzhiCenter()" >查看全部消息</div>
                        </div>
                    </el-popover>
                    <a class="dropdown-toggle navli user-hover" v-on:click="tongzhiCenter()"  data-toggle="dropdown"  v-popover:popover2 >
                        <i class="iconfont icon-icon-- " style="font-size:18px !important;float: left;"></i>消息中心<span class="Redreg" v-show="redreg"></span>
                    </a>
                </li>
                <li id="header_notification_bar" class="dropdown" v-on:click="mycomment()">
                    <a data-toggle="dropdown" class="dropdown-toggle user-hover" href="#">
                        <i class="iconfont icon-dianping"></i>意见反馈
                    </a>
                </li>
                <li id="header_notification_bar" class="dropdown" v-on:click="appcenterList()">
                    <a data-toggle="dropdown" class="dropdown-toggle user-hover" href="#">
                        <i class="iconfont icon-yingyong01" style="font-size:13px"></i>应用市场
                    </a>
                </li>
                <li id="header_notification_bar" class="dropdown" v-on:click="cart()">
                    <a data-toggle="dropdown" class="dropdown-toggle user-hover" href="#">
                        <i class="iconfont icon-gouwuche"></i>购物车
                    </a>
                </li>
            </ul>
        </div>

    </header>
    <!--侧导航-->
    <aside>
        <div id="sidebar"  class="nav-collapse not-print">
            <!-- sidebar menu start-->
            <ul class="sidebar-menu">
                <li class="active" v-on:click="index()" style="border-bottom:none !important;">
                    <a class="outhover" href="javascript:;">
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

                        <li v-on:click="designer()"><a href="javascript:;">云设计</a></li>

                        <!--<li v-on:click="design()"><a href="javascript:;">云设计</a></li>-->
                        <li v-on:click="buycar()"><a href="javascript:;">云买手</a></li>

                        <li v-on:click="measure()"><a href="javascript:;">云实测</a></li>
                    </ul>
                </li>
                <li class="sub-menu" v-if="utype!=3&&utype!=4">
                    <a href="javascript:;" class="">
                        <!--<i class="icon-book"></i>-->
                        <img src="../../../assets/shuju.png" alt="">
                        <span>Prof. 吴数据</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub">
                        <li v-on:click="smarter()"><a href="javascript:;">智慧分析</a></li>
                        <li v-on:click="roi()"><a href="javascript:;">预算分析</a></li>
                        <li v-on:click="sus()"><a href="javascript:;">数据洞察</a></li>
                    </ul>
                </li>
                <!--<li class="sub-menu" v-if="utype!=3&&utype!=4" v-on:click="appcenterList()">
                    <a class="outhover" href="javascript:;">
                        <img src="../../../assets/appcenter.png" class="sub-bigimg" alt="">
                        <span>应用市场</span>
                    </a>
                </li>-->
                  <li class="sub-menu" v-show="istrue">
                    <a href="javascript:;" class="">
                        <!--<i class="icon-book"></i>-->
                        <img src="../../../assets/y.png" class="sub-bigimg" alt="">
                        <span>运营支撑</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub">
                        <li v-on:click="zhic()"><a href="javascript:;">用户数据</a></li>
                        <li v-on:click="ReviewTheData()"><a href="javascript:;">意见反馈</a></li>
                        <li v-on:click="TheirAllies()"><a href="javascript:;">友盟数据</a></li>
                        <li v-on:click="messageCenter()"><a href="javascript:;">消息中心</a></li>
                         <li v-on:click="messageCenters()"><a href="javascript:;">用户行为</a></li>
                        <li v-on:click="adviserList()"><a href="javascript:;">加盟顾问</a></li>
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
    <!-- 弹框 -->
    <feedback :feedback="dialogcomment"></feedback>
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
import '../consolePage/consolePage.css'
import feedback from '../consolePage/feedback.vue'




export default{
    name:'consolePage',
    data(){
        return {
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
        if(JSON.parse(sessionStorage.getItem("account")).email==null){
            this.contactway = JSON.parse(sessionStorage.getItem("account")).phone;
        }else{
            this.contactway = JSON.parse(sessionStorage.getItem("account")).email;
        }
        $("#xiaowei").click(function(){
             var that = this;
              //var win = window.open("#/CustomerService");
            var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
           //var win = window.open("#/CustomerService","_blank","height=600,width=500","toolbar=yes, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes");

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
        console.log('-------',JSON.parse(sessionStorage.getItem("account")).realname);
        this.utype = sessionStorage.getItem("utype");

        if(this.utype==5){
            this.istrue = true
        }else if(this.utype!=5){
            this.istrue = false
        }

       this.getHttpMsgCenter();
    },
    created:function(){
        var that = this;
        setInterval( function(){that.getHttpUseResour()},300000);


    },

    methods:{
        getHttpUseResour:function(){  //使用resourse请求消息中心   每过五分钟刷新一次
            var a = {
            "pageReq": {
                        "order": null,
                        "page": 0,
                        "size": 3,
                        "sort": null
                    }
            }
            this.$http.post('/broker/content/user/get/content',a).then((response)=>{ 
                    this.dates = response.data.data.content;
                    this.totalPages = response.data.data.totalElements;
                    if(this.totalPages ==0){
                        this.noMsg= true;
                        this.haveMsg =false;
                    }else{
                        this.haveMsg=true;
                        this.noMsg = false;
                    }
            },(err)=>{
                    console.log("不好意思")
            })
        },
        getHttpMsgCenter:function(){
           var a = {
            "pageReq": {
                        "order": null,
                        "page": 0,
                        "size": 3,
                        "sort": null
                    }
            }
         
            this.$this.post('/broker/content/user/get/content',a).then((response)=>{  //获取所有的信息内容
                            this.dates = response.data.data.content;
                            this.totalPages = response.data.data.totalElements;
                        if(this.totalPages ==0){
                            this.noMsg= true;
                            this.haveMsg =false;
                        }else{
                            this.haveMsg=true;
                            this.noMsg = false;
                        }
                    //console.log(this.dates)
                }).catch((error)=>{
            });
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
            this.$router.push({path:'/adviser'});
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
    },
    components:{
        feedback
    }
}
</script>
