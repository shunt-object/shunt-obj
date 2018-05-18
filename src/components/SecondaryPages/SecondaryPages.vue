<template>
  <div>
    <nav class="navbar navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar" style="background:#f6f6f6"></span>
            <span class="icon-bar" style="background:#f6f6f6"></span>
            <span class="icon-bar" style="background:#f6f6f6"></span>
      		</button>
          <a class="navbar-brand page-scroll" href="#page-top" @click="homePager()"><img src="../../assets/logo.png" alt="Lattes theme logo" class="Imgs "></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav cl">
            <li style=" padding-bottom:5px" @click="homePager()"><a class="page-scroll   hovers" :class="active=='0'?'border_active':''">首页</a></li>
            <li class="dropdown">
               <!--<a class="page-scroll animated fadeInDown alist hovers" href="javascript:;">产品功能</a>-->
               <!-- <div class="dropdown-content">
                    <a style="color:#000 !important;" @click="cloundPlan">云规划</a>
                    <a style="color:#000 !important;" @click="cloundPlen">云选型</a>
                    <a style="color:#000 !important;" >云实测</a>
                </div>-->    
            </li>
            <li><a class="page-scroll  hovers" :class="active=='1'?'border_active':''">
                        <el-dropdown placement="bottom">
                                <span class="el-dropdown-link " style="outline:none">
                                    产品与服务
                                </span>
                                <el-dropdown-menu slot="dropdown"  class="dropCsb">
                                    <el-dropdown-item class="text-left ">
                                        <div style="width:48%;border-bottom:1px solid #2C313C;color:#D5D5D5">上云咨询</div>
                                        <div class="row">
                                            <span @click="cloundPlan" class="col-md-1 gms">云规划</span>
                                            <span @click="cloundPlen" class="col-md-1 gms">云选型</span>
                                            <span @click="cloundplysn" class="col-md-1 gms">云设计</span>
                                            <span @click="cloundPlsn" class="col-md-1 gms">云实测</span>
                                            <span @click="cloundPlbn" class="col-md-1 gms">云购买</span>
                                        </div>
                                    </el-dropdown-item>
                                    <el-dropdown-item class="text-left" style="margin-top:20px">
                                        <div style="width:48%;border-bottom:1px solid #2C313C;color:#D5D5D5">数据分析</div>
                                        <div class="row"><span class="col-md-1 gms" @click="cloundPlin">Prof. 吴数据</span></div>
                                    </el-dropdown-item>
                                    <el-dropdown-item class="text-left" style="margin-top:20px">
                                        <div style="width:48%;border-bottom:1px solid #2C313C;color:#D5D5D5">技术与服务</div>
                                        <div class="row"><span class="col-md-1 gms" @click="cloundPlon">技术与服务</span></div>
                                    </el-dropdown-item>
                                    <el-dropdown-item class="text-left" style="margin-top:20px">
                                        <div style="width:48%;border-bottom:1px solid #2C313C;color:#D5D5D5">智识学院 <span><img src="../../assets/er-icon/beat.png" alt="" style="width:7%;margin-top:-10px !important"></span></div>
                                        <div class="row">
                                            <span class="col-md-1 gms " @click="yundaka">大咖团队</span> 
                                            <span class="col-md-1 gms " @click="liuch">上课流程</span>
                                            <span class="col-md-1 gms " style="margin-right:10px !important;" @click="gkk">公开课程</span>
                                        </div>
                                    </el-dropdown-item>
                                    <el-dropdown-item class="text-left" style="margin-top:20px">
                                        <div style="width:48%;border-bottom:1px solid #2C313C;color:#D5D5D5">应用市场 <span><img src="../../assets/homepage/new.png" alt="" style="width:7%;margin-top:-10px !important"></span></div>
                                        <div class="row">
                                            <span class="col-md-1 gms " @click="yunjia">云价格计算器</span> 
                                            <span class="col-md-1 gms " @click="yunjia">云实例快搜器</span>
                                            <span class="col-md-1 gms " style="margin-right:10px !important;" @click="yunjia">云代理查询助手</span>
                                            <span class="col-md-1 gms " @click="yunjia">云匹配度分析器</span> 
                                            <span class=" gms text-left" style="margin-left:10px;" @click="yunjia">预算收益分析助手</span> 
                                             <span class=" gms " style="margin-left:10px;" @click="yunjia">云眼查</span>
                                        </div>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                         </el-dropdown>
            </a></li>
            <li><a class="page-scroll  hovers" :class="active=='2'?'border_active':''">
                    <el-dropdown placement="bottom">
                                <span class="el-dropdown-link" style="outline:none">
                                    生态
                                </span>
                                <el-dropdown-menu slot="dropdown"  class="dropCsbs">
                                    <el-dropdown-item >
                                        <p class="row text-center" >
                                            <span @click="cloundPlvn" class="col-md-6">招募顾问</span>
                                            <span @click="cloundPlkn" class="col-md-6">合作伙伴</span>
                                        </p>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                         </el-dropdown>
            </a></li>
            <li class="lihovzan"><a class="page-scroll  hovers" :class="active=='3'?'border_active':''">
                       <el-dropdown placement="bottom">
                                <span class="el-dropdown-link" style="outline:none">
                                    动态
                                </span>
                                <el-dropdown-menu slot="dropdown"  class="dropCsbse">
                                    <el-dropdown-item >
                                        <p class="row text-center"> 
                                            <span @click="cloundPlqn" class="col-md-4">新闻动态</span>
                                            <span @click="cloundPlfn" class="col-md-4">行业头条</span>
                                            <span @click="cloundPlgn" class="col-md-4">CSB²社群</span>
                                        </p>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                         </el-dropdown>              
            </a></li>
            <li class="lihovzan">
                <a class="page-scroll  hovers" :class="active=='4'?'border_active':''">
                    <el-dropdown placement="bottom">
                        <span class="el-dropdown-link" style="outline:none">
                            智识学院
                        </span>
                        <el-dropdown-menu slot="dropdown"  class="dropCsbse">
                            <el-dropdown-item >
                                <p class="row text-center"> 
                                    <span v-on:click="university('1')" class="col-md-4">大咖团队</span>
                                    <span v-on:click="university('2')" class="col-md-4">上课流程</span>
                                    <span v-on:click="university('3')" class="col-md-4">公开课程</span>
                                </p>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>              
                </a>
            </li>
            <li><a class="page-scroll  hovers" @click="yyshic" :class="active=='5'?'border_active':''">应用市场</a></li>
            <!--<li><a class="page-scroll animated bounceIn hovers" href="javascript:;">帮助</a></li>-->
            <li><a class="page-scroll  hovers" @click="listwer" :class="active=='6'?'border_active':''">关于我们</a></li>
            <li><a class="page-scroll  hovers" v-on:click="condole" :class="active=='7'?'border_active':''">控制台</a></li>
          </ul>
          <div class="navbar-right clearfix">
            <ul class="nav navbar-nav " id="navright">
              <li class="liHoverxg"><span class="log" v-if="islogin==false" v-on:click="loGog">登录</span></li>
              <li class="liHoverxgs"><span class="resc" v-if="islogin==false" v-on:click="reset">注册</span></li>


               <li v-if="islogin==true" class="logout-box" >
                <span v-on:click="asd" class="olsty">{{realname}}<i class="realname-san"></i></span>
                <p class="logout-ul" v-show="logoutlist" style="width:120px">
                    <ol class="olers" style="padding-left:0 !important">
                        <li style="cursor:pointer;font-size:12px;text-align:center"><router-link to="/accountInformation">&nbsp&nbsp&nbsp&nbsp<a style="width:80px;text-align:left;display:inline-block;color:#000 !important;"><i class="iconfont icon-zhanghaoguanli1"></i>&nbsp账号信息</a></router-link></li>
                        <li style="cursor:pointer;font-size:12px;"><router-link to="/safeSetting">&nbsp&nbsp&nbsp&nbsp<a style="width:80px;text-align:left;display:inline-block;color:#000 !important;"><i class="iconfont icon-anquan"></i>&nbsp安全设置</a></router-link></li>
                        <li v-on:click="fn()" style="cursor:pointer;font-size:12px;" >&nbsp&nbsp&nbsp&nbsp<a style="width:80px;text-align:left;display:inline-block;color:#000 !important;"><i class="iconfont icon-tuichu1"></i>&nbsp退出</a></li>
                    </ol>
                </p>
         
              </li>
            </ul>
          </div>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>  
</div>
</template>
<script>
$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('.navbar').css("background","#1D1E20")
    }else if($(this).scrollTop() < 50){
        $('.navbar').css("background","none")
    }
    if($(this).scrollTop() > 50){
        $('.navbar').css("display","block")
    }else if($(this).scrollTop() < 50){
        $('.navbar').css("display","block")
    }
});
export default { 
    props:["active"],  
    data() {
      return {
        islogin: false,
        realname: '',
        phoneBox:false,
        logoutlist:false
      }
    },
    mounted: function() {
        let readytop = $(window).scrollTop();
        if(readytop>50){
            $('.navbar').css("background","#1D1E20");
        }else if($(this).scrollTop() < 50){
            $('.navbar').css("background","none")
        }
                         $(".fixshow a").hover(function(){
                                $(this).find("i").css("color","#da121a")
                        },function(){
                                $(this).find("i").css("color","#c2c2c2")
                        });
                         $(".hoover-a").hover(function(){
                                $(this).children().css("color","#da121a")
                        },function(){
                                $(this).find("i").css("color","#c2c2c2")
                        })
        if (sessionStorage.getItem("account") == null || sessionStorage.getItem("account") == '') {
          this.islogin = false;
        } else {
          this.islogin = true;
          this.realname = JSON.parse(sessionStorage.getItem("account")).realname;
        };
     
          
    },
    methods: {
        university:function(id){
            //id==1 大咖团队  id==2上课流程 id==3公开课程
            if(id==1){
                this.$router.push({path: '/bigcafeTeam'});
            }else if(id==2){
                this.$router.push({path: '/classProcess'});
            }else{
                this.$router.push({path: '/openCourse'});
            }
        },
        
        PlanLj:function(){
             this.$router.push({path: '/registerOne'});
        },
        asd:function(){
            this.logoutlist==true?this.logoutlist=false:this.logoutlist=true;
        },
      fn: function() {
        this.logout();
        this.islogin = false;
      },
      gkk:function(){
        this.$router.push({path: '/openCourse'});
      },
      liuch:function(){
         this.$router.push({path: '/classProcess'});
      },
      yundaka:function(){
         this.$router.push({path: '/bigcafeTeam'});
      },
      loGog: function() {
        this.$router.push({path: '/login'});
      },
      phoneEnter:function(){
          this.phoneBox = true;
      },
      phoneleave:function(){
          this.phoneBox = false;
      },
      condole: function() {
          this.$router.push({path: '/consolePage'});
      },
      reset: function() {
        this.$router.push({path: '/registerOne'})
      },
      cloundPlan:function(){
           this.$router.push({path: '/cloudplanning'})
      },
      cloundPlen:function(){
          this.$router.push({path: '/cloudselection'})
      },
      homePager:function(){
           this.$router.push({path: '/'})
      },
      cloundPlsn:function(){
           this.$router.push({path: '/cloudmeasured'})
      },
      listwer:function(){
           this.$router.push({path: '/aboutus'})
      },
      cloundplysn:function(){
          this.$router.push({path: '/clouddesignning'})
      },
      cloundPlin:function(){
          this.$router.push({path: '/wudata'})
      },
      cloundPlon:function(){
            this.$router.push({path: '/technologyandservices'})
      },
      cloundPlbn:function(){
            this.$router.push({path: '/cloudbuying'})
      },
      cloundPlvn:function(){
          this.$router.push({path: '/recruitmentconsultant'})
      },
      cloundPlgn:function(){
        this.$router.push({path: "/csbcommunity"})
      },
      cloundPlfn:function(){
          this.$router.push({path: "/industryheadlines"})
      },
      cloundPlqn:function(){
           this.$router.push({path: "/newsdynamic"})
      },
      cloundPlkn:function(){
          this.$router.push({path: "/partners"})
      },
      yunjia:function(){
         this.$router.push({path: "/cloudmarket"}) 
      },
      yunshili:function(){
          this.$router.push({path:"/appcenterSearch"})
      },
      yunproxy:function(){
          this.$router.push({path:"/appcenterProxy"})
      },
      yunpei:function(){
           this.$router.push({path:"/appcenterCheck"})
      },
      yusuan:function(){
           this.$router.push({path:"/appcenterRoi"})
      },
      yyshic:function(){
          this.$router.push({path:"/cloudmarket"})
      }
    
    }
  }


</script>

<style>
.dropCsb{
    width:100%;
    top:60px !important;
    background:#161b25 !important;
    border-color:#161b25 !important;
    /*text-align:center !important;*/
    opacity:0.9;
       max-width: 1090px;
    
}
.dropCsbs{
    width:30%;
    top:60px !important;
    background:#161b25 !important;
    border-color:#161b25 !important;
    /*text-align:center !important;*/
    opacity:0.9;
       max-width: 1090px;
    
}
.dropCsbse{
    width:30%;
    top:60px !important;
    background:#161b25 !important;
    border-color:#161b25 !important;
    /*text-align:center !important;*/
     opacity:0.9;
       max-width: 1090px;
    
}
.gms{
    color:#A8A8A8;
    font-size:12px;
}
.el-dropdown-menu{
    
}
.el-dropdown-menu__item{
     font-size:14px;
    color:#f5f5f5 !important;
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
   
   
    background:none !important;
}
.el-dropdown-menu__item:not(.is-disabled) span:hover{
    /* border-bottom:1px solid #da121a !important;*/
     color:#FF3A42;
     /*padding-bottom:10px;*/
}
.popper__arrow{
    display:none !important;
}
.el-popper .popper__arrow, .el-popper .popper__arrow:after{
    display:none !important;
}
.el-popper .popper__arrow{
   display:none !important;
}
.liHoverxg span:hover{
    background:#fff;
    color:#da121a;
}
.liHoverxgs span:hover{
     background:#fff;
    color:#da121a;
    border:1px #fff solid;
}
.olers li:hover{
    background:#F5F7FA !important
}
.border_active{
    border-bottom:1px solid #da121a;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.navbar-nav{
    margin:0 0 0 0 !important; 
}
.dropdown-content {
    display: block;
    position: absolute;
    background-color: #fff;
    min-width: 100%;
}
.dropdown-content a {
    text-decoration: none;
    display: block;
}
.dropdown-content a:hover {background-color: #ccc;cursor:pointer;}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
.dropdown-content p:hover{
    cursor:pointer;
    background:#000;
}

 .container{ 
    max-width: 1090px;
}
.row{
    margin-right:66px;
    margin-left:66px;
}
.lis-hov:hover{
    filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8;
    /*background:#1f2745*/
}

.homepage {
    background: #f8f8f8;
    
}

h3{
  margin-top:0;
}
* {
  font-family: "Microsoft YaHei";
}

.friendContainer{
    width:78%;
    padding:20px 0 20px 0;
}
.
ul,ol li {
  list-style: none
}

#carousel-example-generic{
    height:600px;
}
.lunmain {
    background: url('../../assets/Rectangle 10.png') no-repeat; background-size:100% 100%; width: 100%; height: 600px; 
}
.lumain{
    background: url('../../assets/li.png') no-repeat; background-size:100% 600px;width:100%; height: 600px;position: relative
}
.lumain .posiAbout{

    position:absolute;
    right:8%;
    top:10%;
}
.lumain .posiAbout img{
    width:80%;
    height:80%;
}
.navbar {
    /*background: #2b2b2b;*/ 
    border: none;
    opacity:0.9;
}
.carousel-inner{
    margin-bottom:0px !important;
}
.ourPoint{
    background:#f7f7f7; padding-bottom: 30px;
}

@media (min-width: 768px) {
  

  .tuPa {
      left: 2%; height: 288px; position: absolute; bottom: -14%
  }

  .cl {
      margin-left: 14% !important;
  }
  .log {
      margin-right: 20px;
  }
  .lunmain .lun-le {
      padding-top: 180px; padding-left: 48px; text-align: left;
  }
  .lumain .lun-le {
      padding-top: 180px; padding-left: 48px; text-align: left;
  }
  .lunmain .lun-rig {
      padding-top: 150px; padding-left: 50px
  }
   .lumain .lun-rig {
      padding-top: 150px; padding-right: 50px
  }
  .Imgs {
     margin-top: 15px;
  }
  .navbar ul li .hovers:hover {
      border-bottom: 1px solid #da121a; cursor: pointer;
      background:none;
  }
  .navbar ul li .hovers:visited {
      
      background:none;
  }
  .navbar ul li .alist:hover {
      border:none;
  }
  .carousel-inner .item img {
      display: inline-block; vertical-align: baseline;
  }
}
.lunmain .lun-le h1 {
    font-size: 28px; color: #f6f6f6; margin-bottom: 10px;
    
}
.lunmain .lun-le .pCenter {
    color: #f0f0f0; font-size: 14px
}
.lunmain .lun-le .pBottom {
    margin-top: 20px;
}
.lunmain .lun-le .pBottom span {
    padding: 10px 25px; border: 1px solid #ccc; color: #fff; font-size: 12px;
}
.lunmain .lun-le .pBottom .pSpan {
    background: #da121a; border-color: #da121a; cursor:pointer;
}
.lumain .lun-le h1 {
    font-size: 26px; color: #f6f6f6; margin-bottom: 10px;
    font-weight:100;
}
.lumain .lun-le .pCenter {
    color: #f0f0f0;   font-size:28px;
}
.lumain .lun-le .pBottom {
    margin-top: 20px;
 
}
.lumain .lun-le .pBottom span {
    padding: 10px 25px; border: 1px solid #ccc; color: #fff; font-size: 12px;
}
.lumain .lun-le .pBottom .pSpan {
    background: #da121a; border-color: #da121a; cursor:pointer;
}
.Imgs {
    width: 144px; height: 19px;
}
.navbar-right ul li span {
    padding: 5px 15px; cursor: pointer;
}
.navbar li a {
    color: #fff !important;
}
.navbar li a:hover {
    color: #fff; text-decoration: none
}
.log {
    border: 1px solid #ccc; color: #e5e5e5;
}
.resc {
    background: #da121a; border: 1px solid #da121a;
}
.navbar-brand {
    padding: 10px 15px;
}
.navbar-nav li {
    line-height: 50px; padding-bottom: 0px !important; padding-top: 10px
}
.left,.right {
    width: 5%;
    height:100%;
    background:none !important;
}
.navbar-nav li a:hover {
    border-bottom: 1px solid #fff
}
.imgs {
    width: 100px; height: 60px; margin-left: 150px;
}
.headroom {
    -webkit-transition: all 0.4s ease-out; -moz-transition: all 0.4s ease-out; -o-transition: all 0.4s ease-out; transition: all 0.4s ease-out;
}
.jz-img{
     -webkit-transition: all 0.6s ease-out; -moz-transition: all 0.6s ease-out; -o-transition: all 0.6s ease-out; transition: all 0.6s ease-out;
}
.navbar-inverse {
    height: 80px; border: none
}
.navbar-nav li span {
    color: #fff;
}

.annou {
    font-size: 18px; color: #da121a; text-align: left
}
.obj-main {
    width: 100%; background: #fff;
}
.obj-main h1 {
    color: #333333; font-weight: 200; font-size:32px; text-align:center; padding-top:20px;
}
.obj-main h3 {
    font-size:16px; color:#777777; text-align:center;
}
.obj-main .Yunimg {
    /*width: 120px; height: 75px;*/
}
.obj-main .obj-cta {
    width:120px; height:35px; line-height:35px; background: #da121a; border: 1px solid #da121a; margin-top: 15px; display: inline-block; color: #ffffff; cursor:pointer;
  font-size: 14px;
}
.obj-main p {
    font-size: 14px; color: #666666;
}
.obj-main h2 {
    font-size: 20px; color: #333333;
}
.obj-main h4 {
    font-size: 18px; color: #333333;
}
.obj-main .blurb-cta {
    margin-bottom: 30px;
}
.obj-what-dv img {
    width: 100%; height: 100%;
}
.obj-what {
    width: 100%;
}
.obj-what .container {}
.obj-what .container .jzWe {
    margin-bottom: 50px;
}
.obj-what-ds {
    margin-top: 15px;
}
.obj-what-ds h1 {
    font-size: 44px;
}
.obj-what-ds h1 img {
    width: 45px; height: 49px
}
.obj-what-ds h3 {
    font-size: 28px; color: #666666;
}
.obj-what-ds p span {
    font-size: 12px; color: #ffffff; background: #0983f6; border-radius: 4px; border: 1px solid #0983f6; margin-right: 5px;
}
.obj-what-ds p {
    margin-top: 30px;
}
.obj-what-ds p span:nth-child(1) {
    padding: 5px 15px;
}
.obj-what-ds p span:nth-child(2) {
    padding: 5px 25px;
}
.obj-what-ds p span:nth-child(3) {
    padding: 5px 15px;
}
.obj-what-dc {
    margin-top: 40px;
}
.obj-what-da {
    margin-top: 15px;
}
.obj-chat {
    margin-top: 50px;
}

.obj-friend {
    background: #f8f8f8; width: 100%; padding-bottom: 50px; margin: 0;
}
.obj-chat,.obj-what h1 {
    color: #333333;
}
.jsFei {
    margin-top: 50px;
}
.jzfei img {
    padding-bottom: 20px;
}
.obj-free {
    width: 100%; background: #da121a; background-size: cover; height: auto;
}
.obj-free p {
    font-size: 14px; color: #ffffff; line-height: 44px; font-weight: 200; padding-top: 30px; padding-bottom: 30px;
}
.obj-free span {
    border: 1px solid #fff; font-size: 14px; color: #ffffff; padding: 8px 40px;
}
.obj-free .container {
    width: 80%;
}
.footer {
    background: #2b2b2b; min-height:170px;
}
.footer .footer-ts {
    margin-top: 20px;
}
.footer p {
    font-size: 12px; color: #b3b3b3; line-height:15px;
}
.footer-ts img {
    width: 59px; height: 59px;
}
.footer .container {
    width: 60%;
}

.footer .footer-jx {
    font-weight: 200; font-size:14px; color:#ccc;
}
.footer-list{
    font-size:12px; color:#b3b3b3;
}
.footer .footer-last {
    margin-top: 20px; line-height: 62px;
}
.footer .footer-last p {
    font-size: 12px; color: #b3b3b3; text-indent:-50px; line-height:10px;
}
.footer .footer-last p:nth-child(1){
    margin-top:15px;
}
.footer {
    padding-bottom: 0;
}
.dis {
    padding: 50px;
}
.lun-rig img {
    /*width: 426px; height: 303px;*/
}
@media (max-width: 768px) {
 .navbar ul li .hovers:hover {
      border-bottom: 1px solid #da121a; cursor: pointer;
      background:none;
  }

.right{
    height:100%;
}
.lunmain .container {
  width: 100%; margin-top: 10%;
}
.tuPa {
  right: 0; height:0%; position: absolute; bottom: 0
}
.lun-rig img {
  width: 100%; height: 100%; margin-top: 50px;
}
.dsg {
  padding: 0
}
.obj-chat {
  margin-top: 0;
}
.obj-what {
  margin-bottom: 0px;
}
.obj-main .blurb-cta {
  margin-bottom: 50px;
}
.obj-what-da {
  margin-bottom: 30px;
}

.annou {
  text-align: center;
}
#bs-example-navbar-collapse-1 {
  background: #000;
}
.obj-what-ds p span:nth-child(1) {
  padding: 5px 0px;
}
.obj-what-ds p span:nth-child(2) {
  padding: 5px 10px;
}
.obj-what-ds p span:nth-child(3) {
  padding: 5px 0px;
}
}
.phone-position {
  position: relative
}
/*.RenGong {
    width: 66px; height: 66px; position: absolute; right: 0px; top: 0%;
}
.phone {
    width: 66px; height: 66px; position: absolute; right: 0px; top: 30%;
}
.RenGong:hover {
    background: blue; cursor: pointer;
}
.phone:hover {
    background: red; cursor: pointer
}*/
.router-link-d {
    color: #000;
}
a:hover {
    text-decoration: none
}
.logoutbtn {
    padding: 5px 20px !important; border:none; color:#fff;
}
.realname-san{
    width: 0;
    height: 0;
    margin-left: 8px;
    display:inline-block;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.logout-box{
    position:relative;
}
.logout-ul{
    position:absolute;
    width:80px;
   
    right:0;
    top:50px;
    background:#fff;
}
.logout-ul li {
    width:100%;text-align: center; line-height: 20px;
}
/*.bluar-ccc {
    border: 1px solid #f7f7f7; background: #f7f7f7; color: #999; border-radius: 2px; font-size: 14px; padding: 10px; height:140px; line-height:1.5; margin-top:20px;
}*/
h2 {
    font-size: 20px;
}
.obj-what container {
    background: #f7f7f7;
}
.obj-what-whew{
    padding:20px 0 20px 0;
}
.obj-what-whew h2 {
    font-size: 32px; font-weight:200; color: #333333;
}
.p-wha {
    font-size: 16px; color: #777777;
}
.heng {
    background: #da121a; margin: 0 auto; width: 60px; height: 3px; margin-bottom: 30px;
}
.pS {
    color:#666;
}
.color_999{
    color:#999;
}
.mainPd {
    margin-top: 12px; color: #666666; display: block
}
.mainpa {
    font-size: 14px; color: #666666; line-height: 12px;
}
.mainpa p {
    color: #666666; display: block
}
.obj-lhat {
    background: #fff;
}
.obj-lhat .lhat-td {
    margin-top: 35px;
}
.obj-lhat .expru {
    padding-bottom: 40px;
   
}
.he-su {
    background: #da121a; margin: 0 auto; width: 60px; height: 3px; margin-bottom: 30px;
}
/*@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.tranImg:hover{
   
   -moz-animation:rotation 2s linear infinite; 
    -webkit-animation:rotation 2s linear infinite;
    -o-animation:rotation 2s linear infinite
}*/
.ths {
    font-size: 36px;
}
.li-fir {
    background: url('../../assets/Group 28.png') no-repeat; text-align: center; margin: 0 auto; width: 273px; height: 376px;
}
.li-sec {
    background: url('../../assets/Group 24.png') no-repeat; text-align: center; margin: 0 auto; width: 273px; height: 376px;
}
.li-the {
    background: url('../../assets/Group 22.png') no-repeat; text-align: center; margin: 0 auto; width: 273px; height: 376px;
}
.pict {
    width: 54px; height: 60px; transition: all 0.6s;   margin-top: 30%;
}
.picts {
    width: 70px; height: 60px; transition: all 0.6s;  margin-top: 30%; margin-left: 4%;
}
.pictes .dnsery{
    position:absolute;
    left:0;
    top:0;
    width:273px;
    height:376px;
     filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8;
    background:#1f2745
}
.li-fir,.li-sec,.li-the p {
    font-size: 14px; color: #e5e5e5; text-align: center;
}
.li-fir h2{
    font-size:20px; color:#ffffff; text-align:center; font-size:20px;
}
.li-sec h2{
    font-size:20px; color:#ffffff; text-align:center; font-size:20px; padding-left:2%;
}
.li-the h2{
    font-size:20px; color:#ffffff; text-align:center; font-size:20px;
}



.obj-frees{
    width: 100%; background: #e41e2b; background-size: cover; height: auto;
}
.obj-frees p {
    font-size:24px; color:#ffffff;  text-align:center;font-weight:200;
}
.obj-frees span {
    border: 1px solid #fff; display:inline-block; font-size: 14px; margin-top:10px; color: #ffffff; cursor:pointer;  transition: all .25s ease; padding: 4px 20px;
}
.obj-frees span:hover{
    background:#fff; color:#da121a;
}
.jsFei h1{
    font-size:32px; color:#333333; font-weight:200; text-align:center;
}
.jsFei h3{
    font-size:16px; color:#777777; text-align:center;
}
  .pder{
      position:absolute; top:0%;left:0%;
      width:100%;
  }
  .pder h4{
          font-size: 32px;
         margin: 50px 0 25px;
         color:#fff;
  }

.tranimg:hover{
      transform: scale(1.2);
        -webkit-transition: all 0.6s ease-out; -moz-transition: all 0.6s ease-out; -o-transition: all 0.6s ease-out; transition: all 0.6s ease-out;

}
.PlanLj{cursor:pointer;-webkit-animation: scaleout 1s infinite ease-in-out;animation: scaleout 1.5s infinite ease-in-out;}
@-webkit-keyframes scaleout{
    0% { -webkit-transform: scale(1.0) }
    10%{-webkit-transform: scale(1.05);
        opacity: 0.9;
    }
    25%{
        -webkit-transform: scale(1.1);
        opacity: 0.8;
    } 
    40%{-webkit-transform: scale(1.15);
        opacity: 0.7;
    }
    50%{
        -webkit-transform: scale(1.2);
        opacity: 0.6;
    }
    65%{
        -webkit-transform: scale(1.15);
        opacity: 0.7;
    }
    75%{
        -webkit-transform: scale(1.1);
        opacity: 0.8;
    }
    90%{
        -webkit-transform: scale(1.05);
        opacity: 0.9;
    }
    100% {
        -webkit-transform: scale(1.0);
        opacity: 1;
    }
      
}
@keyframes scaleout {
    0% { -webkit-transform: scale(1.0) }
    10%{-webkit-transform: scale(1.05);
        opacity: 0.9;
    }
    25%{
        -webkit-transform: scale(1.1);
        opacity: 0.8;
    } 
    40%{-webkit-transform: scale(1.15);
        opacity: 0.7;
    }
    50%{
        -webkit-transform: scale(1.2);
        opacity: 0.6;
    }
    65%{
        -webkit-transform: scale(1.15);
        opacity: 0.7;
    }
    75%{
        -webkit-transform: scale(1.1);
        opacity: 0.8;
    }
    90%{
        -webkit-transform: scale(1.05);
        opacity: 0.9;
    }
    100% {
        -webkit-transform: scale(1.0);
        opacity: 1;
    }opacity: 0.5;
      
}
.blurb-cta{
    padding-top:20px
}
.blurb-cta span{
    margin-bottom:20px;
}
.claes{
    padding:20px 0 20px 0 ;
}
 .imgAnimation{  
      animation-name: imgAnimation;  
      animation: imgAnimation 2s infinite  linear  ;
      -webkit-animation: imgAnimation 2s infinite  linear ;  
      -moz-animation: imgAnimation 2s infinite  linear ;  
 }  
 @-webkit-keyframes imgAnimation{  
    from{ -webkit-transform: rotate(0deg)}  
    to{ -webkit-transform: rotate(360deg)  
   }  
 }  

</style>
