<template>
<div class="forgetPass">
    <div class="forget-header">
        <router-link to="/"><img class="login-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="forget-main row">
        <div class="col-md-3"></div>
        <div class="col-md-6 forget-box">
            <div class="forget-step">
                <div class="move-block w-30">
                    <span class="move-circle cir-act">1</span>
                    <p class="move-title text-10">填写登录账号</p>
                    <span class="move-line" :class="index>0?'line-act':'line-moren'"></span>
                </div>
                <div class="move-block w-30">
                    <span class="move-circle" :class="index>1?'cir-act':'cir-moren'">2</span>
                    <p class="move-title">验证身份</p>
                    <span class="move-line" :class="index>1?'line-act':'line-moren'"></span>
                </div>
                <div class="move-block w-30">
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
                    <div class="forget-username" v-if="index==0">
                        <input type="text" class="username-input">
                        <button class="username-btn">确认</button>
                    </div>
                    <div class="forget-type" v-if="index==1">
                        <p class="forget-desc">您正在为<span class="color">{{information.realname}}</span></p>
                        <p class="forget-desc">找回密码，请选择身份验证方式。</p>
                        <button class="forget-type-btn" v-on:click="test('phone')">通过您的手机验证</button>
                        <button class="forget-type-btn" v-on:click="test('email')">通过您的邮箱验证</button>
                    </div>
                </div>
                <div class="forget-list" v-if="index==2">
                    <div v-if="or=='phone'">
                        <div class="forget-code" :class="phonezhang==''?'error':''">
                            <span>手机号码：</span>
                            <input type="text" class="code-input" v-model="phonezhang">
                        </div>
                        <div class="forget-code" :class="isphonenum==false?'':'error'">
                            <span>验&nbsp;证&nbsp;&nbsp;码：</span>
                            <input type="text" class="code-input" v-model="phonenum">
                            <button class="code-btn" :disabled="disP" v-on:click="phoneCode()">{{countP}}</button>
                        </div>
                    </div>
                    <div v-if="or=='email'">
                        <div class="forget-code" :class="emailzhang==''?'error':''">
                            <span>邮箱账号：</span>
                            <input type="text" class="code-input" v-model="emailzhang">
                        </div>
                        <div class="forget-code" :class="isemailnum==false?'':'error'">
                            <span>验&nbsp;证&nbsp;&nbsp;码：</span>
                            <input type="text" class="code-input" v-model="emailnum">
                            <button class="code-btn" :disabled="disE" v-on:click="emailCode()">{{countE}}</button>
                        </div>
                    </div>
                    <button class="forget-type-btn mt-50" v-on:click="codeSuccess()">确认</button>
                </div>
                <div class="forget-list" v-if="index==3">
                    <div class="forget-code">
                        <span class="passkey">新密码：</span>
                        <input type="text" class="code-input" v-model="password">
                    </div>
                    <div class="forget-code">
                        <span class="passkey">确认新密码：</span>
                        <input type="text" class="code-input" v-model="passwordA">
                    </div>
                    <button class="forget-type-btn mt-50" v-on:click="passwordyes()">确认</button>
                </div>
                <div class="forget-list" v-if="index==4">
                    <img src="../../../assets/front/activate-success.png" class="activate-img for-success-img" alt="">
                    <div class="forget-success">密码更改成功</div>
                    <router-link to="/" class="forget-type-btn mt-50">立即登录</router-link>
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
            information:'',
            or:'',
            countE:'获取验证码',
            countP:'获取验证码',
            disE:false,
            disP:false,
            typeE:'',
            emailnum:'',
            isemailnum:false,
            password:'',
            passwordA:'',
            emailzhang:null,
            phonenum:'',
            isphonenum:false
        }
    },
    mounted:function(){
        this.information = JSON.parse(sessionStorage.getItem("account"));
        if(JSON.parse(sessionStorage.getItem("account")).username){
            this.index = 1;
        }else{
            this.index = 0; 
        }
        //JSON.parse(sessionStorage.getItem("account")).email ==null?this.typeE='true':this.typeE='false';
        //console.log('====',JSON.parse(sessionStorage.getItem("account")));
    },
    methods:{
        test:function(dom){
            this.or = dom;
            this.index = 2;
        },
        phoneCode:function(){
            this.countP = 300;
            this.disP = true;
            let that = this;
            this.phoneHttp();
            let timer = setInterval(function(){
                that.countP--;
                if(that.countP==0){
                    clearInterval(timer);
                    that.countP = '重新发送';
                    that.disP = false;
                }
            },1000)
        },
        emailCode:function(){
            this.countE = 300;
            this.disE = true;
            let that = this;
            this.emailHttp();
            let timer = setInterval(function(){
                that.countE--;
                if(that.countE==0){
                    clearInterval(timer);
                    that.countE = '重新发送';
                    that.disE = false;
                }
            },1000)
        },
        emailHttp:function(){
            let bind = this.typeE=='true'?bind='bind':bind='unbind';
            let obj = {
                email:this.emailzhang,
                type:'',
                username:this.information.username,
                validCode:''
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/mail/send/code/forget',str).then((response)=>{
                //console.log('----',response);
            }).catch((error)=>{
            })
        },
        phoneHttp:function(){
            //let bind = this.phonetype=='true'?bind='bind':bind='unbind';
            let obj = {
                mobile:this.information.phone,
                type:'',
                username:this.information.username,
                validCode:''
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/sms/send/code/forget',str).then((response)=>{
                //console.log('----',response);
            }).catch((error)=>{
            })
        },
        codeSuccess:function(){
            if(this.or=='email'){
                this.emailSuccess();
            }else{
                this.phoneSuccess();
            }
        },
        emailSuccess:function(){
            if(this.emailzhang==null||this.emailnum==''){
                if(this.emailzhang==null){
                    this.emailzhang = '';
                    this.$message.error('请输入邮箱');
                }
                if(this.emailnum==''){
                    this.isemailnum = true;
                    this.$message.error('请输入验证码');
                }
            }else{
                this.isemailnum = false;
                let obj = {
                    email:this.information.email,
                    type:'',
                    username:this.information.username,
                    validCode:this.emailnum
                };
                let str = JSON.stringify(obj);
                this.$this.post('/broker/user/setting/email',str).then((response)=>{
                    //console.log('解绑',response);
                    if(response.data.code==-1){//验证码已超时
                        this.isemailnum = true;
                        this.$message('验证码请求超时，请重新发送验证码。');
                    }else{
                        this.isemailnum = false;
                        this.index=3;
                    }
                }).catch((error)=>{
                })
            }
        },
        phoneSuccess:function(){
            if(this.emailzhang==null||this.emailnum==''){
                if(this.emailzhang==null){
                    this.emailzhang = '';
                    this.$message.error('请输入邮箱');
                }
                if(this.phonenum==''){
                    this.isphonenum = true;
                    this.$message.error('请输入手机号');
                }
            }else{
                this.isphonenum = false;
                let obj = {
                    mobile:this.phonezhang,
                    type:'',
                    username:this.information.username,
                    validCode:this.phonenum
                };
                let str = JSON.stringify(obj);
                this.$this.post('/broker/user/setting/mobile',str).then((response)=>{
                    //console.log('解绑',response);
                    if(response.data.code==-1){//验证码已超时
                        this.isphonenum = true;
                        this.$message('验证码请求超时，请重新发送验证码。');
                    }else if(response.data.code==1){
                        this.isphonenum = false;
                        this.index=3;
                    }
                }).catch((error)=>{
                })
            }
        },
        passwordyes:function(){

        }
    }
}
</script>