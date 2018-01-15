<template>
<div class="register">
    <div class="reg-header">
        <div class="reg-content">
            <img class="logo" src="../../../assets/logo.png" alt="">
        </div>
    </div>
    <div class="reg-from">
        <div class="reg-from-title">欢迎注册CSB²</div>
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
            <span class="reg-from-key">设定密码：</span>
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
            <span class="reg-from-key">姓名：</span>
            <input type="text" class="reg-from-val" v-model="username" v-on:focus="notice('username')" v-on:blur="reg('username')">
            <ul class="reg-from-prompt reg-phone" v-show="isnotice=='usernametrue'">
                <li v-for="item in noticeWord">{{item.text}}</li>
            </ul>
            <div class="error-color error-notice" v-show="isusername">请输入您的姓名</div>
            <div :class="isusername==false?'right':'null'">
                <img class="svg" src="../../../assets/right.svg" alt="">
            </div>
        </div>
        <button class="reg-from-btn" :class="isusername==true?'mt-20':''" v-on:click="agree()">同意并注册</button>
        <div class="reg-from-agreement">
            <input type="checkbox" class="reg-from-checkoux" v-model="checkbox">
            <router-link to="/login">勾选，即表示您阅读切统一同意我们的《 CSB服务协议》</router-link>
        </div>
        <div class="reg-from-null"></div>
        <div class="reg-from-notice">
            已有CSB²账号?
            <router-link to="/login">请登录</router-link>
        </div>
    </div>
    <div class="reg-footer">
        <p class="reg-foot-list">© CopyRight 2017江苏京玉信息技术有限公司  版权所有    TEL:(0379）65112858 65112856</p>
        <p class="reg-foot-list">京ICP证120829号 京ICP备12032080号-2 京网文（2014）0901-201号</p>
        <p class="reg-foot-list">京公网安备 11010802020326号</p>
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
            checkbox:false,
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
            againPassError:''
        }
    },
    mounted:function(){
        
    },
    methods:{
        notice:function(dom){
            if(dom=='phone'){
                this.isnotice = 'phonetrue';
                this.noticeWord = [{text:'请输入您的手机号码'}];
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
            let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}$/;
            let passwordReg = /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,16}$/;
            if(dom=='phone'){
                this.isnotice = 'phonefalse';
                if(phoneReg.test(this.phone)==false){
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
            if( this.isphone==false && this.ispassword==false && this.isagainPas==false && this.isconfirm==false && this.isusername==false && this.checkbox==true){
                let obj = {
                    "password": this.password,
                    "phone": this.phone,
                    "realname": this.username,
                    "tenant": this.confirm
                };
                let strObj = JSON.stringify(obj);
                let that = this;
                this.$this.post('/broker/auth/register',strObj).then((response)=>{
                    if(response.data.code=='1'){
                         that.$router.push({path:'/login'});
                    }
                }).catch((error)=>{
                    console.log(error);
                })
            }else{
                this.phone!=''?this.isphone=false:this.isphone=true;this.phoneError = '请输入您的手机号';
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
        }
    }
}

</script>