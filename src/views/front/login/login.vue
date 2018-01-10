<template>
<div class="login">
    <div class="login-header">
        <div class="login-content">
            <img class="logo" src="../../../assets/logo.png" alt="">
        </div>
    </div>
    <div class="login-content login-main">
        <img class="login-img" src="../../../assets/login-bg1.png" alt="">
        <div class="login-from">
            <div class="login-from-title">登录</div>
            <div class="login-from-list" :class="isaccount==true?'error':''">
                <i class="fa fa-user"></i>
                <input type="text" placeholder="手机号／邮箱" v-model="account" v-on:blur="PhoneReg('account')">
            </div>
            <div class="phone-notice" v-show="isaccount">{{accountText}}</div>
            <div class="login-from-list" :class="ishave==true?'error':''">
                <i class="fa fa-lock"></i>
                <input type="password" placeholder="密码" v-model="password" v-on:blur="PhoneReg('password')">
            </div>
            <div class="phone-notice" v-show="ishave">{{passwordText}}</div>
            <button class="login-from-btn" v-on:click="login()">登录</button>
            <div class="login-from-remember">
                <div class="login-from-left">
                    <input type="checkbox" v-model="remember">记住密码
                </div>
                <div class="login-from-right">
                    <router-link to="/register">立即注册</router-link> | 忘记密码
                </div>
            </div>
        </div>
    </div>
    <div class="login-footer">
        <p class="login-foot-list">© CopyRight 2017江苏京玉信息技术有限公司  版权所有    TEL:(0379）65112858 65112856</p>
        <p class="login-foot-list">京ICP证120829号 京ICP备12032080号-2 京网文（2014）0901-201号</p>
        <p class="login-foot-list">京公网安备 11010802020326号</p>
        <img src="../../../assets/login-bg2.png" alt="">
    </div>
    <router-view></router-view>
</div>
</template>
<script>
import '../login/login.css'
export default{
    name:'login',
    data(){
        return{
            account:'',
            isaccount:false,
            accountText:'',
            password:'',
            ishave:false,
            passwordText:'',
            remember:false
        }
    },
    mounted:function(){
        if(localStorage.getItem('remPassword')!='' && localStorage.getItem('remPassword')!=null){
            this.remember = true;
            this.password = localStorage.getItem('remPassword');
        }
    },
    methods:{
        PhoneReg:function(dom){
             let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
             if(dom=='account'){
                if(this.account==''){
                    this.isaccount=true;
                    this.accountText = '请输入账号信息';
                }else{
                    phoneReg.test(this.account)==true?this.isaccount=false:this.isaccount=true;this.accountText = '请输入正确账号'
                }
             }else if(dom=='password'){
                this.password==''?this.ishave=true:this.ishave=false
                if(this.ishave==true){
                    this.passwordText = '请输入密码'
                }
             }
        },
        login:function(){
            if( this.account!=''&&this.isaccount==false && this.password!=''&&this.ishave==false ){//请求接口
                let obj = {
                    "password": this.password,
                    "username": this.account
                };
                let str = JSON.stringify(obj);
                let that = this;
                this.$this.post('/broker/auth/login',str).then((response)=>{
                    console.log('login',response);
                    if(response.data.code=='1'){
                        this.$router.push({path:'/'});
                        sessionStorage.setItem("accountId",this.account);
                        sessionStorage.setItem("account",JSON.stringify(response.data.data));
                    }else if(response.data.code=='0'){
                        this.isaccount=true;
                        this.ishave=true;
                        this.accountText = '用户名不正确';
                        this.passwordText = '密码不正确';
                    }
                }).catch((error)=>{
                    console.log(error);
                })
               if(this.remember==true){
                   localStorage.setItem('remPassword',this.password);
               }else{
                   localStorage.removeItem('remPassword');
               }
            }else{
                if(this.account==''){
                    this.isaccount=true;
                    this.accountText = '请输入账号信息';
                }
                if(this.password==''){
                    this.ishave=true;
                    this.passwordText = '请输入密码';
                }
            }
        }
    }
}
</script>