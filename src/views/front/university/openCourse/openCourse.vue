<template>
<div class="openCourse">
    <!-- 悬浮框 -->
    <fixedbox></fixedbox>
    <!-- banner -->
    <div class="seleconeMain-banners  row openCourse-banner">
        <div class="container">
            <div class="seleconeMain-mainfir nfir col-xs-12 col-md-12" style="padding-left:50px">
                <p class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">智识学院</span></p>
                <div class="seclone-dv">
                    <h3 class="selecone-pfir" style="font-weight:100;text-align:center;font-size:26px;color:#ffffff">为您开始五彩缤纷的云世界</h3>
                </div>
                <p class="col-xs-12" style="margin-top:20px;margin-bottom:40px;text-align:center;padding:0 !important"><span class="openCourse-yu" v-on:click="yueclasss()">预约课程</span></p>
            </div>
        </div>
    </div>
    <!-- header -->
    <start active="4"></start>
    <!-- 副导航 -->
    <div class="smallnav" id="title-small" :class="isfixed==true?'titlesfixed':'container'">            
        <div class="" style="width:100%!important">
            <div class="col-md-6 col-xs-6 openCourse-titles-left">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#openCourse-outline')"><i class="iconfont icon-yaodian"></i> 公开课程大纲</a>
            </div>
            <div class="col-md-6 col-xs-6 openCourse-titles-right">
                <a href="javascript:;" class="hoover-a" v-on:click="jump('#openCourse-class')"><i class="iconfont icon-yuyue"></i> 预约课程</a>
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
                    <img src="../../../../assets/university/openCourse-outline2.png" alt="">
                    <div class="openCourse-outline-desc">云计算技术及行业应用</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list">
                    <img src="../../../../assets/university/openCourse-outline3.png" alt="">
                    <div class="openCourse-outline-desc">企业迁云的方法论</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list" style="margin-bottom:0 !important;">
                    <img src="../../../../assets/university/openCourse-outline4.png" alt="">
                    <div class="openCourse-outline-desc">雾计算技术及行业应用</div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="openCourse-outline-list" style="margin-bottom:0 !important;">
                    <img src="../../../../assets/university/openCourse-outline5.png" alt="">
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
                筛选Level：<select v-model="levelModel" v-on:change="selectLevel()" class="level-input">
                    <option v-for="item in levelList" :value="item.value">{{item.name}}</option>
                </select>
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
                    <span><i class="iconfont icon-tubiao-"></i>{{item.realname}}</span>
                    <span><i class="iconfont icon-xunzhang"></i>Level {{item.level}}</span>
                    <span style="color:#333;"><i class="iconfont icon-shijian"></i>{{item.begin_time}}<span style="color:#999;margin-left:10px;">未开始</span></span>
                </div>
                <div class="openCourse-class-desc">{{item.course_desc}}</div>
                <button class="openCourse-class-yu" v-on:click="yuyue(item)" v-if="islogin==null || islogin==true&&item.isapponit==false || islogin==false">我要预约</button>
                <button class="openCourse-class-oldyu" disabled v-if="islogin==true&&item.isapponit==true">已预约</button>
            </div>
        </div>
    </div>
    <div class="adviser-page">
        <el-pagination class="adviser-page-bg"  background layout="prev, pager, next" :page-size="10" :total="Number(total)" @current-change="handleCurrentChange">
        </el-pagination>
    </div>
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
                    2、也可以通过<span class="univeristy-bz">Prof. 吴</span>和<span class="univeristy-bz">400-828-7308</span>直接与我们沟通。
                </div>
            </div>
            <div class="opendia-btn">
                <button class="opendia-btn-save" v-on:click="fixsubmit()">提交</button>
                <button class="opendia-btn-cel" v-on:click="cancel()">再想想</button>
            </div>   
        </div>         
    </el-dialog>
    <!-- 预约课程弹框可选择 -->
    <el-dialog title="确认预约" :visible.sync="classchage" style="text-align:left;" class="opendia">
        <div class="opendia-box">
            <div class="opendia-list">
                <div class="row">
                    <div class="col-md-3 opendia-key" style="line-height:30px;">课程讲师：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">
                        <el-select class="opendia-select" v-model="teacher" placeholder="请选择讲师" v-on:change="selctclass()">
                            <el-option class="opendia-option" v-for="item in cafelist" :label="item.realname" :value="item.userProfessor.username" :key="JSON.stringify(item.userProfessor.username)"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="opendia-list" v-if="teacher!=''">
                <div class="row">
                    <div class="col-md-3 opendia-key" style="line-height:30px;">开课内容：</div>
                    <div class="col-md-9" style="padding-left:0px !important;color:#da121a;">
                        <el-select class="opendia-select" v-model="classMain" placeholder="请选择课程">
                            <el-option class="opendia-option" v-for="item in classlist" :label="item.cname" :value="item" :key="JSON.stringify(item)"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="opendia-list" style="line-height:30px;" v-if="teacher!=''">
                <div class="row">
                    <div class="col-md-3 opendia-key">开课时间：</div>
                    <div class="col-md-9" style="padding-left:0px !important;">{{classMain.beginTime}}</div>
                </div>
            </div>           
            <div class="">
                <div class="opendia-notice">
                    <p>温馨提示：</p>
                    1、预约成功我们的专职客服经理会尽快与您联系。<br>
                    2、也可以通过<span class="univeristy-bz">Prof. 吴</span>和<span class="univeristy-bz">400-828-7308</span>直接与我们沟通。
                </div>
            </div>
            <div class="opendia-btn">
                <button class="opendia-btn-save" v-on:click="submit()">提交</button>
                <button class="opendia-btn-cel" v-on:click="cancel2()">再想想</button>
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
import '../openCourse/openCourse.css';
import start from '../../../../components/SecondaryPages/SecondaryPages.vue';
import finish from '../../../../components/SecondaryPages/SecondaryFooter.vue';
import fixedbox from '../../../../components/SecondaryPages/protalFixed.vue';
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
            information:'',
            dialogPhone:false,
            phone:'',
            code:'',
            codenotice:'获取验证码',
            phonenotice:'',
            isphone:null,
            countI:60,
            codeerror:'',
            iscode:null,
            classchage:false,
            cafelist:[],
            teacher:'',
            classMain:'',
            classlist:[],
            total:'',
            levelList:[{name:'不限',value:''}],
            levelModel:'',
            islogin:null
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        if(JSON.parse(sessionStorage.getItem("account"))){
            this.islogin = true;
        }else{
            this.islogin = false;
        }
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
         this.getcafe();
         this.getLevel();
    },
    methods:{
        selectLevel:function(){
            if(this.levelModel!=''){
                let arr = this.levelModel.split('-');
                this.datastr.leavel = arr[arr.length-1];
            }else{
                this.datastr.leavel = this.levelModel;
            }
            this.getlist();
        },
        getLevel:function(){
            ///broker/prop/typedata/-1/qq
            this.$this.get('/broker/prop/typedata/tp-level/-1').then((response)=>{
                for(let i=0;i<response.data.data.length;i++){
                    this.levelList.push(response.data.data[i]);
                }
                this.datastr.leavel = '';
            }).catch((error)=>{
            })
        },
        cancel:function(){
            this.dialogclass = false;
        },
        cancel2:function(){
            this.classchage = false;
        },
        handleCurrentChange:function(val){
            this.datastr.pageReq.page = val-1;
            this.getlist();
        },
        getcafe:function(){
            this.$this.get('/broker/prof/getList').then((response)=>{
                this.cafelist = response.data.data;
            }).catch((error)=>{

            })
        },
        selctclass:function(){
            this.$this.get('/broker/prof/getCourse/'+this.teacher).then((response)=>{
                this.classMain = response.data.data[0];
                this.classlist = response.data.data;
                //this.cafelist = response.data.data;
            }).catch((error)=>{

            })
        },
        yueclasss:function(){
            if(sessionStorage.getItem("account")){
                if(JSON.parse(sessionStorage.getItem("account")).phone!=null){
                    this.classchage = true;
                }else{//手机号弹框
                    this.dialogPhone = true;
                }
            }else{
                this.$router.push({path:'/login',query:{univeristy:'openCourse'}});
            }
        },
        submit:function(){
            this.classchage = false;
            this.fixclass.apponitUser = this.information.username;
            this.fixclass.cid = this.classMain.id;
            this.$this.post('/broker/apponit/saveApponitCourse',JSON.stringify(this.fixclass)).then((response)=>{
                if(response.data.code==1){
                    //预约成功
                    this.$message({
                        message: '您已预约成功。',
                        customClass:'lay-msg',
                        iconClass:'el-icon-success',
                        duration:1000
                    });
                }
            }).catch((error)=>{
            })
        },
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
                        this.phonenotice = '手机号已被注册使用，请输入其他手机号。';
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
            if(this.isphone ==true ){
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
        getlist:function(){
            let str = JSON.stringify(this.datastr);
            this.$this.post('/broker/prof/courseList',str).then((response)=>{
                //console.log('---',response.data);
                this.list = response.data.data.content;
                this.total = response.data.data.totalElements;
            }).catch((error)=>{

            })
        },
        yuyue:function(item){
            this.checkcontent = item;
            if(sessionStorage.getItem("account")){
                if(JSON.parse(sessionStorage.getItem("account")).phone!=null){
                    this.dialogclass = true;
                }else{//手机号弹框
                    this.dialogPhone = true;
                }
                
            }else{
                this.$router.push({path:'/login',query:{univeristy:'openCourse'}});
            }
            
        },
        fixsubmit:function(){
            this.dialogclass = false;
            this.fixclass.apponitUser = this.information.username;
            this.fixclass.cid = this.checkcontent.course_id;
            this.$this.post('/broker/apponit/saveApponitCourse',JSON.stringify(this.fixclass)).then((response)=>{
                if(response.data.code==1){
                    //预约成功
                    this.$message({
                        message: '您已预约成功。',
                        customClass:'lay-msg',
                        iconClass:'el-icon-success',
                        duration:1000
                    });
                }
            }).catch((error)=>{
            })
        },
        jump:function(dom){
            $('html,body').animate({scrollTop:$(dom).offset().top-100}, 800);
        },
    },
    components:{
        start,
        finish,
        fixedbox
    },
}
</script>
