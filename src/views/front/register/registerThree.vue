<template>
<div class="registerCommon">
    <div class="reg-header">
        <router-link to="/"><img class="reg-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 registerCommon-from">
            <div class="registerCommon-title">欢迎注册CloudBroker²</div>
            <registerStep step="3"></registerStep>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <img src="../../../assets/front/register-success.png" class="register-success-img" alt="">
                    <div class="registerThree-succ">账号已注册成功</div>
                    <div class="registerThree-desc">感谢您注册CloudBroker²我们将为您提供最专业的服务！</div>
                    <div class="registerCommon-btn-box">
                        <button class="registerCommon-btn registerThree-btn" v-on:click="gologin()">立即登录</button>
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
        return{
            useername:''
        }
    },
    methods:{
        gologin:function(){
            localStorage.removeItem('remAccount');
            sessionStorage.removeItem("utype");
            sessionStorage.removeItem("accountId");
            sessionStorage.removeItem("account");
            sessionStorage.clear();
            localStorage.removeItem("as");
            this.$router.push({path:'/login'});
        }
    },
    components:{
        registerStep
    }
}
</script>