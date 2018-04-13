<template>
<div class="total Lists">
<div class="total-header" v-if="utype!=3&&utype!=4">
    <span></span>
    总览
</div>
<div class="total-header" v-if="utype==3||utype==4">
    <span></span>
    分析报告
</div>
<!-- 运营商 -->
<div v-if="utype==3">
    <img src="../../../../assets/yunying.png" alt="" style="width:100%;">
</div>
<!-- 政府 -->
<div v-if="utype==4">
    <img src="../../../../assets/zhengfu.png" alt="" style="width:100%;">
</div>
<div class="overviewlist" v-if="utype!=3&&utype!=4">
    <div class="overviewSearch row" v-if="this.flag!=true">
        <button class="creatAll col-xs-12 col-md-1"  v-on:click="UpRoute"><i class="iconfont icon-wangpanxinjianwenjianjia-copy" style="margin-right:5px;"></i>创建分析组</button>
          <div class="PlansearchBox">
             <input type="text"  id="myInput" v-on:keyup="myFun()" placeholder="搜索">
            <button class="PlansearchBtn"><i class="fa fa-search"></i></button>
        </div>
    </div>
    <!-- 数据为空时显示 -->
    <div class="modle col-xs-12 col-md-12 col-sm-12" v-if="this.flag==true" >
        <div class="cals" style="width:100%;">
            <div class="slider">
                <ul class="slider-main"> 
                    <li class="slider-panel" v-show="!welcom"> 
                        <div class="modle-title" ><h1><span>欢迎来到</span>CloudBroker²</h1></div>
                        <a><img src="../../../../assets/overview/welcome1.png"></a> 
                        <span class="creatCloud" v-on:click="upDown">下一步</span>
                    </li> 
                    <li class="slider-panel" v-show="this.welco"> 
                        <div class="modle-title" ><h1>ClouldBroker²<span>六步祝您轻松上云</span></h1></div>
                        <a><!--<img src="../../../../assets/overview/welcome2.png">--><img src="../../../../assets/overview/welcome2-new.png"></a>
                        <span class="creatCloud" v-on:click="UpRoute">创建分析组</span>
                          
                    </li> 
                </ul>
            
            </div>
        </div>
    </div>
    <!-- 数据为空结束 -->
    <ul class="uls" v-if="this.flag!=true&&utype!=3||utype!=4" >
        <li class="sps row col-xs-12">
            <span class="col-md-1 col-xs-1"><!--<input type="checkbox" class="text-center">--></span>
            <span class="col-md-1 weight  weigh col-xs-2 spsmedia">云分析名称</span>
            <span class="col-md-1 weight  weigh col-xs-2 spsmedia">应用负载名称</span>
            <span class="col-md-7 weight col-xs-3 jinDus" style="text-align: left;" >进度</span>
            <span class="col-md-2 weight col-xs-3" >操作</span>
            <!--<span class="col-md-3">云选型进度</span>-->
        </li>
        <li class="" v-for="(vp,index) in vpd">
            <ul class="ulerts">
                <!-- <li class="row sps" > -->
                <li class="row sps-overall col-xs-12" >
                    <span class="col-md-1 col-xs-1"><input type="checkbox"></span>
                    <input type="text" id="loginers" class="col-md-1 col-xs-1 proanmess proInput" autofocus="autofocus" v-if="vars[index]==true" v-model="vp.proname" v-on:blur="shiBlur(vp.proname,index,vp.id)">
                    <span class="col-md-1 col-xs-1 proanmes" :title="vp.proname" @click="bianjiZt(index)" v-if="vars[index]==false">{{vp.proname}}</span>
                    <span class="col-md-1 col-xs-1"></span>
                    <span class="col-md-7 removeIng col-xs-6">
                        <!--<el-tooltip visible-arrow content="删除此云分析" placement="top" :popper-class="toolTipClass" effect="light">
                            <i class="fa fa-trash-o removeBtn" v-on:click="rems(vp.id)"></i>
                        </el-tooltip>
                        <el-tooltip visible-arrow content="折叠或展开" placement="top" effect="light" :popper-class="toolTipClass">
                            <i class="iconfont icon-zhediequanbu" style="color:#a8a8a8;cursor:pointer;margin-left: 10px;" v-on:click="toggleShow(index)"></i>
                        </el-tooltip>-->
                    </span>
                    <span class="col-md-2 col-xs-5">
                        <el-tooltip visible-arrow content="删除此云分析" placement="top" :popper-class="toolTipClass" effect="light">
                            <i class="iconfont icon-shanchu removeBtn" style="font-size:20px !important;" v-on:click="rems(vp.id,index)"></i>
                        </el-tooltip>
                        <el-tooltip visible-arrow content="折叠或展开" placement="top" effect="light" :popper-class="toolTipClass">
                            <i class="iconfont icon-zhediemianban" style="color:#a8a8a8;cursor:pointer;margin-left: 10px;font-size:20px !important;" v-on:click="toggleShow(index)"></i>
                            <!-- toggle-clould -->
                        </el-tooltip>
                    </span>
                </li>
                <li class="row spx active"  v-if="togglelist[index].boolean==true" v-for="(item,appindex) in vp.projectApps">
                    <span class="col-md-1 bn col-xs-1"></span>
                    <span class="col-md-1 bn col-xs-1"></span>
                     <input type="text" class="col-md-1  col-xs-4  pnormal" id="loginers" style="margin-top:4%" autofocus="autofocus" :title="item.appname" v-model="item.appname" v-if="item.appsindex==true" v-on:blur="chiBlur(item.appname,index,appindex,item.id)" >
                    <span class="col-md-1 bn col-xs-4 pnormal" :title="item.appname" @click="creatyy(index,appindex)" v-if="item.appsindex==false">{{item.appname}}</span>
                    <span class="col-md-7 text-left col-xs-3">
                        <p class="rate ">
                            <a v-for="(im,index) in item.appResults" id="as" class="col-xs-7" style="position:relative;cursor:pointer" v-on:click="onm(im.moduleId,item.id,im.taskStatus)"  >
                                <p class="ratelist" style="margin-bottom:38px!important" v-if="im.moduleId==1" :class="im.taskStatus==2?'clould-ed':((im.taskStatus==1)?'clould-ing':'clould-null')" >
                                    <span>{{im.moduleName}}</span>
                                </p>
                                <p class="ratelist" style="margin-bottom:38px!important"  v-if="im.moduleId==2" :class="im.taskStatus==2?'profit-ed':((im.taskStatus==1)?'profit-ing':'profit-null')" >
                                    <span>{{im.moduleName}}</span>
                                </p>
                                <p class="ratelist" style="margin-bottom:38px!important"  v-if="im.moduleId==3" :class="im.taskStatus==2?'affine-ed':((im.taskStatus==1)?'affine-ing':'affine-null')" >
                                    <span>{{im.moduleName}}</span>
                                </p>
                                <p class="ratelist" style="margin-bottom:38px!important"  v-if="im.moduleId==4" :class="im.taskStatus==2?'compare-ed':((im.taskStatus==1)?'compare-ing':'compare-null')" >
                                    <span>{{im.moduleName}}</span>
                                </p>
                                <p class="ratelist" style="margin-bottom:38px!important"  v-if="im.moduleId==5" :class="im.taskStatus==2?'group-ed':((im.taskStatus==1)?'group-ing':'group-null')" >
                                    <span>{{im.moduleName}}</span>
                                </p>
                                <p class="ratelist pMargin" style="margin-bottom:38px!important"  v-if="im.moduleId==6" :class="im.taskStatus==2?'group-eder':((im.taskStatus==1)?'group-inger':'grouper-null')" >
                                    <span>{{im.moduleName}}</span>
                                </p>
                                <span class="satatus" v-if="im.taskStatus==2">(已完成)</span>    
                                <span class="satatus" v-if="im.taskStatus==1">(分析中)</span>   
                                <span class="satatus" v-if="im.taskStatus==0">(未完成)</span>             <!--0=未做；1=已做未完成；2=已完成-->
                                <!--1云定性 2收益度 3亲和度 4比较标准 5资源配置 -->
                            </a>
                        </p>
                        <div class="progress" style="background:#f8f8f8">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60"
                                    aria-valuemin="0" aria-valuemax="100" :style="{width:item.percent+'%'}">
                            </div>
                        </div>
                        <span class="spc">{{item.percent}}%</span>                            
                    </span>
                     <span class="col-md-2 cs col-xs-3 remn" >
                        <el-tooltip visible-arrow content="删除此应用" placement="top" effect="light"  :popper-class="toolTipClass">
                            <i class="iconfont icon-shanchu" style="font-size:25px !important;padding-right: 10px;" v-on:click="remYy(item.id,index,appindex)" ></i>
                        </el-tooltip>
                        <el-tooltip visible-arrow content="查看综合报表" placement="top" effect="light"  :popper-class="toolTipClass">   
                            <i class="iconfont icon-chakan" v-on:click="Jips(item.id)" style="font-size:19px !important"></i>
                         </el-tooltip>
                        <!--<input type="button" value="删除应用" v-on:click="remYy(item.id)" title="删除应用" class="Jips"> 
                        <input type="button" value="查看综合报告" class="Jips" title="查看综合报告" id="Jips" v-on:click="Jips(item.id)" > --> 
                        <!--v-on:mouseover="treeTip()"-->
                    </span>
                </li>
            </ul>
        </li>
    </ul>

</div>
</div>   
</template>
<style>
.creatAll{
    width:114px !important;
}
#loginers{
    width:100px !important;
}
.proInput{
    margin-top:5px;
    height:70%;
   
}
#myInput:focus{
    border:1px solid #409EFF;
}
.page-login-toolTipClass{
    background:#FFF1DC !important;
    border:1px solid #F7A72C !important;
    color:#333333;
    border-radius:2px !important;
}
@media (max-width:1025px){
    p{
        margin:0 !important;
    }
    .ratelist span {
    display: inline-block;

    color: #666666;
}
  .weigh{
        text-align:left;
        width:75px;
         overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    }  
}
@media (max-width: 768px) {
    .remn{
        text-align:right;
    }
    .progress{
        width:100px; height:6px !important; border-radius:10px; border:1px solid #e4e4e4; display:inline-block; margin:25px 0 0 0;
    }
    .jinDus{
        text-indent: 0%;
    }
    .ratelist span{
        display: inline-block; padding-top:35px; color:#666666;
    }
    p{
        margin:0 !important;
    }
    .weigh{
        text-align:left;
        width:60px;
         overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    }
    
    .pnormal{
        display:inline-block;
        width:80px;
          overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align:right    
    }
   .proanmes{
       display:inline-block;
       overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width:40px;
   }
   .proanmess{
       display:inline-block;
       overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
   }
   .Jips{
    font-size:10px;
    text-align:center;
}
    .weight{
        font-size:10px;
    }
    .clould-ing{
    background:url('../../../../assets/overview/overview-clould-ing.png') no-repeat top center;
    background-size:60%;
}
.clould-ed{
    background:url('../../../../assets/overview/overview-clould-ed.png') no-repeat top center;
    background-size:60%;
}
.clould-null{
    background:url('../../../../assets/overview/overview-clould-null.png') no-repeat top center;
    background-size:60%;
}
.profit-ing{
    background:url('../../../../assets/overview/overview-profit-ing.png') no-repeat top center;
    background-size:60%;
}
.profit-ed{
    background:url('../../../../assets/overview/overview-profit-ed.png') no-repeat top center;
    background-size:60%;
}
.profit-null{
    background:url('../../../../assets/overview/overview-profit-null.png') no-repeat top center;
    background-size:60%;
}
.affine-ing{
    background:url('../../../../assets/overview/overview-affine-ing.png') no-repeat top center;
    background-size:60%;
}
.affine-ed{
    background:url('../../../../assets/overview/overview-affine-ed.png') no-repeat top center;
    background-size:60%;
}
.affine-null{
    background:url('../../../../assets/overview/overview-affine-null.png') no-repeat top center;
    background-size:60%;
}
.compare-ing{
    background:url('../../../../assets/overview/overview-compare-ing.png') no-repeat top center;
    background-size:60%;
}
.compare-ed{
    background:url('../../../../assets/overview/overview-compare-ed.png') no-repeat top center;
    background-size:60%;
}
.compare-null{
    background:url('../../../../assets/overview/overview-compare-null.png') no-repeat top center;
    background-size:60%;
}
.group-ing{
    background:url('../../../../assets/overview/overview-group-ing.png') no-repeat top center;
    background-size:60%;
}
.group-ed{
    background:url('../../../../assets/overview/overview-group-ed.png') no-repeat top center;
    background-size:60%;
}
.group-eder{
    background:url('../../../../assets/overview/group-eder.png') no-repeat top center;
    background-size:60%;
}
.group-inger{
    background:url('../../../../assets/overview/group-inger.png') no-repeat top center;
    background-size:60%;
}
.grouper-null{
    background:url('../../../../assets/overview/grouper-null.png') no-repeat top center;
    background-size:60%;
}
.group-null{
    background:url('../../../../assets/overview/overview-group-null.png') no-repeat top center;
    background-size:60%;
}
}
.PlansearchBox{
    float:right; padding-top:13px;
}
#myInput{
    border:1px solid #cccccc; width:192px; height:30px; padding:0 10px;
}
.PlansearchBtn{
   background:#da121a; width:42px; height:30px; color:#fff; float:right;
}
.PlansearchBtn:hover{
    background:#EF131D;
}
i{
    font-style:normal;
}
.Lists{
    position:relative; height:100%;
}
/**/
.overviewlist{
    /*min-height:500px;*/  background:#fff; padding:0 15px;
}
.overviewSearch{
     width:100%; 
}
.creatAll{
    background:#e41e2b;  height:30px; font-size:14px; color:#ffffff; text-align:center;
line-height:30px; float:left; margin-top:13px;
}
.creatAll:hover{
    background:#EF131D;
}
.weight{
    font-weight:bold;
    color:#555;
}
/**/
.removeIng{
    font-size:20px; text-align:right;
}
.toggle-clould{
    width: 0; height: 0; margin-left: 8px; display:inline-block; vertical-align: middle;border-top: 4px dashed; border-top: 4px solid; border-right: 4px solid transparent; border-left: 4px solid transparent; cursor:pointer;
    /*color:#e15e2d; margin-left:10px; cursor:pointer;*/
}
.removeBtn{
    font-size:16px; color:#a8a8a8; cursor:pointer;
}
.modle{
    position:absolute !important; left:0; top:0px; width:100%;height:100vh;opacity:0.94; background:#49494b; z-index:999;
}
.modle input{
    width:15%; height:15%; margin:25% 40%; text-align:center; color:#000; font-weight:900
}
.active{
    display:block;
  
}

#pol{
    display:BLOCK;
}
.sps{
    height:40px; background:#ebebeb; text-align:center; font-size:14px; color:#2b2b2b;line-height:40px;
}
.sps-overall{
    height:40px; background:#f6f9fd; text-align:center; font-size:14px; color:#2b2b2b;line-height:40px;
}
.cs{
    margin-top:40px; cursor:pointer; color:#a8a8a8; font-size:16px;position:relative
}
/*.spx{ 
   height:200px; 
}*/
.spx .bn{
    line-height:200px
}
.spx span .rate{
    margin-top:20px;
}

.spc{
    margin-left:5px; color:#000;
}
.progress-bar{
    background-color:#5db85b !important; border-radius:10px !important;
}
*{ margin:0;padding:0 }
ul li{
    list-style:none
}
a{
    text-decoration:none;  color:#333;
}
a:hover{
    text-decoration:none;  
}
.row a{
    display:inline-block; text-align:left; width:90px; margin:0 10px 0 0; text-align:center; 
}

/*.ratelist span{
    display: inline-block; padding-top:60px; color:#666666;
}*/
.satatus{
    color:#666666; font-size:12px;
}
@media (min-width: 992px) {
    .spsmedia{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
@media (min-width: 768px) {
    .ratelist{
        height:70px;
    }
    .progress{
     width:83%; margin:20px 0 0 0; height:6px !important; border-radius:10px; border:1px solid #e4e4e4; display:inline-block; margin:25px 0 0 21px !important;
} 
    .jinDus{
        text-indent: 20%;
    }
/*.ratelist span{
    padding-top:20px;
    }*/
.ratelist span{
    display: inline-block; padding-top:70px; color:#666666;
}
.pnormal{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
 }
    .proanmes{
       overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
   }
.Jips{
    font-size:12px;
    text-align:center;
}
.overviewSearch{
        height:57px;

}

.clould-ing{
    background:url('../../../../assets/overview/overview-clould-ing.png') no-repeat top center;
}
.clould-ed{
    background:url('../../../../assets/overview/overview-clould-ed.png') no-repeat top center;
}
.clould-null{
    background:url('../../../../assets/overview/overview-clould-null.png') no-repeat top center;
}
.profit-ing{
    background:url('../../../../assets/overview/overview-profit-ing.png') no-repeat top center;
}
.profit-ed{
    background:url('../../../../assets/overview/overview-profit-ed.png') no-repeat top center;
}
.profit-null{
    background:url('../../../../assets/overview/overview-profit-null.png') no-repeat top center;
}
.affine-ing{
    background:url('../../../../assets/overview/overview-affine-ing.png') no-repeat top center;
}
.affine-ed{
    background:url('../../../../assets/overview/overview-affine-ed.png') no-repeat top center;
}
.affine-null{
    background:url('../../../../assets/overview/overview-affine-null.png') no-repeat top center;
}
.compare-ing{
    background:url('../../../../assets/overview/overview-compare-ing.png') no-repeat top center;
}
.compare-ed{
    background:url('../../../../assets/overview/overview-compare-ed.png') no-repeat top center;
}
.compare-null{
    background:url('../../../../assets/overview/overview-compare-null.png') no-repeat top center;
}
.group-ing{
    background:url('../../../../assets/overview/overview-group-ing.png') no-repeat top center;
}
.group-ed{
    background:url('../../../../assets/overview/overview-group-ed.png') no-repeat top center;
}
.group-null{
    background:url('../../../../assets/overview/overview-group-null.png') no-repeat top center;
    
}
.group-eder{
    background:url('../../../../assets/overview/group-eder.png') no-repeat top center;
    
}
.group-inger{
    background:url('../../../../assets/overview/group-inger.png') no-repeat top center;
}
.grouper-null{
    background:url('../../../../assets/overview/grouper-null.png') no-repeat top center;
}
}

.ad{
    width:100px; margin-right:10px;
}
.notice-title{
    margin:0px !important;
}
.modle-title{
    width:610px; height:60px; text-align:center;  color:#ffffff;
}
.modle-title h1{
    font-size:26px; font-weight:normal;
}
.modle-title h1 span{
    letter-spacing:4px;
}
ul { 
 list-style: outside none none; 
 } 
 .slider, .slider-panel img, .slider-extra { 
    width: 610px;  height: 331px; 
 } 
 .slider { 
    text-align: center; margin: 30px auto; 
 } 
 .slider-panel, .slider-nav, .slider-pre, .slider-next { 
    position: absolute;  z-index: 8; 
 } 
 .slider .slider-pre{
     position: absolute;   right:100%; margin-right:42px;
 }
 .goprev-grev{
     background:url('../../../../assets/overview/left1.png') no-repeat;
 }
 .goprev-high{
     background:url('../../../../assets/overview/left2.png') no-repeat;
 }
.gonext-high{
     background:url('../../../../assets/overview/right2.png') no-repeat;
 }
 .gonext-grev{
     background:url('../../../../assets/overview/right1.png') no-repeat;
 }
 .slider .slider-next{
     position: absolute;  right:10%
 }
 .slider-panel { 
    position: absolute; 
 } 
 .slider-panel img { 
    border: none; 
 } 
 .slider-extra { 
    position: relative; 
 } 
 .slider-nav { 
    margin-left: -51px;  position: absolute;  left: 55%;  bottom: -20%; 
 } 
 .slider-nav li { 
    background:#a70f1d; border-radius: 100%;  color: #fff;  cursor: pointer;  margin: 0 2px;   overflow: hidden;  text-align: center; display: inline-block;  width:13px; height:13px; line-height: 18px; 
 } 
 .slider-nav .slider-item-selected { 
 background:#da121a; width:13px; height:13px; border-radius:100%;
 } 
 .slider-page a{ 
 width: 42px;  height: 42px;  position: absolute; top:74%; 
 }
 .slider-next { 
 left: 100%;  margin-left: 42px;; 
 } 
.cals{
position: relative; width:100%;
}
.creatCloud{
    background:#da121a;  border-radius:2px;  width:159px; height:42px; position:absolute; left: 36%; top: 110%; line-height:42px; font-size:16px; color:#ffffff; text-align:center; cursor: pointer; 
}
/*.Jips:hover{
      transform: scale(1.4);
}*/

/*.Jips{cursor:pointer;-webkit-animation: scaleout 1s infinite ease-in-out;animation: scaleout 1.5s infinite ease-in-out;}
@-webkit-keyframes scaleout{
    0% { -webkit-transform: scale(1.0) }
    10%{-webkit-transform: scale(1.1);
        opacity: 0.9;
    }
    25%{
        -webkit-transform: scale(1.15);
        opacity: 0.8;
    } 
    40%{-webkit-transform: scale(1.2);
        opacity: 0.7;
    }
    50%{
        -webkit-transform: scale(1.3);
        opacity: 0.6;
    }
    65%{
        -webkit-transform: scale(1.2);
        opacity: 0.7;
    }
    75%{
        -webkit-transform: scale(1.15);
        opacity: 0.8;
    }
    90%{
        -webkit-transform: scale(1.1);
        opacity: 0.9;
    }
    100% {
        -webkit-transform: scale(1.0);
        opacity: 1;
    }
      
}
@keyframes scaleout {
    0% { -webkit-transform: scale(1.0) }
    10%{-webkit-transform: scale(1.1);
        opacity: 0.9;
    }
    25%{
        -webkit-transform: scale(1.15);
        opacity: 0.8;
    } 
    40%{-webkit-transform: scale(1.2);
        opacity: 0.7;
    }
    50%{
        -webkit-transform: scale(1.3);
        opacity: 0.6;
    }
    65%{
        -webkit-transform: scale(1.2);
        opacity: 0.7;
    }
    75%{
        -webkit-transform: scale(1.15);
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
      
}*/

   #tplink{border:1px solid red; background:red;
         position:absolute;
          padding:1px;
          color:red;
          display:none;
        border-radius: 3px;
     }
     #Jips{
         position:relative
     }
</style>
<script>
   
    function myFuun(){
    var $sea=$('#myInput').val();
    var ase = $sea.toUpperCase();
    //先隐藏全部，再把符合筛选条件的值显示
    console.log($sea);
        $('.ulerts li').hide().filter(':contains('+$sea+')').show();
        $('.ulerts li').filter(':contains('+ase+')').show();
    };
export default {
    name:"overviewList",
    data (){
        return {
            vares:[],
            vars:[],
            vpd:[],
            ssd:[],
            ds:[],
            df:[],
            dg:"",
            gv:"",
            list:false,
            i:-1, 
            flag:false,
            togglelist:[],
            utype:'',
            welco:false,
            welcom:false,
           toolTipClass: 'page-login-toolTipClass'
            //{"ids":[1,2,3]}
        }
    },     
    methods:{
        createding:function(){
            this.utype =  sessionStorage.getItem("utype");
        
            this.$http.get('/broker/result/analysis').then((res)=>{
                this.vpd = eval("(" + res.bodyText +")").data;   //所有数据
            for(var h = 0;h<this.vpd.length;h++){
                    this.vars.push(false);
                    var a = this.vpd[h].projectApps;
                    for(var j=0;j<a.length;j++){
                        a[j].appsindex = false;
                    }
                }
                if(this.vpd.length==0){
                    this.flag=true
                }else{
                    this.flag=false
                }
                if( localStorage.getItem("as")){
                    var setAms = JSON.parse(localStorage.getItem("as"));
                    this.togglelist = setAms;
                }else{
                    for(let i = 0;i<this.vpd.length;i++){            
                        this.ssd = this.vpd[i].projectApps;
                        this.togglelist.push({boolean:true});              
                        // app   5个
                        console.log(this.ssd.length);
                        if(this.ssd.length>1){
                
                            $(".active").addClass("activs")
                        }
                        for(let j=0;j<this.ssd.length;j++){
                    
                            this.dg = this.ssd[j].appResults;
                        
                            for(let c = 0;c<this.dg.length;c++){
                                this.gv = this.dg[c].result;
                            }
                        }
                    }    
                }                    
                },(err)=>{
                    console.log("不好意思")
            })
        },
     
        bianjiZt:function(e){
            for(var h = 0;h<this.vpd.length;h++){
                 this.vars.push(false);
            }
             $(document).ready(function(){
                $("#loginers").focus();
            }); 
            this.vars[e] = true;
            console.log(this.vars[e]==true)
            console.log(this.vpd[e])
        },
        shiBlur:function(pronames,e,appid){
if(pronames==""){
                this.vars[e] = false;
                this.createding();
            }else if(pronames!==""){
                this.vars[e] = false;
                let obj = {
                    "analysisName":pronames,
                    "proId": appid,
                }
                this.$this.post("broker/app/update/name",obj).then((rus)=>{
                            this.createding();
                },(err)=>{
                    console.log("不好意思")
                })
            }if(pronames==""){
                this.vars[e] = false;
                this.createding();
            }else if(pronames!==""){
                this.vars[e] = false;
                let obj = {
                    "analysisName":pronames,
                    "proId": appid,
                }
                this.$this.post("broker/app/update/name",obj).then((rus)=>{
                            this.createding();
                },(err)=>{
                    console.log("不好意思")
                })
            }
        },
        creatyy:function(e,d){
            for(var h = 0;h<this.vpd.length;h++){
                 this.vars.push(false);
                  var a = this.vpd[h].projectApps;
                  for(var j=0;j<a.length;j++){
                      a[j].appsindex = false;
                  }
            }
             $(document).ready(function(){
                $("#loginers").focus();
            }); 
            this.vpd[e].projectApps[d].appsindex = true;
        },
        
        chiBlur:function(a,e,d,s){
            if(a==""){
                this.vpd[e].projectApps[d].appsindex =true;
                this.createding();
            }else if(a!==""){
                this.vpd[e].projectApps[d].appsindex = false;
                let obj = {
                    "appId":s,
                    "appName":a
                };
                console.log(obj)
                this.$this.post("broker/app/update/name",obj).then((rus)=>{
                    this.createding();
                },(err)=>{
                    console.log("不好意思")
                })
            }
        },
        myFun:function(){
            myFuun()
        },
        upDown:function(){
            this.welco = true;
            this.welcom = true;
        },
        Jips:function(even){
            console.log(even)
            this.$router.push({path:'/colligateReport',query:{id:even}});
        },
        // treeTip:function(e){
        //         var x=-210;
        //         var y=-160;
        //         this.myTitle=this.title;
        //         console.log(this.myTitle)
        //         this.title="123";
        //         var tooltip="<div id='tplink'>"+this.title+"</div>";   //创建DIV元素
        //         $(".cs").append(tooltip);     //追加到文档中
        //         $("#tplink").css({"top":"20px","left": "20px"}).show();    //设置X  Y坐标， 并且显示
           
        //         // this.title=this.myTitle;
        //         // $("#tplink").remove();    //移除
        //     // }).mousemove(function(e){
        //     //     $("#tplink").css({"top": (e.pageY+y) + "px","left": (e.pageX+x) + "px"});
            
        
        // },
             
        rems:function(e,index){
            var that = this;
            //   let ids=[];
            //             ids.push(e);
            //             var asf = {"ids":ids};
                        
            //             //console.log(asf);
            //             that.$this({
            //                 method: "delete",
            //                 url: "/broker/app/analysis",
            //                 data: asf
            //             }).then(function(response) {
                           
            //                window.location.reload();
            //             }).catch(function(error) {
            //                 console.log(error);
            //             });
            this.$confirm('您确定要删除该云分析下的所有应用吗？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    confirmButtonClass:'lay-btn-red',
                    cancelButtonClass:'lay-cancel-btn',
                    type: 'warning',
                    center: false
                    }).then(() => {
                        let ids=[];
                        ids.push(e);
                        var asf = {"ids":ids};
                        
                        //console.log(asf);
                        that.$this({
                            method: "delete",
                            url: "/broker/app/analysis",
                            data: asf
                        }).then(function(response) {
                          that.vpd.splice(index,1);
                        }).catch(function(error) {
                            console.log(error);
                        });
                    }).catch(() => {
              }); 
            // var con = this.$layer.confirm("您确定要删除该云分析下的所有应用吗?", async function () {
            //    let ids=[];

            // },function(){
            //      that.$layer.close(con);
            //         return ;
            // });
        },
        remYy:function(id,index,appindex){
            //console.log(id)
            var that = this;
             this.$confirm('您确定要删除该应用吗？', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    confirmButtonClass:'lay-btn-red',
                    cancelButtonClass:'lay-cancel-btn',
                    type: 'warning',
                    center: false
                    }).then(() => {
                       var ida = [];
                        that.vpd[index].projectApps.splice(appindex,1);
                        ida.push(id); //=也ok
                        var asg = {"ids":ida};
                        that.$this({
                            method: "delete",
                            url: "/broker/app/applications",
                            data: asg
                        }).then(function(response) {
                                that.$layer.close(con);
                            
                        }).catch(function(error) {
                            console.log(error);
                        })
                    }).catch(() => {
              });   
        },
        onm:function(n,o,b){
            var o = o;
            var n = n;
            if(n == 4){
                    this.$router.push({path:'/compareQuestion',query:{id:o}});
            }else if(n == 5){
                    this.$router.push({path:'/resourceGroup',query:{id:o}});
            }else if(n == 6){
                 this.$router.push({path:'/design',query:{id:o}});
            }else{
                    this.$router.push({path:'/planQuestion',query:{id:o,name:n}});
            }
            
        },
       
        UpRoute:function(){
            this.$router.push({path:'/CreateAnalysis',query:{type:'plan'}});
        },
        toggleShow:function(index){
          
            
            if(this.togglelist[index].boolean==true){
              
                this.togglelist[index].boolean=false;
                var setBoolean;
                setBoolean = JSON.stringify( this.togglelist );  //变字符串  存储里只能存字符串  把整个数组都存进去 而不是只存数组[index]的一个 
                localStorage.setItem("as",setBoolean);
            }else{
                
                this.togglelist[index].boolean=true;
                var setsBoolean;
                setsBoolean =  JSON.stringify( this.togglelist );
                localStorage.setItem("as",setsBoolean);
            }
        }
    },
    created:function(){
        this.createding();
    }}
</script>