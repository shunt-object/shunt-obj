<template>
<div class="teamDetail">
    <!-- 悬浮框 -->
    <div class="fixed-box">
        <ul class="fixed-ul">
            <li class=" liHoversBj" v-on:mouseenter="phoneEnter()" v-on:mouseleave="phoneleave()">
               <a href="tel:4008287308" style="color:#fff"><img src="../../../../assets/homePage-phone.png" class="fixed-icon" alt=""></a>
                <div v-show="phoneBox" class="phone-box liHoversBj"><img src="../../../../assets/alertPhone.png" alt="" style="width:100%;height:100%"></div>
            </li>
            <li id="xiaowei"  class="liHoversBj phone-li" v-on:click="xiaowei"> <img src="../../../../assets/homePage-online.png" class="fixed-icon" alt=""></li>
        </ul>
        <img src="../../../../assets/scroll.png" alt="" class="scrollUp" style="width:47px;height:47px;">
    </div>
    <!-- banner -->
    <div class="seleconeMain-banners  row teamDetail-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">鲸鱼学院</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">为您开始五彩缤纷的云世界</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="teamDetail-yu">预约大咖</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!-- 副导航 -->
    <div class="smallnav" id="title-small" :class="isfixed==true?'titlesfixed':'container'">            
        <div class="" style="width:100%!important">
            <div class="col-md-1 col-xs-1"></div>
            <div class="col-md-2 col-xs-2" v-for="item in titlelist">
                <a href="javascript:;" class="hoover-a" v-on:click="jump(item)"><i class="iconfont icon-shenpiliucheng"></i>{{item}}</a>
            </div>
            <div class="col-md-1 col-xs-1"></div>
        </div>
    </div>
    <div class="teamDetail-line"></div>
    <!-- 大咖介绍 -->
    <div class="container teamDetail-introduce" id="teamDetail-introduce">
        <div class="teamDetail-outline-title">
            <span class="teamDetail-outline-title-line"></span>
            <span class="teamDetail-outline-title-desc">大咖介绍</span>
        </div>
        <div class="teamDetail-introduce-list row">
            <div class="col-md-4 teamDetail-introduce-img">
                <img src="../../../../assets/university/openCourse-class.png" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="teamDetail-introduce-name">戴剑</div>
                <div class="teamDetail-introduce-honour">微吼直播优秀讲师</div>
                <div class="teamDetail-introduce-desc">20年IT行业从业经验（涉及系统集成、软件开发等领域），15年IT服务管理经验（涉及专项服务、技术支持、运维保障、顾问咨询等领域），12年高校工作经验（涉及教学及教务管理） 曾为海关总署、国税总局、中国移动、中国联通、国家开发银行、日本三菱银行、中国惠普、西门子（中国）。</div>
            </div>
        </div>
    </div> 
    <!-- 资质和荣誉 -->
    <div class="container teamDetail-introduce" id="teamDetail-honour" v-if="isshow.honour==true">
        <div class="teamDetail-outline-title">
            <span class="teamDetail-outline-title-line"></span>
            <span class="teamDetail-outline-title-desc">资质和荣誉</span>
        </div>
        <div class="teamDetail-honour-list row">
            <div class="col-md-4 teamDetail-honour-item" v-for="item in honour.props">
                <img :src="item.imgUrl" alt="">
                <div class="teamDetail-honour-desc">{{item.desc}}</div>
            </div>
        </div>
    </div>  
    <!-- 工作经历 --> 
    <div class="container teamDetail-introduce" id="teamDetail-jobs" v-if="isshow.jobs==true">
        <div class="teamDetail-outline-title">
            <span class="teamDetail-outline-title-line"></span>
            <span class="teamDetail-outline-title-desc">工作经历</span>
        </div>
        <div class="row">
            <div class="col-md-12 teamDetail-jobs-list" v-for="item in jobs.props">{{item.desc}}</div>
        </div>
    </div>
    <!-- 专业特长 --> 
    <div class="container teamDetail-introduce" id="teamDetail-tc" v-if="isshow.tc==true">
        <div class="teamDetail-outline-title">
            <span class="teamDetail-outline-title-line"></span>
            <span class="teamDetail-outline-title-desc">专业特长</span>
        </div>
        <div class="row">
            <div class="col-md-6" v-for="item in tc.props">
                <div class="teamDetail-tc-img">
                    <img :src="item.imgUrl" alt="" style="width:100%;height:100%;margin:0;">
                </div>
                <div class="teamDetail-tc-title">{{item.desc}}</div>
                <!-- <div class="teamDetail-tc-desc">20年IT行业从业经验（涉及系统集成、软件开发等领域），15年IT服务管理经验（涉及专项服务、技术支持、运维保障、顾问咨询等领域）。12年高校工作经验（涉及教学及教务管理）曾为海关总署、国税总局、中国移动、中国联通、国家开发银行、日本三菱银行、中国惠普、西门子（中国）。</div> -->
            </div>
        </div>
    </div>
    <!-- 原创专区 -->  
    <div class="container teamDetail-introduce" id="teamDetail-yuan" v-if="isshow.yuan==true">
        <div class="teamDetail-outline-title">
            <span class="teamDetail-outline-title-line"></span>
            <span class="teamDetail-outline-title-desc">原创专区</span>
        </div>
        <div class="teamDetail-honour-list row">
            <div class="col-md-4 teamDetail-honour-item teamDetail-yuan" v-for="item in yuan.props">
                <div class="teamDetail-yuan-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="teamDetail-honour-desc">{{item.desc}}</div>
            </div>
        </div>
    </div>  
    <!--  -->
    <div style="background:#ededed;;width:100%;height:auto;">
        <div class="seleconeMain-footer row">
            <div class="container text-left" style="width:60%;padding-left:cd30px;">
                    <div class="col-md-3 col-xs-12" style="margin-top:27px;margin-bottom:20px;"><img src="../../../../assets/qian.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">5天无理由退款</span></div>
                    <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../../assets/24fuwu.png" alt="" style="width:18%;margin-right:10px"><span style="font-size:14px;color:#333333">7×24小时顾问支持</span></div>
                    <div class="col-md-3 col-xs-12 juzhong " style="margin-top:27px;margin-bottom:20px;"><img src="../../../../assets/1fuwu.png" alt="" style="width:18%;margin-right:10px;" class="imgeys"><span style="font-size:14px;color:#333333">1V1专家服务</span></div>
                    <div class="col-md-3 col-xs-12 juright" style="margin-top:27px;margin-bottom:20px;padding-right:40px !important;"><img src="../../../../assets/90fuwu.png" alt="" style="width:22%;margin-right:10px"><span style="font-size:14px;color:#333333">90秒极速响应</span></div>
            </div>
        </div>
    </div>
    <finish></finish>
</div>
</template>
<script>
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
import '../teamDetail/teamDetail.css';
export default {
    name:'teamDetail',
    data(){
        return {
            phoneBox:false,
            isfixed:false,
            bigcafe:[],
            honour:[],
            jobs:[],
            tc:[],
            yuan:[],
            titlelist:['大咖介绍'],
            isshow:{
                bigcafe:false,
                honour:false,
                jobs:false,
                tc:false,
                yuan:false
            }
        }
    },
    mounted:function(){
        let readytop = $(window).scrollTop();
        let _top = $(".smallnav").offset().top;
        let that = this;
        if(readytop>=_top){
            this.isfixed = true;
        }else{
            this.isfixed = false;
        }
         $(window).scroll(function(){
            if($(this).scrollTop()>=_top){
                that.isfixed = true;
            }else{
                that.isfixed = false;
            }
            //console.log('----',$(this).scrollTop());
         })
         this.getteam();
    },
    methods:{
        getteam:function(){
            this.$this.get('/broker/prof/propList/'+this.$route.query.bigcafeId).then((response)=>{
                //console.log('---',response.data);
                for(let i=0;i<response.data.data.length;i++){
                    if(response.data.data[i].name!='大咖介绍'){
                        if(response.data.data[i].props.length>0){
                            this.titlelist.push(response.data.data[i].name);
                        }
                    }
                    if(response.data.data[i].name=='大咖介绍'){
                        this.bigcafe = response.data.data[i];
                    }else if(response.data.data[i].name=='资质和荣誉' && response.data.data[i].props.length>0){
                        this.honour = response.data.data[i];
                        this.isshow.honour = true;
                    }else if(response.data.data[i].name=='工作经历' && response.data.data[i].props.length>0){
                        this.jobs = response.data.data[i];
                        this.isshow.jobs = true;
                    }else if(response.data.data[i].name=='专业特长' && response.data.data[i].props.length>0){
                        this.tc = response.data.data[i];
                        this.isshow.tc = true;
                    }else if(response.data.data[i].name=='原创专区' && response.data.data[i].props.length>0){
                        this.yuan = response.data.data[i];
                        this.isshow.yuan = true;
                    }
                }
            }).catch((error)=>{

            })
        },
        jump:function(dom){
            let box;
            if(dom=='大咖介绍'){
                box = '#teamDetail-introduce';
            }else if(dom=='资质和荣誉'){
                box = '#teamDetail-introduce';
            }else if(dom=='工作经历'){
                box = '#teamDetail-jobs';
            }else if(dom=='专业特长'){
                box = '#teamDetail-tc';
            }else if(dom=='原创专区'){
                box = '#teamDetail-yuan';
            }
            $('html,body').animate({scrollTop:$(box).offset().top}, 800);
        },
        phoneEnter:function(){
            this.phoneBox = true;
        },
        phoneleave:function(){
                this.phoneBox = false;
        },
        xiaowei:function(){
            var win = window.open("http://xiaowei.io/chat/pc/index.html?appid=3311&style=red","_blank","height=600,width=500","top=0,left=0,toolbar=yes,menubar=yes,scrollbars=no,resizable=no,location=no,status=no");
        },
    },
    components:{
        start,
        finish
    },
}
</script>

