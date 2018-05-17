<template>
<div class="teamDetail">
    <!-- 悬浮框 -->
    <fixedbox></fixedbox>
    <!-- banner11 -->
    <div class="seleconeMain-banners  row teamDetail-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">智识学院</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">为您开始五彩缤纷的云世界</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="teamDetail-yu" v-on:click="yuyue()">预约大咖</span></p>
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
                <a href="javascript:;" class="hoover-a" v-on:click="jump(item)"><i class="iconfont" :class="item=='大咖介绍'?'icon-daka1':item=='资质和荣誉'?'icon-zizhirenzheng':item=='工作经历'?'icon-gongzuojingli':item=='专业特长'?'icon-zan':item=='原创专区'?'icon-yuanchuangicon':''" style="margin-right:5px;"></i>{{item}}</a>
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
        <div class="teamDetail-introduce-list row" v-if="bigcafe!=''">
            <div class="col-md-4 teamDetail-introduce-img">
                <img :src="bigcafe.userProfessor.headSideImg" alt="">
                <div class="clear"></div>
            </div>
            <div class="col-md-8">
                <div class="teamDetail-introduce-name">{{bigcafe.realname}}</div>
                <div class="teamDetail-introduce-honour">{{bigcafe.userProfessor.title}}</div>
                <div class="teamDetail-introduce-desc">{{bigcafe.userProfessor.desc}}</div>
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
                <img src="../../../../assets/university/detail-rongyu.png" alt="">
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
            <div class="col-md-12 teamDetail-jobs-list" v-for="(item,index) in jobs"><span class="teamDetail-index">{{index+1}}、</span>{{item}}</div>
        </div>
    </div>
    <!-- 专业特长 --> 
    <div class="container teamDetail-introduce" id="teamDetail-tc" v-if="isshow.tc==true" style="margin-bottom:50px;">
        <div class="teamDetail-outline-title">
            <span class="teamDetail-outline-title-line"></span>
            <span class="teamDetail-outline-title-desc">专业特长</span>
        </div>
        <div class="row">
            <div class="col-md-6" v-for="item in tc">
                <div class="teamDetail-tc-img">
                    <img src="../../../../assets/university/detail-techang.png" alt="">
                </div>
                <div class="teamDetail-tc-title">{{item}}</div>
            </div>
        </div>
    </div>
    <!-- 原创专区 -->  
    <div class="container teamDetail-introduce" id="teamDetail-yuan" v-if="isshow.yuan==true" style="margin-bottom:50px;">
        <div class="teamDetail-outline-title">
            <span class="teamDetail-outline-title-line"></span>
            <span class="teamDetail-outline-title-desc">原创专区</span>
        </div>
        <div class="teamDetail-honour-list row">
            <div class="col-md-12 teamDetail-honour-item teamDetail-yuan" v-for="item in yuan">
                <!-- <div class="teamDetail-yuan-img">
                    <img :src="item.imgUrl" alt="">
                </div> -->
                <div class="teamDetail-yuan-desc" v-for="item in yuan">{{item}}</div>
            </div>
        </div>
    </div>  
    <!--  -->
    <div style="background:#ededed;;width:100%;height:auto;">
        <div class="seleconeMain-footer">
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
            <div class="teamdia-list">
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
                    2、也可以通过<span class="univeristy-bz">Prof. 吴</span>和<span class="univeristy-bz">400-828-7308</span>直接与我们沟通。
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
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
import fixedbox from '../../../../components/SecondaryPages/protalFixed.vue';
import '../teamDetail/teamDetail.css';
export default {
    name:'teamDetail',
    data(){
        return {
            phoneBox:false,
            isfixed:false,
            bigcafe:'',
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
            },
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
            teach:'',
            information:'',
            date:''
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        this.date = new Date();
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
         this.getlist();
    },
    methods:{
        submit:function(){
            this.apponitProf.pid = this.teach;
            this.dialogteam = false;
            this.apponitProf.appointTime = this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDate()+' '+this.date.getHours()+':'+this.date.getMinutes()+':'+this.date.getSeconds();
            this.apponitProf.apponitUser = JSON.parse(sessionStorage.getItem("account")).username;
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
        yuyue:function(item){
            if(sessionStorage.getItem("account")){
                if(JSON.parse(sessionStorage.getItem("account")).phone!=null){
                    this.dialogteam = true;
                }else{//手机号弹框
                    this.dialogPhone = true;
                }
            }else{
                this.$router.push({path:'/login',query:{univeristy:'teamDetail'}});
            }
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
                        this.isphone = false;
                        this.phonenotice = '该手机号已使用';
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
            if(this.isphone ==true){
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
                for(let i=0;i<response.data.data.length;i++){
                   if(response.data.data[i].userProfessor.id==this.$route.query.bigcafeId){
                       this.bigcafe = response.data.data[i];
                   }
               }
               console.log(this.bigcafe);
            }).catch((error)=>{
            })
        },
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
                        //this.bigcafe = response.data.data[i];
                    }else if(response.data.data[i].name=='资质和荣誉' && response.data.data[i].props.length>0){
                        this.honour = response.data.data[i];
                        this.isshow.honour = true;
                    }else if(response.data.data[i].name=='工作经历' && response.data.data[i].props.length>0){
                        //this.jobs = response.data.data[i];
                        this.isshow.jobs = true;
                        //console.log(response.data.data[i].descs);
                        for(let j=0;j<response.data.data[i].props[0].descs.length;j++){
                            if(response.data.data[i].props[0].descs[j]!=''){
                                this.jobs.push(response.data.data[i].props[0].descs[j]);
                            }
                        }
                    }else if(response.data.data[i].name=='专业特长' && response.data.data[i].props.length>0){
                        //this.tc = response.data.data[i];
                        this.isshow.tc = true;
                        for(let n=0;n<response.data.data[i].props[0].descs.length;n++){
                            if(response.data.data[i].props[0].descs[n]!=''){
                                this.tc.push(response.data.data[i].props[0].descs[n]);
                            }
                        }
                    }else if(response.data.data[i].name=='原创专区' && response.data.data[i].props.length>0){
                        //this.yuan = response.data.data[i];
                        this.isshow.yuan = true;
                        for(let f=0;f<response.data.data[i].props[0].descs.length;f++){
                            if(response.data.data[i].props[0].descs[f]!=''){
                                this.yuan.push(response.data.data[i].props[0].descs[f]);
                            }
                        }
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
    },
    components:{
        start,
        finish,
        fixedbox
    },
}
</script>

