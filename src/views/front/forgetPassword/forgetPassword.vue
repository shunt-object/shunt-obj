<template>
<div class="forgetPass">
    <div class="forget-header">
        <router-link to="/"><img class="login-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="forget-main row">
        <div class="col-md-3"></div>
        <div class="col-md-6 forget-box">
            <div class="forget-step">
                <div class="move-block w-37">
                    <span class="move-circle cir-act">1</span>
                    <p class="move-title">填写登录账号</p>
                    <span class="move-line" :class="index>0?'line-act':'line-moren'"></span>
                </div>
                <div class="move-block w-25">
                    <span class="move-circle" :class="index>1?'cir-act':'cir-moren'">2</span>
                    <p class="move-title">验证身份</p>
                    <span class="move-line" :class="index>1?'line-act':'line-moren'"></span>
                </div>
                <div class="move-block w-25">
                    <span class="move-circle" :class="index>2?'cir-act':'cir-moren'">3</span>
                    <p class="move-title">重置密码</p>
                    <span class="move-line" :class="index>2?'line-act':'line-moren'"></span>
                </div>
                <div class="move-block w-10">
                    <span class="move-circle" :class="index>3?'cir-act':'cir-moren'">4</span>
                    <p class="move-title text10">完成</p>
                </div>
            </div>
            <div class="forget-content">
                <div class="forget-list" v-if="index==0||index==1">
                    <div class="forget-username" v-if="index==0" :class="isRegister==true?'error':''">
                        <input type="text" class="username-input" v-model="useraccount" placeholder="请输入注册手机号或注册邮箱">
                        <button class="username-btn" v-on:click="check()">确认</button>
                    </div>
                    <div class="forget-type" v-if="index==1">
                        <p class="forget-desc">您正在为<span class="color">{{accountNum}}</span></p>
                        <p class="forget-desc">修改密码，请选择身份验证方式。</p>
                        <button class="forget-type-btn" v-on:click="test('phone')" v-if="typeP==true">通过您的手机验证</button>
                        <button class="forget-type-btn" v-on:click="test('email')" v-if="typeE==true">通过您的邮箱验证</button>
                    </div>
                </div>
                <div class="forget-list" v-if="index==2">
                    <div v-if="or=='phone'">
                        <div class="forget-code" :class="isphonenum==false?'':'error'">
                            <span>手机号码：</span>
                            <input type="text" v-on:blur="regPhone()" placeholder="请输入手机号" class="code-input" v-model="phonenum">
                        </div>
                        <div class="forget-code" :class="isphonecode==false?'':'error'">
                            <span>验&nbsp;证&nbsp;&nbsp;码：</span>
                            <input type="text" placeholder="请输入验证码" class="code-input" v-model="phonecode">
                            <button class="code-btn" :disabled="disabledP" v-on:click="phoneCode()">
                                {{countP}}<span v-if="countP!='发送验证码'&&countP!='重新发送'">s</span>
                            </button>
                        </div>
                    </div>
                    <div v-if="or=='email'">
                        <div class="forget-code" :class="isemailnum==false?'':'error'">
                            <span>邮箱账号：</span>
                            <input type="text" placeholder="请输入邮箱" v-on:blur="regEmail()" class="code-input" v-model="emailnum">
                        </div>
                        <div class="forget-code" :class="isemailcode==false?'':'error'">
                            <span>验&nbsp;证&nbsp;&nbsp;码：</span>
                            <input type="text" placeholder="请输入验证码" class="code-input" v-model="emailcode">
                            <button class="code-btn" :disabled="disabledE" v-on:click="emailCode()">
                                {{countE}} <span v-if="countE!='发送验证码'&&countE!='重新发送'">s</span>
                            </button>
                        </div>
                    </div>
                    <button class="forget-type-btn mt-50" v-on:click="confirm()">确认</button>
                </div>
                <div class="forget-list" v-if="index==3">
                    <div class="forget-code" :class="isone==true?'error':''">
                        <span class="passkey" placeholder="6-16位字母、数字和标点符号包含2种">新密码：</span>
                        <input type="password" class="code-input" placeholder="密码为6-16个字符,字母、数字和标点符号至少包含2种" v-model="password" v-on:foucs="enter('one')" v-on:blur="leave('one')">
                    </div>
                    <div class="forget-code" :class="istwo==true?'error':''">
                        <span class="passkey">确认新密码：</span>
                        <input type="password" class="code-input" v-model="passwordA" v-on:foucs="enter('two')" v-on:blur="leave('two')">
                    </div>
                    <button class="forget-type-btn mt-50" v-on:click="passwordyes()">确认</button>
                </div>
                <div class="forget-list" v-if="index==4">
                    <img src="../../../assets/front/activate-success.png" class="activate-img for-success-img" alt="">
                    <div class="forget-success">密码更改成功</div>
                    <router-link to="/login" class="forget-type-btn mt-70">立即登录</router-link>
                </div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
</template>
<script>
import '../forgetPassword/forgetPassword.css'
export default{
    name:'forgetPassword',
    data(){
        return {
            index:'',
            disabledE:false,
            disabledP:false,
            useraccount:'',
            phonenum:'',
            phonecode:'',
            isphonecode:false,
            emailnum:'',
            isemailcode:'',
            emailcode:'',
            password:'',
            passwordA:'',
            or:'',
            countE:'发送验证码',
            countP:'发送验证码',
            typeE:'',
            typeP:'',
            accountNum:'',
            isphonenum:false,
            isemailnum:false,
            isone:false,
            istwo:false,
            isRegister:false
        }
    },
    mounted:function(){
        if(JSON.parse(sessionStorage.getItem("account")).username){//修改密码
            this.index = 1;
            this.typeE = true;
            this.typeP = true;
            if(JSON.parse(sessionStorage.getItem("account")).email!=null){
                this.accountNum = JSON.parse(sessionStorage.getItem("account")).email;
            }else if(JSON.parse(sessionStorage.getItem("account")).phone!=null){
                this.accountNum = JSON.parse(sessionStorage.getItem("account")).phone;
            }else{
                this.accountNum = JSON.parse(sessionStorage.getItem("account")).realname;
            }
        }else{//找回密码
            this.index = 0;
        }
    },
    methods:{
        test:function(dom){
            this.or = dom;
            this.index=2;
        },
        check:function(){
            this.$this.get('/broker/auth/check/'+this.useraccount+'/').then((response)=> {
                //console.log(response);
                if(response.data.data==true){
                    this.isRegister=true;
                    this.$message.error('您的账号还未注册');
                    
                }else{
                    this.isRegister=false;
                    this.index=1;
                    this.accountNum = this.useraccount;
                    let emailReg = /^[A-Z|a-z|0-9]+([-_.][A-Z|a-z|0-9]+)*@([A-Z|a-z|0-9]+[-.])+[A-Z|a-z|0-9]{2,5}$/; 
                    let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
                    if(emailReg.test(this.useraccount)==true){
                        this.typeE = true;
                        this.typeP = false;
                    }else if(phoneReg.test(this.useraccount)==true){
                        this.typeE = false;
                        this.typeP = true;
                    }
                }
            }).catch((error)=> {
                console.log(error);
            });
        },
        regEmail:function(){
            let emailReg = /^[A-Z|a-z|0-9]+([-_.][A-Z|a-z|0-9]+)*@([A-Z|a-z|0-9]+[-.])+[A-Z|a-z|0-9]{2,5}$/; 
            if(emailReg.test(this.emailnum)==false){
                this.isemailnum=true;
                this.$message.error('请输入正确的邮箱格式');
            }
        },
        regPhone:function(){
            let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
            if(phoneReg.test(this.phonenum)==false){
                this.isphonenum=true;
                this.$message.error('请输入正确的手机号码格式');
            }
        },
        phoneCode:function(){
            if(this.phonenum==''){
                this.isphonenum=true;
                this.$message.error('请输入手机号');
            }else{
                this.isphonenum=false;
                this.countP = 300;
                this.disabledP = true;
                let that = this;
                this.phoneHttp();
                let timer = setInterval(function(){
                    that.countP--;
                    if(that.countP==0){
                        clearInterval(timer);
                        that.countP = '重新发送';
                        that.disabledP = false;
                    }
                },1000)
            }            
        },
        phoneHttp:function(){
            let obj = {
                mobile:'',
                type:'',
                username:'',
                validCode:''
            };
            if(this.useraccount==''){
                obj.mobile = JSON.parse(sessionStorage.getItem("account")).phone;
            }else{
                obj.mobile = this.useraccount;
            }
            let str = JSON.stringify(obj);
            this.$this.post('/broker/sms/send/code/forget',str).then((response)=>{
                //console.log('----',response);
            }).catch((error)=>{
            })
        },
        emailCode:function(){
            if(this.emailnum==''){
                this.isemailnum=true;
                this.$message.error('请输入邮箱');
            }else{
                this.isemailnum=false;
                this.countE = 300;
                this.disabledE = true;
                let that = this;
                this.emailHttp();
                let timer = setInterval(function(){
                    that.countE--
                    if(that.countE==0){
                        clearInterval(timer);
                        that.countE = '重新发送';
                        that.disabledE = false;
                    }
                },1000)
            }
            
        },
        emailHttp:function(){
            let obj = {
                email:'',
                type:'',
                username:'',
                validCode:''
            };
            if(this.useraccount==''){
                obj.email = JSON.parse(sessionStorage.getItem("account")).email;
            }else{
                obj.email = this.useraccount;
            }
            let str = JSON.stringify(obj);
            this.$this.post('/broker/mail/send/code/forget',str).then((response)=>{
                //console.log('----',response);
                if(response.data.code==0){
                    this.$message.error("该用户的邮箱未绑定");
                    this.isemailnum=true;
                }else if(response.data.code==1){
                    this.isemailnum=false;
                }
            }).catch((error)=>{
            })
        },
        confirm:function(){
            let code,contact;
            if(this.or=='phone'){
                if(this.phonenum==''||this.phonecode==''){
                    if(this.phonenum==''){
                        this.isphonenum = true;
                        this.$message.error('请输入手机号');
                    }
                    if(this.phonecode==''){
                        this.isphonecode = true;
                        this.$message.error('请输入验证码');
                    }
                }else{
                    code = this.phonecode; 
                    contact=this.phonenum;
                    this.isphonecode = false;
                    this.isphonenum = false;
                    this.checkCode(contact,code);
                }
            }else{
                if(this.emailnum==''||this.emailcode==''){
                    if(this.emailnum==''){
                        this.isemailnum=true;
                        this.$message.error('请输入邮箱');
                    }
                    if(this.emailcode==''){
                        this.isemailcode = true;
                        this.$message.error('请输入验证码');
                    }
                }else{
                    code = this.emailcode;
                    contact=this.emailnum;
                    this.isemailcode = false;
                    this.isemailnum=false;
                    this.checkCode(contact,code);
                }
            }
            
        },
        checkCode:function(contact,code){
            this.$this.get('/broker/user/forget/check/code/'+contact+'/'+code).then((response)=>{
                //console.log('yanzhengma',response);
                if(response.data.code=1){
                    this.index=3;
                }
            }).catch((error)=>{

            })
        },
        enter:function(dom){
            let passwordReg = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/;
        },
        leave:function(dom){
            let passwordReg = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/;
            if(dom=='one'){
                if(this.password==''){
                    this.isone = true;
                    this.$message.error('请输入新密码');
                }else{                
                    if(passwordReg.test(this.password)==false){
                        this.isone = true;
                        this.$message.error('请输入正确的密码格式');
                    }else{
                        this.isone = false;
                    }
                }
            }else{
                if(this.passwordA==''){
                    this.istwo = true;
                    this.$message.error('请再次输入密码');
                }else{
                    if(passwordReg.test(this.passwordA)==false){
                        this.istwo = true;
                        this.$message.error('请输入正确的密码格式');
                    }else{
                        if(this.passwordA==this.password){
                            this.istwo = false;
                        }else{
                            this.istwo = true;
                            this.$message.error('两次密码输入不一致');
                        }
                    }
                }
                
            }
        },
        passwordyes:function(){
            if(this.isone==true||this.istwo==true){
                if(this.isone==true){
                    this.isone = true;
                    this.$message.error('请输入新密码');
                }
                if(this.istwo==true){
                    this.istwo = true;
                    this.$message.error('请再次输入密码');
                }
            }else{
                let obj = {
                    contact:'',
                    password:this.password
                };
                if(this.or=='phone'){
                    obj.contact = this.phonenum;
                }else{
                    obj.contact = this.emailnum;
                }
                let str = JSON.stringify(obj);
                this.$this.post('/broker/user/forget/updatepwd',str).then((response)=>{
                    console.log(response);
                    if(response.data.code==-1){
                        this.$message.error('修改密码超时');
                    }else if(response.data.code==1){
                        this.index = 4;
                    }
                }).catch((error)=>{
                })
            }
            
        }
    }
}
</script>