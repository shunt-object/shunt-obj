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
                        <input type="password" placeholder="密码" v-model="password" v-on:focus="focustwo()" class='ikl' v-on:blur="PhoneReg('password')">
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
                    <!--其他方式登录-->
                    <div class="otherLogin">
                        <div class="otherLogin-line">
                            <span></span>
                            <p class="otherLogin-desc">使用其他账号登录</p>
                        </div>
                        <div class="otherLogin-logo">
                            <span v-on:click="wechart()"><i class="iconfont icon-weixin weixin-logo"></i></span>
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
    </div>
    <!-- 微信登录弹框 -->
    <el-dialog :visible.sync="dialogUnbing" class="wechart-box" @close='closeDialog'>
        <div class="wechart-title">微信登录</div>
        <div class="wechart-img">
            <img :src="wechartUrl" alt="">
        </div>
        <div class="wechart-desc">
            请使用微信扫描二维码登录<br>CloudBroker²
        </div>
        <div class="wechart-success" v-show="success">
            <i class="iconfont icon-duihao2"></i>扫描成功
        </div>
    </el-dialog>
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
            nextTo:'',
            dialogUnbing:false,
            wechartUrl:'',
            timer:'',
            success:false
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
        //$(".ikl").focus();
        //   $(document).ready(function(){
        //     // $(".inpuys").focus();
        //     $(".inpuys").onkeyup(function(){
        //         alert(1)
        //     })
        // })
        // $(".ikl").get(0).onkeyup = function(evnet){
        //     if (evnet.keyCode == '13') {
        //         that.login();
        //     }
        // }
        $(document).keyup(function (evnet) {
            if (evnet.keyCode == '13') {
                that.login();
            }
        });
        this.nextTo = this.$route.query.redirect;
    },
    methods:{
        closeDialog:function(){
            clearInterval(this.timer);
        },
        chekwechart:function(sceneid){
            let that = this;
            this.timer = setInterval(function(){
                that.$this.get('/broker/auth/check/wxscan/'+sceneid).then((res)=>{
                    if(res.data.data=='-1'){
                        //console.log('未扫描');
                    }else{
                        clearInterval(that.timer);
                        sessionStorage.setItem("utype",res.data.data.utype);
                        sessionStorage.setItem("account",JSON.stringify(res.data.data));
                        that.success = true;
                        setTimeout(function(){
                            that.dialogUnbing = false;
                            if(this.url==''){
                                this.$router.push({path:'/consolePage'}); 
                            }else{
                                for(let i=0;i<this.url.length;i++){//this.url公共的方法 
                                    if(this.url[i].indexOf('redirect=appstore')>-1){
                                        this.$router.push({path:'/appcenterList'});
                                    }else{
                                        this.$router.push({path:'/consolePage'}); 
                                    }
                                }
                            }
                        },1000)
                    }
                }).catch((error)=>{})
            },1000)
        },
        wechart:function(){//微信登录
            let uuid='',sceneid='';
            if(sessionStorage.getItem('uuid')){
                sceneid = sessionStorage.getItem('uuid');
            }else{
                uuid = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                sceneid = uuid+uuid+uuid;
                sessionStorage.setItem('uuid',sceneid)
            }
            //console.log('uuid',uuid+uuid+uuid);
            this.$this.get('/broker/auth/wxqcode/'+sceneid).then((res)=>{
                //console.log('wechart',res.data);
                this.wechartUrl = res.data.data;
                this.dialogUnbing = true;
                this.chekwechart(sceneid);
            }).catch((error)=>{})
        },
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
                        //utype  3=运营商；4=政府；
                        sessionStorage.setItem("accountId",this.account);
                        sessionStorage.setItem("utype",res.data.data.utype);
                        sessionStorage.setItem("account",JSON.stringify(res.data.data));
                        // if(sessionStorage.getItem("accountId")){
                        //     this.$router.push({path:'/consolePage'}); 
                        // }
                        //console.log('aaa',this.url);
                        if(this.url==''){
                            this.$router.push({path:'/consolePage'}); 
                        }else{
                            for(let i=0;i<this.url.length;i++){//this.url公共的方法 
                                if(this.url[i].indexOf('redirect=appstore')>-1){
                                    this.$router.push({path:'/appcenterList'});
                                }else{
                                    this.$router.push({path:'/consolePage'}); 
                                }
                            }
                        }
                        
                    }else if(res.data.code=='0'){//用户名或密码不正确
                        // this.isaccount=true;
                        this.isaccount=false;
                        this.ishave=true;
                        //this.accountText = '用户名不正确';
                        this.passwordText = '账号不存在或密码错误，请重新输入';
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