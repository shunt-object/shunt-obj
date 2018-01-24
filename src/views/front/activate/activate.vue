<template>
<div class="activate">
    <div class="activate-header">
        <router-link to="/"><img class="activate-logo" src="../../../assets/login-logo.png" alt=""></router-link>
    </div>
    <div class="clear"></div>
    <div class="activate-main">
        <img src="../../../assets/front/activate-success.png" class="activate-img" alt="" v-show="success">
        <img src="../../../assets/front/activate-fail.png" class="activate-img" alt="" v-show="fail">
        <div class="activate-title" v-show="success">成功：账号已激活</div>
        <div class="activate-title" v-show="fail">失败：账号未激活成功</div>
        <div class="activate-desc" v-show="success">
            感谢您注册ClouldBroker²我们将为您提供最专业的服务！
        </div>
        <div class="activate-desc" v-show="fail">
            用户激活失败，可能是您的激活链接已经失效或者链接不完整，请点击<span class="again" v-on:click="sendagain()">重新发送</span>验证邮件。
        </div>
        <router-link to="/" v-show="success"><button class="successBtn">立即登录</button></router-link>
    </div>
    <div class="activate-footer">
        <p class="activate-foot-list">© CopyRight 2018江苏京玉信息技术有限公司 版权所有TEL:400-612-218</p>
        <p class="activate-foot-list">京ICP证120829号 京ICP备12032080号-2 京网文（2014）0901-201号</p>
        <p class="activate-foot-list">京公网安备 11010802020326号</p>
    </div>
</div>
</template>
<script>
import '../activate/activate.css'
export default{
    name:'activate',
    data(){
        return {
            email:'',
            success:true,
            fail:false,
            usernme:''
        }
    },
    mounted:function(){
        let arr = 'http://118.244.227.150:22080/activate/810878628';
        let urlList = document.location.href.split('/');
        this.usernme = urlList[urlList.length-1];
        //this.send(urlList[urlList.length-1]);
        console.log('------',document.location.href);
        console.log('------',document.location.href.split('/'));
    },
    methods:{
        send:function(num){
            this.$this.get('/broker/auth/valid/'+num).then((response)=>{
                if(response.data.code==1){//成功 0失败
                    this.success = true;
                    this.fail = false;
                }else{
                    this.success = false;
                    this.fail = true;
                }
                console.log('======',response);
            }).catch((error)=>{
            })
        },
        sendagain:function(){
            this.$this.get('/broker/mail/send/validCode/'+this.username).then((response)=>{
                console.log('sendagain',response);
                this.$router.push({path:'/sendEmail',query:{username:this.username}});
            }).catch((error)=>{
            })
        }
    }
}
</script>