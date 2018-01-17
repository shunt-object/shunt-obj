<template>
  <div class="homepage">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <nav class="navbar navbar-default navbar-fixed-top">
  
  
  
  
  
  
  
      <div class="container">
  
  
  
  
  
  
  
        <!-- Brand and toggle get grouped for better mobile display -->
  
  
  
  
  
  
  
        <div class="navbar-header page-scroll">
  
  
  
  
  
  
  
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
  
    
  
      
  
    
  
      					<span class="sr-only">Toggle navigation</span>
  
    
  
      
  
    
  
      					<span class="icon-bar"></span>
  
    
  
      
  
    
  
      					<span class="icon-bar"></span>
  
    
  
      
  
    
  
      					<span class="icon-bar"></span>
  
    
  
      
  
    
  
      					</button>
  
  
  
  
  
  
  
          <a class="navbar-brand page-scroll" href="#page-top"><img src="../../assets/logo.png" alt="Lattes theme logo" class="Imgs"></a>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <!-- Collect the nav links, forms, and other content for toggling -->
  
  
  
  
  
  
  
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  
  
  
  
  
  
  
          <ul class="nav navbar-nav cl">
  
  
  
  
  
  
  
            <li>
  
  
  
  
  
  
  
              <a class="page-scroll" href="#contact">首页</a>
  
  
  
  
  
  
  
            </li>
  
  
  
  
  
  
  
            <li>
  
  
  
  
  
  
  
              <a class="page-scroll" href="#contact">功能</a>
  
  
  
  
  
  
  
            </li>
  
  
  
  
  
  
  
            <li>
  
  
  
  
  
  
  
              <a class="page-scroll" href="#contact">帮助</a>
  
  
  
  
  
  
  
            </li>
  
  
  
  
  
  
  
            <li>
  
  
  
  
  
  
  
              <a class="page-scroll" href="#contact">联系我们</a>
  
  
  
  
  
  
  
            </li>
  
  
  
  
  
  
  
            <li>
  
  
  
  
  
  
  
              <a class="page-scroll" v-on:click="condole">控制台</a>
  
  
  
  
  
  
  
            </li>
  
  
  
  
  
  
  
          </ul>
  
  
  
  
  
  
  
          <div class="navbar-right clearfix">
  
  
  
  
  
  
  
            <ul class="nav navbar-nav " id="navright">
  
  
  
  
  
  
  
              <li>
  
  
  
  
  
  
  
                <span class="log" v-if="islogin==false" v-on:click="loGog">登录</span>
  
  
  
  
  
  
  
              </li>
  
  
  
  
  
  
  
              <li>
  
  
  
  
  
  
  
                <span class="resc" v-if="islogin==false" v-on:click="reset">注册</span>
  
  
  
  
  
  
  
              </li>
  
  
  
              <li v-if="islogin==true">
  
  
  
                <div class="btn-group">
  
  
  
                  <button type="button" class="btn btn-default dropdown-toggle logoutbtn" data-toggle="dropdown"> {{realname}}</button>
  
  
  
                  <ul class="dropdown-menu logout-ul" role="menu">
  
  
  
                    <li v-on:click="fn()" style="cursor:pointer;">退出</li>
  
  
  
                  </ul>
  
  
  
                </div>
  
  
  
              </li>
  
  
  
  
  
  
  
            </ul>
  
  
  
  
  
  
  
          </div>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <!-- /.navbar-collapse -->
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
      <!-- /.container-fluid -->
  
  
  
  
  
  
  
    </nav>
  
  
  
  
  
  
  
    <!--  nav end-->
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  
  
  
  
  
  
  
      <ol class="carousel-indicators">
  
  
  
  
  
  
  
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
  
  
  
  
  
  
  
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      </ol>
  
  
  
  
  
  
  
      <div class="carousel-inner">
  
  
  
  
  
  
  
        <div class="item active" style="width:100%;min-width:100%;height:100%;">
  
  
  
  
  
  
  
          <div class=" lunmain">
  
  
  
            <img src="../../assets/tu.png" alt="" class="tuPa">
  
  
  
            <div class="container">
  
  
  
  
  
  
  
              <div class="col-md-7 lun-le">
  
  
  
  
  
  
  
                <h1>中国的“RightScale”,助您轻松上云!</h1>
  
  
  
  
  
  
  
                <p class="pCenter">依托国内用户习惯，开发实现了上云的科学化和专业化分析，</br>
  
  
  
  
  
  
  
                  打造了“从工作负载是否可上云?上哪种类型的云服务?如何选择</br>
  
  
  
  
  
  
  
                  适合云厂商？”一体化线上SaaS服务平台。
  
  
  
  
  
  
  
                </p>
  
  
  
  
  
  
  
                <p class="pBottom"><span class="pSpan">立即注册</span>&nbsp&nbsp&nbsp<span>了解更多</span></p>
  
  
  
  
  
  
  
              </div>
  
  
  
  
  
  
  
              <div class="col-md-5 col-sx-12 lun-rig">
  
  
  
  
  
  
  
                <img src="../../assets/text.png" alt="">
  
  
  
  
  
  
  
  
  
              </div>
  
  
  
  
  
  
  
            </div>
  
  
  
  
  
  
  
          </div>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="item" style="width:100%;min-width:100%;height:100%;">
  
  
  
  
  
  
  
          <div class="lunmain">
  
  
  
            <img src="../../assets/tu.png" alt="" class="tuPa">
  
  
  
            <div class="container">
  
  
  
  
  
  
  
              <div class="row" style="">
  
  
  
  
  
  
  
                <div class="col-md-7 lun-le">
  
  
  
  
  
  
  
                  <h1>中国的“RightScale”,助您轻松上云!</h1>
  
  
  
  
  
  
  
                  <p class="pCenter">依托国内用户习惯，开发实现了上云的科学化和专业化分析，</br>
  
  
  
  
  
  
  
                    打造了“从工作负载是否可上云?上哪种类型的云服务?如何选择</br>
  
  
  
  
  
  
  
                    适合云厂商？”一体化线上SaaS服务平台。</p>
  
  
  
  
  
  
  
                  <p class="pBottom"><span class="pSpan">立即注册</span>&nbsp&nbsp&nbsp<span>了解更多</span></p>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                </div>
  
  
  
  
  
  
  
                <div class="col-md-5 lun-rig">
  
  
  
  
  
  
  
                  <img src="../../assets/text.png" alt="">
  
  
  
  
  
  
  
                </div>
  
  
  
  
  
  
  
              </div>
  
  
  
  
  
  
  
            </div>
  
  
  
  
  
  
  
          </div>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <a class="carousel-control left" href="next" data-slide="prev">&lsaquo;</a>
  
  
  
  
  
  
  
        <a class="carousel-control right" href="prev" data-slide="next" style="height:100%">&rsaquo;</a>
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      <!-- Controls -->
  
  
  
  
  
  
  
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"></a>
  
  
  
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" style="height:100%;"></a>
  
  
  
  
  
  
  
    </div>
  
  
  
  
  
  
  
    <!-------------------------------轮播结束------------------------------------------>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <!--------------------------------公告------------------------------------------------>
  
  
  
  
  
  
  
    <div class="announce">
  
  
  
  
  
  
  
      <ul class="row col-md-12 col-lg-12 col-sm-12 col-xs-12">
  
  
  
  
  
  
  
        <li class="col-md-3 annou  col-xs-5"><img src="../../assets/paba.svg" alt="" style="width:18px;height:18px">公告信息</li>
  
  
  
  
  
  
  
        <li class="col-md-7 col-xs-7 lis" style="text-align:center">
  
  
  
  
  
  
  
          <marquee direction="left">关于未备案网站核查处理公告 11-28 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp CSB²再出重磅服务:“智能机器人小易”
  
  
  
  
  
  
  
          </marquee>
  
  
  
  
  
  
  
        </li>
  
  
  
  
  
  
  
      </ul>
  
  
  
  
  
  
  
    </div>
  
  
  
  
  
  
  
    <!----------------------------main-start---------------------------------->
  
  
  
  
  
  
  
    <div class="obj-main">
  
  
  
  
  
  
  
      <div class="container">
  
  
  
  
  
  
  
        <div class="row text-center">
  
  
  
  
  
  
  
          <h1 class="text-center thin ths">Saas化云服务</h1>
  
  
  
  
  
  
  
          <h3 class="text-center thin">竭力为您提供科学的一站式上云服务</h3>
  
  
          <div class="heng"></div>
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="row text-center" style="margin-top:25px">
  
  
  
  
  
  
  
          <div class="col-xs-12 col-sm-4 blurb-cta">
  
  
  
  
  
  
  
            <img src="../../assets/13.png" alt="" class="Yunimg">
  
  
  
  
  
  
  
            <h2>云规划</h2>
  
  
  
            <div class="bluar-ccc">
  
  
  
  
  
  
  
              <p class="text-left"><span class="pS">我们的工作负载可以上云吗？</span><span>通过“云规划最佳实践”，对当前的工作负载进行全面立体分析和科学规划，判断该工作负载 是否可上云?精确计算该工作负载云的收益度和云的亲和度，从而得出上哪种类型的云服务。</span></p>
  
  
  
  
  
  
  
  
  
  
  
            </div>
  
  
  
            <span class="obj-cta">查看更多</span>
  
  
  
  
  
  
  
  
  
  
  
          </div>
  
  
  
  
  
  
  
          <div class="col-xs-12 col-sm-4 blurb-cta">
  
  
  
  
  
  
  
            <img src="../../assets/Page 1.png" alt="" class="Yunimg">
  
  
  
  
  
  
  
            <h2>云选型</h2>
  
  
  
  
  
  
  
            <div class="bluar-ccc">
  
  
  
  
  
  
  
  
  
  
  
              <p class="text-left"><span class="pS">我们应该上哪家云呢？</span><span>建立在您设计的业务场景之上，通过易云管提供的上百个标准，多维度横向比较和可视化展现 公有云服务商所提供的功能，从而为您科学选择最佳的云厂商。</span></p>
  
  
  
  
  
  
  
  
  
  
  
            </div>
  
  
  
            <span class="obj-cta">查看更多</span>
  
  
  
          </div>
  
  
  
          <div class="col-xs-12 col-sm-4 blurb-cta">
  
  
  
  
  
  
  
            <img src="../../assets/12.png" alt="" class="Yunimg">
  
  
  
  
  
  
  
            <h2>云实测</h2>
  
  
  
  
  
  
  
            <div class="bluar-ccc">
  
  
  
  
  
  
  
  
  
  
  
              <p class="text-left"><span>基于云选型设计的业务场景，通过易云管提供的应用性能测试解决方案，实现端到端的测试可视化，助您上云和选云进一步科学验证。</span></p>
  
  
  
  
  
  
  
  
  
  
  
            </div>
  
  
  
            <p><span class="obj-cta">查看更多</span></p>
  
  
  
          </div>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <!---------------------我们的特点---------------------------->
  
  
  
  
  
  
  
    <div class="obj-what phone-position">
  
  
  
  
  
  
  
      <img src="../../assets/Group 32.png" alt="" class="RenGong">
  
  
  
  
  
  
  
      <img src="../../assets/Group 40.png" alt="" class="phone">
  
  
  
  
  
  
  
      <div class="container obj-what-whew">
  
  
  
        <h2>我们的特点</h2>
  
  
  
        <p class="p-wha">科学权威上云分析</p>
  
  
  
        <div class="heng"></div>
  
  
  
        <div class="col-xs-12 cla">
  
  
  
          <div class="col-xs-12 col-sm-2">
  
  
  
            <img src="../../assets/a.png" alt="" class="tranImg">
  
  
  
            <h4>SaaS化</h4>
  
  
  
            <div class="mainpa">
  
  
  
              <p class="mainPd">沉淀5年</p>
  
  
  
              <p>打造国内领先的S级产品</p>
  
  
  
            </div>
  
  
  
          </div>
  
  
  
          <div class="col-xs-12 col-sm-2">
  
  
  
            <img src="../../assets/b.png" alt="" class="tranImg">
  
  
  
            <h4>保姆化</h4>
  
  
  
            <div class="mainpa">
  
  
  
              <p class="mainPd">1V1顾问支持</p>
  
  
  
              <p>提供一站化体验</p>
  
  
  
            </div>
  
  
  
          </div>
  
  
  
          <div class="col-xs-12 col-sm-2">
  
  
  
            <img src="../../assets/c.png" alt="" class="tranImg">
  
  
  
            <h4>权威化</h4>
  
  
  
            <div class="mainpa">
  
  
  
              <p class="mainPd">云集百位专家</p>
  
  
  
              <p>提供科学化上云规划</p>
  
  
  
            </div>
  
  
  
          </div>
  
  
  
          <div class="col-xs-12 col-sm-2">
  
  
  
            <img src="../../assets/e.png" alt="" class="tranImg">
  
  
  
            <h4>可视化</h4>
  
  
  
            <div class="mainpa">
  
  
  
              <p class="mainPd">多维报表分析</p>
  
  
  
              <p>提供可视化数据展现</p>
  
  
  
            </div>
  
  
  
          </div>
  
  
  
          <div class="col-xs-12 col-sm-2">
  
  
  
            <img src="../../assets/5.png" alt="" class="tranImg">
  
  
  
            <h4>实测化</h4>
  
  
  
            <div class="mainpa">
  
  
  
              <p class="mainPd">云端百台真机测试</p>
  
  
  
              <p>节省百台真机费用</p>
  
  
  
            </div>
  
  
  
          </div>
  
  
  
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
    </div>
  
  
  
  
  
  
  
    <!--------------------------为什么选择我们------------------------------>
  
  
  
    <div class="obj-what obj-lhat ">
  
  
  
      <div class="container obj-what-whew expru">
  
  
  
        <h2 class="lhat-td">为什么选择我们</h2>
  
  
  
        <p class="p-wha">云可能很复杂，但我们助您上云变得简单和轻松</p>
  
       
  
        <div class="heng"></div>
  
  
  
        <ul class="row col-xs-12 uls-w">
  
  
  
          <li class="col-xs-12 col-sm-4">
  
            <div class=" li-fir"><img src="../../assets/pict-1.png" alt="" class="pict">
              <h2>省力</h2>
              <p style="padding-top:44%">为您减少50%的上云规划时间</p>
  
            </div>
  
          </li>
  
  
  
          <li class="col-xs-12 col-sm-4 ">
  
            <div class="li-sec"><img src="../../assets/pict-3.png" alt="" class="picts">
              <h2>专业</h2>
              <p style="padding-top:40%">集结上百位专家心血，<br/> 为了您提供科学规划和上云
  
              </p>
  
            </div>
  
          </li>
  
  
  
          <li class="col-xs-12 col-sm-4 ">
  
            <div class="li-the"><img src="../../assets/pict-2.png" alt="" class="pict">
            <h2>省钱</h2>
              <p style="padding-top:40%">洞察您当前的工作负载，<br/> 为您节省 30%的上云成本支出</p>
  
            </div>
  
          </li>
  
  
  
        </ul>
  
  
  
      </div>
  
  
  
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <!-----------------------合作伙伴-------------------------------------->
  
  
  
  
  
  
  
    <div class=" obj-what obj-friend" style="background:#f7f7f7;">
  
  
  
  
  
  
  
      <div class="container">
  
  
  
  
  
  
  
        <div class="row text-center jzWe jsFei">
  
  
  
  
  
  
  
          <h1 class="text-center thin">合作伙伴</h1>
  
  
  
  
  
  
  
          <h3 class="text-center thin">诚邀各行业优秀的合作伙伴与我们一起共建生态!</h3>
  
  
  
          <div class="he-su"></div>
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-2 obj-what-dv jzfei">
  
  
  
  
  
  
  
          <img src="../../assets/Group 29.png" alt="">
  
  
  
  
  
  
  
          <img src="../../assets/Group 39.png" alt="">
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-2 obj-what-dv jzfei">
  
  
  
  
  
  
  
          <img src="../../assets/Group 30.png" alt="">
  
  
  
  
  
  
  
          <img src="../../assets/Group 41.png" alt="">
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-2 obj-what-dv jzfei">
  
  
  
  
  
  
  
          <img src="../../assets/Group 34.png" alt="">
  
  
  
  
  
  
  
          <img src="../../assets/Group 42.png" alt="">
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-2 obj-what-dv jzfei">
  
  
  
  
  
  
  
          <img src="../../assets/Group 36.png" alt="">
  
  
  
  
  
  
  
          <img src="../../assets/Group 43.png" alt="">
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-2 obj-what-dv jzfei">
  
  
  
  
  
  
  
          <img src="../../assets/Group 37.png" alt="">
  
  
  
  
  
  
  
          <img src="../../assets/Group 44.png" alt="">
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-2 obj-what-dv jzfei">
  
  
  
  
  
  
  
          <img src="../../assets/Group 38.png" alt="">
  
  
  
  
  
  
  
          <img src="../../assets/Group 45.png" alt="">
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <!------------------------感言------------------------------------------>
  
  
  
  
  
  
  
    <div class=" obj-frees"   style="height:210px;position:relative">
  
  
  
  
  
  
  
     
  
  
  
  
  
  
  
        
  
  
  
  
  
          <div class="pder">
            <p class="text-center">
                这一路走来，我们经历过坎坷、经历过风雨;<br/>
                为此，我们曾经彷徨过、迷茫过、哭过、笑过;</br>  
                但我们从未放弃、倔强而努力;</br>
                因为我们坚信:<br/>
                我们每前进小一步，都将为您带来更好的云上体验!
            </p>
            <span>立即体验</span>
          </div>
  
         <canvas id="root" class="canvas"  width="1000" height="210" style="height:100%;width:100%"></canvas>
         
         
  
  
  
       
  
  
  
  
  
  
  
  
  
  
  
  
  
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <!-------------------------footer------------------------------------------>
  
  
  
  
  
  
  
    <div class=" obj-friend footer">
  
  
  
  
  
  
  
      <div class="container">
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-3 obj-what-dv footer-ts">
  
  
  
  
  
  
  
          <p class="text-left footer-jx">联系我们</p>
  
  
  
  
  
  
  
          <p class="text-left"><img src="../../assets/phones.svg" alt="" style="width:9px;height:12px">400-030-8008</p>
  
  
  
  
  
  
  
          <p class="text-left"><img src="../../assets/mes.svg" alt="" style="width:9px;height:10px">1259709119@qq.com</p>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-3 obj-what-dv footer-ts">
  
  
  
  
  
  
  
          <p class="text-left footer-jx">功能</p>
  
  
  
  
  
  
  
          <p class="text-left">云规划</p>
  
  
  
  
  
  
  
          <p class="text-left">云选型</p>
  
  
  
  
  
  
  
          <p class="text-left">云管理</p>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-3 obj-what-dv footer-ts">
  
  
  
  
  
  
  
          <p class="text-left footer-jx">服务支持</p>
  
  
  
  
  
  
  
          <p class="text-left">帮助中心</p>
  
  
  
  
  
  
  
          <p class="text-left">服务条款</p>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
        <div class="col-xs-12 col-sm-3 obj-what-dv footer-ts footer-left">
  
  
  
  
  
  
  
          <p class="footer-jx">易云管</p>
  
  
  
  
  
  
  
          <div class="footer-ke">
  
  
  
  
  
  
  
            <p>您的专属上云顾问</p>
  
  
  
  
  
  
  
            <img src="../../assets/weichat.png" alt="">
  
  
  
  
  
  
  
          </div>
  
  
  
  
  
  
  
        </div>
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
      <div class="row text-center footer-last">
  
  
  
  
  
  
  
        <p class="text-center thin">© CopyRight 2017江苏京玉信息技术有限公司 版权所有 TEL:(0379）65112858 65112856</p>
  
  
  
  
  
  
  
      </div>
  
  
  
  
  
  
  
    </div>
  
  
  
  
  
  
  
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div>
  
  
  
  
  
  
  
  </div>
</template>

<script>

  export default {
  
  
  
  
  
  
  
    name: 'homePage',
  
  
  
  
  
  
  
    data() {
  
  
  
  
  
  
  
      return {
  
  
  
        islogin: false,
  
  
  
        realname: ''
  
  
  
      }
  
  
  
  
  
  
  
    },
  
  
  
    mounted: function() {
  function CanvasAnimate(Dom,options){
    options = options || {}
    this.Element = Dom
    this.cvs = Dom.getContext("2d")
    this.off_cvs = document.createElement("canvas")
    this.off_cvs.width = Dom.width
    this.off_cvs.height = Dom.height
    this.Dom = this.off_cvs.getContext("2d")
    this.width = Dom.width
    this.height = Dom.height
    this.length = options.length || 10
    this.RoundColor = options.RoundColor || "#CA0F17" 
    this.RoundDiameter = options.RoundDiameter || 2
    this.LineColor = options.LineColor || "#CA0F17"
    this.LineWeight = options.LineWeight || 1
    this.clicked = options.clicked || false
    this.moveon = options.moveon || false
    this.list = []
    this.paused = true
}
CanvasAnimate.prototype.Run = function(){
    if( this.clicked ){
        this.Element.addEventListener( "click",this.Clicked.bind(this) )
    }
    if( this.moveon ){
        this.Element.addEventListener( "mousemove",this.moveXY.bind(this) )
        this.Element.addEventListener( "mouseout",this.moveoutXY.bind(this) )
    }
    this.Draw( this.getLength() )
}
CanvasAnimate.prototype.getLength=function(){
    let arr = []
    for(let i=0;i< this.length ;i++){
        let obj = {}
            obj.x = parseInt( Math.random() * this.width )
            obj.y = parseInt( Math.random() * this.height )
            obj.r = parseInt( Math.random()*6 ) //圆球大小  
            obj.controlX = parseInt( Math.random()*10 ) > 5 ? "left":"right"
            obj.controlY = parseInt( Math.random()*10 ) > 5 ? "bottom":"top"
        arr.push(obj)
    }
    return arr
}
CanvasAnimate.prototype.Draw = function(list){
    let new_arr = []
    let line_arr = []

    list.map((item,index)=>{
        let xy = this.ControlXY(item)
        let obj = this.ControlRound(xy)
        new_arr.push( obj )
    });
    
    new_arr.map((item1,index1)=>{
        new_arr.map((item2,index2)=>{
            if(item1 !== item2){
                let x = item1.x - item2.x
                let y = item1.y - item2.y
                if( Math.abs(x)< 80 && Math.abs(y)<80 ){
                    let obj = {
                        x1:item1.x,
                        y1:item1.y,
                        x2:item2.x,
                        y2:item2.y,
                    }
                    line_arr.push(obj)
                }
            }
        })
    })

    this.drawLine(line_arr)
    
    new_arr.map((item)=>{
        this.drawRound(item)
    })

    this.list = new_arr

    this.cvs.drawImage(this.off_cvs,0,0,this.width,this.height)
    
    setTimeout(()=>{
        if(this.paused){
            this.next()
        }
    },50)
}
CanvasAnimate.prototype.next = function(){
    this.cvs.clearRect( 0,0,this.width,this.height )
    this.Dom.clearRect( 0,0,this.width,this.height )
    this.Draw( this.list )
}
CanvasAnimate.prototype.drawRound = function(obj){
    let {x,y,r} = obj
    this.Dom.beginPath()
    this.Dom.arc( x,y,r, 0, 2*Math.PI )
    this.Dom.fillStyle = this.RoundColor
    this.Dom.fill()
    this.Dom.closePath()
}
CanvasAnimate.prototype.drawLine = function(list){
    list.map( (item)=>{
        this.Dom.beginPath()
        this.Dom.moveTo( item.x1,item.y1 )
        this.Dom.lineTo( item.x2,item.y2 )
        this.Dom.lineWidth = this.LineWeight
        this.Dom.strokeStyle = this.LineColor
        this.Dom.stroke()
        this.Dom.closePath()
    })
}
CanvasAnimate.prototype.ControlXY = function(obj){
    if(obj.x >= (this.width - obj.r) ){
        obj.controlX = 'left'
    }else if( obj.x <= parseInt(obj.r/2)  ){
        obj.controlX = "right"
    }

    if( obj.y >= (this.height - obj.r) ){
        obj.controlY = "bottom"
    }else if( obj.y <= parseInt(obj.r/2) ){
        obj.controlY = "top"
    }
    return obj
}
CanvasAnimate.prototype.ControlRound = function(obj){
    switch(obj.controlX){
        case "right":
            obj.x++;
            break;
        case "left":
            obj.x--;
            break;
    }
    switch(obj.controlY){
        case "top":
            obj.y++;
            break;
        case "bottom":
            obj.y--;
            break;
    }
    return obj
}
CanvasAnimate.prototype.Clicked = function(event){
    let obj = {}
        obj.x = event.clientX
        obj.y = event.clientY
        obj.r = parseInt( Math.random()*10 )
        obj.controlX = parseInt( Math.random()*10 ) > 5 ? 'left' :'right'
        obj.controlY = parseInt( Math.random()*10 ) > 5 ? 'bottom' :'top'
    this.list.push(obj)
}
CanvasAnimate.prototype.moveXY = function(event){
    let obj = {}
        obj.x = event.clientX
        obj.y = event.clientY
        obj.r = 0
        obj.move = true
    if( this.list[0]["move"] ){
        this.list[0]["x"] = obj.x
        this.list[0]["y"] = obj.y
        this.list[0]["r"] = 1
    }else{
        this.list.unshift(obj)
    }
}
CanvasAnimate.prototype.moveoutXY = function(event){
    this.list.shift()
}
CanvasAnimate.prototype.pause = function(){
    this.paused = !this.paused
    if( this.paused){
        this.Draw(this.list)
    }
}
 var root = document.querySelector("#root")
        var a = new CanvasAnimate(root,{length:50,clicked:true,moveon:true})
            a.Run()
        
  
      if (sessionStorage.getItem("accountId") == null || sessionStorage.getItem("accountId") == '') {
  
  
  
        this.islogin = false;
  
  
  
      } else {
  
  
  
        this.islogin = true;
  
  
  
        this.realname = JSON.parse(sessionStorage.getItem("account")).realname;
  
  
  
      }
  
  
  
    },
  
  
  
    methods: {
  
  
  
      fn: function() {
  
  
  
        this.logout();
  
  
  
        this.islogin = false;
  
  
  
      },
  
  
  
  
  
  
  
      loGog: function() {
  
  
  
        this.$router.push({
  
  
  
          path: '/login'
  
  
  
        });
  
  
  
      },
  
  
  
      condole: function() {
  
  
  
        this.$router.push({
  
  
  
          path: '/consolePage'
  
  
  
        });
  
  
  
      },
  
  
  
      reset: function() {
  
  
  
        this.$router.push({
  
  
  
          path: '/register'
  
  
  
        })
  
  
  
      }
  
  
  
  
  
  
  
  
  
  
  
    }
  
  
  
  
  
  
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homepage {
  
    background: #f8f8f8;
  
  }
  
  
  
  .row {
  
    margin-left: 0;
  
    margin-right: 0px;
  
  }
  h3{
    margin-top:0;
  }
  
  
  * {
  
    font-family: "Microsoft YaHei";
  
  }
  
  
  
  ul,
  
  ol li {
  
    list-style: none
  
  }
  
  
  
  .lunmain {
  
    background: url('../../assets/Rectangle 10.png') no-repeat;
  
    background-size: cover;
  
    width: 100%;
  
    height: 600px;
  
    position: relative
  
  }
  
  
  

  
  
  
  .navbar {
  
    background: #2b2b2b;
  
    border: none
  
  }
  
  
  
  @media (min-width: 768px) {
       .pder{
          position:absolute;
          top:15%;
          left:35%;
        }
      .uls-w li {
  
      width: 33.333%;
  
    }
    .tuPa {
  
    right: 10%;
  
    height: 288px;
  
    position: absolute;
  
    bottom: 0
  
  }
    .cla {
  
      margin-left: 8%;
  
    }
  
    .cl {
  
      margin-left: 300px;
  
    }
  
    .log {
  
      margin-right: 20px;
  
    }
  
    .lunmain .lun-le {
  
      padding-top: 180px;
  
      padding-left: 136px;
  
      text-align: left;
  
    }
  
    .lunmain .lun-rig {
  
      padding-top: 150px;
  
      padding-right: 50px
  
    }
  
    .Imgs {
  
      margin-left: 90px;
  
      margin-top: 15px
  
    }
  
    .navbar-right {
  
      margin-right: 85px;
  
    }
  
    .navbar ul li a:hover {
  
      border-bottom: 1px solid #fff;
  
      cursor: pointer;
  
    }
  
    .carousel-inner .item img {
  
      display: inline-block;
  
      vertical-align: baseline
  
    }
  
  }
  
  
  
  .lunmain .lun-le h1 {
  
    font-size: 28px;
  
    color: #f6f6f6;
  
    margin-bottom: 10px;
  
  }
  
  
  
  .lunmain .lun-le .pCenter {
  
    color: #f0f0f0;
  
    font-size: 14px
  
  }
  
  
  
  .lunmain .lun-le .pBottom {
  
    margin-top: 20px;
  
  }
  
  
  
  .lunmain .lun-le .pBottom span {
  
    padding: 10px 25px;
  
    border: 1px solid #ccc;
  
    
  
    color: #fff;
  
    font-size: 12px;
  
  }
  
  
  
  .lunmain .lun-le .pBottom .pSpan {
  
    background: #da121a;
  
    border-color: #da121a;
  
    ;
  
  }
  
  
  
  .Imgs {
  
    width: 144px;
  
    height: 19px;
  
  }
  
  
  
  .navbar-right ul li span {
  
    padding: 5px 15px;
  
    cursor: pointer;
  
 
  
  }
  
  
  
  .navbar li a {
  
    color: #fff;
  
  }
  
  
  
  .navbar li a:hover {
  
    color: #fff;
  
    text-decoration: none
  
  }
  
  
  
  .log {
  
    border: 1px solid #ccc;
  
    color: #e5e5e5;
  
  }
  
  
  
  .resc {
  
    background: #da121a;
  
    border: 1px solid #da121a;
  
  }
  
  
  
  .navbar-brand {
  
    padding: 10px 15px;
  
  }
  
  
  
  .navbar-nav li {
  
    line-height: 58px;
  
    padding-bottom: 0;
  
    padding-top: 10px
  
  }
  
  
  
  .left,
  
  .right {
  
    width: 10%;
  
  }
  
  
  
  .navbar-nav li a:hover {
  
    border-bottom: 1px solid #fff
  
  }
  
  
  
  .imgs {
  
    width: 100px;
  
    height: 60px;
  
    margin-left: 150px;
  
  }
  
  
  
  .headroom {
  
    -webkit-transition: all 0.4s ease-out;
  
    -moz-transition: all 0.4s ease-out;
  
    -o-transition: all 0.4s ease-out;
  
    transition: all 0.4s ease-out;
  
  }
  
  
  
  .navbar-inverse {
  
    height: 80px;
  
    border: none
  
  }
  
  
  
  .navbar-nav li span {
  
    color: #fff;
  
  }
  
  
  
  .announce {
  
    background: #f2f2f2;
  
    line-height: 58px;
  
    height: 58px;
  
  }
  
  
  
  .annou {
  
    font-size: 18px;
  
    color: #da121a;
  
    text-align: right
  
  }
  
  
  
  .obj-main {
  
    width: 100%;
  
    background: #fff
  
  }
  
  
  
  .obj-main h1 {
  
    color: #333333;
  
    font-weight: 200;
  
 
    font-size:32px;

text-align:center;
   
  
  }
  
  
  
  .obj-main h3 {
  
    font-size:16px;
color:#777777;
text-align:center;
  
 
  
  }
  
  
  
  .obj-main .Yunimg {
  
    width: 120px;
  
    height: 75px;
  
  }
  
  
  
  .obj-main .obj-cta {
  
    padding: 5px 20px;
  
    background: #da121a;
  
    border: 1px solid #da121a;
  
   
  
    margin-top: 5px;
  
    display: inline-block;
  
    color: #ffffff;
  
    font-size: 14px;
  
  }
  
  
  
  .obj-main p {
  
    font-size: 14px;
  
    color: #666666;
  
  }
  
  
  
  .obj-main h2 {
  
    font-size: 20px;
  
    color: #333333;
  
  }
  
  
  
  .obj-main h4 {
  
    font-size: 18px;
  
    color: #333333;
  
  }
  
  
  
  .obj-main .blurb-cta {
  
    margin-bottom: 30px;
  
  }
  
  
  
  .obj-what-dv img {
  
    width: 100%;
  
    height: 100%;
  
  }
  
  
  
  .obj-what {
  
    width: 100%;
  
    margin-bottom: 30px;
  
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
  
    width: 45px;
  
    height: 49px
  
  }
  
  
  
  .obj-what-ds h3 {
  
    font-size: 28px;
  
    color: #666666;
  
  }
  
  
  
  .obj-what-ds p span {
  
    font-size: 12px;
  
    color: #ffffff;
  
    background: #0983f6;
  
    border-radius: 4px;
  
    border: 1px solid #0983f6;
  
    margin-right: 5px;
  
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
  
    background: #f8f8f8;
  
    width: 100%;
  
    padding-bottom: 50px;
  
    margin: 0;
  
  }
  
  
  
  .obj-chat,
  
  .obj-what h1 {
  
    color: #333333;
  
  }
  
  
  
  .jsFei {
  
    margin-top: 50px;
  
  }
  
  
  
  .jzfei img {
  
    padding-bottom: 20px;
  
  }
  
  
  
  .obj-free {
  
    width: 100%;
  
    background: #da121a;
  
    background-size: cover;
  
    height: auto;
  
    
  }
  
  
  
  .obj-free p {
  
    font-size: 14px;
  
    color: #ffffff;
  
    line-height: 44px;
  
    font-weight: 200;
  
    padding-top: 30px;
  
    padding-bottom: 30px;
  
  }
  
  
  
  .obj-free span {
  
    border: 1px solid #fff;
  
    font-size: 14px;
  
    color: #ffffff;
  
    padding: 8px 40px;
  
  }
  
  
  
  .obj-free .container {
  
    width: 80%;
  
  }
  
  
  
  .footer {
  
    background: #000;
  
  }
  
  
  
  .footer .footer-ts {
  
    margin-top: 40px;
  
  }
  
  
  
  .footer p {
  
    font-size: 12px;
  
    color: #b3b3b3;
  
  }
  
  
  
  .footer-ts img {
  
    width: 97px;
  
    height: 97px;
  
  }
  
  
  
  .footer .container {
  
    width: 60%;
  
  }
  
  
  
  .footer .footer-ke {
  
    border-left: 4px solid #2e383e;
  
  }
  
  
  
  .footer .footer-jx {
  
    font-weight: 900
  
  }
  
  
  
  .footer .footer-last {
  
    margin-top: 20px;
  
    line-height: 62px;
  
  }
  
  
  
  .footer .footer-last p {
  
    font-size: 12px;
  
    color: #b3b3b3;
  
  }
  
  
  
  .footer {
  
    padding-bottom: 0;
  
  }
  
  
  
  .dis {
  
    padding: 50px;
  
  }
  
  
  
  .lun-rig img {
  
    width: 426px;
  
    height: 303px;
  
  }
  
  
  
  @media (max-width: 768px) {
    .pder{
   position:absolute;
   top:15%;
   left:10%;
 }
    .lunmain .container {
  
      width: 100%;
  
      margin-top: 10%;
  
    }
    .tuPa {
  
    right: 0;
  
    height:0%;
    
  
    position: absolute;
  
    bottom: 0
  
  }
    .lun-rig img {
  
      width: 80%;
  
      height: 80%;
  
      margin-top: 50px;
  
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
  
    .announce ul .lis {
  
      overflow: hidden;
  
      text-overflow: ellipsis;
  
      white-space: nowrap;
  
      height: 58px;
  
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
  
  
  
  .RenGong {
  
    width: 66px;
  
    height: 66px;
  
    position: absolute;
  
    right: 0px;
  
    top: 0%;
  
  }
  
  
  
  .phone {
  
    width: 66px;
  
    height: 66px;
  
    position: absolute;
  
    right: 0px;
  
    top: 30%;
  
  }
  
  
  
  .RenGong:hover {
  
    background: blue;
  
    cursor: pointer;
  
  }
  
  
  
  .phone:hover {
  
    background: red;
  
    cursor: pointer
  
  }
  
  
  
  .router-link-d {
  
    color: #000;
  
  }
  
  
  
  a:hover {
  
    text-decoration: none
  
  }
  
  
  
  .logoutbtn {
  
    background: #fff;
  
    padding: 5px 20px !important;
  
  }
  
  
  
  .logout-ul li {
  
    text-align: center;
  
    line-height: 30px;
  
  }
  
  
  
  .bluar-ccc {
  
    border: 1px solid #f7f7f7;
  
    background: #ccc;
  
    color: #666666;
  
    background: #f7f7f7;
  
    border-radius: 2px;
  
    height: 120px;
  
    font-size: 14px;
  
    padding: 10px 10px;
  
  }
  
  
  
  h2 {
  
    font-size: 20px;
  
  }
  
  
  
  .obj-what container {
  
    background: #f7f7f7;
  
  }
  
  
  
  .obj-what-whew h2 {
  
    font-size: 32px;
    font-weight:200;
    color: #333333;
  
  }
  
  
  
  .p-wha {
  
    font-size: 16px;
  
    color: #777777;
  
  }
  
  
  
  .heng {
  
    background: #da121a;
  
    margin: 0 auto;
  
    width: 60px;
  
    height: 3px;
  
    margin-bottom: 30px;
  
  }
  
  
  
  .pS {
  
    font-weight: 600;
  
  }
  
  
  
  .mainPd {
  
    margin-top: 20px;
  
    color: #666666;
  
    display: block
  
  }
  
  
  
  .mainpa {
  
    font-size: 14px;
  
    color: #666666;
  
    line-height: 12px;
  
  }
  
  
  
  .mainpa p {
  
    color: #666666;
  
    display: block
  
  }
  
  
  
  .obj-lhat {
  
    background: #fff
  
  }
  
  
  
  .obj-lhat .lhat-td {
  
    margin-top: 35px;
  
  }
  
  
  
  .obj-lhat .expru {
  
    padding-bottom: 40px;
  
  }
  
  
  
  .he-su {
  
    background: #da121a;
  
    margin: 0 auto;
  
    width: 60px;
  
    height: 3px;
  
    margin-bottom: 30px;
  
  }
  
  
  
  @-webkit-keyframes rotation {
  
    from {
  
      -webkit-transform: rotate(0deg);
  
    }
  
    to {
  
      -webkit-transform: rotate(360deg);
  
    }
  
  }
  
  
  
  .tranImg:hover {
  
    -webkit-transform: rotate(360deg);
  
    animation: rotation 2s linear infinite;
  
    -moz-animation: rotation 2s linear infinite;
  
    -webkit-animation: rotation 2s linear infinite;
  
    -o-animation: rotation 2s linear infinite;
  
  }
  
  
  
  .ths {
  
    font-size: 36px;
  
  }
  
  
  
  .li-fir {
  
    background: url('../../assets/Group 28.png') no-repeat;
  
    text-align: center;
  
    margin: 0 auto;
  
    width: 273px;
  
    height: 376px;
  
  }
  
  
  
  .li-sec {
  
    background: url('../../assets/Group 24.png') no-repeat;
  
    text-align: center;
  
    margin: 0 auto;
  
    width: 273px;
  
    height: 376px;
  
  }
  
  
  
  .li-the {
  
    background: url('../../assets/Group 22.png') no-repeat;
  
    text-align: center;
  
    margin: 0 auto;
  
    width: 273px;
  
    height: 376px;
  
  }
  
  
  
  .pict {
  
    width: 54px;
  
    height: 60px;
    transition: all 0.6s;  
    margin-top: 30%;
  
  }
  
  
  
  .picts {
  
    width: 70px;
  
    height: 60px;
    transition: all 0.6s;  
    margin-top: 30%;
    
    margin-left: 4%;
  
  }
  
  
  
  .li-fir,
  
  .li-sec,
  
  .li-the p {
  
    font-size: 14px;
  
    color: #e5e5e5;
  
    text-align: center;
  
  }
  .li-fir h2{
    font-size:20px;
color:#ffffff;
text-align:center;
font-size:20px;
  }
    .li-sec h2{
    font-size:20px;
color:#ffffff;
text-align:center;
font-size:20px;
padding-left:2%;
  }
    .li-the h2{
    font-size:20px;
color:#ffffff;
text-align:center;
font-size:20px;
  }
 .pict:hover{
      transform: scale(1.4);
  }
 .picts:hover{
    transform: scale(1.4);
 }
 
 .obj-frees{
    
  
    width: 100%;
  
    background: #da121a;
  
    background-size: cover;
  
    height: auto;
  
    
 }
  
  
  
  .obj-frees p {
  
  font-size:14px;
  color:#ffffff;
  line-height:22px;
  text-align:center;
  
  
  
  
 }
   .obj-frees span {
  
    border: 1px solid #fff;
    display:inline-block;
    font-size: 14px;
    margin-top:10px;
    color: #ffffff;
    cursor:pointer; 
    transition: all .25s ease;
    padding: 4px 20px;
  
  }
  .obj-frees span:hover{
    background:#fff;
    color:#da121a;
  }
  .jsFei h1{
    font-size:32px;
  color:#333333;
  font-weight:200;
  text-align:center;
  }
  .jsFei h3{
    font-size:16px;
color:#777777;
text-align:center;
  }
</style>

