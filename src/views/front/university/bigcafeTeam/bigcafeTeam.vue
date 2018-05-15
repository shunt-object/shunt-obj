<template>
<div class="bigcafeTeam total">
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
    <div class="seleconeMain-banners  row bigcafeTeam-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">云集国内数百位云专家</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">打造适合、实战、专业的云课程体系</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="bigcafeTeam-yu" v-on:click="yuyue(0)">预约大咖</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!--  -->
    <div class="smallnav" id="title-small" :class="isfixed==true?'titlesfixed':'container'">            
        <div class="" style="width:100%!important">
            <div class="col-md-6 col-xs-6 bigcafeTeam-titles-left">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#bigcafe-team')"><i class="iconfont icon-tuandui1"></i> 大咖团队</a>
            </div>
            <div class="col-md-6 col-xs-6 bigcafeTeam-titles-right">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#bigcafe-desc')"><i class="iconfont icon-daka1"></i> 大咖介绍</a>
            </div>
        </div>
    </div>
    <div class="bigcafeTeam-line"></div>
    <!-- 大咖团队 --> 
    <div class="container bigcafe-team" id="bigcafe-team">
        <div class="bigcafe-team-title">
            <span class="bigcafe-team-title-line"></span>
            <span class="bigcafe-team-title-desc">大咖团队</span>
        </div>
        <div class="bigcafe-team-specialty row ">
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople1.png" alt="">
                </div>
                <div class="bigcafe-specialty-world">大咖</div>
                <div class="bigcafe-specialty-desc">云计算、大数据、人工智能 <br> 和区块链等技术的翘楚</div>
            </div>
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople2.png" alt="">
                </div>
                <div class="bigcafe-specialty-world">资深</div>
                <div class="bigcafe-specialty-desc">相关领域实践工作经验平均超15年</div>
            </div>
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople3.png" alt="">
                </div>
                <div class="bigcafe-specialty-world">品牌</div>
                <div class="bigcafe-specialty-desc">均来自国际国内一流IT厂商</div>
            </div>
            <div class="col-md-3 bigcafe-specialty-list">
                <div class="bigcafe-specialty-img">
                    <img src="../../../../assets/university/teampeople4.png" alt="" style="margin-top:30px;">
                </div>
                <div class="bigcafe-specialty-world">VIP </div>
                <div class="bigcafe-specialty-desc">1V1顾问资源，传递 IT前沿知识，答疑解惑</div>
            </div>
        </div>
    </div>
    <!-- 大咖介绍-->
    <div class="container bigcafe-desc  bigcafe-team" id="bigcafe-desc">
        <div class="bigcafe-team-title">
            <span class="bigcafe-team-title-line"></span>
            <span class="bigcafe-team-title-desc">大咖介绍</span>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="item in cafelist">
                <div class="bigcafe-desc-list">
                    <img :src="item.userProfessor.headImg" alt="" v-on:click="teamdetail(item.userProfessor.id)">
                    <div class="bigcafe-desc-name" v-on:click="teamdetail(item.userProfessor.id)">{{item.realname}}</div>
                    <div class="bigcafe-desc-jobs" v-on:click="teamdetail(item.userProfessor.id)">{{item.userProfessor.title}}</div>
                    <div class="bigcafe-desc-honour" v-on:click="teamdetail(item.userProfessor.id)">{{item.userProfessor.desc}}</div>
                    <button class="bigcafe-desc-btn" v-on:click="yuyue(item)">我要预约</button>   
                </div>
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
    <el-dialog title="确认预约" :visible.sync="dialogteam" style="text-align:left;" class="teamdia">
        <div class="teamdia-box">
            <div class="teamdia-list" v-if="alllist==true">
                <div class="row">
                    <div class="col-md-3 teamdia-key"><span style="color:#da121a;">*</span>预约顾问：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <el-select class="opendia-select" v-model="teach" placeholder="请选择讲师">
                            <el-option class="opendia-option" v-for="item in cafelist" :label="item.realname" :value="item.userProfessor.id" :key="JSON.stringify(item.userProfessor.id)"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="teamdia-list">
                <div class="row">
                    <div class="col-md-3 teamdia-key"><span style="color:#da121a;">*</span>预约时间：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <el-date-picker popper-class="bigcafe-time" v-model="apponitProf.appointTime" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions0" value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <div class="teamdia-list">
                <div class="row">
                    <div class="col-md-3 teamdia-key">预约事由：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <textarea class="teamdia-text" v-model="apponitProf.reason"></textarea>
                    </div>
                </div>
            </div>
            <div class="teamdia-list">
                <div class="row">
                    <div class="col-md-3 teamdia-key">备注：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <textarea class="teamdia-input" v-model="apponitProf.remark"></textarea>
                    </div>
                </div>
            </div>           
            <div class="">
                <div class="teamdia-notice">
                    <p>温馨提示：</p>
                    1、预约成功我们的专职客服经理会尽快与您联系。<br>
                    2、也可以通过Prof. 吴和400-828-7308直接与我们沟通。<br>
                </div>
            </div>
            <div class="teamdia-btn">
                <button class="teamdia-btn-save" v-on:click="submit()">确定</button>
                <button class="teamdia-btn-cel" v-on:click="cancel()">取消</button>
            </div>   
        </div>         
    </el-dialog>
    <!-- 手机号弹框 -->
    <el-dialog title="绑定手机" :visible.sync="dialogPhone" style="text-align:left;" class="opendia">
        <div class="opendia-box">
            <div class="opendia-list">
                <div class="row">
                    <div class="col-md-3 opendia-key">手机号码</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <input type="tel" placeholder="请输入手机号" class="dialogPhone-input" v-model="phone" v-on:blur="phoneOff()" :class="isphone==false?'phoneerror':''">
                        <button class="dialogPhone-codebtn" v-on:click="getcode()">{{codenotice}}</button>
                        <div style="color:red" v-if="isphone==false">{{phonenotice}}</div>
                    </div>
                </div>
            </div> 
            <div class="opendia-list">
                <div class="row">
                    <div class="col-md-3 opendia-key">短信验证码</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <input type="tel" placeholder="请输入4位数字验证码" v-on:blur="codeOff()" :class="iscode==false?'phoneerror':''" v-model="code" style="width:98%;padding:0 10px;height:30px;border-radius:2px;border:1px solid #ebebeb;">
                        <div v-if="iscode==false" style="color:red;">{{codeerror}}</div>
                    </div>
                </div>
            </div>
            <div class="opendia-list" style="padding:0 20px;">
                <div class="row">
                    <button class="dialogPhone-btn" v-on:click="confirm()">确认</button>
                </div>
            </div>
        </div>        
    </el-dialog>
</div>
</template>
<script>
import '../bigcafeTeam/bigcafeTeam.css';
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
export default {
    name:'bigcafeTeam',
    data(){
        return {
            phoneBox:false,
            isfixed:false,
            cafelist:[],
            dialogteam:false,
            dialogPhone:false,
            phone:'',
            code:'',
            codenotice:'获取验证码',
            phonenotice:'',
            isphone:null,
            countI:60,
            codeerror:'',
            iscode:null,
            date:'',
            pickerOptions0:{
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7
                }
            },
            apponitProf:{
                appointTime: "",
                apponitUser: "",
                pid: '',
                reason: "",
                remark: ""
            },
            checkedItem:'',
            teach:'',
            alllist:false,
            information:''
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        this.date = new Date();
        this.apponitProf.appointTime = this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDate()+' '+this.date.getHours()+':'+this.date.getMinutes()+':'+this.date.getSeconds();
        this.apponitProf.apponitUser = JSON.parse(sessionStorage.getItem("account")).username;
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
        yuyue:function(item){
            if(item!=0){
                this.alllist = false;
                this.checkedItem = item;
            }else{
                this.alllist = true;
            }
            if(sessionStorage.getItem("account")){
                if(JSON.parse(sessionStorage.getItem("account")).phone!=null){
                    this.dialogteam = true;
                }else{//手机号弹框
                    this.dialogPhone = true;
                }
            }else{
                this.$router.push({path:'/login',query:{univeristy:'openCourse'}});
            }
        },
        submit:function(){
            if(this.alllist==true){
                this.apponitProf.pid = this.teach;
            }else{
                this.apponitProf.pid = this.checkedItem.userProfessor.id;
            }
            this.dialogteam = false;
            this.$this.post('/broker/apponit/saveApponitProf',JSON.stringify(this.apponitProf)).then((response)=> {
                //console.log(response);
                this.apponitProf = {
                    appointTime: this.apponitProf.appointTime,
                    apponitUser: this.apponitProf.apponitUser,
                    pid: '',
                    reason: "",
                    remark: ""
                };
                this.$message({
                    message: '您已预约成功。',
                    customClass:'lay-msg',
                    iconClass:'el-icon-success',
                    duration:1000
                });
            }).catch((error)=> {
                console.log(error);
            });
        },
        cancel:function(){
            this.dialogteam = false;
        },
        // 手机弹框开始
        phoneOff:function(){
            let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
            if(this.phone==''){
                this.phonenotice = '请输入手机号码';
                this.isphone = false;
            }else if(phoneReg.test(this.phone)==false){
                this.isphone = false;
                this.phonenotice = '请输入正确的手机号码';
            }else{
                this.$this.get('/broker/auth/check/'+this.phone+'/').then((response)=> {
                    //console.log(response);
                    if(response.data.data==true){
                        this.isphone = true;
                    }else{
                        that.isphone = false;
                        that.phonenotice = '您的手机号已被注册';
                    }
                }).catch((error)=> {
                    console.log(error);
                });
            }
            
        },
        codeOff:function(){
            if(this.code==''){
                this.iscode = false;
                this.codeerror = '请输入验证码';
            }else if(this.code.length>4){
                this.iscode = false;
                this.codeerror = '请输入4位数的验证码';
            }else{
                this.iscode = true;
            }
        },
        getcode:function(){
            let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
            if(this.phone!='' && phoneReg.test(this.phone)==true){
                this.codeHttp();             
            }
        },
        codeHttp:function(){
            let obj = {
                mobile:this.phone,
                type:true,
                username:this.information.username,
                validCode:''
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/sms/send/code/bind',str).then((response)=>{
                //console.log('----',response.data.code);
                if(response.data.code==1){
                    this.$message({
                        message: '验证码已成功发送到您的手机，请注意查收。',
                        customClass:'lay-msg',
                        iconClass:'el-icon-success',
                        duration:1000
                    });
                    let self = this;
                    let clear = setInterval(function(){
                        self.countI--;
                        self.codenotice = self.countI+'s';
                        if(self.countI==0){
                            clearInterval(clear);
                            self.countI = 60;
                            self.codenotice = '重新获取';
                        }
                    },1000)
                }
            }).catch((error)=>{
            })
        },
        confirm:function(){
            let obj = {
                mobile:this.phone,
                type:true,
                username:this.information.username,
                validCode:this.code
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/user/setting/mobile',str).then((response)=>{
                //console.log('解绑',response);
                if(response.data.code==-1){//验证码已超时
                    this.iscode = false;
                    this.codeerror = '验证码请求超时，请重新发送验证码。';
                }else if(response.data.code==1){
                    this.iscode = true;
                    this.dialogPhone = false;
                    this.information.phone = this.phone;
                    let string = JSON.stringify(this.information);
                    sessionStorage.setItem("account",string);
                    this.$message({
                        message: '您已成功绑定手机。',
                        customClass:'lay-msg',
                        iconClass:'el-icon-success',
                        duration:1000
                    });
                }
            }).catch((error)=>{
            })
        },
        // 手机弹框结束
        getlist:function(){
            this.$this.get('/broker/prof/getList').then((response)=>{
                //console.log('---',response.data);
                this.cafelist = response.data.data;
                this.teach = this.cafelist[0].userProfessor.id;
            }).catch((error)=>{
            })
        },
        jump:function(dom){
            $('html,body').animate({scrollTop:$(dom).offset().top-100}, 800);
        },
        teamdetail:function(cafeid){
            //console.log(cafeid);
            this.$router.push({path:'/teamDetail',query:{bigcafeId:cafeid}});
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

