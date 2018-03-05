<template>
<div class="register">
    <div class="reg-header">
        <router-link to="/"><img class="reg-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="row" style="padding-bottom:100px;">
        <div class="col-md-4"></div>
        <div class="reg-from col-md-4">
            <!--<div class="reg-from-title">欢迎注册ClouldBroker²</div>-->
            <div class="reg-from-tab">
                <div class="reg-tab-list" :class="selectTab==true?'border-active':'border-default'" v-on:click="Tab('email')"><i class="iconfont icon-youxiang1" style="margin-right:5px;font-size:16px !important;"></i>邮箱注册</div>
                <div class="reg-tab-list" :class="selectTab==false?'border-active':'border-default'" v-on:click="Tab('phone')"><i class="iconfont icon-shouji" style="margin-right:5px;"></i>手机注册</div>
            </div>
            <!-- 邮箱注册 -->
            <div class="tab-box" v-if="selectTab==true">
                <div class="reg-from-list" :class="isphone==true?'error':''">
                    <i class="xing">*</i>
                    <!-- <span class="reg-from-key">手机号码：</span> -->
                    <span class="reg-from-key">用户邮箱：</span>
                    <input type="text" class="reg-from-val" v-model="phone" v-on:focus="notice('phone')" v-on:blur="reg('phone')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='phonetrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isphone">{{phoneError}}</div>
                    <div :class="isphone==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="ispassword==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">设置密码：</span>
                    <input type="password" class="reg-from-val" v-model="password" v-on:focus="notice('password')" v-on:blur="reg('password')">
                    <ul class="reg-from-prompt reg-password" v-show="isnotice=='passwordtrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="ispassword">{{passError}}</div>
                    <div :class="ispassword==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="isagainPas==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">确认密码：</span>
                    <input type="password" class="reg-from-val" v-model="againPassword" v-on:focus="notice('againPassword')" v-on:blur="reg('againPassword')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='againPasswordtrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isagainPas">{{againPassError}}</div>
                    <div :class="isagainPas==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="isconfirm==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">公司名称：</span>
                    <input type="text" class="reg-from-val" v-model="confirm" v-on:focus="notice('confirm')" v-on:blur="reg('confirm')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='confirmtrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isconfirm">请输入您的公司名称</div>
                    <div :class="isconfirm==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="isusername==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">用户姓名：</span>
                    <input type="text" class="reg-from-val" v-model="username" v-on:focus="notice('username')" v-on:blur="reg('username')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='usernametrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isusername">请输入您的姓名</div>
                    <div :class="isusername==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list">
                    <i class="xing" style="color:#fff !important;">*</i>
                    <span class="reg-from-key">所属行业：</span>
                    <select class="business indus" v-model="industry">
                        <option v-for="item in industryList" :value="item">{{item.name}}</option>
                    </select>
                </div>
                <div class="reg-from-list">
                    <i class="xing" style="color:#fff !important;">*</i>
                    <span class="reg-from-key">区域：</span>
                    <select class="city_tab" v-model="province" v-on:change="changeProvince(province)">
                        <option v-for="item in provinceList" :value="item">{{item.province}}</option>
                    </select>
                    <select v-model="city" class="city_tab" v-on:change="changeCity(city)">
                        <option v-for="item in cityList" :value="item">{{item.city}}</option>
                    </select>
                    <select v-model="areas" class="city_tab">
                        <option v-for="item in areasList" :value="item">{{item.area}}</option>
                    </select>
                </div>
            </div>
            <!-- 手机注册 -->
            <div class="tab-box" v-else>
                <div class="reg-from-list" :class="isphone==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">手机号码：</span>
                    <input type="text" class="reg-from-val" v-model="phone" v-on:focus="notice('phone')" v-on:blur="reg('phone')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='phonetrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isphone">{{phoneError}}</div>
                    <div :class="isphone==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="ispassword==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">设置密码：</span>
                    <input type="password" class="reg-from-val" v-model="password" v-on:focus="notice('password')" v-on:blur="reg('password')">
                    <ul class="reg-from-prompt reg-password" v-show="isnotice=='passwordtrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="ispassword">{{passError}}</div>
                    <div :class="ispassword==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="isagainPas==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">确认密码：</span>
                    <input type="password" class="reg-from-val" v-model="againPassword" v-on:focus="notice('againPassword')" v-on:blur="reg('againPassword')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='againPasswordtrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isagainPas">{{againPassError}}</div>
                    <div :class="isagainPas==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="isconfirm==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">公司名称：</span>
                    <input type="text" class="reg-from-val" v-model="confirm" v-on:focus="notice('confirm')" v-on:blur="reg('confirm')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='confirmtrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isconfirm">请输入您的公司名称</div>
                    <div :class="isconfirm==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="isusername==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">用户姓名：</span>
                    <input type="text" class="reg-from-val" v-model="username" v-on:focus="notice('username')" v-on:blur="reg('username')">
                    <ul class="reg-from-prompt reg-phone" v-show="isnotice=='usernametrue'">
                        <li v-for="item in noticeWord">{{item.text}}</li>
                    </ul>
                    <div class="error-color error-notice" v-show="isusername">请输入您的姓名</div>
                    <div :class="isusername==false?'right':'null'">
                        <img class="svg" src="../../../assets/right.svg" alt="">
                    </div>
                </div>
                <div class="reg-from-list" :class="iscodeNum==true?'error':''">
                    <i class="xing">*</i>
                    <span class="reg-from-key">验证码：</span>
                    <input type="text" class="cede-input" v-model="codeNum">
                    <button class="getcode-btn" v-on:click="getCode()">{{code}}</button>
                    <div class="clear"></div>
                    <div class="error-color error-notice" v-show="iscodeNum">{{codenotice}}</div>
                </div>
                <div class="reg-from-list">
                    <i class="xing" style="color:#fff !important;">*</i>
                    <span class="reg-from-key">所属行业：</span>
                    <select class="business" v-model="industry">
                        <option v-for="item in industryList" :value="item">{{item.name}}</option>
                    </select>
                </div>
                <div class="reg-from-list">
                    <i class="xing" style="color:#fff !important;">*</i>
                    <span class="reg-from-key">区域：</span>
                    <select class="city_tab" v-model="province" v-on:change="changeProvince(province)">
                        <option v-for="item in provinceList" :value="item">{{item.province}}</option>
                    </select>
                    <select v-model="city" class="city_tab" v-on:change="changeCity(city)">
                        <option v-for="item in cityList" :value="item">{{item.city}}</option>
                    </select>
                    <select v-model="areas" class="city_tab">
                        <option v-for="item in areasList" :value="item">{{item.area}}</option>
                    </select>
                </div>
            </div>
            <!--  -->
            <button class="reg-from-btn" :class="isusername==true?'mt-20':''" v-on:click="agree()">同意并注册</button>
            <div class="reg-from-agreement">
                <input type="checkbox" class="reg-from-checkoux" v-model="checkbox">
                <!--<a href="javascript:;">勾选，即表示您阅读切统一同意我们的《 CSB服务协议》</a>-->
                <router-link target="_blank" to="/agreenment" style="float:left;width:90% !important;text-align:left;">勾选，即表示您阅读且统一同意我们的《CSB²服务协议》</router-link>
            </div>
            <div class="clear"></div>
            <!--<div class="reg-from-null"></div>-->
            <div class="reg-from-notice">
                已有CloudBroker²账号？
                <router-link class="placego" to="/login">请登录</router-link>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
    <div class="reg-footer">
        <p class="reg-foot-list">版权所有 © 2018 江苏京玉信息技术有限公司&nbsp&nbsp&nbsp&nbsp&nbsp<a style="color:#969696" href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备18002559号-2</a>&nbsp&nbspTEL：400-828-7308</p>
    </div>
    <router-view></router-view>
</div>
</template>
<script>


import '../register/register.css'
export default{
    name:'register',
    data () {
        return {
            phone:'',
            checkbox:true,
            password:'',
            againPassword:'',
            confirm:'',
            username:'',
            isnotice:'',
            noticeWord:[],
            isphone:null,
            ispassword:null,
            isagainPas:null,
            isconfirm:null,
            isusername:null,
            phoneError:'',
            passError:'',
            againPassError:'',
            selectTab:true,
            codeNum:'',
            code:'获取手机验证码',
            codeI:60,
            iscodeNum:false,
            codenotice:'',
            provinceList:[],
            province:'',
            cityList:[],
            city:'',
            areasList:[],
            areas:'',
            industry:'',
            industryList:''
        }
    },
    mounted:function(){
        this.getProvince();
        this.getIndustry();
    },
    methods:{
        getIndustry:function(){
            this.$this.get('/broker/prop/industry/').then((response)=>{
                this.industry = response.data.data[0];
                this.industryList = response.data.data;
                //console.log('province',response);
            }).catch((error)=>{
            })
        },
        getProvince:function(){
            this.$this.get('/broker/prop/provinces/').then((response)=>{
                this.province = response.data.data[0];
                this.getCity(response.data.data[0].provinceid);
                this.provinceList = response.data.data;
                //console.log('province',response);
            }).catch((error)=>{
            })
        },
        changeProvince:function(sheng){
            this.city = '';
            this.area = '';
            this.getCity(sheng.provinceid);
        },
        getCity:function(provinceid){
            this.$this.get('/broker/prop/citys/'+provinceid).then((response)=>{
                this.cityList = response.data.data;
                this.city = response.data.data[0];
                this.getArea(response.data.data[0].cityid);
                //console.log('city',response);
            }).catch((error)=>{
            })
        },
        changeCity:function(city){
            this.area = '';
            this.getArea(city.cityid);
        },
        getArea:function(cityid){
            this.$this.get('/broker/prop/areas/'+cityid).then((response)=>{
                this.areas = response.data.data[0];
                this.areasList = response.data.data;
                //console.log('city',response);
            }).catch((error)=>{
            })
        },
        notice:function(dom){
            if(dom=='phone'){
                this.isnotice = 'phonetrue';
                if(this.selectTab==true){
                     this.noticeWord = [{text:'请输入您的邮箱'}];
                }else{
                    this.noticeWord = [{text:'请输入您的手机号码'}];
                }
            }else if(dom=='password'){
                this.isnotice = 'passwordtrue';
                this.noticeWord = [
                    {text:'密码为6-16个字符'},
                    {text:'只能包含字母、数字、及标点符号（除空格）'},
                    {text:'字母、数字和标点符号至少包含2种'}
                ];
            }else if(dom=='againPassword'){
                this.isnotice = 'againPasswordtrue';
                this.noticeWord = [{text:'请再次输入您的密码'}];
            }else if(dom=='confirm'){
                this.isnotice = 'confirmtrue';
                this.noticeWord = [{text:'请输入您的公司名称'}];
            }else if(dom=='username'){
                this.isnotice = 'usernametrue';
                this.noticeWord = [{text:'请输入您的姓名'}];
            }
        },
        reg:function(dom){
            let emailReg = /^[A-Z|a-z|0-9]+([-_.][A-Z|a-z|0-9]+)*@([A-Z|a-z|0-9]+[-.])+[A-Z|a-z|0-9]{2,5}$/; 
            let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
            let passwordReg = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/;
            if(dom=='phone'){
                this.isnotice = 'phonefalse';
                if(this.selectTab==true){
                    if(emailReg.test(this.phone)==false){
                        this.isphone = true;
                        this.phoneError = '请输入正确的邮箱格式';
                    }else{
                        let that = this;
                        this.$this.get('/broker/auth/check/'+this.phone+'/').then((response)=> {
                            //console.log(response);
                            if(response.data.data==true){
                                that.isphone = false;
                            }else{
                                that.isphone = true;
                                //that.phoneError = '您的手机号已被注册';
                                that.phoneError = '您的邮箱已被注册';
                            }
                        }).catch((error)=> {
                            console.log(error);
                        });
                    }
                }else{
                    if(this.phone==''){
                        this.isphone = true;
                        this.phoneError = '请输入您的手机号码';
                    }else if(phoneReg.test(this.phone)==false){
                        this.isphone = true;
                        this.phoneError = '请输入正确的手机格式';
                    }else{
                        let that = this;
                        this.$this.get('/broker/auth/check/'+this.phone+'/').then((response)=> {
                            //console.log(response);
                            if(response.data.data==true){
                                that.isphone = false;
                            }else{
                                that.isphone = true;
                                that.phoneError = '您的手机号已被注册';
                            }
                        }).catch((error)=> {
                            console.log(error);
                        });
                    }
                }
            }else if(dom=='password'){
                this.isnotice = 'passwordfalse';
                if(this.password==''){
                    this.ispassword = true;
                    this.passError = '请输入您的密码';
                }else{
                    passwordReg.test(this.password)==true?this.ispassword=false:this.ispassword=true;this.passError = '请输入正确的密码格式';
                }
            }else if(dom=='againPassword'){
                this.isnotice = 'againPasswordfalse';
                if(this.againPassword==''){
                    this.isagainPas = true;
                    this.againPassError = '请再次输入密码';
                }else{
                    this.againPassword==this.password?this.isagainPas=false:this.isagainPas=true;this.againPassError = '两次密码输入不一致';
                }
            }else if(dom=='confirm'){
                this.isnotice = 'confirmphonefalse';
                this.confirm==''?this.isconfirm = true:this.isconfirm = false;
            }else if(dom=='username'){
                this.isnotice = 'usernamefalse';
                this.username==''?this.isusername = true:this.isusername = false;
            }
        },
        agree:function(){
            if(this.selectTab == true){
                this.registerEmail();
            }else{
                this.registerPhone();
            }
        },
        Tab:function(dom){
            if(dom=='email'){
                this.selectTab = true;
                this.iscodeNum = false;
                this.restting();
            }else{
                this.selectTab = false;
                this.iscodeNum = '';
                this.restting();
            }
        },
        getCode:function(){
            if(this.isphone==false){
                let self = this;
                this.codeHttp();
                let clear = setInterval(function(){
                    self.codeI--;
                    self.code = self.codeI+'s';
                    if(self.codeI==0){
                        clearInterval(clear);
                        self.codeI = 60;
                        self.code = '重新获取验证码';
                    }
                },1000)
            }else{
                if(this.phone==''){
                    this.isphone = true;
                    this.phoneError = '请输入您的手机号码';
                }
            }
        },
        codeHttp:function(){
            let obj = {
                    mobile: this.phone,
                    type: '',
                    username: '',
                    validCode: ''
                };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/sms/send/code/register',str).then((reponse)=>{
                console.log('手机验证码',reponse);
            }).catch((error)=>{})
        },
        registerEmail:function(){
            if( this.isphone==false && this.ispassword==false && this.isagainPas==false && this.isconfirm==false && this.isusername==false && this.checkbox==true){
               let obj = {
                        "password": this.password,
                        "email": this.phone,
                        "realname": this.username,
                        "tenant": this.confirm,
                        "areaid":this.areas.areaid,
                        "cityid":this.city.cityid,
                        "provinceid":this.province.provinceid,
                        "industry":this.industry.id
                };
                let strObj = JSON.stringify(obj);
                let that = this;
                this.$this.post('/broker/auth/register/email',strObj).then((response)=>{
                    //console.log(response);
                    if(response.data.code==1){
                        //console.log(11111);
                        //this.send(response.data.data.username);
                        this.$router.push({path:'/sendEmail',query:{email:this.phone,username:response.data.data.username}});                    
                    }else if(response.data.code==-1){
                        this.$alert('您的邮箱已被注册，请更换邮箱。', '温馨提示', {
                            confirmButtonText: '我知道了',
                            showClose:false,
                            confirmButtonClass:'lay-btn-red',
                            type: 'warning',
                            callback:function(action){
                                this.isphone=true;
                            }
                        });
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }else{
                this.phone!=''?this.isphone=false:this.isphone=true;this.phoneError = '请输入您的邮箱';
                if(this.password==''){
                    this.passError = '请输入您的密码';
                    this.ispassword=true;
                }else{
                    this.ispassword=false;
                }
                this.againPassword!=''?this.isagainPas=false:this.isagainPas=true;this.againPassError = '请再次输入密码';
                this.confirm==''?this.isconfirm=true:this.isconfirm=false;
                this.username==''?this.isusername=true:this.isusername=false;
                if(this.checkbox==false){
                    this.$layer.msg('请阅读服务协议');
                }
            }
        },
        registerPhone:function(){
            if( this.isphone==false && this.ispassword==false && this.isagainPas==false && this.isconfirm==false && this.isusername==false && this.checkbox==true && this.iscodeNum == false){
               let obj = {
                        "password": this.password,
                        "phone": this.phone,
                        "realname": this.username,
                        "tenant": this.confirm,
                        "areaid":this.areas.areaid,
                        "cityid":this.city.cityid,
                        "provinceid":this.province.provinceid,
                        "industry":this.industry.id
                };
                let strObj = JSON.stringify(obj);
                let that = this;
                this.$this.post('/broker/auth/register/mobile/'+this.codeNum,strObj).then((response)=>{
                    //console.log('phone',response);
                    if(response.data.code==1){
                       this.$router.push({path:'/activate?phone'});  
                    }else if(response.data.code==0){
                        this.codenotice = '您输入的验证码不正确';
                        this.iscodeNum = true;
                    }else if(response.data.code==-1){
                        this.$alert('您的手机号已被注册，请更换手机号。', '温馨提示', {
                            confirmButtonText: '我知道了',
                            showClose:false,
                            confirmButtonClass:'lay-btn-red',
                            type: 'warning',
                            callback:function(action){
                                this.isphone=true;
                            }
                        });
                    }
                }).catch((error)=>{
                })
            }else{
                this.phone!=''?this.isphone=false:this.isphone=true;this.phoneError = '请输入您的手机号';
                if(this.password==''){
                    this.passError = '请输入您的密码';
                    this.ispassword=true;
                }else{
                    this.ispassword=false;
                }
                if(this.codeNum==''){
                    this.codenotice = '请输入验证码';
                    this.iscodeNum = true;
                }else{
                    this.iscodeNum = false;
                }
                this.againPassword!=''?this.isagainPas=false:this.isagainPas=true;this.againPassError = '请再次输入密码';
                this.confirm==''?this.isconfirm=true:this.isconfirm=false;
                this.username==''?this.isusername=true:this.isusername=false;
                if(this.checkbox==false){
                    this.$layer.msg('请阅读服务协议');
                }
            }
        },
        send:function(username){
            this.$this.get('/broker/mail/send/validCode/'+username).then((response)=>{
                //console.log('------',response);
                this.$router.push({path:'/sendEmail',query:{email:this.phone,username:username}});
            }).catch((error)=>{
            })   
        },
        restting:function(){
            this.phone='';
            this.checkbox=true;
            this.password='';
            this.againPassword='';
            this.confirm='';
            this.username='';
            this.isnotice='';
            this.noticeWord=[];
            this.isphone=null;
            this.ispassword=null;
            this.isagainPas=null;
            this.isconfirm=null;
            this.isusername=null;
            this.phoneError='';
            this.passError='';
            this.againPassError='';
            this.codeNum='';
            this.code='获取手机验证码';
            this.codeI=60;
        }
    },
    component:{
    }
}

</script>