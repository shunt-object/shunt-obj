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
					<a class="navbar-brand page-scroll" href="#page-top"><img src="../assets/logo.png" alt="Lattes theme logo" class="Imgs"></a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav cl" >
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
							<a class="page-scroll" href="#contact">控制台</a>
						</li>
					</ul>
          <div class="navbar-right clearfix">
          <ul class="nav navbar-nav " id="navright">
					  <li>
							<span class="log">登陆</span>
						</li>
						<li>
              <span class="resc">注册</span>
						</li>
					</ul>
          </div>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>
    <!--  nav end-->

     
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="width:100%;height:auto">
            <!-- ol鎸囩ず鍣? ol鏍囩涓巙l鏍囩涓嶅悓 ol涓烘槸鏈夊簭鍒楄〃 ul涓烘槸鏃犲簭鍒楄〃 -->
            <ol class="carousel-indicators">
                  <!-- 鎸囩ず鍣?-->
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>

            <!-- 鍖呰鐨勮疆鎾浘鐗?-->
            <div class="carousel-inner">
               
            
                <div class="item active" style="width:100%;min-width:100%">
                    <div class="lunmain" >
                      <div class="container">
                        <div class="row" style="width:100%">
                          <div class="col-md-7 lun-le">
                              <h1>中国的“RightScale”,助您轻松上云!</h1>
                              <p class="pCenter">依托国内用户习惯，开发实现了上云的科学化和专业化分析，
打造了“从工作负载是否可上云?上哪种类型的云服务?如何选择
适合云厂商？”一体化线上SaaS服务平台。</p>
                              <p class="pBottom"><span class="pSpan">立即注册</span>&nbsp&nbsp&nbsp<span>了解更多</span></p>

                          </div>
                          <div class="col-md-5 lun-rig">
                              <img src="../assets/text.png" alt="" style="width:426px;height:303px;">
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                 <div class="item" style="width:100%;min-width:100%">
                    <div class="lunmain" >
                      <div class="container">
                        <div class="row" style="width:100%">
                          <div class="col-md-7 lun-le">
                              <h1>中国的“RightScale”,助您轻松上云!</h1>
                              <p class="pCenter">依托国内用户习惯，开发实现了上云的科学化和专业化分析，
打造了“从工作负载是否可上云?上哪种类型的云服务?如何选择
适合云厂商？”一体化线上SaaS服务平台。</p>
                              <p class="pBottom"><span class="pSpan">立即注册</span>&nbsp&nbsp&nbsp<span>了解更多</span></p>

                          </div>
                          <div class="col-md-5 lun-rig">
                              <img src="../assets/text.png" alt="" style="width:426px;height:303px;">
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
               
                
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              
             
            </a>
        </div>

       
        <div class="announce">
            <div class="row" style="margin-left:60px;">
                <div class="col-md-3"> <span></span></span>公告信息</div>
                <div class="col-md-9">
                    <div class="row">
                        <span class="col-md-4">哈哈哈哈哈哈哈哈</span>
                        <span class="col-md-4">哈哈哈哈哈哈哈哈</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage{
  width:100%;
}
*{
  font-family:"Microsoft YaHei"
}
.lunmain {
  background:url('../assets/bg-f.png') no-repeat;
  background-size:cover;
  height:600px
}

.navbar{
  background:none;
  border:none
}
@media (min-width: 768px){
  .cl{
      margin-left:300px;
  }
  .log{
  margin-right:20px;
  
}
.lunmain .lun-le{
 padding-top:180px;
 padding-left:178px;
 text-align:left;
}
.lunmain .lun-rig{
  padding-top:150px;
  padding-right:50px
}
.Imgs{
  margin-left:158px
}
.navbar ul li a:hover{
  border-bottom:1px solid #fff
}
.carousel-inner .item img{
  display:inline-block;
  vertical-align:baseline
}
}


.lunmain .lun-le h1{
  font-size:28px;
  color:#f6f6f6;
  margin-bottom:10px;
}
.lunmain .lun-le .pCenter{
  color:#f0f0f0;
  font-size:14px
}
.lunmain .lun-le .pBottom{
  margin-top:20px;
}
.lunmain .lun-le .pBottom span{
    padding:5px 15px ;
    border:1px solid #ccc;
    border-radius:4px;
    color:#fff;
    font-size:12px;
}
.lunmain .lun-le .pBottom .pSpan{
  background:#eaa84f;
  border-color:#eaa84f;
}
.Imgs{
  width:70px;
  height:40px;
}
.navbar-right ul li span{
  padding:5px 15px;
  color:#000;
  border-radius:4px
  
}
.log{
   border:1px solid #ccc;
}
.resc{
  background:#eaa84f;
   border:1px solid;
  border-color:#eaa84f;
}
.navbar-brand{
  padding:10px 15px;
}
.navbar-nav li {
  line-height:58px;
  padding-bottom:0;
  padding-top:10px
  
}
.left,.right{
  width:5%;
}
.navbar-nav li a:hover{
  border-bottom:1px solid #fff
}
.imgs{
  width:100px;
  height:60px;
  margin-left:150px;
  
}
.headroom { 
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out; 
  -o-transition: all 0.4s ease-out; 
  transition: all 0.4s ease-out; 
  }
.navbar-inverse{
  height:80px;
  border:none
}
.navbar-nav li span{
  color:#fff;
}
.announce{
  width:100%;
  height:58px;
}

.announce{
  background:#f2f2f2;
}
</style>
