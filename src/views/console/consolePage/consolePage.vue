<template>
<div class="consolePage " id="container">
    <header class="header white-bg not-print">
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
                <li><marquee direction="left">CSB²正式推出数据分析服务<span class="notice-time"></span></marquee></li>
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
                        <li><router-link to="/safeSetting"><i class="iconfont icon-anquan"></i>安全设置</router-link></li>
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
                        <i class="iconfont icon-kefu"></i><!--小微-->Prof. 吴
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
                        <i class="iconfont icon-icon--" style="font-size:18px !important;float: left;"></i>通知中心
                    </a>                    
                </li>
                <li id="header_notification_bar" class="dropdown" v-on:click="mycomment()">
                    <a data-toggle="dropdown" class="dropdown-toggle user-hover" href="#">
                        <i class="iconfont icon-dianping"></i>我的点评
                    </a>                    
                </li>
                <li id="header_notification_bar" class="dropdown" v-on:click="buycar()">
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

                        <li v-on:click="designer()"><a href="javascript:;">云设计</a></li> 

                        <!--<li v-on:click="design()"><a href="javascript:;">云设计</a></li>--> 
                        <li v-on:click="buycar()"><a href="javascript:;">云买手</a></li>

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
                  <li class="sub-menu" v-show="istrue">
                    <a href="javascript:;" class="">
                        <!--<i class="icon-book"></i>-->
                        <img src="../../../assets/y.png" alt="">
                        <span>运营支撑</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub">
                        <li v-on:click="zhic()"><a href="javascript:;">用户数据</a></li>
                        <li><a href="javascript:;">点评数据</a></li>
                        <li v-on:click="TheirAllies()"><a href="javascript:;">友盟数据</a></li>
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
    <el-dialog title="我的点评" :visible.sync="dialogcomment" style="text-align:left;">
        <div class="comment-box">
            <div class="comment-word">非常感谢您对CloudBroker²的关注，欢迎提出宝贵的意见和建议，我们将积极采纳，更好的改善我们的服务。</div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key">我的评分</div>
                    <div class="col-md-10" style="padding-left:0px !important;">
                        <span class="comment-star" :class="item.boolean==false?'star1':'star2'" v-for="(item,index) in starlist" v-on:click="selectstar(index)"></span>
                    </div>
                </div>
            </div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key">意见类型</div>
                    <div class="col-md-10" style="padding-left:0px !important;">
                        <button class="comment-type" :class="item.boolean==false?'comment-default':'comment-active'" v-for="(item,index) in commentlist" v-on:click="selectcomment(index)">{{item.data.name}}</button>
                    </div>
                </div>
            </div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key">意见内容</div>
                    <div class="col-md-10" style="padding-left:0px !important;">
                        <textarea class="comment-text" placeholder="欢迎将使用中遇到的问题反馈给我们" v-model="confirmobj.content"></textarea>
                    </div>
                </div>
            </div>
            <div class="comment-list">
                <div class="row">
                    <div class="col-md-2 comment-key">联系方式</div>
                    <div class="col-md-10 contactway" style="padding-left:0px !important;">{{contactway}}</div>
                </div>
            </div>            
            <div class="" style="padding:0 23px;">
                <div class="comment-notice">
                    温馨提示：<br>
                    1.反馈会在1-3个工作日与您联系（工作时间：周一至周五，9：00-18：00）<br>
                    2.产品使用中遇到的问题您可以联系<span>Prof. 吴</span><br>
                    3.紧急问题建议您拨打<span> 400-828-7308 </span>或发邮件到<span> Help@csb-china.com </span>
                </div>
            </div>
            <div class="email-btn">
                <button class="safe-save-btn" v-on:click="success()">保存</button>
                <button class="safe-cel-btn" v-on:click="undialog()">取 消</button>
            </div>   
        </div>         
    </el-dialog>
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




export default{
    name:'consolePage',
    data(){
        return {
            username:'',
            utype:'',

            istrue:false,
            dialogcomment:false,
            commentlist:[],
            starlist:[
                {id:1,boolean:true},
                {id:2,boolean:true},
                {id:3,boolean:true},
                {id:4,boolean:false},
                {id:5,boolean:false}
            ],
            contactway:'',
            confirmobj:{
                content:'',
                grade:'3',
                type:''
            }

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
                   
            var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
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

        if(this.utype==5){
            this.istrue = true
        }else if(this.utype!=5){
            this.istrue = false
        }

        this.getcomment();

       // console.log(JSON.parse(sessionStorage.getItem("account")));
    },
    methods:{
        getcomment:function(){            
            this.$this.get('/broker/prop/typedata/fb/-1').then((response)=>{
                //console.log('----',response);
                for(let i=0;i<response.data.data.length;i++){
                    this.commentlist.push({data:response.data.data[i],boolean:false});
                }
            }).catch((error)=>{
            })
        },
        mycomment:function(){
            this.dialogcomment = true;
        },
        selectcomment:function(index){
            for(let i=0;i<this.commentlist.length;i++){
                this.commentlist[i].boolean = false;
            }
            this.commentlist[index].boolean = true;
            this.confirmobj.type = this.commentlist[index].data;
        },
        selectstar:function(index){
            let n=0;
            if(this.starlist[index].boolean==true){
                for(let i=0;i<this.starlist.length;i++){
                    if(this.starlist[i].boolean==true){
                        n++;
                    }
                }
                if(index<n-1){
                    for(let j=index+1;j<this.starlist.length;j++){
                        this.starlist[j].boolean = false;
                    }
                }else{
                    this.starlist[index].boolean = false;
                }
                if(index==0){
                    this.starlist[index].boolean = true;
                }
            }else{
                if(index>0){
                    for(let i=0;i<this.starlist.length;i++){
                        if(i<=index){
                            this.starlist[i].boolean = true;
                        }
                    }
                }
            }
            this.confirmobj.grade = this.starlist[index].id;
        },
        undialog:function(){
            this.dialogcomment = false;
        },
        success:function(){
            //console.log(this.confirmobj);
            let obj = JSON.stringify(this.confirmobj);
            this.$this.post('/broker/feedback/add',obj).then((response)=>{
                //console.log('----',response);
            }).catch((error)=>{
            })
        },
        buycar:function(){
            this.$router.push({path:'/orderlist'});
        },
        planning:function(){
            this.$router.push({path:'/planList'});
        },
        compare:function(){
            this.$router.push({path:'/compareList'});
        },
        measure:function(){
             this.$router.push({path:'/measured'});
        },
        zhic:function(){
             this.$router.push({path:'/yunzc'});
        },
        designer:function(){
            this.$router.push({path:'/designer'});
        },
        TheirAllies:function(){
           this.$router.push({path:'/TheirAllies'});
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