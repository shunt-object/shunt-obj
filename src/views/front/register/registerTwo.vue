<template>
<div class="registerCommon">
    <div class="reg-header">
        <router-link to="/"><img class="reg-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 registerCommon-from">
            <div class="registerCommon-title">欢迎注册CloudBroker²</div>
            <registerStep step="2"></registerStep>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <el-form :model="registerFrom" class="register-ruleForm">
                        <el-form-item label="公司名称" label-width="80px" class="register-ruleForm-item">
                            <el-input v-model="registerFrom.confirm" placeholder="请输入公司名称"></el-input>
                        </el-form-item>
                        <el-form-item label="用户姓名" label-width="80px" class="register-ruleForm-item">
                            <el-input v-model="registerFrom.username" placeholder="请输入用户姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="所属行业" label-width="80px" class="register-ruleForm-item">
                            <el-select class="register-ruleForm-select" v-model="registerFrom.industry" placeholder="请选择所属行业">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属区域" label-width="80px" class="register-ruleForm-item">
                            <el-select class="selectThree" v-model="registerFrom.province" placeholder="省">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <el-select class="selectThree" v-model="registerFrom.city" placeholder="市">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <el-select class="selectThree" v-model="registerFrom.area" placeholder="区">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <div class="registerCommon-agree">
                            <input type="checkbox" style="width:14px !important;" v-model="registerFrom.agree">同意并遵守<router-link target="_blank" to="/agreenment" style="">《CloudBroker²服务协议》</router-link>
                        </div>
                        <div class="registerCommon-btn-box">
                            <button class="registerCommon-btn" v-on:click="submitForm()">下一步</button>
                        </div>                        
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
    name:'registerTwo',
    data(){
        return {
            registerFrom:{
                confirm:'',
                username:'',
                industry:''
            },
        }
    },
    methods:{
        submitForm() {
            
        },
    },
    components:{
        registerStep
    }
}
</script>