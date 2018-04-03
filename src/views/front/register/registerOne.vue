<template>
<div class="registerCommon">
    <div class="reg-header">
        <router-link to="/"><img class="reg-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 registerCommon-from">
            <div class="registerCommon-title">欢迎注册CloudBroker²</div>
            <registerStep step="1"></registerStep>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <el-form :model="registerCommonForm" :rules="registerRules" ref="registerCommonForm" class="register-ruleForm">
                        <el-form-item label="手机号码" prop="phone" label-width="80px" class="register-ruleForm-item">
                            <el-input v-model="registerCommonForm.phone" placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item label="短信验证" prop="phonecode" label-width="80px" class="register-ruleForm-item">
                            <el-input type="tel" v-model="registerCommonForm.phonecode" placeholder="请输入验证码"></el-input>
                            <button class="codebtn" :class="codeClass==false?'':'codebtn-active'" v-on:click="getcode()">{{count}}</button>
                        </el-form-item>
                        <el-form-item label="设置密码" prop="password" label-width="80px" class="register-ruleForm-item">
                            <el-input type="password" v-model="registerCommonForm.password" placeholder="请设置登录密码" v-on:focus="passfocus()" v-on:blur="passblur()"></el-input>
                            <div class="pass-notice" v-show="isnotice">密码为6-16个字符<br>只能包含字母、数字、及标点符号（除空格）<br>字母、数字和标点符号至少包含2种</div><!--password-bg-->
                        </el-form-item>
                        <el-form-item label="确认密码" prop="passwordtwo" label-width="80px" class="register-ruleForm-item">
                            <el-input type="password" v-model="registerCommonForm.passwordtwo" placeholder="请再次输入密码"></el-input>
                        </el-form-item>
                        <div class="registerCommon-agree" style="padding-left:0 !important;">
                            <input type="checkbox" style="width:14px !important;" v-model="registerCommonForm.agree">同意并遵守<router-link target="_blank" to="/agreenment" style="width:180px !important">《CloudBroker²服务协议》</router-link>
                        </div>
                        <button class="registerCommon-btn" v-on:click="submitForm('registerCommonForm')">下一步</button>        
                    </el-form>
                    <div class="registerCommon-notice">
                        已有CloudBroker²账号？
                        <router-link class="registerCommon-login" to="/login">请登录</router-link>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
            
        </div>
        <div class="col-md-3"></div>
    </div>
    <div class="registerCommon-footer">
        <p class="registerCommon-footer-list">版权所有 © 2018 江苏京玉信息技术有限公司&nbsp&nbsp&nbsp&nbsp&nbsp<a style="color:#969696" href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备18002559号-2</a>&nbsp&nbspTEL：400-828-7308</p>
    </div>
</div>
</template>
<script>
import '../register/registerReturn.css'
import registerStep from '../register/registerStep.vue'
let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
let passwordReg = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/;
let rempass;
let validPhone=(rule, value,callback)=>{
    console.log(this);
    if (!value){
        callback(new Error('请输入电话号码'))
    }else  if (phoneReg.test(value)==false){
        callback(new Error('请输入正确的手机号码'))
    }else {
        //callback()
        $.ajax({
            type: "GET",
            url: '/broker/auth/check/'+value+'/',
            success:function(data){
                if(data.data==false){
                    callback(new Error('您的手机号已被注册'))
                }else{
                    callback()
                }
            },
            error:function(error){
            }
        })
    }
};
let validPassword=(rule, value,callback)=>{
    if (!value){
        callback(new Error('请输入密码'))
    }else  if (passwordReg.test(value)==false){
        callback(new Error('请输入正确的密码格式'))
    }else {
        rempass = value;
        callback()
    }
};
let validPasswordTwo=(rule, value,callback)=>{
    if (!value){
        callback(new Error('请再次输入密码'))
    }else  if (rempass!=value){
        callback(new Error('俩次密码输入不一致'))
    }else {
        callback()
    }
};

export default{
    name:'registerOne',
    data(){
        return {
            registerCommonForm:{
                phone:'',
                phonecode:'',
                password:'',
                passwordtwo:'',
                agree:true
            },
            registerRules:{
                phone: [
                    { required: true, trigger: 'blur', validator: validPhone }
                ],
                phonecode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
                password: [
                    { required: true, trigger: 'blur',validator: validPassword }
                ],
                passwordtwo: [
                    { required: true, trigger: 'blur',validator: validPasswordTwo }
                ],
            },
            codeClass:false,
            count:'获取验证码',
            countI:60,
            isnotice:false
        }
    },
    mounted:function(){         
    },
    methods:{
        passfocus:function(){
            this.isnotice = true;
        },
        passblur:function(){
            this.isnotice = false;
        },
        getcode:function(){
            if(this.registerCommonForm.phone!='' && phoneReg.test(this.registerCommonForm.phone)==true){
                this.codeHttp();
            }
        },
        codeHttp:function(){
            let obj = {
                mobile: this.registerCommonForm.phone
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/sms/send/code/register',str).then((reponse)=>{
                if(reponse.data.code==1){
                    this.codeClass = true;
                    this.$message({
                        message: '验证码发送成功。',
                        customClass:'lay-msg',
                        iconClass:'el-icon-success'
                    });
                    let self = this;
                    let clear = setInterval(function(){
                        self.countI--;
                        self.count = self.countI+'s';
                        if(self.countI==0){
                            clearInterval(clear);
                            self.countI = 60;
                            self.count = '重新获取';
                            self.codeClass = false;
                        }
                    },1000)
                }
                
                //console.log('手机验证码',reponse);
            }).catch((error)=>{})
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.registerCommonForm.agree==true){                    
                        let obj = {
                            "password": this.registerCommonForm.password,
                            "phone": this.registerCommonForm.phone,
                        };
                        let strObj = JSON.stringify(obj);
                        this.$this.post('/broker/auth/register/mobile/'+this.registerCommonForm.phonecode,strObj).then((response)=>{
                            if(response.data.code==1){
                                this.$router.push({path:'/registerTwo',query:{userid:response.data.data.id}});
                            }
                        })
                    }else{
                        this.$layer.msg('请阅读服务协议');
                    }
                }else{
                    //console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    components:{
        registerStep
    }
}
</script>