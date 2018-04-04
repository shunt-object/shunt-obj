<template>
<div class="login">
    <div class="login-header">
        <div class="login-content">
            <router-link to="/"><img class="login-logo" src="../../../assets/login-logo.png" alt=""></router-link>
        </div>
    </div>
    <div class="login-content login-main row">
        <div class="col-md-3"></div>
        <div class="login-from col-md-6 row" style="margin-top:50px !important;">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="login-from-title">用户登录</div>
                <div class="login-fu-title">欢迎使用CloudBroker²</div>
                <div style="padding:0 20px;margin-top:20px;">
                    <div class="login-from-list login-list-one" :class="isaccount==true?'error':''">
                        <i class="fa fa-user"></i>
                        <input type="text" placeholder="手机/邮箱/账号" v-model="account" v-on:click="focusone()" v-on:blur="PhoneReg('account')">
                        <div class="phone-notice" v-show="isaccount">{{accountText}}</div>
                    </div>
                    
                    <div class="login-from-list login-list-two" :class="ishave==true?'error':''">
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="密码" v-model="password" v-on:focus="focustwo()" v-on:blur="PhoneReg('password')">
                        <div class="phone-notice" v-show="ishave">{{passwordText}}</div>
                    </div>                
                    <button class="login-from-btn" v-on:click="login()">登录</button>
                    <div class="login-from-remember">
                        <div class="login-from-left">
                            <input type="checkbox" v-model="remember">记住用户
                        </div>
                        <div class="login-from-right">
                            <router-link to="/registerOne" class="linkto">立即注册</router-link> | <router-link to="/forgetPassword" class="linkto" style="display:inline !important;">忘记密码</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
    <div class="login-footer">
        <p class="login-foot-list">版权所有 © 2018 江苏京玉信息技术有限公司&nbsp&nbsp&nbsp&nbsp&nbsp<a style="color:#555" href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备18002559号-2</a>&nbsp&nbspTEL：400-828-7308</p>
        <!--<p class="login-foot-list">京ICP证120829号 京ICP备12032080号-2 京网文（2014）0901-201号</p>
        <p class="login-foot-list">京公网安备 11010802020326号</p>-->
    </div>
    <router-view></router-view>
</div>
</template>
<script>
import '../login/login.css'
import activate from '../login/loginActivate.vue'
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
            remember:true,
            nextTo:''
        }
    },
    mounted:function(){
        // if(localStorage.getItem('remPassword')!='' && localStorage.getItem('remPassword')!=null){
        //     this.remember = true;
        //     this.password = localStorage.getItem('remPassword');
        // }
        if(localStorage.getItem('remAccount')!='' && localStorage.getItem('remAccount')!=null){
            this.remember = true;
            this.account = localStorage.getItem('remAccount');
        }
        let that = this;
        document.onkeyup = function(evnet){
            if (evnet.keyCode == '13') {
                that.login();
            }
        }
        this.nextTo = this.$route.query.redirect;
        
        //console.log('------',this.$route.query.redirect);
    },
    methods:{
        focusone:function(){
            $(".login-list-one").addClass('login-from-list-focus');
        },
        focustwo:function(){
            $(".login-list-two").addClass('login-from-list-focus');
        },
        PhoneReg:function(dom){
             //let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-9]))|(18[0-9]))\d{8}$/;
             //let phoneReg = /^[A-Z|a-z|0-9]+([-_.][A-Z|a-z|0-9]+)*@([A-Z|a-z|0-9]+[-.])+[A-Z|a-z|0-9]{2,5}$/;
             if(dom=='account'){
                if(this.account==''){
                    this.isaccount=true;
                    this.accountText = '请输入账号';
                }
                $(".login-list-one").removeClass('login-from-list-focus');
                // else{
                //     phoneReg.test(this.account)==true?this.isaccount=false:this.isaccount=true;this.accountText = '请输入正确邮箱地址'
                // }
             }else if(dom=='password'){
                this.password==''?this.ishave=true:this.ishave=false
                if(this.ishave==true){
                    this.passwordText = '请输入密码'
                }
                 $(".login-list-two").removeClass('login-from-list-focus');
             }
        },
        login:function(){
            // if( this.account!=''&&this.isaccount==false && this.password!=''&&this.ishave==false ){//请求接口
             if( this.account!=''&& this.password!=''){//请求接口
                let obj = {
                    "password": this.password,
                    "username": this.account
                };
                let str = JSON.stringify(obj);
                let that = this;
                this.$this.post('/broker/auth/login',str).then((res)=>{
                    //console.log('login',res);
                    if(res.data.code=='1'){
                        // if(this.$route.query.redirect==undefined){
                        //     this.$router.push({path:'/'});
                        // }else{
                        //     this.$router.push({path:'/consolePage'});  
                        // }
                        //console.log(this.$route.query.redirect);
                                             
                        //utype  3=运营商；4=政府；
                        sessionStorage.setItem("accountId",this.account);
                        sessionStorage.setItem("utype",res.data.data.utype);
                        sessionStorage.setItem("account",JSON.stringify(res.data.data));
                        if(sessionStorage.getItem("accountId")){
                            this.$router.push({path:'/consolePage'}); 
                        }
                    }else if(res.data.code=='0'){//用户名或密码不正确
                        this.isaccount=true;
                        this.ishave=true;
                        this.accountText = '用户名不正确';
                        this.passwordText = '密码不正确';
                    }else if(res.data.code=='-1'){//邮箱未激活
                        this.isaccount=true;
                        this.ishave=true;
                        this.accountText = '该用户不存在';
                        this.passwordText = '';
                        this.$layer.iframe({
                            content: {
                                content: activate, //传递的组件对象
                                parent: this,//当前的vue对象
                                data:{
                                    username:res.data.msg,
                                    email:this.account
                                }//props
                            },
                            area:['50%','400px'],
                            title:'温馨提示'
                        });
                        // this.$router.push({path:'/activate',query:{email:this.account,username:res.data.msg}});
                    }
                }).catch((error)=>{
                    console.log(error);
                })
               if(this.remember==true){
                   //localStorage.setItem('remPassword',this.password);
                   localStorage.setItem('remAccount',this.account);
               }else{
                   //localStorage.removeItem('remPassword');
                   localStorage.removeItem('remAccount');
               }
            }else{
                if(this.account==''){
                    this.isaccount=true;
                    this.accountText = '请输入账号';
                }
                if(this.password==''){
                    this.ishave=true;
                    this.passwordText = '请输入密码';
                }
            }
        }
    },
    component:{
        activate
    }
}
</script>