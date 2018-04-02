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
                            <el-input v-model="registerCommonForm.phonecode" placeholder="请输入验证码"></el-input>
                        </el-form-item>
                        <el-form-item label="设置密码" prop="password" label-width="80px" class="register-ruleForm-item">
                            <el-input v-model="registerCommonForm.password" placeholder="请设置登录密码"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="passwordtwo" label-width="80px" class="register-ruleForm-item">
                            <el-input v-model="registerCommonForm.passwordtwo" placeholder="请再次输入密码"></el-input>
                        </el-form-item>
                        <div class="registerCommon-agree" style="padding-left:0 !important;">
                            <input type="checkbox" style="width:14px !important;" v-model="registerCommonForm.agree">同意并遵守<router-link target="_blank" to="/agreenment" style="">《CloudBroker²服务协议》</router-link>
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
                    { required: true, message: '请输入手机号码', trigger: 'blur' }
                ],
                phonecode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请设置登录密码', trigger: 'blur' }
                ],
                passwordtwo: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
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