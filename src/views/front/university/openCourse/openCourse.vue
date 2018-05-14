<template>
<div class="openCourse">
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
    <div class="seleconeMain-banners  row openCourse-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">鲸鱼学院</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">为您开始五彩缤纷的云世界</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="openCourse-yu">预约课程</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!-- 副导航 -->
    <div class="smallnav" id="title-small" :class="isfixed==true?'titlesfixed':'container'">            
        <div class="" style="width:100%!important">
            <div class="col-md-6 col-xs-6 openCourse-titles-left">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#openCourse-outline')"><i class="iconfont icon-mn_gongneng"></i> 公开课程大纲</a>
            </div>
            <div class="col-md-6 col-xs-6 openCourse-titles-right">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#openCourse-class')"><i class="iconfont icon-shenpiliucheng"></i> 预约课程</a>
            </div>
        </div>
    </div>
    <div class="openCourse-line"></div>
    <!-- 公开课程大纲  -->
    <div class="container openCourse-outline" id="openCourse-outline">
        <div class="openCourse-outline-title">
            <span class="openCourse-outline-title-line"></span>
            <span class="openCourse-outline-title-desc">公开课程大纲</span>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">
                        信息通信产业发展<br>的背景和趋势
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">云计算技术及行业应用</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">企业迁云的方法论</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list" style="margin-bottom:0 !important;">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">雾计算技术及行业应用</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list" style="margin-bottom:0 !important;">
                    <img src="../../../../assets/university/openCourse-outline1.png" alt="">
                    <div class="openCourse-outline-desc">云计算发展趋势和展望</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 预约课程 -->
    <div class="container openCourse-class" id="openCourse-class"> 
        <div class="openCourse-outline-title">
            <span class="openCourse-outline-title-line"></span>
            <span class="openCourse-outline-title-desc">预约课程</span>
        </div>
        <div class="openCourse-check">
            <div class="openCourse-check-box">
                <button class="openCourse-check-btn">公开课程</button>
            </div>
            <div class="openCourse-select">
                筛选Level：<select name="" id=""></select>
            </div>
            <div class="clear"></div>
        </div>
        <div class="openCourse-class-list row" v-for="item in list">
            <div class="col-md-4 openCourse-class-img">
                <img :src="item.url" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="openCourse-class-name">{{item.cname}}</div>
                <div class="openCourse-class-honour">
                    <span><i class="iconfont icon-mn_gongneng"></i>{{item.realname}}</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>Level {{item.level}}</span>
                    <span><i class="iconfont icon-mn_gongneng"></i>{{item.begin_time}}   未开始</span>
                </div>
                <div class="openCourse-class-desc">{{item.desc}}</div>
                <button class="openCourse-class-yu" v-on:click="yuyue(item)">我要预约</button>
            </div>
        </div>
    </div>
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
    <!-- 预约课程弹框 -->
    <el-dialog title="确认预约" :visible.sync="dialogclass" style="text-align:left;" class="opendia">
        <div class="opendia-box">
            <div class="opendia-list">
                <div class="row">
                    <div class="col-md-3 opendia-key">课程讲师：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        {{checkcontent.realname}}
                    </div>
                </div>
            </div>
            <div class="opendia-list">
                <div class="row">
                    <div class="col-md-3 opendia-key">开课内容：</div>
                    <div class="col-md-9" style="padding-left:0px !important;color:#da121a;">
                        {{checkcontent.cname}}
                    </div>
                </div>
            </div>
            <div class="opendia-list">
                <div class="row">
                    <div class="col-md-3 opendia-key">开课时间：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        {{checkcontent.begin_time}}
                    </div>
                </div>
            </div>           
            <div class="">
                <div class="opendia-notice">
                    <p>温馨提示：</p>
                    1、预约成功我们的专职客服经理会尽快与您联系。<br>
                    2、也可以通过Prof. 吴和400-828-7308直接与我们沟通。<br>
                </div>
            </div>
            <div class="opendia-btn">
                <button class="opendia-btn-save" v-on:click="fixsubmit()">提交</button>
                <button class="opendia-btn-cel">再想想</button>
            </div>   
        </div>         
    </el-dialog>
</div>
</template>
<script>
import '../openCourse/openCourse.css';
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
export default {
    name:'openCourse',
    data(){
        return {
            phoneBox:false,
            isfixed:false,
            dialogclass:false,
            datastr:{
                leavel: '',//级别
                pageReq: {
                    page: '0',//页数
                    size: '10',//数量
                },
                status: ''//状态  2==回放 不传==正常的
            },
            list:[],
            checkcontent:{},
            fixclass:{
                apponitUser:'',
                cid:''
            },
            information:''
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
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
         this.getlist();
    },
    methods:{
        getlist:function(){
            let str = JSON.stringify(this.datastr);
            this.$this.post('/broker/prof/courseList',str).then((response)=>{
                //console.log('---',response.data);
                this.list = response.data.data.content;
            }).catch((error)=>{

            })
        },
        yuyue:function(item){
            this.checkcontent = item;
            if(sessionStorage.getItem("account")){
                if(this.information){
                    this.dialogclass = true;
                }else{
                    //手机号弹框
                }
                
            }else{
                this.$router.push({path:'/login',query:{univeristy:'openCourse'}});
            }
            
        },
        fixsubmit:function(){
            this.dialogclass = false;
            this.fixclass.apponitUser = this.information.username;
            this.fixclass.cid = this.checkcontent.course_id;
            this.$this.post('/broker/prof/saveApponitCourse',JSON.stringify(this.fixclass)).then((response)=>{
                if(response.data.code==1){
                    //预约成功
                }
            }).catch((error)=>{
            })
        },
        jump:function(dom){
            $('html,body').animate({scrollTop:$(dom).offset().top-100}, 800);
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
