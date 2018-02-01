<template>
<div class="total">
<!-- 公共的样式 -->
<div class="total-header">
    <span></span>
    安全设置
</div>
<div class="accountInfor-box">
    <div class="accountInfor-title">安全信息</div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="safe-icon-right"><i class="iconfont icon-duihao2"></i></span>密码设置：
        </span>
        <span class="accountInfor-list-val">aaaaa</span>
        <router-link target="_blank" to="/forgetPassword" style="margin-left:80px;color:#2eabf5;">
            <span class="account-icon-edit"><i class="iconfont icon-bianji"></i></span>修改密码
        </router-link>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="safe-icon-right" v-if="safe.phone!=null"><i class="iconfont icon-duihao2"></i></span>
            <span class="safe-icon-gan" v-else><i class="iconfont icon-gantanhao-yuankuang"></i></span>
            绑定手机：
        </span>
        <span class="accountInfor-list-val" v-if="safe.phone!=null">{{safe.phone}}</span>
        <span class="accountInfor-list-val" v-else>您的手机还未绑定</span>
        <button class="edit-btn" v-on:click="dialog('phone')" v-if="safe.phone!=null">
            <span class="account-icon-edit"><i class="iconfont icon-jiechubangding"></i></span>解绑
        </button>
        <button class="edit-btn" v-on:click="dialog('phone')" v-else>
            <span class="account-icon-edit"><i class="iconfont icon-bangding"></i></span>绑定
        </button>
    </div>
    <div class="accountInfor-list">
        <span class="accountInfor-list-key">
            <span class="safe-icon-right" v-if="safe.email!=null"><i class="iconfont icon-duihao2"></i></span>
            <span class="safe-icon-gan" v-else><i class="iconfont icon-gantanhao-yuankuang"></i></span>
            绑定邮箱：
        </span>
        <span class="accountInfor-list-val" v-if="safe.email!=null">{{safe.email}}</span>
        <span class="accountInfor-list-val" v-else>您的邮箱还未绑定</span>
        <button class="edit-btn" v-on:click="dialog('email')" v-if="safe.email!=null">
            <span class="account-icon-edit"><i class="iconfont icon-jiechubangding"></i></span>解绑
        </button>
        <button class="edit-btn" v-on:click="dialog('email')" v-else>
            <span class="account-icon-edit"><i class="iconfont icon-bangding"></i></span>绑定
        </button>
    </div>
</div>
<!-- 弹框 -->
<el-dialog title="身份验证" :visible.sync="dialogUnbing" style="text-align:left;">
    <div class="dialog-notice">为了您的账号安全，进行敏感操作前先验证身份。</div>
    <!-- 邮箱验证 -->
    <div v-if="updataname=='email'">
        <div class="validata-type"><span class="safe-key">验证方式</span>邮箱验证</div>
        <div class="validata-type">
            <span class="safe-key">绑定邮箱</span>
            <span v-if="isemail!=null">{{safe.email}}</span>
            <input class="intemail" type="text" v-else v-model="safe.email" :class="safe.email==''?'error':''">
        </div>
        <div class="email-code">
            <span class="safe-key">邮箱验证码</span>
            <input type="text" class="intemail" :class="isemailnum==true?'error':''" v-model="emailnum">
            <button v-on:click="emailCode()" :disabled="dis" class="safe-send-btn">{{second}}</button>
        </div>
    </div>
    <!-- 手机验证 -->
    <div v-if="updataname=='phone'">
        <div class="validata-type">
            <span class="safe-key">验证方式</span>手机验证</div>
        <div class="validata-type">
            <span class="safe-key">绑定手机</span>
            <span v-if="isphone!=null">{{safe.phone}}</span>
            <input class="intemail" type="text" v-else v-model="safe.phone" :class="safe.phone==''?'error':''">
        </div>
        <div class="email-code">
            <span class="safe-key">手机验证码</span>
            <input class="intemail" type="text" :class="isphonenum==true?'error':''" v-model="phonenum">
            <button v-on:click="phoneCode()" :disabled="phonedis" class="safe-send-btn">{{count}}</button>
        </div>
    </div>
    <!-- -->
    <div class="email-btn">
        <button class="safe-save-btn" v-on:click="success()">保存</button>
        <button class="safe-cel-btn" v-on:click="undialog()">取 消</button>
    </div>    
</el-dialog>
</div>
</template>
<style>
</style>
<script>
import '../safeSetting/safeSetting.css'
export default{
    name:'safeSetting',
    data(){
        return {
            safe:'',
            dialogUnbing:false,
            type:'',
            emailnum:'',
            isemail:'',
            isphone:'',
            second:'发送验证码',
            dis:false,
            isemailnum:false,
            isphonenum:false,
            phonenum:'',
            updataname:'',
            phonedis:false,
            count:'发送验证码',
            phonetype:''
        }
    },
    mounted:function(){
        this.safe = JSON.parse(sessionStorage.getItem("account"));
        JSON.parse(sessionStorage.getItem("account")).email ==null?this.type='true':this.type='false';
        JSON.parse(sessionStorage.getItem("account")).phone ==null?this.phonetype='true':this.phonetype='false';
        this.isemail = JSON.parse(sessionStorage.getItem("account")).email;
        this.isphone = JSON.parse(sessionStorage.getItem("account")).phone;
    },
    methods:{
        undialog:function(){
            this.emailnum = '';
            this.dialogUnbing = false;
            this.isemailnum = false;
            this.isphonenum = false;
            this.safe = JSON.parse(sessionStorage.getItem("account"));
        },
        dialog:function(dom){
            this.dialogUnbing = true;
            this.updataname = dom;
            this.emailnum = '';
        },
        emailCode:function(){
            if(this.safe.email==null){
                this.safe.email = '';
                this.$message.error('请输入邮箱');
            }else{
                this.second = 300;
                this.dis = true;
                let that = this;
                this.sendEmail();
                let timer = setInterval(function(){
                    that.second--;
                    if(that.second==0){
                        clearInterval(timer);
                        that.second = '重新发送';
                        that.dis = false;
                    }
                },1000)
            }
        },
        sendEmail:function(){
            let bind = this.type=='true'?bind='bind':bind='unbind';
            let obj = {
                email:this.safe.email,
                type:this.type,
                username:this.safe.username,
                validCode:''
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/mail/send/code/'+bind,str).then((response)=>{
                //console.log('----',response);
            }).catch((error)=>{
            })
        },
        phoneCode:function(){
            if(this.safe.phone==null){
                this.safe.phone = '';
                this.$message.error('请输入手机号');
            }else{
                this.count = 300;
                this.phonedis = true;
                let that = this;
                this.sendPhone();
                let timer = setInterval(function(){
                    that.count--;
                    if(that.count==0){
                        clearInterval(timer);
                        that.count = '重新发送';
                        that.phonedis = false;
                    }
                },1000)
            }
        },
        sendPhone:function(){
            let bind = this.phonetype=='true'?bind='bind':bind='unbind';
            let obj = {
                mobile:this.safe.phone,
                type:this.phonetype,
                username:this.safe.username,
                validCode:''
            };
            let str = JSON.stringify(obj);
            this.$this.post('/broker/sms/send/code/'+bind,str).then((response)=>{
                //console.log('----',response);
            }).catch((error)=>{
            })
        },
        success:function(){
            if(this.updataname=='phone'){
                this.phoneconfirm();
            }else{
                this.emailconfirm();
            }
        },
        emailconfirm:function(){
            if(this.emailnum==''||this.safe.email==null){
                if(this.emailnum==''){
                    this.isemailnum = true;
                    this.$message.error('请输入验证码');
                }
                if(this.safe.email==null){
                    this.safe.email='';
                    this.$message.error('请输入邮箱');
                }
            }else{
                this.isemailnum = false;
                let obj = {
                    email:this.safe.email,
                    type:this.type,
                    username:this.safe.username,
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
                        this.dialogUnbing = false;
                        if(this.type=='true'){
                            let string = JSON.stringify(this.safe);
                            sessionStorage.setItem("account",string);
                            this.$message({
                                message: '您已成功绑定邮箱',
                                type: 'success'
                            });
                        }else{
                            this.safe.email = null;
                            let string = JSON.stringify(this.safe);
                            sessionStorage.setItem("account",string);
                            this.$message({
                                message: '您已成功解除绑定',
                                type: 'success'
                            });
                        }
                        this.emailnum = '';
                    }
                }).catch((error)=>{
                })
            }
        },
        phoneconfirm:function(){
            if(this.phonenum==''||this.safe.phone==null){
                if(this.safe.phone==null){
                    this.safe.phone = '';
                    this.$message.error('请输入手机号');
                }
                if(this.phonenum==''){
                    this.isphonenum = true;
                    this.$message.error('请输入验证码');
                }                
            }else{
                this.isphonenum = false;
                let obj = {
                    mobile:this.safe.phone,
                    type:this.phonetype,
                    username:this.safe.username,
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
                        this.dialogUnbing = false;
                        if(this.phonetype=='true'){
                            let string = JSON.stringify(this.safe);
                            sessionStorage.setItem("account",string);
                            this.$message({
                                message: '您已成功绑定手机',
                                type: 'success'
                            });
                        }else{
                            this.safe.phone = null;
                            let string = JSON.stringify(this.safe);
                            sessionStorage.setItem("account",string)
                            this.$message({
                                message: '您已成功解除绑定',
                                type: 'success'
                            });
                        }
                        this.phonenum = '';
                    }
                }).catch((error)=>{
                })
            }
        }
    }
}
</script>